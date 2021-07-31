<template>
  <div class="content tradition" id="tradition">
    <div class="item">
      <div class="item-title effects fade-in">Tradition</div>
      <div class="item-divider-container">
        <div class="item-divider effects draw-to-right"></div>
      </div>
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