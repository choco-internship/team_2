<template >
  <div class="details" >
    <Header backTo="/orders">
      Детали заказа
    </Header>
    <div class="details__title">
      <h3 class="details__title--name title">{{product?.restaurant?.name}}</h3>
      <span class="details__location text">{{product?.restaurant?.location}} </span>
    </div>
    <div class="details__status">
      <h4 class="details__status--title title-secondary">Статус заказа</h4>
      <span class="details__status--info" >
        <span :class="statuses[product?.order_status]?.color">
          {{statuses[product?.order_status]?.text}}
        </span>
      </span>
      <h4 class="details__status--title title-secondary">Дата</h4>
      <span class="details__status--info">{{ formatDate(product?.created_at) }}</span>
      <h4 class="details__status--title .title-secondary">Номер заказа</h4>
      <span class="details__status--info">№3161389</span>
    </div>
    <div class="position">
      <h4 class="position__title title-secondary">Позиции в заказе</h4>
      <span class="position__info">1 х Паста спагетти Алио и Олио <span>3 900 тг</span></span>
      <span class="position__info">1 х Кока кола <span>3 900 тг</span></span>
      <span class="position__info">1 х Бурег с говядиной  <span>2 500 тг</span></span>
    </div> 
    <div class="total">
      Итого <span>{{product?.total?.toLocaleString()}} тг</span>
    </div>
    <Navbar/>
  </div>
    
</template>

<script>
  import Navbar from '../components/navbar'
  import Header from '../components/header'
  import dayjs from 'dayjs';
  export default {
    components: { Navbar, Header },
    data() {
      return {
        product: {},
        statuses: {
          0: {color: 'blue', text: 'В обработке'},
          1: {color: 'orange', text: 'На кухне'},
          2: {color: 'green', text: 'Готов'},
          3: {color: 'grey', text: 'Завершен'}
        }
      }
    },
    mounted() {
      this.product = this.$store.getters['restaurant/getOrder'](this.$route.params.id)
    },
    methods: {
    formatDate(dateString) {
      const date = dayjs(dateString);
      return date.format('DD.MM.YYYY, hh.mm');
      }
    }
  }
</script>

<style scoped>

  .title-secondary {
    font-size: .9rem;
    color: var(--text-grey);
    
  }
  .details__title {
    background-color: white;
    padding: 1.25rem 1rem 0.75rem;
    border-bottom: 1px solid #ECECEC;
    line-height: 1.5rem;
  }
  .details__title hr {
    margin: 1rem 1rem 0;
  }
  .details__status {
    background-color: white;
    padding: 1rem ;
  }

  .details__status--info {
    font-size: .9rem;
    color: var(--text-primary);
    margin: .5rem 0 1rem;
    display: block;
  }
  .position {
    background-color: white;
    border-bottom: 1px solid #ECECEC;
    margin-top: .5rem;
    padding: 1rem 1rem .5rem;
  }
  .position__info {
    font-size: .95rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: .75rem;
  }
  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    padding: 1rem ;
    font-size: .9rem;
    font-weight: 700;
  }
  .blue {
    color: var(--blue-color)
  }
  .orange {
    color: orange;
  }
  .green {
    color: green;
  }
  .grey {
    color: var(--text-grey)
  }
</style>