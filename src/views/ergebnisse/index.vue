<template>
  <div v-if="results" class="sub verein">
    <heading label="Ergebnisse" :buttons="buttonData"/>
    <div class="content ergebnisse">

      <loader v-if="isLoading" class="py-10"/>

      <ItemText
        v-else-if="Object.keys(results).length === 0"
        class="text-center py-10"
      >
        Momentan sind keine Einträge vorhanden.
      </ItemText>

      <div class="item" v-for="(category, index) in Object.keys(results)" :key="index">
        <ItemTitle>{{ category }}</ItemTitle>
        <ItemDivider />
        <div class="item-links">
          <div
            class="item-link-container"
            v-for="result in results[category]"
            :key="result.name"
            :id="result.name"
          >
            <a
              class="item-link"
              :href="parseUrl(result)"
              :target="parseTarget(result)"
              :download="parseDownload(result)"
            >
              {{ result.name }}
            </a>
          </div>
        </div>
        <hr/>
      </div>

      <div
        class="item mt-10"
        v-if="Object.keys(results).length !== 0"
      >
        <ItemText class="text-center">
          Die Ergebnisse können Weiterleitungen auf externe Webseiten enthalten.
          <br/>Für den Inhalt dieser Seiten ist die Schützenbrüderschaft nicht verantwortlich.
        </ItemText>
      </div>

    </div>
  </div>
</template>

<script>
import Heading from '@/components/main/Heading';
import {mapActions, mapGetters} from "vuex";
import Loader from "@/components/loaders/Loader";

export default {
  metaInfo: {
    title: "Ergebnisse",
    meta: [
      { vmid: 'description', name: 'description', content: 'Die Ergebnisse vergangener Turniere und Events unseres Vereins.' }
    ]
  },
  components: {
    Loader,
    Heading
  },
  data() {
    return {
      buttonData: [],
      isLoading: false,
      contentTypes: {
        'download': 1,
        'redirect': 2
      }
    }
  },
  created() {
    if (this.results.length === 0) {
      this.isLoading = true;
      this.getResults()
        .finally(() => this.isLoading = false);
    }
  },
  computed: {
    ...mapGetters('results', ['results'])
  },
  methods: {
    ...mapActions('results', ['getResults']),
    parseUrl(result) {
      switch (result.contentType) {
        case  this.contentTypes['redirect']:
          return result.contentAction;
        case  this.contentTypes['download']:
          return process.env.VUE_APP_BACKEND_URL + 'ergebnisse' + result.contentAction;
      }
    },
    parseTarget(result) {
      return result.contentType === this.contentTypes['redirect'] ? '_blank' : '';
    },
    parseDownload(result) {
      return result.contentType === this.contentTypes['download'] ? '' : null;
    }
  }
}
</script>