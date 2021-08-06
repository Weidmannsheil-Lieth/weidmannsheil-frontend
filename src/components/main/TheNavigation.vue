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
        <a class="nav-button" href="/#/" @click="toggleMenu(false)">
          Start
        </a>
        <a class="nav-button" href="/#/verein" @click="toggleMenu(false)">
          Verein
        </a>
        <a class="nav-button" href="/#/ergebnisse" @click="toggleMenu(false)">
          Ergebnisse
        </a>
        <a class="nav-button" href="/#/galerie" @click="toggleMenu(false)">
          Galerie
        </a>
        <a class="nav-button" href="/#/training" @click="toggleMenu(false)">
          Training
        </a>
        <a class="nav-button" href="/#/aufnahme" @click="toggleMenu(false)">
          Aufnahme
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters('menu', ['menuIsOpen'])
  },
  methods: {
    ...mapActions('menu', ['toggleMenu'])
  }
}
</script>