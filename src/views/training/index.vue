<template>
  <div class="sub training">
    <heading label="Training" :buttons="buttonData"/>
    <hours/>
    <directions/>
    <postal/>
  </div>
</template>

<script>
import Heading from '@/components/main/Heading';
import Hours from '@/views/training/Hours';
import Directions from "@/views/training/Directions";
import Postal from "@/views/training/Postal";

export default {
  components: {
    Postal,
    Directions,
    Heading,
    Hours
  },
  data() {
    return {
      buttonData: [
        {
          label: 'Zeiten',
          href: '/#/training/zeiten'
        },
        {
          label: 'Anfahrt',
          href: '/#/training/anfahrt'
        },
        {
          label: 'Post',
          href: '/#/training/post'
        }
      ]
    }
  }
}
</script>