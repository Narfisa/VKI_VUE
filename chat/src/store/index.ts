import Vue from 'vue';
import Vuex from 'vuex';
import { IMessage } from '@/interfaces/messages'

Vue.use(Vuex);

const API = "http://localhost:8081/message" 
const axios = require('axios');

export default new Vuex.Store({
  state: {
    messages: Array<IMessage>()
  },
  getters: {
    messagesCount: function(state){
      return state.messages.length
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
    receiveMessages: function ({commit}) {
      axios.get(API).then((response: any) => { // type "any" is needed to be changed
        commit("SET_MESSAGES", response)
      })
    },
    sendMessage: function({commit}, message){
      axios.post(API, message)
      .then(() => {
        commit("ADD_MESSAGE", message)
      })
    }
  },
  modules: {
  },
});
