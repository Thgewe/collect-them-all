<template>
  <div class="checkbox">
    <label class="label" :for="this.inputId + this.label">{{this.label + ':'}}</label>
    <label :class="this.fakeLabelClass" :for="this.inputId + this.label"></label>
    <input
           :id="this.inputId + this.label"
           class="input"
           type="checkbox"
           @change="onChange"
           :checked="this.isActive"
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      fakeLabelClass: this.isActive ? 'fakeInput active' : 'fakeInput',
    }
  },
  props: {
    isActive: Boolean,
    label: String,
    inputId: String,
  },
  methods: {
    onChange() {
      this.$emit('changeActive')

    }
  },
  watch: {
    isActive: function(newVal, prevVal) {
      this.fakeLabelClass = newVal ? 'fakeInput active' : 'fakeInput'
    }
  }
}
</script>

<style scoped lang="scss">
.checkbox {

  display: flex;
  align-items: center;

  & .label {

  }
  & .fakeInput {
    display: block;
    height: 1rem;
    width: 1rem;
    padding: 0.25rem;
    border: 1px solid $primaryCerulean;
    background-color: #fff;
    margin-left: 0.5rem;
    &:hover {
      background-color: $mercury;
    }
  }
  & .active {
    background-image: url("@/assets/images/icons/check-mark.svg");
  }
  & .input {
    height: 0;
    width: 0;
    opacity: 0;
  }
}
</style>