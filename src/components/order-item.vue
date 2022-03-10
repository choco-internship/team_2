<template>
  <div class="order">
    <div class="order__info">
      <h3 class="order__info--name title">{{ name }}</h3>
      <span class="order__info--price text">{{ price.toLocaleString() }} тг</span>
      <span class='order__info--status text'>Статус - <span :class="color">{{ status }}</span></span>
    </div>
    <span class="order__time">
      {{ formatDate(time) }}
    </span>
    <svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.99997 0L0.589966 1.41L5.16997 6L0.589966 10.59L1.99997 12L7.99997 6L1.99997 0Z" fill="#8F8F8F"/>
    </svg>
  </div> 
</template>

<script>
import dayjs from 'dayjs';
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      price: {
        type: String,
        required: true
      },
      status: {
        type: String,
        required: true
      },
      time: {
        type: String,
        required: true
      },
      color: {
        type: String,
        required: false
      }
    },
    methods: {
      formatDate(dateString) {
        const date = dayjs(dateString);
            // Then specify how you want your dates to be formatted
        return date.format('DD.MM.YYYY, hh.mm');
      }
    }

  }
</script>

<style scoped>
.order {
  display: flex;
  padding: 1rem;
  margin-top: 1.20rem;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  gap:1rem;
}
.order__info {
  display: flex;
  flex:1;
  flex-direction: column;
  align-self: flex-start;
  gap: .5rem;
}
.order__info--status {
  white-space: nowrap;
  color: var(--text-grey)
}
.order__time {
  font-size: .9rem;
  color: var(--text-grey);
  align-self: flex-start;
}

.order svg {
  width: .5rem;
  height: .75rem;
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