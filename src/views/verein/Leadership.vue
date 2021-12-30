<template>
  <div class="content leadership" id="leitung">
    <div class="item">
      <div class="item-title effects fade-in">Leitung</div>
      <div class="item-divider-container">
        <div class="item-divider effects draw-to-right"></div>
      </div>
      <div class="item-row pt-14 justify-center">
        <div
          v-for="(administration, index) in administrations"
          :key="index"
          class="item-col-3 text-center pb-10 effects fade-in"
          :class="getFadeInDelayClass(index)"
        >
          <div class="item-image" style="max-width: 300px; margin: 0 auto">
            <img :src="administration.image" alt=""/>
          </div>
          <div class="item-subtitle pt-5 pb-2 text-center">{{ administration.name }}</div>
          <div class="item-text pb-5 whitespace-pre-line">
            {{ administration.roles }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      isLoading: false
    }
  },
  computed: {
    ...mapGetters('administration', ['administrations'])
  },
  methods: {
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