<template>
  <div class="notices item pt-16 pb-8">
    <h2
      class="item-title text-center effects fade-in"
      :class="!isLoading ? 'mb-14 mb-sm-8' : ''"
    >
      Wichtige Hinweise
    </h2>

    <loader v-if="isLoading" class="py-20"/>

    <div v-else-if="notices.length === 0">
      <p class="item-text text-center mb-14">
        Momentan sind keine Einträge vorhanden.
      </p>
    </div>

    <div v-else>
      <div
        v-for="(notice, index) in notices"
        :key="index"
        class="mb-14"
      >
        <h3 class="item-subtitle pl-2 pb-4 effects fade-in">
          {{ notice.title }}
        </h3>
        <p class="item-text pt-2 effects fade-in whitespace-pre-line">
          {{ notice.content }}
        </p>
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