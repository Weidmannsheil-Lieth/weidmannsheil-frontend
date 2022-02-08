<template>
  <div class="sub links">
    <heading label="Hoppla!" :buttons="buttonData"/>
    <div class="content pb-20">
      <div class="item">
        <div class="item-title">Nicht gefunden</div>
        <div class="item-divider-container">
          <div class="item-divider effects draw-to-right"></div>
        </div>
        <div class="item-text mt-14 text-center">
          Die angeforderte Seite konnte leider nicht gefunden werden.
          <br />Bitte überprüfe nochmal die eingegebene URL!
        </div>
        <div class="item-links mt-6">
          <a class="item-link" href="/#/">
            Zurück zur Startseite
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from '@/components/main/Heading';

export default {
  metaInfo: {
    title: "Seite nicht gefunden",
    meta: [
      { name: 'robots', content: 'noindex' },
      { vmid: 'description', name: 'description', content: 'Diese Seite konnte leider nicht gefunden werden.' }
    ]
  },
  components: {
    Heading
  },
  data() {
    return {
      buttonData: []
    }
  }
}
</script>