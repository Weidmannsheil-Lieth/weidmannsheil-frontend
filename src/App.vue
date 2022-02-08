<template>
  <div id="app">
    <the-header/>
    <router-view/>
    <the-footer/>
    <cookies/>
  </div>
</template>

<script>
import TheHeader from '@/components/main/TheHeader';
import TheFooter from '@/components/main/TheFooter';
import Cookies from '@/components/main/Cookies';

export default {
  components: {
    TheFooter,
    TheHeader,
    Cookies
  },
  metaInfo: {
    title: 'Schützenbrüderschaft Weidmannsheil',
    titleTemplate: '%s | Schützenbrüderschaft Weidmannsheil',
    meta: [
      { vmid: 'description', name: 'description', content: 'Willkommen auf der offiziellen Seite der Schützenbrüderschaft Weidmannsheil. Seit unser Vereinseintragung 1919 betreiben wir bei uns in Klein Nordende Sportschießen.' }
    ]
  }
};
</script>