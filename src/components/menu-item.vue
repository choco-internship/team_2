<template>
  <div>
    <h4 class="product-title">{{ title }}</h4>

    <div class="pizza" v-for="product in menu" :key="product.id">
      <div class="pizza__info">
        <span class="pizza__info-name">{{ product.name }}</span>
        <span class="pizza__info-description">{{ product.description }}</span>
        <span class="pizza__info-price">{{ product.price.toLocaleString() }} тг</span>
      </div>
      <div class="pizza__img">
        <img :src="product.image" :alt="product.name" />
        <VQuantity/>
      </div>
    </div>
  </div>
</template>

<script>
  import VQuantity from '../../../choco/src/components/v-quantity'
  export default {
    components: { VQuantity },
      props: {
        title: {
          type: String,
          required: true
        },
        menu: {
          type: Array,
          required: true
        }
      
      }
  }
</script>

<style scoped>
  .product-title {
    font-size: 1rem;
    color: var(--text-grey);
    padding: 1rem;
  }
  .pizza {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .75rem 1rem;
    gap:.75rem;
    border-bottom: 1px solid #ECECEC;
  }
  .pizza__info-name {
    font-size: .9rem;
    color: var(--text-primary);
    font-weight: 500;
    display: block;
    margin-bottom: .3rem;
  }
  .pizza__info-description {
    font-size: .75rem;
    color: #707070;
    margin-bottom: .3rem;
    display: block;
  }
  .pizza__info-price {
    color: var(--blue-color);
    font-size: .9rem;
    display: block;
  }
  .pizza__img {
    position: relative;
    max-width: 8rem;
  }
  .pizza__img img{
  width: 100%;
  }
  .add-btn {
  border:none;
  background-color: white;
  font-size: 1.4rem;
  color: var(--blue-color);
  padding:.3rem .7rem;
  border-radius: 8px;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.1);
  font-weight: 500;
}
</style>