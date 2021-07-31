<template>
  <div class="fullscreen-button" @click="click">
    <div class="fullscreen-wrapper">
      <div/>
      <div/>
      <div/>
      <div/>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>