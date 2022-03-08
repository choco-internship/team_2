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
        :img="restaurant.image.image_url"
        :to="'/menu/'+restaurant.restaurant_data.id"
        />
    </main> 
    
  </div>
</template>

<script>
  import VHeader from '../components/header.vue'
  import VRestaurant from '../components/restaurant.vue'

  export default {
    components: { VHeader, VRestaurant },
    created() {
      this.$store.dispatch("restaurant/fetchRestaurants");
    },
    computed: {
      restaurants() {
        return this.$store.getters['restaurant/getRestaurants']
      }
    }
  }
</script>

<style scoped>
  .home-wrapper {
    background-color: #f8f8f8;
    font-size: 30px;
    padding-bottom: 4rem;
  }

</style>