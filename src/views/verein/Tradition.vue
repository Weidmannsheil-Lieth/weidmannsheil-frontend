<template>
  <div class="content tradition" id="tradition">
    <div class="item">
      <ItemTitle class="effects fade-in">Tradition</ItemTitle>
      <ItemDivider />
      <rout class="pt-14 effects size-fade-in"/>
      <rout-history class="mt-16 mb-2"/>
    </div>
  </div>
</template>

<script>
import Rout from "@/components/elements/Rout";
import RoutHistory from "@/components/elements/RoutHistory";

export default {
  components: {
    Rout,
    RoutHistory
  }
}
</script>