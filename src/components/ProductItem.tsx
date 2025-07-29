import { CartIcon, HeartIcon, SearchIcon } from "../icons/Icons";
import HeartIconEffect from "./HeartIconEffect";

import useFetchData from "../hooks/useFetchData";
import { Link } from "react-router-dom";

const ProductItem = ({title, images, description, price, id }) => {
  

  function AddToCart(e) {
    e.stopPropagation()
    e.preventDefault()

    const newData = { 
      title,
      images: images[0],
      description,
      price,
      id
    }
    console.log(newData)
  }

  return (
    <>
     <Link to={`/all-products/${id}`}>

   <div className="w-72 rounded-2xl shadow-md bg-violet-100 overflow-hidden">
        {/* Product Image */}
        <div className="relative p-4 pb-0">
          <img
            src={images?.[0]}
            alt={title}
            className="rounded-xl w-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-white m-2 p-1 rounded-full shadow">
            <HeartIconEffect />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between p-4">
          <button className="bg-gray-200 text-gray-600 text-sm px-4 py-1 rounded-full hover:bg-gray-300 flex items-center gap-2" onClick={AddToCart}>
               <CartIcon/>
          </button>
          <div className="border-1 border-violet-700 text-violet-700 text-sm px-4 py-1 rounded-full">
            $ {price}
          </div>
        </div>

        {/* Product Info */}
        <div className="px-4 pb-4">
          <h3 className="text-gray-900 font-medium text-sm">
             {title}
          </h3>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <p>{description}</p>
            <span className="font-bold text-black">{}</span>
          </div>
        </div>
      </div>

     </Link>
     
    </>
  );
};

export default ProductItem;
