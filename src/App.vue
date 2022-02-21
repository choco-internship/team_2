<template>
  <div class="app">
    <transition name="fade">
     <router-view></router-view>
    </transition>
    <VNavbar :isActive="isActive"/>
  </div>
</template>
 
<script>
  import VNavbar from './components/v-navbar.vue'
  export default {
    data() {
      return {
        isActive: true
      }
    },
    components: { VNavbar },
    methods: {
      changeRoute(route) {
        if(/menu|register|cart/.test(route.path)) {
          this.isActive = false
        } else {
          this.isActive = true
        }
      }
    },
    watch: {
      '$route': function(route) {
        this.changeRoute(route)
      }
    },
    
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  #app {
    font-family: "Roboto", sans-serif;
  }
  :root {
    --blue-color: #2997ff;
    --divider: #ececec;
    --text-grey: #8f8f8f;
    --text-black: #303030;
    --text-primary: #131113;
    --bg-grey: rgba(218, 218, 218, 0.35);
    --header-height: 4rem;
  }
  *,
  :after,
  :before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  html,
  body {
    font-size: 16px;
    font-family: "Roboto", sans-serif;
  }
  body {
    height: 100vh;
    background-color: #ECECEC;
  }
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(125, 125, 125, 0.5);
    border-radius: 999rem;
    outline: none;
  }
  .title {
    font-size: 1rem;
    color: var(--text-primary);
    font-weight: 700;
  }
  .text {
    font-size: .9rem;
    color: var(--text-grey);
  }
  .price {
    font-weight: 700;
    font-size: 0.875rem;
    color: var(--text-primary);
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>