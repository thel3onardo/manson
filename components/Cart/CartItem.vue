<script setup lang="ts">
defineProps(['imageUrl', 'name', 'price', 'quantity'])
</script>

<template>
   <div class="flex items-center justify-between font-manrope">
      <div class="flex items-center">
         <div class="bg-gray-100 rounded-lg h-16 w-16 p-3">
            <img :src="imageUrl" />
         </div>
         <div class="flex flex-col text-black font-bold ml-4">
            <p>{{ name }}</p>
            <span class="opacity-50 text-sm">{{ price }}</span>
         </div>
      </div>
      <CartItemQuantity :quantity="quantity" />
   </div>
</template>
