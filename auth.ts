import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import Yandex from 'next-auth/providers/yandex'
import Credentials from 'next-auth/providers/credentials'
import type { Provider } from 'next-auth/providers'

const providers: Provider[] = [
  Credentials({
    credentials: { password: {}, email: {} },
    authorize(credentials) {
      if (credentials.email !== 'admin' && credentials.password !== 'admin')
        return null
      return { name: 'admin' }
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
  pages: {
    signIn: '/auth/login'
  }
})
