import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export default {
  getRestaurants: () => api.get('/home').then(({data}) => data),
  getRestaurantId: (id) => api.get(`/menu#${id}`).then(({data}) => data),
  
}