<template>
  <div class="svg" v-if="isLoading">
    <img src="../assets/cat.svg"/>
  </div>
</template>

<script>
  export default {
    computed: {
      isLoading() {
        return this.$store.getters['restaurant/isLoading']
      } 
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
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
}
.svg img {
  max-width: 10rem;
}
@keyframes display{

}
</style>