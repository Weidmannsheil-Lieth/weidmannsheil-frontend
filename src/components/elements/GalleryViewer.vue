<template>
  <div class="gallery-viewer" v-if="album">
    <div class="image-wrapper">
      <circle-loader class="image-loader" v-if="isLoading"/>
      <img :src="currentImagePath" alt @load="resetLoading"/>
    </div>
    <div class="control-button to-left" @click="switchImage(false)">
      <div/>
    </div>
    <div class="control-button to-right" @click="switchImage(true)">
      <div/>
    </div>
    <div class="control-bar">
      <div class="control-bar-wrap">
        <div>{{ album.year }}: {{ album.name }}</div>
        <div>
          <div class="mr-2">{{ currentPosition }} / {{ album.galleryImages.length }}</div>
          <fullscreen-button @click="makeFullscreen"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullscreenButton from "@/components/elements/FullscreenButton";
import CircleLoader from "@/components/loaders/CircleLoader";

export default {
  components: {CircleLoader, FullscreenButton},
  props: {
    album: {
      type: Object,
      required: false,
      default: () => null
    }
  },
  data() {
    return {
      isLoading: true,
      currentPosition: this.album
        ? (this.album.galleryImages.length === 0 ? 0 : 1)
        : 0
    }
  },
  computed: {
    currentImagePath() {
      return this.album && this.album.galleryImages[this.currentPosition - 1]
        ? process.env.VUE_APP_BACKEND_URL + 'galerie/' + this.album.galleryImages[this.currentPosition - 1].path
        : '';
    }
  },
  watch: {
    album: {
      deep: true,
      handler() {
        this.currentPosition = this.album
          ? (this.album.galleryImages.length === 0 ? 0 : 1)
          : 0;
      }
    },
    currentImagePath() {
      this.isLoading = true;
    }
  },
  methods: {
    makeFullscreen() {
      window.scrollTo(0, 410);
    },
    switchImage(isNext) {
      if (this.album.galleryImages.length < 2) {
        return;
      }

      if (isNext) {
        if (++this.currentPosition > this.album.galleryImages.length) {
          this.currentPosition = 1;
        }
      } else {
        if (--this.currentPosition < 1) {
          this.currentPosition = this.album.galleryImages.length;
        }
      }
    },
    resetLoading() {
      this.isLoading = false;
    }
  }
}
</script>