<template>
  <component v-bind:is="component" :class="classes">
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      required: false,
      default: "1"
    }
  },
  computed: {
    component() {
      switch (this.size) {
        case '2':
          return 'h3';
        case '3':
          return 'h4';
        default:
          return 'h2';
      }
    },
    classes() {
      switch (this.size) {
        case '2':
          return 'item-subtitle';
        case '3':
          return 'item-smaller-title';
        default:
          return 'item-title';
      }
    }
  }
}
</script>