/* eslint-disable no-empty-pattern */
import client from '../../client';

export default {
  actions: {
    addNewCategory({}, data) {
      return client({
        method: 'post',
        url: '/tools/addCategory',
        data
      })
      /** displays duplicate error message */
        .then((response) => {
          return response;
        })
        .catch((err) => {
          return err.response;
        });
    },
    addNewPreference({}, data) {
      return client({
        method: 'post',
        url: '/tools/addPreference',
        data
      })
        .then((response) => {
          return response;
        })
        .catch((err) => {
          return err.response;
        });
    }
  }
};
