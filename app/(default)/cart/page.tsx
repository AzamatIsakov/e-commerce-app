import { auth } from '@/auth'
import { redirect } from 'next/navigation'

const CartPage = async () => {
  const session = await auth()

  if (!session) redirect('/auth/login?callbackUrl=/cart')

  return (
    <main>
      <div className="container">
        <h1 className="my-5 text-4xl font-semibold">Корзина</h1>
      </div>
    </main>
  )
}

export default CartPage
