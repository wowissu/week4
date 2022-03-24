<script lang="ts">
import { defineComponent } from 'vue';
import BaseCounter from '@/components/setup/BaseCounter.vue';
import SetupCounter from '@/components/setup/SetupCounter.vue';
import {RouterLink} from 'vue-router';

export default defineComponent({
  components: {
    BaseCounter,
    SetupCounter,
    RouterLink
  }
})
</script>

<template>
  <main class="space-x-6 flex flex-nowrap items-center justify-center w-full">
    <div class="space-y-3 border-4 border-red-200 rounded-md p-4">
      <h1 class="text-3xl font-bold underline text-red-200">Base Counter</h1>
      <div>
        <BaseCounter></BaseCounter>
      </div>
    </div>
    <div class="space-y-3 border-4 border-blue-200 rounded-md p-4">
      <h1 class="text-3xl font-bold underline text-blue-200">Base Counter</h1>
      <div>
        <SetupCounter></SetupCounter>
      </div>
    </div>

    <RouterLink :to="{ name: 'transition' }">Go to /Transition</RouterLink>
  </main>
</template>
