<template>
  <a :href="href" @click.prevent="redirect(href)">{{ label }}</a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
      default: null
    },
    label: {
      type: String,
      required: true,
      default: null
    }
  },
  methods: {
    redirect(href) {
      let link = href;
      if (href.startsWith('/#')) {
        link = href.slice(2);
      }

      if (link === this.$route.path) {
        this.$scrollTo('#' + this.$route.params.scroll)
      } else {
        this.$router.push(link);
      }
    }
  }
}
</script>