import React from "react";
import Banner from "../components/Banner";
import ProductItem from "../components/ProductItem";

import useFetchData from "../hooks/useFetchData";
import Loading from "../components/Loading";

const Home = () => {
  const { data: categories, loading: loadingCategories } = useFetchData(
    'https://dummyjson.com/products/category-list'
  );

  const { data: products, loading: loadingProducts } = useFetchData(
    'https://dummyjson.com/products'
  );
  // console.log(categories);

  return (
    <>
      <Banner />

      <div className="featured_products md:px-20 px-0 mt-20">
        <h1 className="text-center text-3xl mb-20">Featured Products</h1>
        <div className="productItem flex gap-10 justify-center w-full flex-wrap">
          {loadingProducts ? (
            <Loading />
          ) : (
            products?.products
              ?.slice(0, 3)
              .map((item) => (
                <ProductItem
                  key={item.id}
                  title={item.title}
                  images={item.images}
                  description={item.description.slice(0, 150) + "..."}
                  price={item.price}
                  id={item.id}
                />
              ))
          )}
        </div>
      </div>

    
    </>
  );
};

export default Home;
