<script lang="ts">
import { defineComponent, ref } from 'vue';
import BaseCounter from '@/components/setup/BaseCounter.vue';
import SetupCounter from '@/components/setup/SetupCounter.vue';

export default defineComponent({
  components: {
    BaseCounter,
    SetupCounter
  },
  setup() {
    const tabKey = ref('A');

    function switchTab() {
      tabKey.value = tabKey.value === 'A' ? 'B' : 'A';
    }

    return {
      tabKey,
      switchTab
    }
  }
})
</script>

<template>
  <main class="space-x-6 flex flex-nowrap items-center justify-center w-full">
    <div class="space-y-3 border-4 border-red-200 rounded-md p-4" v-show="tabKey === 'A'">
      <h1 class="text-3xl font-bold underline text-red-200">Base Counter</h1>
      <div>
        <KeepAlive>
          <BaseCounter></BaseCounter>
        </KeepAlive>
      </div>
    </div>
    <div class="space-y-3 border-4 border-blue-200 rounded-md p-4" v-show="tabKey === 'B'">
      <h1 class="text-3xl font-bold underline text-blue-200">Base Counter</h1>
      <div>
        <KeepAlive>
          <SetupCounter></SetupCounter>
        </KeepAlive>
      </div>
    </div>

    <button class="bg-orange-300 text-neutral-700 py-2 px-4 rounded font-bold text-lg" @click="switchTab">Switch</button>
  </main>
</template>
