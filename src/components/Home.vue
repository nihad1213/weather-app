<template>
  <div class="flex-1 text-white flex items-center justify-center">
    <div class="bg-black/30 p-8 rounded-lg shadow-lg text-center w-80">
      
      <h1 class="text-2xl font-bold mb-4">Baku Weather</h1>

      <div v-if="loading">Loading weather...</div>

      <div v-else-if="error" class="text-red-400">
        {{ error }}
      </div>

      <div v-else>
        <p class="text-lg">🌡 Temperature: {{ weather.temperature }}°C</p>
        <p class="text-lg">💨 Wind: {{ weather.wind }} km/h</p>
        <p class="text-lg">🧭 Direction: {{ weather.direction }}°</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',

  data() {
    return {
      weather: null,
      loading: true,
      error: null
    }
  },

  mounted() {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=40.4093&longitude=49.8671&current_weather=true')
      .then(res => res.json())
      .then(data => {
        this.weather = {
          temperature: data.current_weather.temperature,
          wind: data.current_weather.windspeed,
          direction: data.current_weather.winddirection
        }
        this.loading = false
      })
      .catch(() => {
        this.error = 'Failed to load weather data'
        this.loading = false
      })
  }
}
</script>
