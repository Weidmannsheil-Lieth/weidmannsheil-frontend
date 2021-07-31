<template>
  <div class="heading">
    <div class="heading-container">
      <div class="image-container">
        <img :src="require('@/assets/background.jpg')" alt="" id="heading-image"/>
      </div>
      <div class="heading-content">
        <div class="label" id="heading-title">
          {{ label }}
        </div>
        <div class="heading-menu">
          <div v-for="(button, index) in buttons" :key="index" class="heading-link">
            <a :href="button.href">
              {{ button.label }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: false,
      default: ""
    },
    buttons: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  data() {
    return {
      image: null,
      title: null
    };
  },
  mounted() {
    this.image = document.getElementById('heading-image');
    this.title = document.getElementById('heading-title');
    document.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    document.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (this.image && this.title) {
        let opacity = (window.innerHeight - window.scrollY) / window.innerHeight;
        this.image.style.opacity = opacity.toString();

        let factor = 1 - ((window.innerHeight - window.scrollY) / window.innerHeight); // 0 to 1
        let titleSize = 1 - 0.6 * factor;

        this.title.style.transform = 'scale(' + titleSize + ',' + titleSize + ')';
        this.title.style.opacity = opacity.toString();
      }
    }
  }
};
</script>