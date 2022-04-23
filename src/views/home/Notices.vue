<template>
  <div class="notices item pt-16 pb-8">
    <ItemTitle
      class="text-center effects fade-in"
      :class="!isLoading ? 'mb-14 mb-sm-8' : ''"
    >
      Wichtige Hinweise
    </ItemTitle>

    <loader v-if="isLoading" class="py-20"/>

    <div v-else-if="notices.length === 0">
      <ItemText class="text-center mb-14">
        Momentan sind keine Einträge vorhanden.
      </ItemText>
    </div>

    <div v-else>
      <div
        v-for="(notice, index) in notices"
        :key="index"
        class="mb-14"
      >
        <ItemTitle size="2" class="pl-2 pb-4 effects fade-in">
          {{ notice.title }}
        </ItemTitle>
        <ItemText v-html="notice.renderedContent" class="markdown-container pt-2 effects fade-in"/>
      </div>
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
    if (this.notices.length === 0) {
      this.isLoading = true;
      this.getNotices()
        .finally(() => this.isLoading = false);
    }
  },
  computed: {
    ...mapGetters('notices', ['notices']),
  },
  methods: {
    ...mapActions('notices', ['getNotices'])
  }
}
</script>