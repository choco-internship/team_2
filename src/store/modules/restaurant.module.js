import api from '../../services/api'

export const restaurant = {
  namespaced: true,
  state: {
    restaurants: [],
    menu: {},
  },
  mutations: {
    SET_RESTAURANTS(state,  payload) {
      state.restaurants = payload
    },
    SET_MENU_BY_ID(state, payload) {
      state.menu = payload
    },
  },
  actions: {
    async FETCH_RESTAURANTS({ commit }) {
      try {
        const data = await api.getRestaurants();
        commit("SET_RESTAURANTS", data);
      } catch (error) {
        console.error('fetch restaurants', error); 
      }
    },
    async FETCH_MENU_BY_ID({commit}, id) {
      try {
        const data = await api.getRestaurantId(id);
        console.log('id', data);        
        commit("SET_MENU_BY_ID", data);
      } catch (error) {
        console.errar('id error', error);
      }
    },
  },
  getters: {
    GET_RESTAURANTS: (state) => state.restaurants.map(item => item.restaurant),
    GET_MENU: (state) => state.menu,
  } 
};