<template>
  <button class="buttonBlock">LOGIN</button>

</template>

<script>
export default {
  name: "buttonBlock"
}
</script>

<style scoped lang="scss">
@import "./../assets/style/style.scss";


.buttonBlock{
  color:$button-secondary;
  background: $button-primary;
  border:none;

  height:53px;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 29px;

  margin-top:40px;
  margin-right:30px;
  margin-left:30px;

  cursor:pointer;

  &:hover{
    color:$button-primary;
    background: $button-secondary;
    border: 2px solid $button-primary;
  }
}
</style>
