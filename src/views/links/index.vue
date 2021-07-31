<template>
  <div class="sub links">
    <heading label="Links" :buttons="buttonData"/>
    <div class="content">
      <div class="item">
        <div class="item-title effects fade-in">Verlinkungen</div>
        <div class="item-divider-container">
          <div class="item-divider effects draw-to-right"></div>
        </div>
        <div class="item-text mt-14 text-center">
          Die hier verwendeten Wappen und Logos sind rechtlich geschützt.
          <br/>Die Verwendung bedarf der Zustimmung des Inhabers.
        </div>
        <link-row class="mt-16"/>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from '@/components/main/Heading';
import LinkRow from "@/views/links/LinkRow";

export default {
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