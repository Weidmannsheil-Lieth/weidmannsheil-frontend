<template>
  <div class="sub weiterleitung">
    <heading label="Weiterleitung" :buttons="buttonData"/>
    <div class="content">
      <loader v-if="isLoading" class="py-10"/>

      <div class="item" v-else>

        <div v-if="redirect">
          <ItemText class="text-center">
            Durch drücken des unteren Knopfes wirst du auf
          </ItemText>
          <ItemTitle size="3" class="my-2 py-2 text-center link">
            {{ redirect.link }}
          </ItemTitle>
          <ItemText class="text-center">
            weitergeleitet.
            <br/>
            <br/>Die Schützenbrüderschaft ist für die Inhalte externer Seiten nicht verantwortlich.
          </ItemText>
          <a :href="redirect.link" class="redirect-button">
            <span>Weiterleiten</span>
          </a>
          <ItemText v-if="redirect.comment" class="text-center mt-12">
            {{ redirect.comment }}
          </ItemText>
        </div>

        <div v-else>
          <ItemText class="text-center py-10">
            Die Weiterleitung konnte nicht gefunden werden.
          </ItemText>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from '@/components/main/Heading';
import Loader from "@/components/loaders/Loader";

export default {
  metaInfo: {
    title: "Weiterleitung",
    meta: [
      { name: 'robots', content: 'noindex' },
    ]
  },
  components: {
    Loader,
    Heading
  },
  data() {
    return {
      buttonData: [],
      isLoading: true,
      redirect: null
    }
  },
  created() {
    this.loadLink();
  },
  methods: {
    loadLink() {
      window.axios.get('/redirect/' + this.$route.params.id)
        .then((response) => {
          this.redirect = response.data.data;
        })
        .finally(() => {
          this.isLoading = false;
        })
    }
  }
}
</script>