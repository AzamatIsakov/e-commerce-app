import axios from 'axios'
import { ProductDTO } from './Products.dto'

export const getAllProducts = async (): Promise<ProductDTO> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_MAIN_URL}/api/products`
    )

    return response.data
  } catch (e) {
    console.error(e)
    throw e
  }
}
