<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data: () => {
    return {
      count: 1,
      isChanging: false
    };
  },

  computed: {
    doubleCount() {
      return this.count * 2
    }
  },

  watch: {
    count() {
      this.isChanging = true;

      setTimeout(() => {
        this.isChanging = false
      }, 1000)
    }
  },

  methods: {
    addCount() {
      this.count += 1
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
