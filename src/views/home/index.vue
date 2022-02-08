<template>
  <div class="home">
    <div class="hero">
      <div class="hero-image">
        <img :src="require('@/assets/background.jpg')" alt="" id="hero-image"/>
      </div>
      <div class="hero-content">
        <h1 class="hero-title" id="hero-title">
          Schützenbrüderschaft<br/>Weidmannsheil
        </h1>
      </div>
      <div class="hero-hint"></div>
    </div>
    <div class="scroll-over">
      <div class="item">
        <h2 class="item-title text-center pt-20 effects fade-in">
          Willkommen
        </h2>
        <p class="item-smaller-title text-center mt-2 pb-20 effects fade-in">
          auf der offiziellen Webseite der Schützenbrüderschaft Weidmannsheil!
        </p>
      </div>
      <div class="divider"/>
      <notices/>
      <div class="divider"/>
      <news/>
      <div class="divider"/>
      <div class="item pt-16 pb-8">
        <h2 class="item-title text-center effects fade-in">Königsgespann</h2>
        <rout class="pb-20 pt-16"/>
      </div>
    </div>
  </div>
</template>

<script>
import Rout from "@/components/elements/Rout";
import Notices from "@/views/home/Notices";
import News from "@/views/home/News";

export default {
  components: {News, Notices, Rout},
  data() {
    return {
      image: null,
      title: null
    };
  },
  mounted() {
    this.image = document.getElementById('hero-image');
    this.title = document.getElementById('hero-title');
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
        let titleSize = 1 - 0.3 * factor;

        this.title.style.transform = 'scale(' + titleSize + ',' + titleSize + ')';
        this.title.style.opacity = opacity.toString();
      }
    }
  }
};
</script>