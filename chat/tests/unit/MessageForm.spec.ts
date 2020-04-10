import { mount, createLocalVue } from '@vue/test-utils'
import MessageForm from '@/components/MessageForm.vue'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import axios, {AxiosResponse} from 'axios'
import {IMessage, IMessageList} from '@/interfaces/messages'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(ElementUI)
const API = "http://localhost:8081/message"
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

store.dispatch = jest.fn()

describe('MessageForm.vue', () => {
    it('Send values on button click', async () => {
      let message = {id:0, nickname: 'Narfisa', message: 'new message'}
      const wrapper = mount(MessageForm, {
        localVue,
        store
      })
  
      wrapper.find('input[type="text"]').setValue(message.nickname) 
      wrapper.find('textarea').setValue(message.message)
      wrapper.find('.el-button--primary').trigger('click')
      
      expect(store.dispatch).toHaveBeenCalledWith('sendMessage', message)
    })
  })