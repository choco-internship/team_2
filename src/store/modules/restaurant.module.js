import api from '../../services/api'

export const restaurant = {
  namespaced: true,
  state: {
    restaurants: [],
  },
  mutations: {
    SET_RESTAURANTS(state,  payload) {
      state.restaurants = payload
    }
  },
  actions: {
    async FETCH_RESTAURANTS({ commit }) {
      try {
        const data = await api.getRestaurants();
        console.log('data', data);
        commit("SET_RESTAURANTS", data)
      } catch (error) {
        console.error('fetch restaurants', error); 
      }
    },

  },
  getters: {
    GET_RESTAURANTS: (state) => state.restaurants.map(item => item.restaurant)

  } 
};