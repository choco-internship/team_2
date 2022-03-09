<template>
  <div class="myOrders">
    <Header>
      Мои заказы
    </Header>
    <div v-if="!authorized" class="auth">
      <h5>Войдите в свой аккаунт</h5>
      <span>Необходимо войти в свой аккаунт,<br/> чтобы увидеть историю заказов</span>
      <button @click="this.$router.push('/login')">
        Войти
      </button>
    </div>
    <div v-else-if="orderList.length > 0">
      <VOrderItem v-for="order in orderList" :key="order.id"
        :name="order.restaurant.name"
        :price="order.total"
        :color="statuses[order.order_status].color"
        :status="statuses[order.order_status].text"
        :time="order.created_at"
        @click="$router.push(`/orders/${order.id}`)"
      />
    </div>
    <div v-else class="empty">
      На данный момент ваш список заказов пуст
      <button @click="this.$router.push('/')">
        Заказать
      </button>
    </div>
    
  </div>
</template>

<script>
  import VOrderItem from '../components/order-item'
  import Header from '../components/header.vue'
  export default {
    data() {
      return {
        statuses: {
          0: {color: 'blue', text: 'В обработке'},
          1: {color: 'orange', text: 'На кухне'},
          2: {color: 'green', text: 'Готов'},
          3: {color: 'grey', text: 'Завершен'}
        }
      }
    },
    components: { VOrderItem, Header },
    mounted() {
      if(this.authorized) {
        this.$store.dispatch("restaurant/fetchOrders");
      }
    },
    computed: {
      orderList() {
        return this.$store.getters['restaurant/getOrders'] || []
      },
      authorized() {
        return JSON.parse(localStorage.getItem('user'))?.access_token
      }
    } 
  }
</script>

<style scoped>
.myOrders {
  height: fit-content;
  overflow-y: scroll;
  padding-bottom: 3.5rem;
}
.myOrders::-webkit-scrollbar {
  display: none;
}
.active>path {
  stroke: green;
}
.auth {
  height: 85vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
}
.auth h5 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
}
.auth span {
  font-size: 1rem;
  text-align: center;
  margin-bottom: .5rem;
}
.auth button {
  width: 17rem;
}
.empty {
  height: 85vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: white;
  color: var(--text-grey)
}
button {
  padding:0.5rem 3rem;
  font-size: 1rem;
  margin-top: 1rem;
  color: white;
  border:none;
  letter-spacing: .5px;
  font-family: 'Roboto';
  font-weight: 500;
  background-color: var(--blue-color);
  border-radius: 4px;
}
</style>