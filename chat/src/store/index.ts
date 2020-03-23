import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const API = "http://localhost:8081/message"
const axios = require('axios');

export default new Vuex.Store({
  state: {
    messages: Array<Object>()
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
    ADD_MESSAGE: function(state, message: Object) {
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
      axios.post(API, JSON.stringify({
        message: message.message,
        nickname: message.nickname
      }))
      .then(() => {
        commit("ADD_MESSAGE", message)
      })
    }
  },
  modules: {
  },
});
