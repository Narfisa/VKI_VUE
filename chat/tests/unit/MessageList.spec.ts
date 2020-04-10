import { mount, createLocalVue } from '@vue/test-utils'
import MessageList from '@/components/MessageList.vue'
import store from './mock-store'
import Vuex from 'vuex'
import ElementUI from 'element-ui'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(ElementUI)

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