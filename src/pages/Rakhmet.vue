<template>
  <div class="rakhmet">
    <VHeader backTo="/">
      Рахмет
    </VHeader>
    <div class="rakhmet__content">
      <svg viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_888_330" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5957 14.8611V0H0.904251L0.904251 14.8611H15.5957Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_888_330)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.96968 7.83711C5.16816 9.49183 6.5607 10.7738 8.24982 10.7738C10.0756 10.7738 11.5558 9.27695 11.5558 7.43049C11.5558 5.58375 10.0756 4.08659 8.24982 4.08659C6.75408 4.08659 5.49085 5.09213 5.08338 6.47154L1.09549 4.84166C1.32687 4.5302 1.6969 3.89118 1.90163 3.59243C2.19794 3.15926 2.39161 2.90823 2.89832 2.34263C3.07838 2.1413 3.27658 1.95747 3.48074 1.7807C3.81562 1.48421 4.21514 1.18319 4.74255 0.900536L4.74227 0.901666C5.78489 0.327312 6.9795 -0.000244141 8.24982 -0.000244141C12.3072 -0.000244141 15.5958 3.32643 15.5958 7.43049C15.5958 11.5343 12.3072 14.8609 8.24982 14.8609C4.19331 14.8609 0.904373 11.5343 0.904373 7.43049C0.904373 7.30257 0.907492 7.17578 0.914014 7.04984L4.96968 7.83711Z" fill="#EE3955"/>
        </g>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.815564 12.0003V6.98141L4.99878 7.76198V15.1689C4.99878 16.372 4.73456 18.0947 3.98564 19.3029C2.31517 22.0001 0 22.0001 0 22.0001C0 22.0001 0.7316 21.208 0.815564 19.7958C0.92272 17.993 0.815564 12.0003 0.815564 12.0003Z" fill="#EE3955"/>
      </svg>
    </div>
  </div>
</template>

<script>
import VHeader from '../components/v-header.vue'
  export default {
  components: { VHeader },
    
  }
</script>

<style scoped>
.rakhmet__content {
  width: 100%;
  height: calc(100vh - 8rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.rakhmet__content svg {
  width: 5rem;
}
</style>