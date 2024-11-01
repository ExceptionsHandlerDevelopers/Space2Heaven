"use client";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import PropertyCard from "../PropertyCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Property } from "@/types";
import { usePathname } from "next/navigation";

interface PropertyCarouselProps {
    data: Property[];
    loading: boolean;
}

const PropertyCarousel = ({ data, loading }: PropertyCarouselProps) => {
    const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
    const pathname = usePathname()

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {data.slice(0, 6).map(({ _id, propertyType, price, images, rooms, features, yearBuilt, area, location }) => (
                    <CarouselItem key={_id} className={`basis-1 md:basis-1/2 lg:basis-1/3 ${pathname === "/" ? "xl:basis-1/4" : null}`}>
                        <PropertyCard
                            id={_id}
                            isLoading={loading}
                            imageSrc={images[0]}
                            price={price}
                            features={features.join(" | ")}
                            rooms={rooms.bedrooms}
                            tag={propertyType}
                            year={yearBuilt}
                            area={area}
                            location={location}
                        />
                    </CarouselItem>
                ))}

                {/* Show "More" link if enabled */}
                {data.length > 6 && (
                    <CarouselItem className="basis-2/3 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                        <div className="flex items-center justify-center h-full w-full text-center rounded-lg overflow-hidden shadow-lg border border-gray-200 scale-95 hover:scale-100 transition duration-500">
                            <Link href="/properties" className="hover:text-red-600 flex items-center gap-2">
                                More
                                <ArrowRightIcon />
                            </Link>
                        </div>
                    </CarouselItem>
                )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};

export default PropertyCarousel;
