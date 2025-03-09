import React from 'react'

const SingleProductPage = async ({
  params
}: {
  params: Promise<{ id: string }>
}) => {
  const productId = await params

  return <div>Product ID: {productId.id} </div>
}

export default SingleProductPage
