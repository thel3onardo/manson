<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

const cartVisible = ref(false)
const cartEl = ref(null)

function toggleCartVisibility(): void {
   cartVisible.value = !cartVisible.value
}

onClickOutside(cartEl, () => (cartVisible.value ? toggleCartVisibility() : ''))
</script>

<template>
   <nav class="text-white bg-black">
      <ContentWrapper
         class="flex justify-between py-9 border-b border-white/20"
      >
         <div>
            <img :src="logoPath" />
         </div>
         <ul class="flex">
            <li v-for="item in navItems" :key="item?.id" class="mr-9">
               <NuxtLink
                  :to="item.href"
                  class="font-manrope text-white hover:text-orange-500 uppercase font-semibold text-sm tracking-widest transition"
               >
                  {{ item.label }}
               </NuxtLink>
            </li>
         </ul>
         <div class="relative" ref="cartEl">
            <Icon
               name="clarity:shopping-cart-line"
               size="1.5rem"
               @click="toggleCartVisibility"
               class="cursor-pointer hover:text-orange-500"
            />
            <Cart v-if="cartVisible" />
         </div>
      </ContentWrapper>
   </nav>
</template>
