import Vue from 'vue';
import Vuex from 'vuex';
import axios, {AxiosResponse} from 'axios';
import {IMessage, IMessageList} from '@/interfaces/messages';

Vue.use(Vuex);

const API = "http://localhost:8081/message"

export const Store = {
  state: {
    messages: Array<IMessage>()
  },
  getters: {
    messagesCount: function(state: any) {
      return state.messages.length
    },
    getMessages: function(state: any) {
      return state.messages
    }
  },
  mutations: {
    SET_MESSAGES: function(state: any, messages: IMessageList) {
      state.messages = messages
    },
    ADD_MESSAGE: function(state: any, message: IMessage) {
      state.messages.push(message)
    }
  },
  actions: {
    receiveMessages: function({commit}: any) {
      axios.get(API).then((response: AxiosResponse<IMessageList>) => {
        commit("SET_MESSAGES", response.data)
      })
    },
    sendMessage: function({commit}: any, message: IMessage) {
      axios.post(API, message)
      .then(() => {
        commit("ADD_MESSAGE", message)
      })
    }
  },
  modules: {
  }
};

export default new Vuex.Store(Store)
