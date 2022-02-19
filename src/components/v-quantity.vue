<template>
  <div class="quantity">
    <button @click="decrement">-</button>
    <span>{{ count }}</span>
    <button @click="increment">+</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 1
      }
    },
    methods: {
      increment() {
        this.count++
      },
      decrement() {
        if ( this.count !== 1) {
          this.count--
        }
      }
    }
  }
</script>

<style scoped>
.quantity {
  display: flex;
  min-width: 6.125rem;
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
  padding: 0.5rem 0;
}
</style>