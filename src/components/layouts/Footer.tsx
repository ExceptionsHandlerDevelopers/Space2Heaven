import Image from "next/image";
import Link from "next/link";
import { Globe, PhoneCall, Mail } from "lucide-react"

const Footer = () => {
  return (
    <section className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between flex-col md:flex-row">
          {/* Logo */}
          <Link href="/" className="flex-center gap-2">
            <Image src="/logo.svg"
              alt="Space2Heaven"
              width={50}
              height={50}
              className="max-sm:size-10"
            />
            <h1 className="text-2xl font-bold">Space2Heaven</h1>
          </Link>

          {/* Links */}
          <div className="flex flex-col items-center lg:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <Link href="/about" className="hover:underline">About Us</Link>
            <Link href="/" className="hover:underline">Services</Link>
            <Link href="/properties" className="hover:underline">Properties</Link>
            <Link href="/about" className="hover:underline">Contact</Link>
          </div>

          {/* Contact Details */}
          <div className="mt-4 md:mt-0 flex flex-col md:items-end gap-4 md:gap-2 text-center md:text-right">
            <div>
              <h1 className="text-xl md:text-2xl font-semibold">Shah Nawaz Qureshi</h1>
              <b className="text-xs md:text-sm text-gray-400">Founder & CEO</b>
            </div>

            <div className="flex flex-col items-center md:flex-row md:justify-end gap-2 md:gap-3">
              <p className="text-xs md:text-sm text-gray-500 font-semibold md:text-wrap md:text-right leading-tight">
                4th Floor, Zenia Building,<br />
                Hiranandani Business Park, Thane
              </p>
              <Globe size={20} className="hidden md:inline-block" />
            </div>

            <div className="flex flex-col items-center md:flex-row md:items-center justify-end gap-2 md:gap-3">
              <div className="flex flex-col text-xs md:text-sm">
                <p>+91 897 651 1551</p>
                <p>+91 828 698 4597</p>
              </div>
              <PhoneCall size={20} className="hidden md:inline-block" />
            </div>

            <div className="flex flex-col items-center md:flex-row md:justify-end gap-2 md:gap-3">
              <p className="text-xs md:text-sm">Hello@space2heaven.com</p>
              <Mail size={20} className="hidden md:inline-block" />
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Space2Heaven. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
