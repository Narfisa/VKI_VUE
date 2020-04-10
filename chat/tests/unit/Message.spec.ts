import { shallowMount } from '@vue/test-utils'
import Message from '@/components/Message.vue'

describe('Message.vue', () => {
    it('renders props.msg when passed', () => {
      const message = {nickname: 'Narfisa', message: 'new message'}
      const wrapper = shallowMount(Message, {
        propsData: { message }
      })
      expect(wrapper.text()).toMatch(`${message.nickname} :  ${message.message}`)
    })
  })