<template>
  <div class="headerLogo">
    <img class="headerLogo__img" src="./../assets/img/Logo.svg">
  </div>
</template>

<script>
export default {
  name: "headerLogo"
}
</script>

<style scoped lang="scss">
@import "./../assets/style/style.scss";

.headerLogo{
  width:100vw;
  height:96px;
  background:$bg-secondary;

  display:flex;
  align-items:center;

  &__img{

    margin-left:10%;

  }
}
</style>
