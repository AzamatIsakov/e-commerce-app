import { CreateProductReqDTO, GetProductResDTO } from './JsonProducts.dto'

export const getJsonProducts = async (): Promise<GetProductResDTO> => {
  console.log('[GET]: Все продукты из JSON')

  const URL = process.env.NEXT_PUBLIC_MAIN_URL

  try {
    const response = await fetch(`${URL}:4000/products`, {
      next: {
        revalidate: 300
      }
    })
    const data = await response.json()

    return data
  } catch (e) {
    throw e
  }
}

export const createProduct = async (data: CreateProductReqDTO) => {
  const { price, title } = data

  const reqBody = { price, title }

  const response = await fetch('http://localhost:4000/products', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(reqBody)
  })

  if (response.status === 201)
    return { status: 'success', message: 'Продукт успешно добавлен!' }
}
