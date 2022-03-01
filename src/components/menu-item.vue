<template>
  <div class="product">
    <div class="info">
      <span class="name">{{ product.product_name }}</span>
      <span class="description">{{ product.description }}</span>
      <span class="price">{{ product.price.toLocaleString() }} тг</span>
    </div>
    <div class="image">
      <img :src="product.image" :alt="product.product_name" />
      <VQuantity className="quantity" :count="count || 0" :add="add" :remove="remove"/>
    </div>
  </div>
</template>

<script>
  import VQuantity from '../components/v-quantity'
  export default {
    components: { VQuantity },
    props:  {
      product: {
        type: Object,
        required: true
      }
    },
    methods: {
      add() {
        this.$store.dispatch("restaurant/incrementProduct", this.product)
      },
      remove() {
        this.$store.dispatch("restaurant/decrementProduct", this.product)
      }
    },
    computed: {
      count() {
        return this.$store.getters["restaurant/getByCartId"](this.product.product_id)
      }
    },
  }

</script>

<style scoped>
  .product {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .75rem 1rem;
    gap:.75rem;
    border-bottom: 1px solid #ECECEC;
  }
  .info {
    flex: 1;
  }
  .name {
    font-size: .9rem;
    color: var(--text-primary);
    font-weight: 500;
    display: block;
    margin-bottom: .3rem;
  }
  .description {
    font-size: .75rem;
    color: #707070;
    margin-bottom: .3rem;
    display: block;
  }
  .price {
    color: var(--blue-color);
    font-size: .9rem;
    display: block;
  }
  .image {
    position: relative;
    max-width: 8rem;
    
  }
  .image img{
    width: 100%;
    border-radius: 4px;
  }
  .quantity {
    right: .5rem;
    bottom: .5rem;
  }
</style>