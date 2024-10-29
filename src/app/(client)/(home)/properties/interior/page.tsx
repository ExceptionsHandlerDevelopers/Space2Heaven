import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { interiorDesign } from "@/constants/sampleData";
import Image from "next/image";

// Flatten images inside the component
const InteriorGallery = () => {
    // Flatten images from the nested structure
    const flattenedImages = interiorDesign.flatMap((obj) => Object.values(obj));

    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full max-w-7xl mx-auto my-20"
        >
            <CarouselContent>
                {flattenedImages.map((img, index) => (
                    <CarouselItem key={index} className="basis-1 md:basis-1/2 lg:basis-1/3 p-2">
                        <div className="relative w-full h-80 sm:h-[30rem] scale-95 hover:scale-100 transition-transform duration-500">
                            <Image
                                src={img}
                                alt={`Interior Design ${index + 1}`}
                                className="rounded-lg object-cover"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2" />
            <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2" />
        </Carousel>
    );
};

export default InteriorGallery;
