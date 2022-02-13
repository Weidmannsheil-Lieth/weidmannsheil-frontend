<template>
  <div :class="centered ? 'item-col-text-wrapper' : ''">
    <div class="item-col-text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    centered: {
      type: Boolean,
      required: false,
      default: true
    }
  }
}
</script>