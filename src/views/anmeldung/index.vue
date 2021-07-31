<template>
  <div class="sub anmeldung">
    <heading label="Anmeldung" :buttons="buttonData"/>
    <div class="content">
      <div class="item">
        <div class="item-subtitle text-center mt-8">
          Hallo!
        </div>
        <div class="item-text text-center mt-6">
          Du möchtest dem Verein beitreten?
          <br/>Dann bist du hier genau richtig.
          <br/>
          <br/>Weiter unten folgen einige Formulare, die du herunterladen und ausfüllen kannst.
          <br/>Bring diese einfach nächstes Mal zum Training mit!
        </div>
      </div>
    </div>
    <div class="content" id="formulare">
      <div class="item">
        <div class="item-title effects fade-in">Formulare</div>
        <div class="item-divider-container">
          <div class="item-divider effects draw-to-right"></div>
        </div>
        <div class="item-links pt-20">
          <a class="item-link" href="/dokumente/anmeldung/Aufnahmeantrag.pdf" target="_blank">
            Aufnahmeantrag
          </a>
          <br/>
          <a class="item-link" href="/dokumente/anmeldung/SEPA.pdf" target="_blank">
            SEPA-Lastschriftmandat
          </a>
          <br/>
          <a class="item-link" href="/dokumente/anmeldung/Einwilligung-Datenschutz.pdf" target="_blank">
            Einwilligung Datenschutz
          </a>
        </div>
      </div>
    </div>
    <div class="content" id="zusatz">
      <div class="item">
        <div class="item-title effects fade-in">Ergänzungen</div>
        <div class="item-divider-container">
          <div class="item-divider effects draw-to-right"></div>
        </div>
        <div class="item-text pt-18 text-center">
          Falls du noch nicht volljährig bist, dann lass bitte deine Eltern noch diesen Zettel zusätzlich ausfüllen.
        </div>
        <div class="item-links pt-8">
          <a class="item-link" href="/dokumente/anmeldung/Aufnahmeantrag.pdf" target="_blank">
            Aufnahmeantrag
          </a>
        </div>
      </div>
    </div>
    <div class="content" id="weiteres">
      <div class="item">
        <div class="item-title effects fade-in">Weiteres</div>
        <div class="item-divider-container">
          <div class="item-divider effects draw-to-right"></div>
        </div>
        <div class="item-links pt-20">
          <a class="item-link" href="/dokumente/anmeldung/Probetraining-Jugend.pdf" target="_blank">
            Probetraining Jugend
          </a>
          <br/>
          <a class="item-link" href="/dokumente/anmeldung/Einwilligung-Datenschutz-Unternehmen.pdf" target="_blank">
            Einwilligung Datenschutz Unternehmen
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
  data() {
    return {
      buttonData: [
        {
          label: 'Formulare',
          href: '/#/anmeldung/formulare'
        },
        {
          label: 'Ergänzungen',
          href: '/#/anmeldung/zusatz'
        },
        {
          label: 'Weiteres',
          href: '/#/anmeldung/weiteres'
        }
      ]
    }
  }
}
</script>