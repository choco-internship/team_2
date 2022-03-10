<template>
  <button :type="type" :className="className" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        required: true,
        default: 'button'
      },
      className: {
        type: String,
        required: false
      },
      disabled: {
        type: String,
        required: false
      }
    }
  }
</script>

<style scoped>
  button {
    background-color: #DE2D49;
    padding: .75rem 3.5rem;
    margin:0 auto;
    border: none;
    color:white;
    transition: .2s ease-in;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    outline: none;
  }
  button:disabled {
    background-color: #ECECEC;
    color: #8f8f8f
  }
</style>