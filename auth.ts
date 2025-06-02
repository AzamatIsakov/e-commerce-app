// auth.ts
import NextAuth from 'next-auth'
import { authConfig } from './auth.config'

import dbConnect from './lib/dbConnect'
import { User } from './models/User'

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  callbacks: {
    async signIn({ user, account }) {
      await dbConnect()

      const existingUser = await User.findOne({ email: user.email })

      if (!existingUser)
        await User.create({
          email: user.email,
          name: user.name,
          image: user.image,
          provider: account?.provider
        })

      return true
    }
  }
})
