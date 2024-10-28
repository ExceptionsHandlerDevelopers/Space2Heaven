import Image from "next/image"
import SelectService from "./SelectService"

const HomeBanner = () => {
    return (
        <section className="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden">
            <Image
                src="/images/banner.webp"
                alt="Banner"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
                priority
            />
            {/* Centered Text Overlay */}
            <div className="absolute inset-0 flex-center bg-black bg-opacity-50 flex-col gap-3">
                <div className="text-center px-4">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
                        Welcome to Home Nest
                    </h1>
                    <p className="mt-2 md:mt-4 text-base md:text-lg lg:text-xl text-white">
                        Find your perfect home with ease and trust.
                    </p>
                </div>
                <SelectService />
            </div>
        </section>
    )
}
export default HomeBanner