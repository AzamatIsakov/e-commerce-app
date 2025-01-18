import React from 'react'

const OneCategoryPage = ({ params }: { params: { category: string } }) => {
  console.log('Category page', params.category)
  return (
    <main>
      <div className="container">
        <h1 className="my-5 text-4xl font-semibold">
          Категория: {params.category}
        </h1>
      </div>
    </main>
  )
}

export default OneCategoryPage
