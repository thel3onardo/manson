import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif']
      },
      colors: {
        orange: {
            500: '#D87D4A',
            200: '#FBAF85'
        }
      }
    }
  }
}
