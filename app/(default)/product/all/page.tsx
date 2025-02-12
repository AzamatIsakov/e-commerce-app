import { getJsonProducts } from '@/services/JsonProducts.service'

const AllProductsPage = async () => {
  const products = await getJsonProducts()

  return (
    <div>
      <div className="container">
        <h1 className="my-8 text-center text-4xl font-semibold">
          Добавление продукта
        </h1>
        <div className="grid grid-cols-2 gap-5 xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col gap-5 rounded-2xl border p-5"
            >
              <h3 className="font-medium">{product.title}</h3>
              <span className="mt-auto">{product.price} UZS</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllProductsPage
