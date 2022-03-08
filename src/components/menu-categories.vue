<template>
  <div>
    <div class="menu__list">
      <div class="menu__list-burger" @click="openMenu">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.75 12H20.25" stroke="#3C3C43" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3.75 6H20.25" stroke="#3C3C43" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3.75 18H20.25" stroke="#3C3C43" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
  
      <ul class="menu__list-items">
        <li 
          v-for="item in categories" 
          :key="item.product_category_id" 
          @click="() => selectProduct(item)"
          :class="{'selected-product': active.product_category_id === item.product_category_id}"
        >
          {{ item.product_category_name }}
        </li>
      </ul>
    </div>
    <transition name="fade">
      <div v-if="activeMenu" class="menu-active">
        <VHeader backTo="#" :onClick="closeMenu">Меню</VHeader>
        <ul class="menu-active-list">
          <li 
            v-for="item in categories" 
            :key="item.product_category_id" 
            @click="() => selectProduct(item)"
          >
            {{ item.product_category_name }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
  import VHeader from './header.vue';
  export default {
    components: { VHeader },
    data() {
      return {
        activeMenu: false,
      }
    },
    props: {
      onSelect: {
        type: Function,
        required: true
      },
      categories: {
        type: Array,
        required: true
      },
      active: {
        type: String,
        required: true
      }
    },
    methods: {
      openMenu() {
        this.activeMenu = true;
      },
      closeMenu() {
        this.activeMenu = false;
      },
      selectProduct(item) {
        this.onSelect(item)
        this.closeMenu();
      }
    }
  }
</script>

<style scoped>
 .menu__list {
    display: flex;
    align-items:center;
    gap:.2rem;
  }
  .menu__list-burger {
    padding:1rem;
  }
  .menu__list-burger svg{
    width: 1.5rem;
    height: 1.5rem;
  }
  .menu__list-items {
    display: flex;
    gap: .2rem;
    overflow-x: scroll;
  }
  .menu__list-items::-webkit-scrollbar {
    display: none;
  }
  .menu__list-items li{
    font-size: .9rem;
    color: var(--text-grey);
    padding:.6rem 1.4rem;
    border-radius: 999rem;
    white-space: nowrap;
    transition: .2s ease-in;
  }
  .selected-product {
    background: rgba(218, 218, 218, 0.35);
  }
  .menu-active{
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;
    background-color: white;
    overflow-y: scroll;
  }
  .menu-active::-webkit-scrollbar {
    display: none;
  }
  .menu-active-list {
    display: flex;
    flex-direction: column;
  
  }
  .menu-active-list li {
    padding:1rem;
    border-top: 1px solid #DBDBDB;
    display: flex;
    justify-content: space-between;
  }
  .menu-active-list li span {
    color: var(--text-grey);
  }
</style>