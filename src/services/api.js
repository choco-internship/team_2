import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://142.93.107.238/api',
});

const userInfo = JSON.parse(localStorage.getItem('user'))

const options = {
  headers: {
    'Authorization': `Bearer ${userInfo?.access_token}`
  }
}

export default {
  getRestaurants: () => api.get('/restaurants').then(({data}) => data),
  getRestaurantId: (id) => api.get(`/menu/${id}`).then(({data}) => data.data),
  register: (body) => api.post('/register', body).then(({data}) => data),
  login: (body) => api.post('/login', body).then(({data}) => data),
  logout: () => api.post('/logout', {}, options).then(() => localStorage.removeItem('user')),
  getOrders: () => api.get('/orders', options).then(({data}) => data),
  orderCreate: (body) => api.post('/orders', body, options)
}