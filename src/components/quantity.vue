<template>
  <div v-if="authorized" :className="className" class="quantity" >
    <button @click="remove" v-if="count > 0">-</button>
    <span v-if="count > 0">{{ count }}</span>
    <button @click="add">+</button>
  </div>
</template>

<script>
  export default {
    props: {
      className: {
        type: String,
        required: false,
      },
      count: {
        type: Number,
        required: true
      },
      add: {
        type: Function,
        required: true
      },
      remove: {
        type: Function,
        required: true
      }
    },
    computed: {
      authorized() {
        return JSON.parse(localStorage.getItem('user'))?.access_token
      }
    } 
  }
</script>

<style scoped>
  .quantity {
    display: flex;
    background: #ffffff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    position: absolute;
    bottom: 0;
  }
  .quantity button {
    flex: 1;
    background-color: transparent;
    border: none;
    color: var(--blue-color);
    font-weight: 500;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0.3rem 0;
    transition: 0.2s ease-in;
    border-radius: 8px;
    min-width: 2rem;
  }
  .quantity button:hover {
    background-color: var(--blue-color);
    color: white;
    border-radius: 8px;
  }
  .quantity span {
    flex: 1;
    text-align: center;
    font-size: 1rem;
    color: var(--text-primary);
    padding: 0.4rem 0;
    min-width: 2rem;
  }
</style>