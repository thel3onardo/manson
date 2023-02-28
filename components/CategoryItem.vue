<script setup lang="ts">
defineProps({
   imagePath: {
      type: String,
      required: true,
   },
   imageAlt: {
      type: String,
      required: true,
   },
   routePath: {
      type: String,
      required: true,
   },
   title: {
      type: String,
      required: true,
   },
})
</script>

<template>
   <div
      class="flex flex-col items-center bg-gray-200 font-manrope shadow rounded-lg"
   >
      <div class="h-[160px]">
         <img :src="imagePath" :alt="imageAlt" class="h-full" />
      </div>
      <h3 class="font-bold text-lg tracking-widest uppercase">
         {{ title }}
      </h3>
      <NuxtLink :to="routePath">
         <span class="text-black text-sm tracking-wider opacity-50 mr-3"
            >SHOP</span
         >
         <Icon
            name="material-symbols:arrow-forward-ios"
            class="text-orange-500"
         />
      </NuxtLink>
   </div>
</template>
