<template>
  <div class="sub aufnahme">
    <heading label="Aufnahme" :buttons="buttonData"/>
    <div class="content">
      <div class="item">
        <ItemTitle size="2" class="text-center mt-8">
          Hallo!
        </ItemTitle>
        <ItemText class="text-center mt-6">
          Du möchtest dem Verein beitreten?
          <br/>Dann bist du hier genau richtig.
          <br/>
          <br/>Weiter unten folgen einige Formulare, die du herunterladen und ausfüllen kannst.
          <br/>Bring diese einfach nächstes Mal zum Training mit!
        </ItemText>
      </div>
    </div>
    <div class="content" id="formulare">
      <div class="item">
        <ItemTitle class="effects fade-in">Formulare</ItemTitle>
        <ItemDivider />
        <div class="item-links pt-20">
          <a class="item-link" :href="admissionApplyUrl" target="_blank">
            Aufnahmeantrag
          </a>
          <br/>
          <a class="item-link" :href="sepaUrl" target="_blank">
            SEPA-Lastschriftmandat
          </a>
          <br/>
          <a class="item-link" :href="privacyNoticeUrl" target="_blank">
            Einwilligung Datenschutz
          </a>
        </div>
      </div>
    </div>
    <div class="content" id="zusatz">
      <div class="item">
        <ItemTitle class="effects fade-in">Ergänzungen</ItemTitle>
        <ItemDivider />
        <ItemText class="pt-18 text-center">
          Falls du noch nicht volljährig bist, dann lass bitte deine Eltern noch diesen Zettel zusätzlich ausfüllen.
        </ItemText>
        <div class="item-links mt-4">
          <a class="item-link" :href="youthAdmissionApplyUrl" target="_blank">
            Anhang Aufnahmeantrag
          </a>
        </div>
      </div>
    </div>
    <div class="content" id="weiteres">
      <div class="item">
        <ItemTitle class="effects fade-in">Weiteres</ItemTitle>
        <ItemDivider />
        <div class="item-links pt-20">
          <a class="item-link" :href="youthTrainingUrl" target="_blank">
            Probetraining Jugend
          </a>
          <br/>
          <a class="item-link" :href="companyPrivacyNoticeUrl" target="_blank">
            Einwilligung Datenschutz Unternehmen
          </a>
        </div>
        <ItemText class="text-center mt-10 mb-4">
          Schau dir ruhig mal unsere neue Vereinssatzung an!
        </ItemText>
        <div class="item-links">
          <a class="item-link" :href="statuteUrl" target="_blank">
            Vereinssatzung
          </a>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="item">
        <div class="item-image">
          <img src="/assets/verein/verein_sw.jpg" alt=""/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from '@/components/main/Heading';

export default {
  components: {
    Heading
  },
  metaInfo: {
    title: "Aufnahme",
    meta: [
      { vmid: 'description', name: 'description', content: 'Du hast Interesse, dem Verein beizutreten? Hier findest du die richtigen Formulare.' }
    ]
  },
  data() {
    let downloadUrl = process.env.VUE_APP_BACKEND_URL + 'assets/downloads/';
    return {
      statuteUrl: downloadUrl + 'Satzung.pdf',
      privacyNoticeUrl: downloadUrl + 'Einwilligung-Datenschutz.pdf',
      companyPrivacyNoticeUrl: downloadUrl + 'Einwilligung-Datenschutz-Unternehmen.pdf',
      youthTrainingUrl: downloadUrl + 'Probetraining-Jugend.pdf',
      admissionApplyUrl: downloadUrl + 'Aufnahmeantrag.pdf',
      youthAdmissionApplyUrl: downloadUrl + 'Anhang-Jugendliche-Aufnahmeantrag.pdf',
      sepaUrl: downloadUrl + 'SEPA.pdf',

      buttonData: [
        {
          label: 'Formulare',
          href: '/aufnahme#formulare'
        },
        {
          label: 'Ergänzungen',
          href: '/aufnahme#zusatz'
        },
        {
          label: 'Weiteres',
          href: '/aufnahme#weiteres'
        }
      ]
    }
  }
}
</script>