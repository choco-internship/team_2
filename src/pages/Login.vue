<template>
  <div class="login">
    <VHeader backTo="/" className="active"/>
    <div class="email" >
      <h3 class="email__title">Авторизация</h3>
      <span class="email__info">Введите ваш почтовый адрес и пароль</span>
      <Input @keyup.enter="handleClick" type="text" placeholder="Email" label="e-mail" v-model:input="email"/>
      <Input @keyup.enter="handleClick" type="password" placeholder="Пароль" label="Пароль" v-model:input="password"/>
      <span class="email__description">Нажимая  “Далее”, вы принимаете <br/> <router-link to="#">условия публичной оферты</router-link> </span>
      <p v-if="error.length" class="error">
        {{ error }}
      </p>
    </div>
    <ButtonRed  type="submit" className="fixed" @click="handleClick" :disabled="!email || !password">
      Войти
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
        error: '',
      }
    },
    components: { VHeader, Input, ButtonRed },
    methods: {
      handleClick() {
        if(this.email.length && this.password.length) {
          api.login({email: this.email, password: this.password}).then(data => {            
            if (data?.message === 'User is logged in') {
              localStorage.setItem('user', JSON.stringify(data.data))            
              this.$router.push('/')
            }
          }).catch(() => {
            this.error = 'Введенный логин и пароль не совпадают'
            }) 
        }
      }
    }
  }
</script>

<style scoped>
.login {
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
  .error {
    text-align: center;
    margin-top: 1rem;
    color: #DE2D49;
  }

</style>