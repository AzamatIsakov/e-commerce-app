import Google from 'next-auth/providers/google'
import Yandex from 'next-auth/providers/yandex'

import type { NextAuthConfig } from 'next-auth'

const providers = [Google, Yandex]

export const authConfig: NextAuthConfig = {
  providers,
  pages: {
    signIn: '/auth/login'
  }
}
