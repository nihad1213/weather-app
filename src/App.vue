<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-weather-primary">
    <SiteNavigation />
  </div>
</template>

<script>
import SiteNavigation from './components/SiteNavigation.vue';

export default {
  name: 'App',
  components: {
    SiteNavigation
  }
}
</script>
