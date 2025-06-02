import NextAuth from 'next-auth'

import Google from 'next-auth/providers/google'
import Yandex from 'next-auth/providers/yandex'

import type { Provider } from 'next-auth/providers'

import dbConnect from './lib/dbConnect'
import { User } from './models/User'

const providers: Provider[] = [Google, Yandex]

export const providerMap = providers
  .map((provider) => {
    if (typeof provider === 'function') {
      const providerData = provider()
      return { id: providerData.id, name: providerData.name }
    } else return { id: provider.id, name: provider.name }
  })
  .filter((provider) => provider.id !== 'credentials')

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers,
  pages: { signIn: '/auth/login' },
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
