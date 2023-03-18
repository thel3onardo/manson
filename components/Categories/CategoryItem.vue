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
      class="flex flex-col justify-end items-center bg-gray-200 font-manrope shadow rounded-lg relative min-h-[204px] p-7 w-full"
   >
      <div class="h-[160px] absolute top-0 -translate-y-11">
         <img :src="imagePath" :alt="imageAlt" class="h-full" />
      </div>
      <h3 class="font-bold text-lg tracking-widest uppercase mb-4">
         {{ title }}
      </h3>
      <NuxtLink :to="routePath">
         <span
            class="text-black text-sm font-bold tracking-wider opacity-50 mr-3"
            >SHOP</span
         >
         <Icon
            name="material-symbols:arrow-forward-ios"
            class="text-orange-500"
         />
      </NuxtLink>
   </div>
</template>
