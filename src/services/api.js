import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://142.93.107.238/api',
});
const userInfo = JSON.parse(localStorage.getItem('user'))

export default {
  getRestaurants: () => api.get('/restaurants').then(({data}) => data),
  getRestaurantId: (id) => api.get(`/menu/${id}`).then(({data}) => data.data),
  register: (body) => api.post('/register', body).then(({data}) => data),
  login: (body) => api.post('/login', body).then(({data}) => data),
  getOrders: () => api.get('/orders', {
    headers: {
      'Authorization': `Bearer ${userInfo.access_token}`
    }
  }).then(({data}) => data)
}