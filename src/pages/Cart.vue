<template>
  <div class="v-cart">
      <Header backTo='/'>
        Корзина
      </Header>
      <main class="content">
        <div class="restaurant">
          <h3 class="restaurant__name title">{{ restaurant?.restaurant_name }}</h3>
          <p class="restaurant__location">{{ restaurant?.location }}</p>
        </div>
        <div class="order">
          <h3 class="order__title title">Мой заказ</h3>
          <CartItem 
            v-for="item in products" 
            :key="item.product_id" 
            :name="item.product_name" 
            :price="item.price"
            :image="item.image"
            :count="item.count"
          />
        </div>
        <div class="total">
          <h3 class="total__title title">Итого</h3>
          <p class="total__price price">{{ getTotal }} ₸</p>
        </div>
        <Button :total="getTotal" @click="handleClick">
          <template v-slot:name>
            Оплатить  
          </template>
        </Button>
      </main>
    </div>
</template>

<script>
  import CartItem from '../components/cart-item.vue'
  import Button from '../components/button-blue.vue'
  import Header from '../components/header.vue'
  export default {
    components: { CartItem, Button, Header, },
    computed: {
      getTotal() {
        return this.products.reduce((a, b) => a + b.price, 0).toLocaleString()
      },
      restaurant() {
        return this.$store.getters["restaurant/getMenu"]
      },
      products() {
        const cart = JSON.parse(localStorage.getItem('choco-cart')) || {};
        return Object.values(cart)
      },
    },
    methods: {
      async handleClick() {
        await this.$store.dispatch('restaurant/createOrders', {
          restaurant_id: this.restaurant.restaurant_id,
          products: this.products.map(item => ({
            id: item.product_id,
            quantity: item.count
          }))
        })
        this.$store.dispatch('restaurant/clearCart')        
        this.$router.push('/orders')
      }
    },
    mounted() {
      if (!Object.keys(this.restaurant).length) {
        this.$router.push('/')
      }
      console.log(this.products);
      
      
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