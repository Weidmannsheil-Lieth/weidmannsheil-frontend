<template>
  <div class="content leadership" id="leitung">
    <div class="item">
      <div class="item-title effects fade-in">Leitung</div>
      <div class="item-divider-container">
        <div class="item-divider effects draw-to-right"></div>
      </div>
      <div class="item-image pt-14 effects size-fade-in">
        <img src="/assets/verein/leitung.jpg" alt=""/>
      </div>
      <div class="item-row mt-14">
        <div
          v-for="(administration, index) in administrations"
          :key="index"
          class="item-col-4 text-center pb-10 effects fade-in"
          :class="getFadeInDelayClass(index)"
        >
          <div class="item-subtitle text-center">{{ administration.name }}</div>
          <div class="item-text py-5 whitespace-pre-line">
            {{ administration.members }}
          </div>
          <a :href="'mailto:' + administration.email" class="email">
            {{ administration.email }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  data() {
    return {
      isLoading: false
    }
  },
  created() {
    if (!this.administrations || this.administrations.length === 0) {
      this.isLoading = true;
      this.getAdministrations()
        .finally(() => this.isLoading = false);
    }
  },
  computed: {
    ...mapGetters('administration', ['administrations'])
  },
  methods: {
    ...mapActions('administration', ['getAdministrations']),
    getFadeInDelayClass(index) {
      switch (index % 3) {
        case 2:
          return 'delay-1';
        case 3:
          return 'delay-2';
        default:
          return '';
      }
    }
  }
}
</script>