<template>
  <div class="navigation" :class="menuIsOpen ? 'is-open' : ''">
    <div class="open-button" @click="toggleMenu(true)">
      <div class="open-button-inner">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="navigation-inner">
      <div class="close-button" @click="toggleMenu(false)">
        <div></div>
        <div></div>
      </div>

      <div class="nav-buttons">
        <a class="nav-button" href="/verein" @click="toggleMenu(false)">
          Verein
        </a>
        <a class="nav-button" href="/ergebnisse" @click="toggleMenu(false)">
          Ergebnisse
        </a>
        <a class="nav-button" href="/galerie" @click="toggleMenu(false)">
          Galerie
        </a>
        <a class="nav-button" href="/training" @click="toggleMenu(false)">
          Training
        </a>
        <a class="nav-button" href="/aufnahme" @click="toggleMenu(false)">
          Aufnahme
        </a>
        <a class="nav-button" :href="calendarUrl" @click="toggleMenu(false)" target="_blank">
          Kalender
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters('menu', ['menuIsOpen']),
    calendarUrl() {
      return process.env.VUE_APP_BACKEND_URL + 'assets/downloads/Kalender.pdf';
    }
  },
  methods: {
    ...mapActions('menu', ['toggleMenu'])
  }
}
</script>
