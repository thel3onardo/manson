<script setup lang="ts">
import { navItems, socials } from '@/utils'
</script>

<template>
  <footer class="w-full flex flex-col text-white py-20 font-manrope bg-black1">
    <div class="flex justify-between">
      <h1>audiophile</h1>
      <ul class="flex text-white uppercase font-bold text-sm tracking-widest transition">
        <li v-for="item in navItems" :key="item?.id" class="mr-9 hover:text-orange-500">
          <NuxtLink :to="item.href">
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="flex justify-between items-end my-10 font-medium">
      <p class="max-w-lg opacity-50">
        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week
      </p>
      <div class="flex text-3xl text-white opacity-100">
        <Icon v-for="social in socials" :key="social.iconName" :name="social.iconName" class="mr-4" />
      </div>
    </div>
    <p class="font-bold text-white opacity-50">
      Copyright 2023. All Rights Reserved
    </p>
  </footer>
</template>
