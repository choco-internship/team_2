<template>
  <div class="order">
    <div class="order__info">
      <h3 class="order__info--name title">{{ name }}</h3>
      <span class="order__info--price text">{{ price }}</span>
      <span class="order__info--status text">Статус - {{ status }}</span>
    </div>
    <span class="order__time">
      {{ time }}
    </span>
    <svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.99997 0L0.589966 1.41L5.16997 6L0.589966 10.59L1.99997 12L7.99997 6L1.99997 0Z" fill="#8F8F8F"/>
    </svg>
  </div> 
</template>

<script>
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
.order__time {
  font-size: .9rem;
  color: var(--text-grey);
  align-self: flex-start;
}
.order svg {
  width: .5rem;
  height: .75rem;
}
</style>