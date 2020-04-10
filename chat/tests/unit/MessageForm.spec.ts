import { mount, createLocalVue } from '@vue/test-utils'
import MessageForm from '@/components/MessageForm.vue'
import store from './mock-store'
import Vuex from 'vuex'
import ElementUI from 'element-ui'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(ElementUI)

describe('MessageForm.vue', () => {
    it('Send values on button click', () => {
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