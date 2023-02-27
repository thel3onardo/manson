<script setup lang="ts">
const props = defineProps({
   background: {
      type: Boolean,
      required: false,
   },
   outlined: {
      type: Boolean,
      required: false,
   },
   loading: {
      type: Boolean,
      default: false,
   },
})
</script>

<template>
   <button
      class="px-7 py-4 group flex items-center justify-center"
      :class="{
         'bg-transparent border border-black hover:bg-black': outlined,
         'bg-orange-500 hover:opacity-70': background,
      }"
   >
      <span
         class="flex items-center uppercase font-manrope font-bold tracking-wider transition"
         :class="{
            'text-white': background,
            'text-black group-hover:text-white': outlined,
            'text-black opacity-50 group-hover:opacity-100 group-hover:text-orange-500':
               !outlined && !background,
         }"
      >
         <template v-if="loading">
            <Loader />
         </template>
         <template v-else>
            <slot />
         </template>
      </span>
      <Icon
         v-if="!background && !outlined"
         name="material-symbols:arrow-forward-ios-rounded"
         class="text-orange-500 ml-3"
      />
   </button>
</template>
