<template>
  <div class="register">
    <VHeader backTo="/" className="active"/>
    <div class="email" >
      <h3 class="email__title">Логин</h3>
      <span class="email__info">Введите ваш почтовый адрес и пароль</span>
      <input type="text" placeholder="Введите почтовый адрес" label="e-mail" v-model="email"/>
      <input type="password" placeholder="Введите пароль" label="Пароль" v-model="password"/>
      <span class="email__description">Нажимая  “Далее”, вы принимаете <br/> <router-link to="#">условия публичной оферты</router-link> </span>
      <p v-if="error.length">
        {{ error }}
      </p>
    </div>
    <ButtonRed type="submit" className="fixed" @click="handleClick" :disabled="!email">
      Войти
    </ButtonRed>  
  </div>
</template>

<script>
  import ButtonRed  from '../components/button-red.vue'
  import VHeader from '../components/v-header.vue'
  // import VInput from '../components/v-input.vue'
  import api from '../services/api'
  export default {
    data() {
      return {
        email: '',
        password: '',
        error: '',
      }
    },
    components: { VHeader, ButtonRed },
    methods: {
      handleClick() {
        api.login({email: this.email, password: this.password}).then(data => {
          if (data.message === 'User is logged in') {
            localStorage.setItem('user', JSON.stringify(data.data))            
            this.$router.push('/')
          }
        })
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
    margin-bottom: 5.5rem;
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