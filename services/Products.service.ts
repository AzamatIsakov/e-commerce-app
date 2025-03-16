import { ProductDTO } from './Products.dto'

export const getAllProducts = async (): Promise<ProductDTO> => {
  try {
    const response = await fetch('/api/products')

    const data = await response.json()

    return data
  } catch (e) {
    console.error(e)
    throw e
  }
}
