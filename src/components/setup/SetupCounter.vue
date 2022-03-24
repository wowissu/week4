<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue';

export default defineComponent({
  props: {
    test: String
  },
  setup(props) {
    const count = ref(1);
    const isChanging = ref(false);
    // const count = reactive({ value: 1 });
    const doubleCount = computed(() => count.value * 2);

    function addCount () {
      count.value += 1
    }

    watch(count, () => {
      isChanging.value = true;

      setTimeout(() => {
        isChanging.value = false
      }, 1000);
    })

    return {
      count,
      isChanging,
      doubleCount,
      addCount
    }
  }
})
</script>

<template>
  <main>
    <div class="space-y-4 relative">
      <div class="text-xl font-bold">
        <div class="flex flex-nowrap items-center space-x-4">
          <div>
            (data) Count: {{ count }}
          </div>
          <div class="rounded-full bg-red-400 w-4 h-4" v-show="isChanging">
            <!-- changing dot -->
          </div>
        </div>

      </div>
      <div class="text-xl font-bold">
        (computed) DoubleCount: {{ doubleCount }}
      </div>

      <button class="bg-orange-300 text-neutral-700 py-2 px-4 rounded font-bold text-lg" @click="addCount">(method) Add count </button>
    </div>
  </main>
</template>
