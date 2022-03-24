<script setup lang="ts">
</script>

<template>
  <main class="space-x-6 flex flex-nowrap items-center justify-center w-full">
    <Teleport to="body">
      <div class="fixed w-screen h-screen top-0 left-0 bg-gray-600 flex items-center justify-center">
        <div class="bg-white p-4 rounded">
          my modal
        </div>
      </div>
    </Teleport>
    <!-- <button class="bg-orange-300 text-neutral-700 py-2 px-4 rounded font-bold text-lg" @click="switchTab">Switch</button> -->
  </main>
</template>
