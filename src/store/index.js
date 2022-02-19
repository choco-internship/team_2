import { createStore } from 'vuex'
import { restaurant } from './modules/restaurant.module'

export default createStore({
  modules: {
    restaurant
  }
})

