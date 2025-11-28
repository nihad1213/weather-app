<template>
  <div class="flex-1 text-white p-6">

    <h1 class="text-2xl text-center mb-6 font-bold">Famous Cities of Azerbaijan</h1>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
      <button
        v-for="city in cities"
        :key="city.name"
        @click="getWeather(city)"
        class="bg-black/30 hover:bg-black/50 transition p-3 rounded text-center"
      >
        {{ city.name }}
      </button>
    </div>

    <div
      v-if="weather"
      class="max-w-md mx-auto bg-black/40 p-6 rounded-lg shadow-lg text-center"
    >
      <h2 class="text-xl font-bold mb-3">{{ selectedCity }}</h2>

      <p>🌡 Temperature: {{ weather.temperature }}°C</p>
      <p>💨 Wind Speed: {{ weather.wind }} km/h</p>
      <p>🧭 Direction: {{ weather.direction }}°</p>
    </div>

    <div v-if="loading" class="text-center">Loading...</div>
    <div v-if="error" class="text-center text-red-500">{{ error }}</div>

  </div>
</template>

<script>
export default {
  name: 'HomeView',

  data() {
    return {
      selectedCity: '',
      weather: null,
      loading: false,
      error: null,

      cities: [
        { name: 'Baku', lat: 40.4093, lon: 49.8671 },
        { name: 'Ganja', lat: 40.6828, lon: 46.3606 },
        { name: 'Sumgayit', lat: 40.5897, lon: 49.6686 },
        { name: 'Mingachevir', lat: 40.7639, lon: 47.0595 },
        { name: 'Lankaran', lat: 38.754, lon: 48.851 },
        { name: 'Shaki', lat: 41.1919, lon: 47.1706 },
        { name: 'Shamakhi', lat: 40.6314, lon: 48.6414 },
        { name: 'Quba', lat: 41.3611, lon: 48.5147 },
        { name: 'Gabala', lat: 40.9814, lon: 47.845 },
        { name: 'Zagatala', lat: 41.6314, lon: 46.643 },
        { name: 'Nakhchivan', lat: 39.2089, lon: 45.4122 },
        { name: 'Barda', lat: 40.3758, lon: 47.1262 }
      ]
    }
  },

  methods: {
    getWeather(city) {
      this.loading = true
      this.weather = null
      this.error = null
      this.selectedCity = city.name

      const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true`

      fetch(url)
        .then(res => res.json())
        .then(data => {
          this.weather = {
            temperature: data.current_weather.temperature,
            wind: data.current_weather.windspeed,
            direction: data.current_weather.winddirection
          }
        })
        .catch(() => {
          this.error = 'Weather data not available'
        })
        .finally(() => this.loading = false)
    }
  }
}
</script>
