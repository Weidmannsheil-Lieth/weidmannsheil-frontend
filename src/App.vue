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
  }
};
</script>