import Vue from 'vue';
import Vuex from 'vuex';
import axios, {AxiosResponse} from 'axios';
import {IMessage, IMessageList} from '@/interfaces/messages';

Vue.use(Vuex);

const API = "http://localhost:8081/message"

export default new Vuex.Store({
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
});
