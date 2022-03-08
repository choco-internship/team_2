<template>
   <button :className="className" class="main-btn">
      <span><slot name="count"></slot></span>
      <span><slot name="name"></slot></span>
      <span>{{ total.toLocaleString() }} ₸</span>
    </button>
</template>

<script>
  export default {
    props: {
      total: {
        type: Number,
        required: true
      },
      className: {
        type: String,
        required: false
      },
      count: {
        type: Number,
        required: false
      },
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
</style>