<template>
  <div class="sub verein">
    <heading label="Verein" :buttons="buttonData"/>
    <about/>
    <club-house/>
    <leadership/>
    <youth/>
    <tradition/>
  </div>
</template>

<script>
import Heading from '@/components/main/Heading';
import About from "@/views/verein/About";
import ClubHouse from "@/views/verein/ClubHouse";
import Leadership from "@/views/verein/Leadership";
import Youth from "@/views/verein/Youth";
import Tradition from "@/views/verein/Tradition";

export default {
  metaInfo: {
    title: "Verein",
    meta: [
      { vmid: 'description', name: 'description', content: 'Einige wissenswerte Informationen zu unserem Verein und dessen Geschichte.' }
    ]
  },
  components: {
    Tradition,
    Youth,
    Leadership,
    Heading,
    About,
    ClubHouse
  },
  data() {
    return {
      buttonData: [
        {
          label: 'Über Uns',
          href: '/#/verein/wir'
        },
        {
          label: 'Heim',
          href: '/#/verein/heim'
        },
        {
          label: 'Leitung',
          href: '/#/verein/leitung'
        },
        {
          label: 'Jugend',
          href: '/#/verein/jugend'
        },
        {
          label: 'Tradition',
          href: '/#/verein/tradition'
        }
      ]
    }
  }
}
</script>