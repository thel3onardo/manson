<script setup lang="ts">
defineProps(['quantity'])
</script>

<template>
   <div
      class="flex bg-gray-100 font-manrope font-bold text-sm text-black px-3 py-2"
   >
      <button class="opacity-25 px-2">-</button>
      <span class="mx-3">{{ quantity }}</span>
      <button class="opacity-25 px-2">+</button>
   </div>
</template>
