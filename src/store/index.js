import Vue from 'vue';
import Vuex from 'vuex';
import client from '../client';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allCategories: null
  },
  mutations: {
    updateAllCategories(state, payload) {
      state.allCategories = payload;
    }
  },
  actions: {
    addNewCategory({}, data) {
      return client({
        method: 'post',
        url: '/tools/addCategory',
        data: data
      })
      /** displays duplicate error message */
        .then((response) => {
          return response;
        })
        .catch((err) => {
          return err.response;
        })
    },
    addNewFood({}, data) {
      return client({
        method: 'post',
        url: '/tools/addFood',
        data
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err.response;
      })
    },
    addNewPreference({}, data) {
      return client({
        method: 'post',
        url: '/tools/addPreference',
        data: data
      })
      .then((response) => {
        return response 
      })
      .catch((err) => {
        return err.response;
      })
    },
    getAllCategories({commit}) {
      return client({
        method: 'get',
        url: '/tools/getAllCategories'
      })
        .then((r) => r.data)
        .then((response) => {
          commit('updateAllCategories', response)
        });
    }
  }
});