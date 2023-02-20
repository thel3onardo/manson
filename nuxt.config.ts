// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@vueuse/nuxt',
        ['@nuxtjs/google-fonts', { families: { Manrope: [400, 700] }}],
        '@nuxtjs/tailwindcss'
    ],
})