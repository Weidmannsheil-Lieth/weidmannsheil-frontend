<template>
  <div class="footer">
    <div class="light-footer">
      <div class="footer-lists">
        <div class="footer-list">
          <a class="footer-list-title" href="/#/verein">Verein</a>
          <ul class="footer-list-content">
            <li>
              <redirect-link href="/#/verein/wir" label="Über Uns"/>
            </li>
            <li>
              <redirect-link href="/#/verein/heim" label="Vereinsheim"/>
            </li>
            <li>
              <redirect-link href="/#/verein/leitung" label="Vereinsleitung"/>
            </li>
            <li>
              <redirect-link href="/#/verein/jugend" label="Jugend"/>
            </li>
            <li>
              <redirect-link href="/#/verein/tradition" label="Tradition"/>
            </li>
          </ul>
        </div>
        <div class="footer-list">
          <a class="footer-list-title" href="/#/ergebnisse">Ergebnisse</a>
          <ul class="footer-list-content">
            <li>
              <redirect-link href="/#/ergebnisse/pokalschiessen" label="Pokalschießen"/>
            </li>
            <li>
              <redirect-link href="/#/ergebnisse/gewinnscheibe" label="Gewinnscheibe"/>
            </li>
            <li>
              <redirect-link href="/#/ergebnisse/vereinsmeisterschaften" label="Vereinsmeisterschaften"/>
            </li>
            <li>
              <redirect-link href="/#/ergebnisse/kreismeisterschaften" label="Kreismeisterschaften"/>
            </li>
          </ul>
        </div>
        <div class="footer-list">
          <a class="footer-list-title" href="/#/galerie">Galerie</a>
          <ul class="footer-list-content">
            <li>
              <redirect-link href="/#/galerie/anzeige" label="Anzeige"/>
            </li>
            <li>
              <redirect-link href="/#/galerie/alben" label="Alben"/>
            </li>
          </ul>
        </div>
        <div class="footer-list">
          <a class="footer-list-title" href="/#/training">Training</a>
          <ul class="footer-list-content">
            <li>
              <redirect-link href="/#/training/zeiten" label="Zeiten"/>
            </li>
            <li>
              <redirect-link href="/#/training/anfahrt" label="Anfahrt"/>
            </li>
            <li>
              <redirect-link href="/#/training/post" label="Post"/>
            </li>
          </ul>
        </div>
        <div class="footer-list">
          <a class="footer-list-title" href="/#/aufnahme">Aufnahme</a>
          <ul class="footer-list-content">
            <li>
              <redirect-link href="/#/aufnahme/formulare" label="Formulare"/>
            </li>
            <li>
              <redirect-link href="/#/aufnahme/zusatz" label="Ergänzungen"/>
            </li>
            <li>
              <redirect-link href="/#/aufnahme/weiteres" label="Weiteres"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="medium-footer">
      <div class="footer-content">
        <div class="link-container">
          <a href="/#/links">Links</a>
        </div>
        <div class="link-container">
          <a href="/#/impressum">Impressum</a>
        </div>
        <div class="link-container">
          <a href="/#/rechtliches">Rechtliches</a>
        </div>
      </div>
      <div class="footer-sub-content">
        <a :href="administrationUrl" target="_blank">Administration</a>
      </div>
    </div>
    <div class="dark-footer">
      <a class="dark-footer-link" href="https://code-experience.org" target="_blank">
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
import RedirectLink from "@/components/elements/RedirectLink";

export default {
  components: {RedirectLink},
  computed: {
    administrationUrl() {
      return process.env.VUE_APP_BACKEND_URL;
    }
  }
}
</script>