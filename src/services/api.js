import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://142.93.107.238/api',
});

export default {
  getRestaurants: () => api.get('/restaurants').then(({data}) => data),
  getRestaurantId: (id) => api.get(`/menu/${id}`).then(({data}) => data.data),
  register: (body) => api.post('/register', body).then(({data}) => data),
  login: (body) => api.post('/login', body).then(({data}) => data)
}