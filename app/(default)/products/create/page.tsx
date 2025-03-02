'use client'

import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/hooks/use-toast'
import { createProduct } from '@/services/JsonProducts.service'
import { FormEvent, useState } from 'react'

const CreateProductPage = () => {
  const { toast } = useToast()

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')

  const isSubmitBtnDisabled = () => !(title.length > 3 && price.length > 0)

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault()

    const reqBody = {
      title,
      price: Number(price)
    }

    const response = await createProduct(reqBody)

    if (response?.status === 'success')
      toast({
        title: response.message
      })
  }

  return (
    <div>
      <Toaster />
      <div className="container">
        <h1 className="my-8 text-center text-4xl font-semibold">
          Добавление продукта
        </h1>
        <form
          onSubmit={submitHandler}
          className="mx-auto mt-5 flex w-1/3 flex-col gap-5"
        >
          <div>
            <label className="relative">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="peer w-full rounded-lg border px-3 py-2 focus:outline-blue-500"
                type="text"
              />
              <span
                className={`absolute left-3 z-10 -translate-y-1/2 cursor-text select-none bg-white px-1 leading-none text-gray-600 transition-all peer-focus:-top-[60%] peer-focus:text-sm peer-focus:text-blue-500 ${title ? '-top-[60%] text-sm' : 'top-1/2'}`}
              >
                Введите название
              </span>
            </label>
          </div>

          <div>
            <label className="relative">
              <input
                min={0}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="peer w-full rounded-lg border px-3 py-2 focus:outline-blue-500"
                type="number"
              />
              <span
                className={`absolute left-3 z-10 -translate-y-1/2 cursor-text select-none bg-white px-1 leading-none text-gray-600 transition-all peer-focus:-top-[60%] peer-focus:text-sm peer-focus:text-blue-500 ${price ? '-top-[60%] text-sm' : 'top-1/2'}`}
              >
                Введите цену
              </span>
            </label>
          </div>
          <Button className="transition-all" disabled={isSubmitBtnDisabled()}>
            Добавить
          </Button>
        </form>
      </div>
    </div>
  )
}

export default CreateProductPage
