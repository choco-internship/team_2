import api from '../../services/api'

const initialCart = JSON.parse(localStorage.getItem('choco-cart')) || {};

export const restaurant = {
  namespaced: true,
  state: {
    restaurants: [],
    menu: {},
    orders: [],
    cart: initialCart,
  },
  mutations: {
    SET_RESTAURANTS(state,  payload) {
      state.restaurants = payload
    },
    SET_MENU_BY_ID(state, payload) {
      state.menu = payload
    },
    SET_CART_INCREMENT(state, {product_id, price, product_name, image}) {      
      if (state.cart[product_id] ) {
        state.cart[product_id] = { count: state.cart[product_id].count + 1, price, product_name, image, product_id}
      } else {
        state.cart[product_id] = { count: 1, price, product_name, image, product_id}
      }
      localStorage.setItem('choco-cart', JSON.stringify(state.cart));
    },
    SET_CART_DECREMENT(state, {product_id, price, product_name, image}) {
      if (state.cart[product_id]) {
        if (state.cart[product_id].count > 0) {
          state.cart[product_id] = { count: state.cart[product_id].count - 1, price, product_name, image, product_id}
        }
      }
      localStorage.setItem('choco-cart', JSON.stringify(state.cart));
    },
    SET_ORDERS(state, payload) {
      state.orders = payload
    },
    CLEAR_CART(state) {
      state.cart = {}
      localStorage.removeItem('choco-cart')
    }
  },
  actions: {
    async fetchRestaurants({ commit }) {
      try {
        const data = await api.getRestaurants();        
        commit("SET_RESTAURANTS", data);
      } catch (error) {
        console.error('fetch restaurants', error); 
      }
    },
    async fetchRestaurantById({commit}, id) {
      try {
        const data = await api.getRestaurantId(id);
        commit("SET_MENU_BY_ID", data);
      } catch (error) {
        console.error('id error', error);
      }
    },
    async fetchOrders({commit}, ) {
      try {
        const data = await api.getOrders();
        console.log(data);
        
        commit("SET_ORDERS", data?.data?.order)
      } catch (error) {
        console.error('error', error)
      }
    },
    async createOrders(_, body) {
      try {
        const data = await api.orderCreate(body);
        console.log(data);
        
      } catch (error) {
        console.error('error', error);
      }
    },
    incrementProduct({commit}, product) {
      commit("SET_CART_INCREMENT", product)
    },
    decrementProduct({commit}, product) {
      commit("SET_CART_DECREMENT", product)
    },
    clearCart({commit}) {
      commit("CLEAR_CART")
    }
  },
  getters: {
    getRestaurants: (state) => state.restaurants.map(item => item.restaurant),
    getMenu: (state) => state.menu,
    getByCartId: (state) => (id) => state.cart[id]?.count || 0,
    getCount: (state) => Object.values(state.cart).map(item => item.count).reduce((a,b) => a + b, 0),
    getPrice: (state) => Object.values(state.cart).map(item => item.price * item.count).reduce((a,b) => a + b, 0),
    getOrders: (state) => state.orders   
  } 
};