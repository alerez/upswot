<template>
  <div class="authorizationBlock">
    <form @submit.prevent="getLogin()" class="form">
      <field v-model="login"
             name="name"
             v-bind:text="'Name'"
             v-bind:type="'text'"
      />
      <field v-model="password"
             name="password"
             v-bind:text="'Password'"
             v-bind:type="'password'"
      />
      <button-block/>
    </form>
    <router-link class="linkForgot" to="/forgot">Forgot Password</router-link>
    <button class="buttonReg" @click="getLogin">Register now</button>

  </div>
</template>

<script>
import Field from "@/components/field";
import ButtonBlock from "@/components/buttonBlock";
import { mapActions } from "vuex";


export default {
  name: "authorizationBlock",
  components: {ButtonBlock, Field},
  data() {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['GET_LOGIN']),

    getLogin: function () {
      this.GET_LOGIN({
        login: this.login,
        password: this.password
      })
    }
  },
}
</script>

<style scoped lang="scss">
@import "./../assets/style/style.scss";

.authorizationBlock{
  background:$bg;
  box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);

  width:481px;

  display:flex;
  flex-direction:column;

  .form{
    display:flex;
    flex-direction:column;
  }


  .linkForgot{
    margin: 20px auto 0;

    font-family: 'Roboto',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    text-decoration:none;

    color: #056DAE;
  }

  .buttonReg{
    margin-top:23px;

    background: $button;
    color:$text-secondary;

    font-family:Roboto, sans-serif;
    font-weight: 400;
    font-size: 25px;
    line-height: 29px;

    border:none;

    height:63px;

    cursor:pointer;
  }
}
</style>
