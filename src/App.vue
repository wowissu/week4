<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex items-center justify-center min-h-screen w-screen">
    <Suspense>
      <RouterView />
    </Suspense>
  </div>
</template>

<style>
@import '@/assets/base.css';
</style>
