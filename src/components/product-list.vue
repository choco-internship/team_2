<template>
  <div class="menu-item">
    <h4 class="title">{{ title }}</h4>
    <MenuItem v-for="product in menu" :key="product.id" :product="product"/>
  </div>
</template>

<script>
import MenuItem from './menu-item.vue';
 
  
  export default {
    components: { MenuItem },
    props: {
      title: {
        type: String,
        required: true
      },
      menu: {
        type: Array,
        required: true
      },
    },
  }
</script>

<style scoped>
  .title {
    font-size: 1rem;
    color: var(--text-grey);
    padding: 1rem;
  }
</style>