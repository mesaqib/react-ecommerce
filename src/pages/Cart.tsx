import React from "react";

const Cart = () => {
  return (
    <div className="cart-page-container px-4 py-8 lg:flex gap-8 max-w-7xl mx-auto">
  {/* Cart Table */}
  <div className="w-full lg:w-2/3 overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="text-left text-sm font-semibold border-b">
          <th className="p-4">Product</th>
          <th className="p-4">Price</th>
          <th className="p-4">Quantity</th>
          <th className="p-4">Total</th>
        </tr>
      </thead>
      <tbody>
        {/* Row 1 */}
        <tr className="border-b text-sm">
          <td className="p-4 flex items-center gap-4">
            <img src="https://via.placeholder.com/60" className="w-16 h-16 object-cover rounded" />
            <div>
              <p className="font-medium">Ut diam consequat</p>
              <p className="text-gray-500 text-xs">Color: Brown</p>
              <p className="text-gray-500 text-xs">Size: XL</p>
            </div>
          </td>
          <td className="p-4">$32.00</td>
          <td className="p-4">
            <div className="border border-blue-500 flex">
              <button className="w-10 bg-gray-100 text-gray-500">-</button>
              <div className="w-10 text-center bg-gray-50">1</div>
              <button className="w-10 bg-gray-100 text-gray-500">+</button>
            </div>
          </td>
          <td className="p-4">£219.00</td>
        </tr>

        {/* Duplicate for multiple rows if needed (copy-paste) */}
      </tbody>
    </table>

    <div className="flex gap-4 mt-6">
      <button className="bg-pink-500 text-white px-4 py-2 rounded">Update Cart</button>
      <button className="bg-pink-500 text-white px-4 py-2 rounded">Clear Cart</button>
    </div>
  </div>

  {/* Cart Summary */}
  <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
    <div className="bg-gray-50 p-6 rounded shadow-sm">
      <h2 className="font-semibold text-lg mb-4">Cart Totals</h2>
      <div className="flex justify-between mb-2">
        <span>Subtotal:</span>
        <span>£219.00</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Total:</span>
        <span>£235.00</span>
      </div>
      <p className="text-xs text-green-600 mb-4">✓ Shipping & taxes calculated at checkout</p>
      <button className="w-full bg-green-500 text-white py-2 rounded">Proceed To Checkout</button>
    </div>

    <div className="bg-gray-50 p-6 rounded shadow-sm mt-6">
      <h2 className="font-semibold text-lg mb-4">Calculate Shipping</h2>
      <input type="text" placeholder="Country" className="w-full mb-3 px-3 py-2 border rounded" />
      <input type="text" placeholder="City" className="w-full mb-3 px-3 py-2 border rounded" />
      <input type="text" placeholder="Postal Code" className="w-full mb-3 px-3 py-2 border rounded" />
      <button className="w-full bg-pink-500 text-white py-2 rounded">Calculate Shipping</button>
    </div>
  </div>
</div>

  );
};

export default Cart;
