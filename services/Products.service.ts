import { ProductDTO } from './Products.dto'

export const getAllProducts = async (): Promise<ProductDTO> => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

    const response = await fetch(`${baseUrl}/api/products`, {
      next: { revalidate: 1000 * 60 * 10 }
    })

    const data = await response.json()

    return data
  } catch (e) {
    console.error(e)
    throw e
  }
}
