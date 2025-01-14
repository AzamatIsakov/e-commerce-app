import { Products } from '@/shared'

import axios from 'axios'

export default async function Home() {
  const response = await axios.get(`${process.env.MAIN_URL}/api/products`)

  const products = response.data.products.items

  return (
    <div className="container">
      <h1 className="text-center text-4xl font-semibold my-5">Shad-cn</h1>
      <Products />
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
