<script setup lang="ts">
const itensCount = 2
const total = '$5,300'
const cartItems = [
   {
      id: 1,
      imageUrl:
         'https://play-lh.googleusercontent.com/o9hGoSPG5NwzZ5_oXqgx82vh7gIzlWdsLBRKW5ShZxznkBGsmqKjkzUUj07FQ_KhBQ',
      name: 'XX99 MK II',
      price: '$ 2,999',
      quantity: 1,
   },
   {
      id: 2,
      imageUrl:
         'https://play-lh.googleusercontent.com/o9hGoSPG5NwzZ5_oXqgx82vh7gIzlWdsLBRKW5ShZxznkBGsmqKjkzUUj07FQ_KhBQ',
      name: 'XX99 MK II',
      price: '$ 2,999',
      quantity: 1,
   },
   {
      id: 3,
      imageUrl:
         'https://play-lh.googleusercontent.com/o9hGoSPG5NwzZ5_oXqgx82vh7gIzlWdsLBRKW5ShZxznkBGsmqKjkzUUj07FQ_KhBQ',
      name: 'XX99 MK II',
      price: '$ 2,999',
      quantity: 1,
   },
   {
      id: 4,
      imageUrl:
         'https://play-lh.googleusercontent.com/o9hGoSPG5NwzZ5_oXqgx82vh7gIzlWdsLBRKW5ShZxznkBGsmqKjkzUUj07FQ_KhBQ',
      name: 'XX99 MK II',
      price: '$ 2,999',
      quantity: 1,
   },
]
</script>

<template>
   <div
      class="bg-white font-manrope flex flex-col p-8 min-w-[377px] rounded-xl shadow-xl absolute top-24 right-0"
   >
      <div class="flex justify-between text-black mb-6">
         <h2 class="text-lg font-bold">CART ({{ itensCount }})</h2>
         <div>
            <span class="underline underline-offset-1 opacity-50"
               >Remove all</span
            >
         </div>
      </div>
      <div class="flex flex-col mb-2">
         <CartItem
            v-for="(item, index) in cartItems"
            :key="item?.id"
            :image-url="item.imageUrl"
            :name="item.name"
            :price="item.price"
            :quantity="item.quantity"
            :class="{ 'mt-6': index !== 0 }"
         />
      </div>
      <div class="flex justify-between text-black my-6">
         <h4 class="opacity-50 font-medium">TOTAL</h4>
         <span class="text-lg font-bold">{{ total }}</span>
      </div>
      <Button background>checkout</Button>
   </div>
</template>
