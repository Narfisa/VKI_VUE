import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Message from '@/components/Message.vue'
import MessageList from '@/components/MessageList.vue'
import Vuex from 'vuex'
import axios, {AxiosResponse} from 'axios';
import {IMessage, IMessageList} from '@/interfaces/messages';

// store
const API = "http://localhost:8081/message"
const localVue = createLocalVue()
localVue.use(Vuex)
const store = new Vuex.Store({
  state: {
    messages: Array<IMessage>()
  },
  getters: {
    messagesCount: function(state) {
      return state.messages.length
    },
    getMessages: function(state) {
      return state.messages
    }
  },
  mutations: {
    SET_MESSAGES: function(state, messages) {
      state.messages = messages
    },
    ADD_MESSAGE: function(state, message: IMessage) {
      state.messages.push(message)
    }
  },
  actions: {
    receiveMessages: function({commit}) {
      axios.get(API).then((response: AxiosResponse<IMessageList>) => {
        commit("SET_MESSAGES", response.data)
      })
    },
    sendMessage: function({commit}, message) {
      axios.post(API, message)
      .then(() => {
        commit("ADD_MESSAGE", message)
      })
    }
  },
  modules: {
  }
})

describe('Message.vue', () => {
  it('renders props.msg when passed', () => {
    const message = {nickname: 'Narfisa', message: 'new message'}
    const wrapper = shallowMount(Message, {
      propsData: { message }
    })
    expect(wrapper.text()).toMatch(`${message.nickname} :  ${message.message}`)
  })
})

describe('MessageList.vue', () => {
  it('render two messages', () => {
    let messages = [
      {id:0, nickname: 'Narfisa', message: 'new message'},
      {id:1, nickname: 'Elensiya', message: 'another message'}
    ]
    store.state.messages = messages
    const wrapper = mount(MessageList, {
      store,
      localVue
    })
    const renderedMessages = wrapper.findAll('.message')
    expect(renderedMessages.length).toBe(messages.length)
    expect(renderedMessages.at(0).text()).toMatch(`${messages[0].nickname} :  ${messages[0].message}`)
    expect(renderedMessages.at(1).text()).toMatch(`${messages[1].nickname} :  ${messages[1].message}`)
  })
})

