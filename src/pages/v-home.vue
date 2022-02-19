<template>
  <div class="home-wrapper">
    <VHeader>
      Заказ с собой
    </VHeader>
    <main class="content">
      <VRestaurant v-for="restaurant in restaurants" 
        :key="restaurant"
        :name="restaurant.restaurant_data.name"
        :location="restaurant.restaurant_data.location"
        :img="restaurant.image.image_url"/>
    </main> 
    
  </div>
</template>

<script>
  import VHeader from '../components/v-header.vue'
  import VRestaurant from '../components/v-restaurant.vue'

  export default {
    data() {
      return {
        
      }
    },
    components: { VHeader, VRestaurant },
    created() {
      this.$store.dispatch("restaurant/FETCH_RESTAURANTS");
    },
    computed: {
      restaurants() {
        return this.$store.getters['restaurant/GET_RESTAURANTS']
      }

    }
    
  }
</script>

<style scoped>
  .home-wrapper {
    height: calc(100vh - var(--header-height));
    background-color: #f8f8f8;
    font-size: 30px;
  }

</style>