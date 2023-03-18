<script setup lang="ts">
interface ICategories {
   id: number
   name: string
   routePath: string
   imagePath: string
   imageAlt: string
}

const categories: Array<ICategories> = [
   {
      id: 1,
      name: 'headphones',
      routePath: '/category/headphones',
      imagePath: '/categories/image-category-thumbnail-headphones.png',
      imageAlt: '',
   },
   {
      id: 2,
      name: 'headphones',
      routePath: '/category/headphones',
      imagePath: '/categories/image-category-thumbnail-speakers.png',
      imageAlt: '',
   },
   {
      id: 3,
      name: 'earphones',
      routePath: '/category/earphones',
      imagePath: '/categories/image-category-thumbnail-earphones.png',
      imageAlt: '',
   },
]
</script>

<template>
   <div class="grid md:grid-cols-3 md:grid-rows-1 gap-x-8 my-40">
      <CategoriesCategoryItem
         v-for="category in categories"
         :key="category.id"
         :image-path="category.imagePath"
         :image-alt="category.imageAlt"
         :title="category.name"
         :route-path="category.routePath"
      />
   </div>
</template>
