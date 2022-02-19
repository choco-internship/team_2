<template>
  <div class="navbar" v-if="isActive">
    <router-link to="/" exact>
      <svg viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.2495 17.4994V12.9993C11.2495 12.8004 11.1704 12.6097 11.0298 12.469C10.8891 12.3284 10.6984 12.2493 10.4995 12.2493H7.49945C7.30054 12.2493 7.10977 12.3284 6.96912 12.469C6.82847 12.6097 6.74945 12.8004 6.74945 12.9993V17.4994C6.74945 17.6983 6.67045 17.8891 6.52981 18.0297C6.38918 18.1704 6.19844 18.2494 5.99954 18.2494L1.50009 18.25C1.40159 18.25 1.30406 18.2306 1.21305 18.193C1.12205 18.1553 1.03936 18.1 0.969703 18.0304C0.900049 17.9607 0.844796 17.8781 0.807099 17.7871C0.769402 17.6961 0.75 17.5985 0.75 17.5V8.83186C0.75 8.72737 0.771834 8.62403 0.814101 8.52847C0.856369 8.43291 0.918138 8.34724 0.995448 8.27694L8.49493 1.45806C8.63299 1.33253 8.81287 1.26298 8.99946 1.26297C9.18605 1.26296 9.36594 1.33251 9.504 1.45802L17.0045 8.27694C17.0818 8.34724 17.1436 8.43291 17.1859 8.52848C17.2282 8.62404 17.25 8.72739 17.25 8.83189V17.5C17.25 17.5985 17.2306 17.6961 17.1929 17.7871C17.1552 17.8781 17.1 17.9607 17.0303 18.0304C16.9606 18.1 16.878 18.1553 16.7869 18.193C16.6959 18.2306 16.5984 18.25 16.4999 18.25L11.9994 18.2494C11.8005 18.2494 11.6097 18.1704 11.4691 18.0297C11.3285 17.8891 11.2494 17.6983 11.2495 17.4994V17.4994Z" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Главная
    </router-link>
    <router-link to="/orders" >
      <svg viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 13.25H12" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M6 10.25H12" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.0002 2.75H15.75C15.9489 2.75 16.1397 2.82902 16.2803 2.96967C16.421 3.11032 16.5 3.30109 16.5 3.5V19.25C16.5 19.4489 16.421 19.6397 16.2803 19.7803C16.1397 19.921 15.9489 20 15.75 20H2.25C2.05109 20 1.86032 19.921 1.71967 19.7803C1.57902 19.6397 1.5 19.4489 1.5 19.25V3.5C1.5 3.30109 1.57902 3.11032 1.71967 2.96967C1.86032 2.82902 2.05109 2.75 2.25 2.75H5.9998" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.25 5.75V5C5.25 4.00544 5.64509 3.05161 6.34835 2.34835C7.05161 1.64509 8.00544 1.25 9 1.25C9.99456 1.25 10.9484 1.64509 11.6517 2.34835C12.3549 3.05161 12.75 4.00544 12.75 5V5.75H5.25Z" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
      Мои заказы
    </router-link>
    <router-link to="/rakhmet" >
      <svg viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_888_330" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5957 14.8611V0H0.904251L0.904251 14.8611H15.5957Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_888_330)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.96968 7.83711C5.16816 9.49183 6.5607 10.7738 8.24982 10.7738C10.0756 10.7738 11.5558 9.27695 11.5558 7.43049C11.5558 5.58375 10.0756 4.08659 8.24982 4.08659C6.75408 4.08659 5.49085 5.09213 5.08338 6.47154L1.09549 4.84166C1.32687 4.5302 1.6969 3.89118 1.90163 3.59243C2.19794 3.15926 2.39161 2.90823 2.89832 2.34263C3.07838 2.1413 3.27658 1.95747 3.48074 1.7807C3.81562 1.48421 4.21514 1.18319 4.74255 0.900536L4.74227 0.901666C5.78489 0.327312 6.9795 -0.000244141 8.24982 -0.000244141C12.3072 -0.000244141 15.5958 3.32643 15.5958 7.43049C15.5958 11.5343 12.3072 14.8609 8.24982 14.8609C4.19331 14.8609 0.904373 11.5343 0.904373 7.43049C0.904373 7.30257 0.907492 7.17578 0.914014 7.04984L4.96968 7.83711Z" fill="#EE3955"/>
        </g>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.815564 12.0003V6.98141L4.99878 7.76198V15.1689C4.99878 16.372 4.73456 18.0947 3.98564 19.3029C2.31517 22.0001 0 22.0001 0 22.0001C0 22.0001 0.7316 21.208 0.815564 19.7958C0.92272 17.993 0.815564 12.0003 0.815564 12.0003Z" fill="#EE3955"/>
      </svg>
      Рахмет
    </router-link>
  </div>
</template>

<script>

  export default {
    data() {
      return {
       
      }
    },
    components: {
     
    },
    methods: {
      makeActive: function(item) {
        this.active = item;
      }
    },
    props: {
      isActive: {
        type: Boolean,
        required: true
      }
    }
  }
</script>

<style scoped>
  .navbar {
    position: fixed;
    bottom: 0;
    left:0;
    display: flex;
    background-color: white;
    width: 100%;
    justify-content: space-around;
    box-shadow:  0px -3px 3px rgba(0, 0, 0, 0.05);;
  }
  .navbar a {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: .75rem;
    padding: .75rem 0;
    color: #AAAAAA;
    text-decoration: none;
    gap: .3rem;
    width: 100%;
    background-position: center;
    transition: 0.8s ease-in;
  } 
  .navbar a svg {
    width: 1.2rem;
    height: 1.4rem;
  }
  .router-link-exact-active:active {
    background-color: #6eb9f7;
    background-size: 100%;
    transition: 0s;
  } 
  .router-link-exact-active {
    color: var(--blue-color) !important;
  }
  .router-link-exact-active svg>path{
    stroke: var(--blue-color)
  }
  
</style>