import prisma from '../prisma'

export default defineEventHandler(async (event) => {
   const newUser = await prisma.user.create({
      data: {
         email: 'leonardo.com',
         name: 'leo',
      },
   })
   const users = await prisma.user.findMany()

   return {
      status: 200,
      data: users,
   }
})
