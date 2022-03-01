import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://142.93.107.238/api',
});

export default {
  getRestaurants: () => api.get('/restaurants').then(({data}) => data),
  getRestaurantId: (id) => api.get(`/menu/${id}`).then(({data}) => data.data),
}