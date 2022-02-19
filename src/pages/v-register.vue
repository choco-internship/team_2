<template>
  <div class="register">
    <VHeader backTo="/" className="active"/>
    <div class="email" >
      <div v-if="step === 1">
        <h3 class="email__title">Регистрация</h3>
        <span class="email__info">Введите ваш почтовый адрес</span>
        <VInput type="text" placeholder="Введите почтовый адрес" label="e-mail"/>
        <span class="email__description">Нажимая  “Далее”, вы принимаете <br/> <router-link to="#">условия публичной оферты</router-link> </span>
      </div>
  
      <transition name="fade">
        <div v-if="step === 2">
          <h3 class="email__title">Введите пароль</h3>
          <span class="email__info">Пароль должен состоять минимум из <br/> 9 символов</span>
          <VInput type="password" placeholder="Введите пароль" label="Пароль"/>
          <span class="email__description">Нажимая  “Далее”, вы принимаете <br/> <router-link to="#">условия публичной оферты</router-link></span>
        </div>
      </transition>
    </div>
    <ButtonRed :type="button" className="fixed" @click="handleClick">
      Далее
    </ButtonRed>  
  </div>
</template>

<script>
import ButtonRed  from '../components/button-red.vue'
import VHeader from '../components/v-header.vue'
import VInput from '../components/v-input.vue'
  export default {
    data() {
      return {
        step: 1,
        type: 'button'
      }
    },
    components: { VHeader, VInput, ButtonRed },
    methods: {
      handleClick() {
        if (this.step === 1) {
          this.step++
        } else if (this.step === 2 ) {
          this.button = 'submit'
        }
      }
    }
    
  }
</script>

<style scoped>
  .register {
    background-color: white;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-content: center;
    position: relative;
  }
  .email {
    padding: 0 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  .email__title {
    color: var(--text-primary);
    font-size: 1.25rem;
    margin-bottom: .75rem;
    text-align: center;
  }
  .email__info {
    font-size: 1rem;
    color: var(--text-grey);
    margin-bottom: 1.25rem;
    text-align: center;
    display: block;
  }
  .email__description {
    font-size: 0.75em;
    color: var(--text-grey);
    line-height: .9rem;
    margin-top: 1rem;
    display: block;
    text-align: center;
  }
  .email__description a {
    text-decoration: none;
    color: var(--text-grey);
    border-bottom: 1px solid var(--text-grey);
  }
  .active {
    align-self: flex-start;
    box-shadow: none;
    margin-bottom: 1.75rem;
  }
  .fixed {
    margin-bottom: 1.5rem;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>