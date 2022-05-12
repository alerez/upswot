<template>
  <label class="field">
    {{ text }}
    <input @input="updateInput"
           :value="modelValue"
           :type="type" class="field__input"
    required>
  </label>
</template>

<script>
export default {
  name: "field",
  props: {
    text: [String],
    type: [String],
    modelValue: [String],
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
@import "./../assets/style/style.scss";

.field{
  display:flex;
  flex-direction:column;

  color:$text-secondary;
  font-family: "Roboto Light", sans-serif;
  font-size: 18px;
  line-height:22px;
  font-weight:300;

  margin-top:40px;
  margin-left:30px;
  margin-right:30px;

  &__input{
    background: #FFFFFF;
    border: 1px solid $border-color;
    border-radius:0;

    font-size:20px;

    padding:11px;

    margin-top:7px;
  }
}
</style>
