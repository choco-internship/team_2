<template>
   <button class="main-btn">
      <span><slot name="count"/></span>
      <span>Оплатить</span>
      <span>{{ total }} ₸</span>
    </button>
</template>

<script>
  export default {
    props: {
      total: {
        type: Number,
        required: true
      }
    } 
  }
</script>

<style scoped>
  .main-btn {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 1rem 0.6rem;
    border: none;
    border-radius: 12px;
    color: white;
    background-color: var(--blue-color);
    font-weight: 700;
    font-size: 0.875rem;
  }
  .main-btn span:first-child {
    opacity: 0;
  }
</style>