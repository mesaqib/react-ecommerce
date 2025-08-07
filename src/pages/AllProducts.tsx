import { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import Filter from "../components/Filter";

import useFetchData from "../hooks/useFetchData";
import Loading from "../components/Loading";
import ProductItem from "../components/ProductItem";
import { useSelector } from "react-redux";
const AllProducts = () => {
  const { data, loading } = useFetchData("https://dummyjson.com/products");
  const selectedCategory = useSelector((state) => state.filtering.items);

  if (loading) return <Loading />;

  return (
    <>
      <div className="allProdcuts px-10">
        <Breadcrumb />

        <div className="flex gap-10">
          <div className="filter w-1/6">
            <Filter />
          </div>
          <div className="products w-full flex flex-wrap gap-5">
            {(() => {
              const filtered =
                selectedCategory.length > 0
                  ? data?.products.filter((prod) =>
                      selectedCategory.includes(prod.category)
                    )
                  : data?.products;

              if (!filtered || filtered.length === 0) {
                return <p className="text-gray-500">No products found.</p>;
              }

              return filtered.map((item) => (
                <ProductItem
                  key={item.id}
                  title={item.title}
                  images={item.images}
                  description={item.description.slice(0, 150) + "..."}
                  price={item.price}
                  id={item.id}
                />
              ));
            })()}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
