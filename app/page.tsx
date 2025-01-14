import { ProductsSkeleton } from '@/components/shared/Skeleton'
import { Products } from '@/shared'
import { Suspense } from 'react'

// import axios from 'axios'

const Home = async () => {
  // const response = await axios.get(`${process.env.MAIN_URL}/api/products`)

  // const products = response.data.products.items
  console.log('Main page')

  return (
    <div className="container">
      <h1 className="my-5 text-center text-4xl font-semibold">Shad-cn</h1>
      <Suspense fallback={<ProductsSkeleton />}>
        <Products />
      </Suspense>
    </div>
  )
}

{
  /* <div className="list-item__thumbnail">
  <div className="list-item__thumbnail__container">
    <div className="list-item__thumbnail__brazzers">
      <div className="brazzers">
        <div className="brazzers__page">
          <div className="brazzers__image-wrapper">
            <div>
              <img className="brazzers__image" src="//placehold.it/320x240?text=sample+text">
            </div>
          </div>
          <div className=" brazzers__button"></div>
        </div>
        <div className="brazzers__page ">
          <div className="brazzers__image-wrapper ">
            <div>
              <img className="brazzers__image " src="//via.placeholder.com/320x240/ff00ff/f0f0f0">
            </div>
          </div>
          <div className="brazzers__button"></div>
        </div>

        <div className="brazzers__page ">
          <div className="brazzers__image-wrapper ">
            <div>
              <img className="brazzers__image " src="//via.placeholder.com/320x240/000000/f0f0f0">
            </div>
          </div>
          <div className="brazzers__button"></div>
        </div>
      </div>
    </div>
  </div>
</div> */
}

export default Home
