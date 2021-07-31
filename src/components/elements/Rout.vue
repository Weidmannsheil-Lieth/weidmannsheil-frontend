<template>
  <div v-if="rout" class="element-rout effects size-fade-in">
    <div class="rout-container">
      <div class="rout-image">
        <img :src="imageSource" alt=""/>
      </div>
      <div class="rout-label">
        <div class="rout-item">
          <span v-if="rout.firstKnight" class="rout-bold">1. Ritter</span>
          <br/>{{ rout.firstKnight }}
        </div>
        <div class="rout-item">
          <span v-if="rout.king" class="rout-bold">König/in</span>
          <br/>{{ rout.king }}
        </div>
        <div class="rout-item">
          <span v-if="rout.secondKnight" class="rout-bold">2. Ritter</span>
          <br/>{{ rout.secondKnight }}
        </div>
      </div>
    </div>
  </div>
  <loader v-else class="py-20"/>
</template>

<script>
import Loader from "@/components/loaders/Loader";
import {mapActions, mapGetters} from "vuex";

export default {
  components: {
    Loader
  },
  created() {
    if (!this.rout) {
      this.getRout();
    }
  },
  computed: {
    ...mapGetters('rout', ['rout']),
    imageSource() {
      return process.env.VUE_APP_BACKEND_URL + 'assets/rout.jpg'
    }
  },
  methods: {
    ...mapActions('rout', ['getRout'])
  }
}
</script>