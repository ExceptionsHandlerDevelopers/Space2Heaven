import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex-between flex-col md:flex-row">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg"
              alt="Home2Nest"
              width={50}
              height={50}
              className="max-sm:size-10"
            />
            <h1 className="text-2xl font-bold">Home2Nest</h1>
          </Link>

          {/* Links */}
          <div className="flex flex-col items-center lg:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <Link href="/about" className="hover:underline">About Us</a>
            <Link href="#services" className="hover:underline">Services</Link>
            <Link href="/properties" className="hover:underline">Properties</Link>
            <Link href="/about" className="hover:underline">Contact</Link>
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
