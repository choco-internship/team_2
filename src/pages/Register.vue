<template>
  <div class="register">
    <VHeader backTo="/" className="active"/>
    <div class="email" >
      <div v-if="step === 1">
        <h3 class="email__title">Регистрация</h3>
        <span class="email__info">Введите ваш почтовый адрес</span>
        <Input type="text" placeholder="Введите почтовый адрес" label="e-mail" v-model="email"/>
        <input type="text" placeholder="Введите почтовый адрес" label="e-mail" v-model="email"/>
        <span class="email__description">Нажимая  “Далее”, вы принимаете <br/> <router-link to="#">условия публичной оферты</router-link> </span>
      </div>
  
      <transition name="fade">
        <div v-if="step === 2">
          <h3 class="email__title">Введите пароль</h3>
          <span class="email__info">Пароль должен состоять минимум из <br/> 9 символов</span>
          <Input type="password" placeholder="Введите пароль" label="Пароль" v-model="password"/>
          <input type="text" placeholder="Введите пароль" label="Пароль" v-model="password"/>
          <span class="email__description">Нажимая  “Далее”, вы принимаете <br/> <router-link to="#">условия публичной оферты</router-link></span>
        </div>
      </transition>
      <p v-if="error.length">
        {{ error }}
      </p>
    </div>
    <ButtonRed 
      :type="step == 2 ? 'submit' : 'button' " 
      className="fixed" 
      @click="handleClick" 
      :disabled="!email"
    >
      Далее
    </ButtonRed>  
  </div>
</template>

<script>
  import ButtonRed  from '../components/button-red.vue'
  import VHeader from '../components/header.vue'
  import Input from '../components/my-input.vue'
  import api from '../services/api'
  export default {
    data() {
      return {
        email: '',
        password: '',
        step: 1,
        error: '',
      }
    },
    components: { VHeader, Input, ButtonRed },
    methods: {
      handleClick() {
        if (this.step === 1) {
          this.step++
        } else if (this.step === 2 ) {
          api.register({email: this.email, password: this.password}).then(data => {
            if (data.message === 'User created successfully') {
              localStorage.setItem('authorized', true)
              this.$router.push('/login')
            } else {
              this.error = data.message
            }
          }).catch(error => {
            this.error = error.message
          })
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