<template>
  <div v-if="showCookieBanner" class="cookies">
    <div class="information-container">
      <div class="information">
        Diese Webseite verwendet Cookies.
      </div>
      <div class="link">
        <a href="/rechtliches">Hier erfährst du mehr zum Datenschutz.</a>
      </div>
    </div>
    <div class="close-button" @click="closeBanner">
      Schließen
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showCookieBanner: false
    }
  },
  created() {
    this.loadShowCookieBanner();
  },
  methods: {
    loadShowCookieBanner() {
      this.showCookieBanner = localStorage.getItem('cookies') !== 'true';
    },
    closeBanner() {
      localStorage.setItem('cookies', 'true');
      this.showCookieBanner = false;
    }
  }
}
</script>