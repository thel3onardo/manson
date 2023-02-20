<script setup>
import { useMouseInElement } from '@vueuse/core'

const target = ref(null)
const { x, y, isOutside } = useMouseInElement(target)

onMounted(() => {
    console.log(x, y, isOutside)
})

watch(x, (val) => {
    console.log(val)
})
</script>

<template>
    <p ref="target" class="text-blue-500 font-manrope text-4xl font-bold uppercase">Hello</p>
</template>