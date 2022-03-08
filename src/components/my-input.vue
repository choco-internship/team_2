<template>
  <label>
    {{label}}
    <input :type='type' :placeholder='placeholder' :v-model="vModal"/>
  </label>
</template>

<script>
  export default {
    props: {
      label: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      },
      placeholder: {
        type: String,
        required: true
      },
      vModal: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
  label {
    display: block;
    font-size: .75rem;
    color: var(--text-primary);
  }
  input {
    width: 100%;
    display: block;
    padding: 1rem;
    outline: none;
    border: 1px solid #8F8F8F;
    border-radius: 4px;
    font-size: 1rem;
    color: black;
    transition: border .2s ease-in;
    margin-top: .3rem;
  }
  input::placeholder {
    color: #8F8F8F;
    font-size: 1rem;
  }
  input:focus {
    border: 1px solid var(--blue-color)
  }
</style>