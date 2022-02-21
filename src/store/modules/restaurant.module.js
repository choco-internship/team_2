import api from '../../services/api'

const initialCart = JSON.parse(localStorage.getItem('choco-cart')) || {};

export const restaurant = {
  namespaced: true,
  state: {
    restaurants: [],
    menu: {},
    cart: initialCart,
  },
  mutations: {
    SET_RESTAURANTS(state,  payload) {
      state.restaurants = payload
    },
    SET_MENU_BY_ID(state, payload) {
      state.menu = payload
    },
    SET_CART_INCREMENT(state, {id, price}) {      
      if (state.cart[id] ) {
        state.cart[id] = { count: state.cart[id].count + 1, price}
      } else {
        state.cart[id] = { count: 1, price}
      }
      localStorage.setItem('choco-cart', JSON.stringify(state.cart));
    },
    SET_CART_DECREMENT(state, {id, price}) {
      if (state.cart[id]) {
        if (state.cart[id].count > 0) {
          state.cart[id] = { count: state.cart[id].count - 1, price}
        }
      }
      localStorage.setItem('choco-cart', JSON.stringify(state.cart));
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
        commit("SET_MENU_BY_ID", data);
      } catch (error) {
        console.errar('id error', error);
      }
    },
    incrementProduct({commit}, product) {
      commit("SET_CART_INCREMENT", product)
    },
    decrementProduct({commit}, product) {
      commit("SET_CART_DECREMENT", product)
    },
  },
  getters: {
    GET_RESTAURANTS: (state) => state.restaurants.map(item => item.restaurant),
    GET_MENU: (state) => state.menu,
    getByCartId: (state) => (id) => state.cart[id]?.count || 0,
    getCount: (state) => Object.values(state.cart).map(item => item.count).reduce((a,b) => a + b, 0),
    getPrice: (state) => Object.values(state.cart).map(item => item.price * item.count).reduce((a,b) => a + b, 0)     
  } 
};