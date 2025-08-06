import Breadcrumb from "../components/Breadcrumb";

import { useParams } from "react-router-dom";
import useFetchdata from "../hooks/useFetchdata";
import { LeftChevronIcon, RightChevronIcon } from "../icons/Icons";
import Loading from "../components/Loading";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/addToCart";

const SingleProduct = () => {
  const { id } = useParams();
  const { data, loading } = useFetchdata(
    `https://dummyjson.com/products/${id}`
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  if (loading) return <Loading />;

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? data?.images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((next) =>
      next === data?.images.length - 1 ? 0 : next + 1
    );
  };

  const dispatch = useDispatch()
  function handleAddtoCart() {
    const newData = {
      title: data.title,
      images: data.images[0],
      description: data.description,
      price: data.price,
      id: data.id,
    };
      dispatch(addToCart(newData));
  }

  return (
    <>
      <div className="px-10">
        <Breadcrumb />
      </div>
      <div className="flex gap-10 p-10 bg-white shadow-md rounded-xl w-full max-w-6xl mx-auto">
        {/* Left: Single Image */}
        <div className="w-1/2 flex relative h-1/2">
          <div
            className="absolute left-5 top-1/2 bg-gray-200 rounded-full p-1 flex justify-center items-center cursor-pointer"
            onClick={prevImage}
          >
            <LeftChevronIcon />
          </div>
          <img
            src={data?.images[currentIndex]}
            alt="Playwood arm chair"
            className="rounded-xl w-full object-cover"
          />
          <div
            className="absolute right-5 top-1/2 flex justify-center items-center bg-gray-200 rounded-full p-1 cursor-pointer"
            onClick={nextImage}
          >
            <RightChevronIcon />
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="w-1/2 space-y-4 text-[#0c1232]">
          <h2 className="text-2xl font-bold"> {data?.title} </h2>

          <div className="text-lg font-semibold">
            $ {data?.price}.00{" "}
            <span className="line-through text-red-500 ml-2"></span>
          </div>

          <p className="text-sm text-gray-500">{data?.description}</p>

          <button
            className="px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
            onClick={handleAddtoCart}
          >
            Add To Cart
          </button>

          <div>
            <p className="text-sm">
              <strong>Categories:</strong> {data?.category.name}
            </p>
            <p className="text-sm">
              <strong>Tags:</strong> Black, Leather
            </p>
          </div>

          {/* <div className="flex gap-3 mt-2">
          <span className="text-sm">Share:</span>
          <span className="w-4 h-4 bg-blue-600 rounded-full"></span>
          <span className="w-4 h-4 bg-pink-500 rounded-full"></span>
          <span className="w-4 h-4 bg-purple-600 rounded-full"></span>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
