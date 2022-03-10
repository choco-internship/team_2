<template>
  <div class="fixed">
    <button class='main-btn'>
      <span><slot name="count"></slot></span>
      <span><slot name="name"></slot></span>
      <span>{{ total.toLocaleString() }} ₸</span>
    </button>
  </div>
</template>

<script>
  export default {
    props: {
      total: {
        type: Number,
        required: true
      },

      count: {
        type: Number,
        required: false
      },
    } 
  }
</script>

<style scoped>
  .fixed {
    position: fixed;
    padding: 1rem;
    width: 100%;
    bottom: 0;
  }
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
</style>