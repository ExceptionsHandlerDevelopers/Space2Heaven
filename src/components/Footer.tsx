const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start">
            {/* Logo */}
            <div className="mb-4 md:mb-0">
              <h1 className="text-2xl font-bold">Home2Nest</h1>
            </div>
  
            {/* Links */}
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <a href="/about" className="hover:underline">About Us</a>
              <a href="/services" className="hover:underline">Services</a>
              <a href="/properties" className="hover:underline">Properties</a>
              <a href="/contact" className="hover:underline">Contact</a>
            </div>
  
            {/* Contact Details */}
            <div className="mt-4 md:mt-0">
              <p className="text-sm">Fake Address: 1234 Main St, City, Country</p>
              <p className="text-sm">Phone: +1 (234) 567-8901</p>
              <p className="text-sm">Email: info@home2nest.com</p>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="mt-8 border-t border-gray-700 pt-4 text-center">
            <p className="text-sm">© {new Date().getFullYear()} Home2Nest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  