<script setup lang="ts">
import { navItems, socials, logoPath } from '@/utils'
</script>

<template>
  <nav class="flex justify-between text-white bg-black">
    <h1>audiophile</h1>
    <ul
      class="flex text-white uppercase font-bold text-sm tracking-widest transition"
    >
      <li
        v-for="item in navItems"
        :key="item?.id"
        class="mr-9 hover:text-orange-500"
      >
        <NuxtLink :to="item.href">
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
    <Icon
      name="material-symbols:shopping-cart-outline-rounded"
      size="1.5rem"
    />
  </nav>
</template>
