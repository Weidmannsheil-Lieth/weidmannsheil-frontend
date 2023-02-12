<template>
  <div class="content leadership pb-1" id="leitung">
    <div class="item">
      <ItemTitle class="effects fade-in">Leitung</ItemTitle>
      <ItemDivider/>
      <div class="pt-14">
        <ItemRow
          v-for="(administrationRow, rowIndex) in administrations"
          :key="rowIndex"
          class="justify-center"
        >
          <ItemCol
            v-for="(administration, index) in administrationRow"
            :key="index"
            size="3"
            class="text-center pb-10 effects fade-in"
            :class="getFadeInDelayClass(index)"
          >
            <div class="px-2">
              <div class="item-image" style="max-width: 300px; margin: 0 auto; width: 95%;">
                <img :src="administration.image" alt=""/>
              </div>
              <ItemTitle size="2" class="pt-5 pb-2 text-center">{{ administration.name }}</ItemTitle>
              <ItemText class="pb-5 whitespace-pre-line">
                {{ administration.roles }}
              </ItemText>
            </div>
          </ItemCol>
        </ItemRow>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      isLoading: false
    }
  },
  computed: {
    ...mapGetters('administration', ['administrations'])
  },
  methods: {
    getFadeInDelayClass(index) {
      switch (index % 4) {
        case 2:
          return 'delay-1';
        case 3:
          return 'delay-2';
        case 4:
          return 'delay-3';
        default:
          return '';
      }
    }
  }
}
</script>