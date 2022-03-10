<template>
  <header :class="['header', className]" >
    <h1>
      <svg v-if="backTo" @click="goBack" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#131113"/>
      </svg>
      <slot/>
    </h1>
  </header>
</template>

<script> 
  import router from '../routes/routes'

  export default {
    props: {
      backTo: {
        type: String,
        required: false,
        default: ''
      },
      className: {
        type: String,
        required: false
      },
      onClick: {
        type: Function,
        required: false
      }
    },
    methods: {
      goBack() {
        if (this.onClick) {
          this.onClick()
          return
        }
        router.push(this.backTo)
      }
    }
  }
</script>

<style scoped>
  .header {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    height: var(--header-height);
    position: sticky;
    width: 100%;
    top: 0;
    background-color: white;
    z-index: 5;
  }
  .header h1 {
    color: var(--text-primary);
    display: flex;
    align-items: center;
    gap: 1.2rem;
    padding: 1.25rem;
    font-size: 1.25rem;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .header h1 svg {
    width: 1rem;
    height: 1rem;
  }
  
</style>