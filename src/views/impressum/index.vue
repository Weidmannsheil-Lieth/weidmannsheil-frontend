<template>
  <div class="sub impressum">
    <heading label="Impressum" :buttons="buttonData"/>
    <div class="content">
      <div class="item">
        <h2 class="item-subtitle">
          Angaben gemäß § 5 TMG
        </h2>
        <p class="item-text wrapped mt-8">
          Schützenbrüderschaft "Weidmannsheil" Klein Nordende - Lieth von 1919 e.V.
          <br/>Am Butterberg 14
          <br/>25336 Elmshorn
        </p>
        <h2 class="item-subtitle mt-14">
          Vertreten durch
        </h2>
        <p class="item-text wrapped mt-8">
          1. Vorsitzende: Sabine Nickel
          <br/>2. Vorsitzender: Wolfgang Vollstedt
        </p>
        <h2 class="item-subtitle mt-14">
          Kontakt
        </h2>
        <p class="item-text wrapped mt-8">
          Telefon: +49 (0) 175 - 9 44 30 85
          <br/>Telefax: ---
          <br/>E-Mail: vorstand@weidmannsheil-lieth.de
        </p>
        <h2 class="item-subtitle mt-14">
          Registereintrag
        </h2>
        <p class="item-text wrapped mt-8">
          Eintragung im Vereinsregister.
          <br/>Registergericht: Amtsgericht Elmshorn
          <br/>Registernummer: VR 628
          <br/>Aufsichtsbehörde: Kreisverwaltung Pinneberg
        </p>
        <h2 class="item-subtitle mt-14">
          Verantwortlich für den Inhalt (gem. § 55 Abs. 2 RStV)
        </h2>
        <p class="item-text wrapped mt-8 pb-18">
          1. Vorsitzende: Sabine Nickel
        </p>
        <hr/>
        <p class="item-text text-center pt-20 pb-8 effects size-fade-in delay-3">
          Grafische Gestaltung der Webseite:
          <br/>Oliver Vollborn
          <br/>
          <br/> Quelle: http://www.e-recht24.de, Impressum Generator
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from '@/components/main/Heading';

export default {
  metaInfo: {
    title: "Impressum",
    meta: [
      { vmid: 'description', name: 'description', content: 'Unser Impressum mit Ansprechpartner und Anschrift.' }
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