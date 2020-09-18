/* eslint-disable no-empty-pattern */
import client from '../../client';

export default {
  actions: {
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
        });
    },
    getFoodByCategory({}, category) {
      return client({
        method: 'get',
        url: 'getFoodByCategory?category=' + category
      })
        .then((r) => r.data)
        .then((response) => {
          return response;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
};
