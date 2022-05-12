<template>
  <header-block/>
  <header-logo/>
  <div class="home">
    <img class="home__img" src="./../assets/img/background.jpg">
  </div>
  <div class="main">
    <div class="main__text">
      <h1 class="title">Welcome to <br/>
        Business Analytics Online</h1>
      <p class="context">
        <b>Business Analytics</b>
        — a new, convenient tool for managing and forecasting
        your business performance, which will help analyze your
        own finances and cash flows, visualize your reporting,
        business processes, KPI's
      </p>
      <div class="itemText" v-for="item in items" :key="item">
        <div class="itemText__block">
          <div class="itemText__block__title"><b>{{item.title}}</b></div>
          <p class="itemText__block__text">{{item.text}}</p>
        </div>
      </div>
    </div>
    <authorization-block class="main__login"/>
  </div>
  <footer-block/>
</template>

<script>
import HeaderBlock from "@/components/headerBlock.vue";
import HeaderLogo from "@/components/headerLogo.vue";
import AuthorizationBlock from "@/components/authorizationBlock";
import FooterBlock from "@/components/footerBlock";
import {mapState} from "vuex";
import router from '@/router/index.js'


export default {
  name: "home",
  components: {FooterBlock, AuthorizationBlock, HeaderLogo, HeaderBlock},
  data() {
    return {
      items:  [
        {
          title: 'Interactive Reporting',
          text: 'In just a few clicks, you can connect your data from 1C, CRM (Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and many more systems that reflect different aspects of business activities.'
        },
        {
          title: 'Automated data updates',
          text: 'The application automatically updates and structures the data in just 60 seconds, saving you time and money.'
        },
        {
          title: 'Data Security',
          text: 'The Bank guarantees the safety of your personal data, ensuring their integrity and confidentiality.'
        },
      ]
    }
  },
  computed: {
    ...mapState(['authorizationType', 'authorization'])
  },
  beforeMount() {
    if(this.authorizationType){
      router.push('/todo')
    }
  }
}
</script>

<style scoped lang="scss">
@import "./../assets/style/style.scss";

.home{
  position:absolute;
  z-index:-1;
  &__img{
    width:100vw;
  }
}

.main{
  display:flex;
  justify-content:center;
  align-items: center;
  flex-wrap:wrap-reverse;

  &__text{
    max-width:671px;

    margin-top:15vh;
    margin-right:16px;
    .title{
      font-family: 'Roboto',sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 55px;
      line-height: 156.69%;
      /* or 86px */

      color: $text-primary;
    }

    .context{

      font-family: 'Roboto',sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 156.69%;


      color:$text-secondary;

      margin-top:110px;
    }

    .itemText{
      margin-top:15px;
      display:flex;

      &__block{
        display:flex;
        flex-direction:column;
        &__title{
          font-family: "Roboto Medium", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 156.69%;

          color:$text-secondary;

        }
        &__text{
          margin-top:10px;

          font-family: 'Roboto', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 156.69%;

          color:$text-secondary;

        }
      }

      &:before{
        content: url("./../assets/img/done.svg");
        margin-top:5px;
        margin-right:15px;
      }
    }

  }

  &__login{

  }
}
</style>
