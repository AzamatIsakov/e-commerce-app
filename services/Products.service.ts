import { GetAllProductsParams, ProductDTO } from './Products.dto'
// import { GetAllProductsParams, ProductsApiResponse } from './types' // если вынесешь типы

export const getAllProducts = async (
  params: GetAllProductsParams = {}
): Promise<ProductDTO> => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    const query = new URLSearchParams()

    if (params.category) query.append('category', params.category)
    if (params.tags) params.tags.forEach((tag) => query.append('tag', tag))
    if (params.minPrice !== undefined)
      query.append('minPrice', String(params.minPrice))
    if (params.maxPrice !== undefined)
      query.append('maxPrice', String(params.maxPrice))
    if (params.rating !== undefined)
      query.append('rating', String(params.rating))
    if (params.limit !== undefined) query.append('limit', String(params.limit))

    const response = await fetch(
      `${baseUrl}/api/products?${query.toString()}`,
      {
        next: { revalidate: 1000 * 60 * 10 } // 10 минут
      }
    )

    if (!response.ok) throw new Error(`Ошибка запроса: ${response.statusText}`)

    const json: ProductDTO = await response.json()
    return json
  } catch (e) {
    console.error('Ошибка в getAllProducts:', e)
    throw e
  }
}

//! ==================================================

export const getRecommendedProducts = async (
  limit: number
): Promise<ProductDTO> => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

    const response = await fetch(
      `${baseUrl}/api/products/recommended?limit=${limit}`,
      {
        next: { revalidate: 1000 * 60 * 5 } // кэш 5 минут
      }
    )

    if (!response.ok)
      throw new Error('Ошибка при получении рекомендованных товаров')

    const json = await response.json()
    return json
  } catch (error) {
    console.error('getRecommendedProducts error:', error)
    throw error
  }
}
