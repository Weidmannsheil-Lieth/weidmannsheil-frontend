<template>
  <div class="news item pt-16 pb-8">
    <div
      class="item-title text-center effects fade-in"
      :class="!isLoading ? 'mb-14 mb-sm-8' : ''"
    >
      Aktuelles
    </div>

    <loader v-if="isLoading" class="py-20"/>

    <div v-else-if="news.length === 0">
      <div class="item-text text-center mb-14">
        Momentan sind keine Einträge vorhanden.
      </div>
    </div>

    <div v-else>
      <div
        v-for="(article, index) in news"
        :key="index"
        class="item-row mb-16"
        :class="isEven(index) ? 'row-reverse' : ''"
      >

        <div
          class="item-col-7 effects"
          :class="isEven(index) ? 'fade-from-right' : 'fade-from-left'"
        >
          <div class="item-col-text item-subtitle">
            {{ article.title }}
          </div>
          <div class="item-col-text item-text pt-3 whitespace-pre-line">
            {{ article.content }}
          </div>
        </div>

        <div class="item-col-5 effects size-fade-in align-center mt-sm-8">
          <div class="item-col-image">
            <img :src="article.imageUrl" alt=""/>
          </div>
        </div>

      </div>
    </div>

    <div class="text-center mb-8">
      <a :href="calendarUrl" target="_blank" class="item-link">
        Kalender ansehen
      </a>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/loaders/Loader";
import {mapActions, mapGetters} from "vuex";

export default {
  components: {
    Loader
  },
  data() {
    return {
      isLoading: false
    }
  },
  created() {
    if (this.news.length === 0) {
      this.isLoading = true;
      this.getNews()
        .finally(() => this.isLoading = false);
    }
  },
  computed: {
    ...mapGetters('news', ['news']),
    calendarUrl() {
      return process.env.VUE_APP_BACKEND_URL + 'downloads/Kalender.pdf';
    }
  },
  methods: {
    ...mapActions('news', ['getNews']),
    isEven(index) {
      return index % 2 === 0;
    }
  }
}
</script>