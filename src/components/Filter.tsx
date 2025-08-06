import useFetchData from "../hooks/useFetchData";
import Loading from "./Loading";

const Filter = () => {
  const { data, loading } = useFetchData(
    "https://dummyjson.com/products/category-list"
  );

  if (loading) return <Loading />;

 

  return (
    <div className="w-72 p-4 text-sm text-gray-800 space-y-8 font-sans">
      {/* Category */}
      <div>
        <h3 className="font-bold text-lg text-violet-800 mb-2">Category</h3>
        <div className="space-y-1">
          {data?.map((item, index) => (
            <label className="flex items-center gap-2" key={index}>
              <input type="checkbox" className="accent-violet-600" 
               
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Filter by Price (Fixed Ranges) */}
      <div>
        <h3 className="font-bold text-lg text-violet-800 mb-2">
          Filter by Price
        </h3>
        <div className="space-y-1">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-pink-500" />
            <span>Under ₹500</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-pink-500" />
            <span>₹500 - ₹1000</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-pink-500" />
            <span>₹1000 - ₹5000</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-pink-500" />
            <span>Above ₹5000</span>
          </label>
        </div>
      </div>

      {/* Price Range (Slider) */}
      <div>
        <h3 className="font-bold text-lg text-violet-800 mb-2">Price Range</h3>
        <input
          type="range"
          min="100"
          max="10000"
          step="100"
          className="w-full accent-violet-600"
        />
        <div className="text-xs text-gray-500 mt-1 flex justify-between">
          <span>₹100</span>
          <span>₹10,000+</span>
        </div>
      </div>
    </div>
  );
};

export default Filter;
