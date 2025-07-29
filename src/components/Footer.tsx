
const Footer = () => {
  return (
    <footer className="bg-violet-900 text-white pt-10 pb-6 px-4 md:px-10 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-3">YourLogo</h2>
          <p className="text-sm text-gray-400">
            Building smart, scalable web solutions for tomorrow.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Accessories</li>
          </ul>
        </div>

        {/* Customer Policies */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Policies</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Return Policy</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Shipping Info</li>
          </ul>
        </div>

        {/* Stay in Touch */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay in Touch</h3>
          <p className="text-sm text-gray-400 mb-2">contact@yourdomain.com</p>
          <p className="text-sm text-gray-400 mb-4">+91 12345 67890</p>
          <div className="flex gap-4">
            <span className="w-8 h-8 bg-gray-700 flex items-center justify-center rounded-full">F</span>
            <span className="w-8 h-8 bg-gray-700 flex items-center justify-center rounded-full">I</span>
            <span className="w-8 h-8 bg-gray-700 flex items-center justify-center rounded-full">T</span>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
