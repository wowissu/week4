<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const show = ref(false);
</script>

<template>
  <main>
    <button @click="show = !show">Toggle</button>
    <Transition name="fade">
      <p v-if="show">
        <RouterLink :to="{ name: 'keepAlive' }">Goto /keepAlive</RouterLink>
      </p>
    </Transition>
  </main>
</template>


<style>
/* we will explain what these classes do next! */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>