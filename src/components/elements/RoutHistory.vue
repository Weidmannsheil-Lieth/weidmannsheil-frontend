<template>
  <div class="rout-history" v-if="routHistories">
    <div
      @click="switchPage(true)"
      class="button button-up"
      :class="canGoUp ? '' : 'disabled'"
    >
      <div/>
    </div>
    <div class="rout-history-container">
      <div class="rout-timeline">
        <div class="entries">
          <div
            class="entry"
            v-for="(displayRoutHistory, index) in displayRoutHistories"
            :key="index"
          >
            <div class="entry-year">
              {{ displayRoutHistory.year }}
            </div>
            <div class="entry-content">
              <div class="names-container">
                <div v-if="displayRoutHistory.king">
                  <div class="fa-icon-container">
                    <font-awesome-icon icon="chess-king" class="icon"/>
                    <div class="tooltip">
                      König/in
                    </div>
                  </div>
                  <div class="fa-icon-append-text">
                    {{ displayRoutHistory.king }}
                  </div>
                </div>
                <div v-if="displayRoutHistory.youthKing">
                  <div class="fa-icon-container">
                    <font-awesome-icon icon="chess-queen" class="icon"/>
                    <div class="tooltip">
                      Jugendkönig/in
                    </div>
                  </div>
                  <div class="fa-icon-append-text">
                    {{ displayRoutHistory.youthKing }}
                  </div>
                </div>
              </div>
              <div class="names-container">
                <div v-if="displayRoutHistory.citizenKing">
                  <div class="fa-icon-container">
                    <font-awesome-icon icon="chess-knight" class="icon"/>
                    <div class="tooltip">
                      Bürgerkönig/in
                    </div>
                  </div>
                  <div class="fa-icon-append-text">
                    {{ displayRoutHistory.citizenKing }}
                  </div>
                </div>
                <div v-if="displayRoutHistory.citizenYouthKing">
                  <div class="fa-icon-container">
                    <font-awesome-icon icon="chess-pawn" class="icon"/>
                    <div class="tooltip">
                      Jugendbürgerkönig/in
                    </div>
                  </div>
                  <div class="fa-icon-append-text">
                    {{ displayRoutHistory.citizenYouthKing }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      @click="switchPage(false)"
      class="button button-down"
      :class="canGoDown ? '' : 'disabled'"
    >
      <div/>
    </div>
  </div>
  <div v-else>
    <loader/>
  </div>
</template>

<script>
import Loader from "@/components/loaders/Loader";
import {mapActions, mapGetters} from "vuex";

export default {
  components: {Loader},
  data() {
    return {
      pageIsAt: 0
    }
  },
  created() {
    if (this.routHistories.length === 0) {
      this.getRoutHistories();
    }
  },
  computed: {
    ...mapGetters('rout', ['routHistories']),
    displayRoutHistories() {
      if (this.routHistories.length === 0) {
        return [];
      }

      let returnArray = [this.routHistories[this.pageIsAt * 2]];
      if (this.routHistories.length > this.pageIsAt * 2 + 1) {
        returnArray.push(this.routHistories[this.pageIsAt * 2 + 1])
      }
      return returnArray;
    },
    canGoUp() {
      return this.pageIsAt > 0;
    },
    canGoDown() {
      return this.routHistories
        && this.pageIsAt < Math.ceil((this.routHistories.length) / 2) - 1;
    }
  },
  methods: {
    ...mapActions('rout', ['getRoutHistories']),
    switchPage(direction) {
      if (direction && this.canGoUp) {
        this.pageIsAt--;
      } else if (!direction && this.canGoDown) {
        this.pageIsAt++;
      }
    }
  }
}
</script>