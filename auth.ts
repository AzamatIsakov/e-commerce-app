import NextAuth from 'next-auth'
import { authConfig } from './auth.config'

import dbConnect from './lib/dbConnect'
import { User } from './models/User'
import { UserType } from './types/user'

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async signIn({ user, account }) {
      await dbConnect()

      const existingUser = await User.findOne({ email: user.email })

      if (!existingUser)
        await User.create({
          email: user.email,
          name: user.name,
          avatar: user.image,
          provider: account?.provider
        })

      return true
    },

    async jwt({ token, user }) {
      if (user?.email) {
        await dbConnect()
        const dbUser = await User.findOne({
          email: user.email
        }).lean<UserType>()

        if (dbUser)
          token.user = {
            id: dbUser._id.toString(),
            name: dbUser.name,
            email: dbUser.email,
            avatar: dbUser.avatar,
            role: dbUser.role,
            provider: dbUser.provider
            // favorites: dbUser.favorites,
            // cart: dbUser.cart
            // tags: dbUser.tags
          }
      }

      return token
    },

    async session({ session, token }) {
      if (token.user && session.user)
        session.user = token.user as typeof session.user

      return session
    }
  }
})
