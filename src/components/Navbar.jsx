import Image from "next/image"
import Link from "next/link"
import { MenuBar, MobileNav } from "./"

const Navbar = () => {
  return (
    <nav className="navbar-style">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.svg"
          alt="Home2Nest"
          width={50}
          height={50}
          className="max-sm:size-10"
        />
      </Link>

      <div className="flex-between gap-5">
        <MenuBar />
        <Link href="/sign-in" className="w-6 h-6">
          <Image src="/icons/user.svg"
            alt="user"
            width={30}
            height={30}
            className="w-full h-full cursor-pointer invert"
          />
        </Link>
        <MobileNav />
      </div>

    </nav>
  )
}
export default Navbar