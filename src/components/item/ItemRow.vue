<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    reverse: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    classes() {
      let classes = 'item-row';

      if (this.reverse) {
        classes += ' row-reverse';
      }

      return classes;
    }
  }
}
</script>