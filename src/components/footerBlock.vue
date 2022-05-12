<template>
  <div class="footerBlock">
    <div class="blockCenter">
      <div class="imgLink">
        <img class="images" src="./../assets/img/Logo.svg">
        <div class="link">
          <router-link v-for="item in items" :key="item" :to="item.link">{{item.text}}</router-link>
        </div>
      </div>
      <div class="line"></div>
      <div class="info">
        Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal Opportunity Lender.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerBlock",
  data() {
    return {
      items: [
        {
          text: 'Terms & Conditions',
          link: '/'
        },
        {
          text: 'Privacy',
          link: '/'
        },
        {
          text: 'Notice at Collection',
          link: '/'
        },
        {
          text: 'CA Privacy Hub',
          link: '/'
        },
        {
          text: 'Contact Us',
          link: '/'
        },
        {
          text: 'Sitemap',
          link: '/'
        },

      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "./../assets/style/style.scss";


.footerBlock{
  width:100vw;
  height:175px;
  background: $bg-primary;

  margin-top:40px;

  display:flex;
  align-items:center;
  justify-content:center;

  .blockCenter{
    width:80vw;

    .imgLink{
      display:flex;
      align-items:center;
      justify-content:space-between;

      .images{
        width:56px;
      }

      .link{
        a{
          font-family: 'Roboto', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 156.69%;

          color:$text-primary;

          margin-right:20px;

          text-decoration:none;
        }
      }

    }

    .line{
      width:100%;
      height:1px;
      background-color:$bg;

      margin-top:36px;
      margin-bottom:31px;
    }

    .info{
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 156.69%;

      color:$text-primary;
    }
  }
}

@media screen and (max-width:1000px) {
  .footerBlock{
    height:100%;
    .blockCenter{
      .imgLink{
        flex-direction:column;
        margin-top:20px;
        .link{
          margin-top:15px;
          display:flex;
          flex-direction:column;
          align-items:center;

          a{
            margin-right:0;
          }
        }
      }
    }
  }
}
</style>
