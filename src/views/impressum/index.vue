<template>
  <div class="sub impressum">
    <heading label="Impressum" :buttons="buttonData"/>
    <div class="content">
      <div class="item">
        <ItemTitle size="2">
          Angaben gemäß § 5 TMG
        </ItemTitle>
        <ItemText class="wrapped mt-8">
          Schützenbrüderschaft "Weidmannsheil" Klein Nordende - Lieth von 1919 e.V.
          <br/>Am Butterberg 14
          <br/>25336 Elmshorn
        </ItemText>
        <ItemTitle size="2" class="mt-14">
          Vertreten durch
        </ItemTitle>
        <ItemText class="wrapped mt-8">
          1. Vorsitzende: Sabine Nickel
          <br/>2. Vorsitzender: Wolfgang Vollstedt
        </ItemText>
        <ItemTitle size="2" class="mt-14">
          Kontakt
        </ItemTitle>
        <ItemText class="wrapped mt-8">
          Telefon: +49 (0) 175 - 9 44 30 85
          <br/>Telefax: ---
          <br/>E-Mail: vorstand@weidmannsheil-lieth.de
        </ItemText>
        <ItemTitle size="2" class="mt-14">
          Registereintrag
        </ItemTitle>
        <ItemText class="wrapped mt-8">
          Eintragung im Vereinsregister.
          <br/>Registergericht: Amtsgericht Elmshorn
          <br/>Registernummer: VR 628
          <br/>Aufsichtsbehörde: Kreisverwaltung Pinneberg
        </ItemText>
        <ItemTitle size="2" class="mt-14">
          Verantwortlich für den Inhalt (gem. § 55 Abs. 2 RStV)
        </ItemTitle>
        <ItemText class="wrapped mt-8 pb-18">
          1. Vorsitzende: Sabine Nickel
        </ItemText>
        <hr/>
        <ItemText class="text-center pt-20 pb-8 effects size-fade-in delay-3">
          Grafische Gestaltung der Webseite:
          <br/>Oliver Vollborn
          <br/>
          <br/> Quelle: http://www.e-recht24.de, Impressum Generator
        </ItemText>
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