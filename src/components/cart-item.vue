<template>
  <div class="order__product">
    <div class="order__product-info">
      <p class="order__product-name">{{ name }}</p>
      <p class="order__product-price price">{{ price.toLocaleString() }} ₸</p>
    </div>
    <div class="order__product-content">
      <img :src="image" :alt="name"/>
        <VQuantity/>
    </div>
  </div>
</template>

<script>
  import VQuantity from './quantity.vue'
  export default {
    components: {
      VQuantity
    },
    props: {
      price: {
        type: Number,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },

    }
  }
</script>

<style scoped>
  .order__product {
    border-bottom: 1px solid #ececec;
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.85rem;
    padding-top: 0.75rem;
  }
  .order__product-content {
    position: relative;
  }
  .order__product img {
    max-width: 6.125rem;
    border-radius: 8px;
  }
  .order__product-name {
    font-size: 0.875rem;
    color: var(--text-black);
    margin-bottom: 0.5rem;
  }
  .order__product-quantity {
    font-size: 0.875rem;
    color: #8f8f8f;
    margin-bottom: 0.5rem;
  }
</style>