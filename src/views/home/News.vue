<template>
  <div class="news item pt-16 pb-8">
    <ItemTitle
      class="text-center effects fade-in"
      :class="!isLoading ? 'mb-14 mb-sm-8' : ''"
    >
      Aktuelles
    </ItemTitle>

    <loader v-if="isLoading" class="py-20"/>

    <div v-else-if="news.length === 0">
      <ItemText class="text-center mb-14">
        Momentan sind keine Einträge vorhanden.
      </ItemText>
    </div>

    <div v-else>
      <ItemRow
        v-for="(article, index) in news"
        :key="index"
        class="mb-16"
        :class="isEven(index) ? 'row-reverse' : ''"
      >
        <ItemCol
          size="7"
          class="effects"
          :class="isEven(index) ? 'fade-from-right' : 'fade-from-left'"
        >
          <ItemColText>
            <ItemTitle size="3">
              {{ article.title }}
            </ItemTitle>
            <ItemText v-html="article.content" class="markdown-container pt-3" />
          </ItemColText>
        </ItemCol>

        <ItemCol size="5" class="effects size-fade-in align-center mt-sm-8">
          <div class="item-col-image">
            <img :src="article.imageUrl" alt=""/>
          </div>
        </ItemCol>
      </ItemRow>
    </div>

    <div class="text-center mb-8 effects fade-in">
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
      return process.env.VUE_APP_BACKEND_URL + 'assets/downloads/Kalender.pdf';
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