import { ProductsSkeleton } from '@/components/shared/Skeleton'
import { Products } from '@/shared'
import { Suspense } from 'react'
// import { GoogleGenerativeAI } from '@google/generative-ai'

const Home = async () => {
  console.log('Main page')

  // Access your API key as an environment variable (see "Set up your API key" above)
  // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '')
  // console.log(process.env.GEMINI_API_KEY)

  // The Gemini 1.5 models are versatile and work with most use cases
  // const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

  // const prompt = 'Расскажи что-нибудь'

  // const result = await model.generateContent(prompt)
  // const response = await result.response
  // const text = response.text()
  // console.log(text)

  return (
    <div className="container">
      <h1 className="my-5 text-center text-4xl font-semibold">
        Интернет магазин
      </h1>
      <div className="my-10">
        <Suspense fallback={<ProductsSkeleton />}>
          <Products />
        </Suspense>
      </div>
    </div>
  )
}

export default Home
