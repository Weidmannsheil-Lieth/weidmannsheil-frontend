<template>
  <div class="sub links">
    <heading label="Hoppla!" :buttons="buttonData"/>
    <div class="content pb-20">
      <div class="item">
        <ItemTitle>Nicht gefunden</ItemTitle>
        <ItemDivider />
        <ItemText class="mt-14 text-center">
          Die angeforderte Seite konnte leider nicht gefunden werden.
          <br />Bitte überprüfe nochmal die eingegebene URL!
        </ItemText>
        <div class="item-links mt-6">
          <a class="item-link" href="/">
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