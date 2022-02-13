<template>
  <div class="sub links">
    <heading label="Links" :buttons="buttonData"/>
    <div class="content">
      <div class="item">
        <ItemTitle class="effects fade-in">Verlinkungen</ItemTitle>
        <ItemDivider />
        <ItemText class="mt-14 text-center">
          Die hier verwendeten Wappen und Logos sind rechtlich geschützt.
          <br/>Die Verwendung bedarf der Zustimmung des Inhabers.
        </ItemText>
        <link-row class="mt-16"/>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from '@/components/main/Heading';
import LinkRow from "@/views/links/LinkRow";

export default {
  metaInfo: {
    title: "Links",
    meta: [
      { vmid: 'description', name: 'description', content: 'Eine Reihe von Verlinkungen zu unseren Sport-Kollegen.' }
    ]
  },
  components: {
    LinkRow,
    Heading
  },
  data() {
    return {
      buttonData: []
    }
  }
}
</script>