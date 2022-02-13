<template>
  <div class="footer">
    <div class="light-footer">
      <div class="footer-lists">
        <div class="footer-list">
          <a class="footer-list-title" href="/verein">Verein</a>
        </div>
        <div class="footer-list">
          <a class="footer-list-title" href="/ergebnisse">Ergebnisse</a>
        </div>
        <div class="footer-list">
          <a class="footer-list-title" href="/galerie">Galerie</a>
        </div>
        <div class="footer-list">
          <a class="footer-list-title" href="/training">Training</a>
        </div>
        <div class="footer-list">
          <a class="footer-list-title" href="/aufnahme">Aufnahme</a>
        </div>
      </div>
      <div class="instagram-link-wrapper">
        <a class="instagram-link" href="https://www.instagram.com/schuetzenjugend_lieth/" target="_blank">
          <div class="instagram-link-icon">
            <font-awesome-icon :icon="{prefix: 'fab', iconName: 'instagram'}" class="icon" size="lg"/>
          </div>
          <div>
            @schuetzenjugend_lieth
          </div>
        </a>
      </div>
    </div>
    <div class="medium-footer">
      <div class="footer-content">
        <div class="link-container">
          <a href="/links">Links</a>
        </div>
        <div class="link-container">
          <a href="/impressum">Impressum</a>
        </div>
        <div class="link-container">
          <a href="/rechtliches">Rechtliches</a>
        </div>
      </div>
      <div class="footer-sub-content">
        <a :href="administrationUrl" target="_blank" rel="nofollow">Administration</a>
      </div>
    </div>
    <div class="dark-footer">
      <a class="dark-footer-link" href="https://www.vollborn.dev" target="_blank">
        <div class="logo-container">
          <img :src="require('@/assets/vollborn.png')" alt=""/>
        </div>
        <div class="name-container">
          Vollborn
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    administrationUrl() {
      return process.env.VUE_APP_BACKEND_URL;
    }
  }
}
</script>