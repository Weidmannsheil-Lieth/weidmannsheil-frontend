<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      required: false,
      default: "6"
    }
  },
  computed: {
    classes() {
      return 'item-col item-col-' + this.size;
    }
  }
}
</script>