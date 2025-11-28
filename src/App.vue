<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-weather-primary">
    <SiteNavigation />
    <RouterView />
  </div>
</template>

<script>
import SiteNavigation from './components/SiteNavigation.vue';
import { RouterView } from 'vue-router';

export default {
  name: 'App',
  components: {
    SiteNavigation,
    RouterView
  }
}
</script>
