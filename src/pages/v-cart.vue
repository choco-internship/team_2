<template>
  <div class="v-cart">
      <VHeader backTo='/'>
        Корзина
      </VHeader>
      <main class="content">
        <div class="restaurant">
          <h3 class="restaurant__name title">{{ restaurant?.restaurant_name }}</h3>
          <p class="restaurant__location">{{ restaurant?.location }}</p>
        </div>
        <div class="order">
          <h3 class="order__title title">Мой заказ</h3>
          <VCartItem 
            v-for="item in products" 
            :key="item.product_id" 
            :name="item.product_name" 
            :price="item.price"
            :image="item.image"
          />
        </div>
        <div class="total">
          <h3 class="total__title title">Итого</h3>
          <p class="total__price price">{{ getTotal }} ₸</p>
        </div>
        <VContainer>
          <VButton :total="getTotal" >
            <template v-slot:name>
              Оплатить
            </template>
          </VButton>
        </VContainer>
      </main>
    </div>
</template>

<script>
  import VCartItem from '../components/v-cart-item.vue'
  import VContainer from '../components/v-container'
  import VButton from '../components/v-button'
  import VHeader from '../components/v-header.vue'
  export default {
    components: {
      VCartItem,
      VContainer,
      VButton,
      VHeader, 
    },
    computed: {
      getTotal() {
        return this.products.reduce((a, b) => a + b.price, 0).toLocaleString()
      },
      restaurant() {
        return this.$store.getters["restaurant/GET_MENU"]
      },
      products() {
        const cart = JSON.parse(localStorage.getItem('choco-cart')) || {};
        return Object.values(cart)
      },
    },
    mounted() {
      if (!Object.keys(this.restaurant).length) {
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
  .v-cart {
    height: calc(100vh - var(--header-height));
    background-color: #f8f8f8;
    width: 100%;
    margin: 0 auto;
  }

  .header {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    height: var(--header-height);
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 999999999;
  }
  .header h1 {
    color: var(--text-primary);
    display: flex;
    align-items: center;
    gap: 2.2rem;
    padding: 1.25rem;
    font-size: 1.25rem;
  }
  .header h1 svg {
    width: 1rem;
    height: 1rem;
  }
  .content {
    height: calc(100vh - var(--header-height));
    background-color: #f8f8f8;
    font-size: 30px;
  }
  .restaurant {
    background-color: white;
    padding: 1.25rem 1rem;
    margin-bottom: 0.5rem;
  }
  .restaurant__location {
    font-size: 0.875rem;
    color: var(--text-grey);
    margin-top: 0.75rem;
  }
  .order {
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem 0 1rem;
  }
  .order__title {
    margin-bottom: 0.25rem;
  }
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

  .menu {
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem 0 1rem;
    height: 52px;
  }

  .menu__product {
    border-bottom: 1px solid #ececec;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.85rem;
    padding-top: 0.75rem;
  }
  .menu__product-content {
    position: relative;
  }
  .menu__product img {
    max-width: 6.125rem;
    border-radius: 8px;
  }
  .menu__product-name {
    font-size: 0.875rem;
    color: var(--text-black);
    margin-bottom: 0.5rem;
  }
  .menu__product-quantity {
    font-size: 0.875rem;
    color: #8f8f8f;
    margin-bottom: 0.5rem;
  }

  .food__type {
    padding: 0px 5px 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .food__type-name {
    font-size: 14px;
    color: #8f8f8f;
  }
  .food__type-img {
    font-size: 14px;
    opacity: 30%;
  }
  .food__type-selected {
    background: rgba(218, 218, 218, 0.35);
    border-radius: 40px;
    width: 91px;
    height: 36px;
    align-items: center;
    display: flex;
    justify-content: center;
  }
  .total {
    background-color: white;
    padding: 1rem 1rem 1.25rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .total__price {
    font-size: 1rem;
  }
</style>