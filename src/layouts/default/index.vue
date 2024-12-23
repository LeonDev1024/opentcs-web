<template>
  <div class="default-layout">
    <!-- Add your layout elements like header, sidebar etc. here -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DefaultLayout'
})
</script>