<template>
  <div class="MyOrders">
    <VHeader>
      Мои заказы
    </VHeader>
    <VOrderItem v-for="order in orders" :key="order.id"
      :name="order.name"
      :price="order.price"
      :status="order.status"
      :time="order.time"
    />
  </div>
</template>

<script>
  import VOrderItem from '../components/order-item'
  import VHeader from '../components/header.vue'
  export default {
    data() {
      return {
        orders: [
          {id: 1, name: 'Mamma mia', price: "6 090 тг", status: "В обработке", time: '15.12.2021, 10:44'},
          {id: 2, name: 'Chococafe', price: "6 090 тг", status: "На кухне ", time: '17.11.2021, 08:44'},
          {id: 3, name: 'Bahandi Burger', price: "3 800 тг", status: "Готов", time: '07.08.2021, 12:44'},
          {id: 4, name: 'Coffee first', price: "2 300 тг", status: "Завершен", time: '21.01.2021, 11:44'}
        ],
        step: 1
      }
    },
    components: { VOrderItem, VHeader },
    computed() {
    } 
  }
</script>

<style scoped>

.active>path {
  stroke: green;
}
</style>