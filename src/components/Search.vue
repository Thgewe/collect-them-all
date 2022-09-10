<template>
  <div class="search">
    <input
        class="input"
        v-bind="$attrs"
        type="text"
        placeholder="Search by name"
        :value="$attrs.modelValue"
        @input="onInput"
    >
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  methods: {
    onInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  },
}
</script>

<style scoped lang="scss">

.search {

  .input {
    width: 80%;
    margin: 0 auto 1rem auto;
    display: block;
    padding: 0.5rem;
    font-size: 1rem;
    color: $bunker;
    outline: none;
    border: 1px solid $primaryCerulean;
  }
}

</style>