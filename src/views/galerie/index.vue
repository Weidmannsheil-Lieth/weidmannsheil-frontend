<template>
  <div class="sub galerie">
    <heading label="Galerie" :buttons="buttonData"/>
    <div class="content">

      <div id="anzeige">
        <gallery-viewer v-if="!isLoading && album" :album="album"/>
        <ItemText v-if="!isLoading && !album" class="loader-spacer text-center">
          Momentan sind keine Einträge vorhanden.
        </ItemText>
      </div>

      <div id="alben">
        <loader v-if="isLoading" class="loader-spacer"/>
        <div v-else>
          <div
            class="item"
            v-for="(entry, entryIndex) in galleryData"
            :key="entryIndex"
          >
            <ItemTitle>{{ entry.year }}</ItemTitle>
            <ItemDivider />
            <div class="item-links">
              <div
                class="item-link-container"
                v-for="(album, albumIndex) in entry.albums"
                :key="albumIndex"
              >
                <a
                  class="item-link"
                  @click="switchAlbum(album)"
                >
                  {{ album.name }}
                </a>
              </div>
            </div>
            <hr/>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Heading from '@/components/main/Heading';
import GalleryViewer from '@/components/elements/GalleryViewer';
import Loader from '@/components/loaders/Loader';
import {mapActions, mapGetters} from "vuex";

export default {
  metaInfo: {
    title: "Galerie",
    meta: [
      { vmid: 'description', name: 'description', content: 'Einige Bilder aus der Schützenbrüderschaft.' }
    ]
  },
  components: {
    Heading,
    GalleryViewer,
    Loader
  },
  data() {
    return {
      buttonData: [],
      isLoading: false,
      album: null
    }
  },
  computed: {
    ...mapGetters('gallery', ['galleryData'])
  },
  created() {
    if (this.galleryData.length === 0) {
      this.isLoading = true;
      this.getGalleryData()
        .then(() => {
          this.isLoading = false;
          this.setInitialAlbum();
        })
    } else {
      this.setInitialAlbum();
    }
  },
  methods: {
    ...mapActions('gallery', ['getGalleryData']),
    switchAlbum(album) {
      window.scrollTo(0, 410);
      this.album = album;
    },
    setInitialAlbum() {
      if (this.galleryData.length > 0) {
        this.album = this.galleryData[0].albums[0]
      }
    }
  }
}
</script>