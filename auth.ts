import NextAuth from 'next-auth'

import Google from 'next-auth/providers/google'
import Yandex from 'next-auth/providers/yandex'

import Credentials from 'next-auth/providers/credentials'

import type { Provider } from 'next-auth/providers'

// import bcrypt from 'bcryptjs'

// import dbConnect from './lib/dbConnect'
// import { User } from './models/User'

const providers: Provider[] = [
  Credentials({
    credentials: { password: {}, email: {} },
    async authorize(credentials) {
      if (!credentials?.email || !credentials?.password) {
        console.error('Missing credentials')
        return null
      }

      // await dbConnect()

      // const user = await User.findOne({ email: credentials.email })

      // if (!user || user.provider !== 'credentials' || !user.passwordHash) {
      //   console.error('User not found or missing passwordHash')
      //   return null
      // }

      // const isPasswordCorrect = await bcrypt.compare(
      //   credentials.password as string,
      //   user.passwordHash
      // )

      // if (!isPasswordCorrect) {
      //   console.error('Wrong password')
      //   return null
      // }

      return {
        email: 'abc@gmail.com'
        // id: user._id.toString(),
        // email: user.email,
        // role: user.role,
        // avatar: user.avatar
      }
    }
  }),
  Google,
  Yandex
]

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
  pages: { signIn: '/auth/login' }
})
