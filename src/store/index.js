import Vue from 'vue';
import Vuex from 'vuex';
import client from '../client';

import Foods from './modules/foods';
import InternalTools from './modules/internalTools';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Foods,
    InternalTools
  },
  state: {
    allCategories: null,
    allPreferences: null
  },
  mutations: {
    updateAllCategories(state, payload) {
      state.allCategories = payload;
    },
    updateAllPreferences(state, payload) {
      state.allPreferences = payload;
    }
  },
  actions: {
    getAllCategories({commit}) {
      return client({
        method: 'get',
        url: '/tools/getAllCategories'
      })
        .then((r) => r.data)
        .then((response) => {
          commit('updateAllCategories', response);
        });
    },
    getAllPreferences({commit}) {
      return client({
        method: 'get',
        url: '/tools/getAllPreferences'
      })
        .then((r) => r.data)
        .then((response) => {
          commit('updateAllPreferences', response);
        });
    }
  }
});
