"use client"
import { useState, useRef, useEffect } from "react"
import axios from "axios"
import { Property } from "@/types"
import Autoplay from "embla-carousel-autoplay"
import PropertyCard from "./PropertyCard"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"

const PropertyCaraousel = () => {

    const [data, setData] = useState<Property[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await axios.get<Property[]>("/api")
                setData(response?.data)
                setLoading(false)
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])


    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {data && data.slice(0, 5).map(({ _id, propertyType, price, images, rooms, features, yearBuilt, area, location }) => (
                    <CarouselItem key={_id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
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

                {/* "More" link as the last item */}
                {data && <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <div className="flex items-center justify-center h-full w-fulltext-center roh-[300px] md:h-[350px] lg:h-[400px] max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg border border-gray-200 scale-95 hover:scale-100 duration-700">
                        <Link href="/properties" className="hover:text-burgundy duration-500 flex-center gap-4">
                            more
                            <ArrowRightIcon />
                        </Link>
                    </div>
                </CarouselItem>}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default PropertyCaraousel;
