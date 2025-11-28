<template>
    <header class="sticky top-0 bg-weather-primary shadow-lg">
        <nav class="container flex items-center justify-center text-white py-6">            
            <RouterLink :to="{name: 'home'}">
                <div class="flex items-center gap-3 flex-1">
                    <p class="text-center text-2xl">The Local Weather</p>
                </div>
            </RouterLink>
        </nav>
    </header>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  components: {
    RouterLink
  }
}
</script>
