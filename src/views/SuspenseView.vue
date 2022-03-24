


<script lang="ts">
import { defineComponent, ref } from 'vue';
import { getUser } from '@/services/user.service';

export default defineComponent({
  async setup() {

    const showData = ref('456');

    const { data } = await getUser();

    console.log(data);

    showData.value = data;

    console.log(showData.value);

    return {
      showData
    }
  }
})
</script>

<template>
  <main class="space-x-6 flex flex-nowrap items-center justify-center w-full">
    <div class="text-white">
      showData: {{ showData }}
    </div>
  </main>
</template>
