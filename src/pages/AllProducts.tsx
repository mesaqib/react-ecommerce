import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Filter from '../components/Filter'

import useFetchData from '../hooks/useFetchData'
import Loading from '../components/Loading'
import ProductItem from '../components/ProductItem'

const AllProducts = () => {

const {data, loading} = useFetchData("https://dummyjson.com/products")
//  console.log(data);
  return (
     <>
      <div className="allProdcuts px-10">
        <Breadcrumb/>

        <div className='flex gap-10'>
          <div className="filter w-1/6">
           <Filter/>
          </div>
          <div className="products w-full flex flex-wrap gap-5">
            {
              loading ? (<Loading/>) : (
                 data?.products?.map((item) => (
                <ProductItem
                  key={item.id}
                  title={item.title}
                  images={item.images}
                  description={item.description.slice(0, 150) + "..."}
                  price={item.price}
                  id={item.id}
                />
              ))
          )
            }
          </div>
        </div>
         
      </div>
     </>
  )
}

export default AllProducts
