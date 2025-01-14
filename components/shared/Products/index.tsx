import { getAllProducts } from '@/services/Products.service'
import { ProductCard } from '../ProductCard'

export const Products = async () => {
  const products = await getAllProducts()

  return (
    <div className="grid grid-cols-5 gap-5">
      {products.map((product) => (
        <ProductCard
          key={product.title}
          photos={product.photos}
          price={product.price}
          title={product.title}
        />
      ))}
    </div>
  )
}

{
  /* <div className='grid grid-cols-5 gap-5'>
    {products.map((product) => (
        <ProductCard
        key={product.title}
        photos={product.photos}
        price={product.price}
        title={product.title}
        />
    ))}
</div> */
}
