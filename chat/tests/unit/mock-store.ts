import Vuex from 'vuex'
import {createLocalVue} from '@vue/test-utils'
import {IMessage} from '@/interfaces/messages'

const localVue = createLocalVue()
localVue.use(Vuex);

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
  }
});
store.dispatch = jest.fn()

export default store;
