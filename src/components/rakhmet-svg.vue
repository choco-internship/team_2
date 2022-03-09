<template>
  <div class="svg" v-if="isLoading">
    <img src="../assets/loader.svg"/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isLoading: true
      }
    },
    mounted() {
      setTimeout(() => {
        this.isLoading = false
      }, 2000)
    }
  }
</script>

<style scoped>
.svg {
  position: fixed;
  width: 100%;
  height: 100vh;
  top:0;
  left:0;
  right: 0;
  background-color: white;
  z-index: 199;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: opacity .5s ease-in;
  animation-delay: 1.5s;
}
.svg img {
  max-width: 10rem;
}
@keyframes opacity {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>