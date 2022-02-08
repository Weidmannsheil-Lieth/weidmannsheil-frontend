<template>
  <div id="header" class="header" :class="scrolled ? 'scrolled' : ''">
    <a href="/" class="nameLink">
      <div class="nameContainer">
        <div class="logoContainer">
          <div class="logo">
            <img v-bind:src="require('@/assets/logo.png')" alt=""/>
          </div>
        </div>
        <div class="name">
          Weidmannsheil
        </div>
      </div>
    </a>
    <the-navigation/>
  </div>
</template>

<script>
import TheNavigation from './TheNavigation';

export default {
  components: {
    TheNavigation
  },
  data() {
    return {
      header: null,
      scrolled: false
    };
  },
  mounted() {
    this.header = document.getElementById('header');
    document.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    document.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = !(this.header && window.scrollY < 10);
    }
  }
};
</script>