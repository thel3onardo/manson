// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        strict: true
    },
    modules: [
        '@vueuse/nuxt',
        '@nuxtjs/google-fonts',
        '@nuxtjs/tailwindcss',
        'nuxt-icon'
    ],
    googleFonts: { 
        families: { 
            Manrope: [400, 500, 700] 
        }
    }
})