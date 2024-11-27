import Link from 'next/link';
import Image from 'next/image';
import { PropertyCardProps } from '@/types';

const PropertyCard = ({ id, imageSrc, price, features, configuration, tag, year, area, location, recommend }: PropertyCardProps) => {

    return (
        <Link href={`/properties?id=${id}`} className="property-card-styles">

            {/* Tag on top of the image */}
            {recommend && (
                <div className="property-card-tag">
                    Recommended
                </div>
            )}

            {/* Image */}
            <div className="w-full h-full relative">
                <Image
                    src={imageSrc || "/images/default-property.webp"}
                    alt={tag}
                    layout="fill"
                    objectFit="cover"
                    className='hover:scale-110 duration-500'
                />
            </div>

            {/* Card Content */}
            <div className="property-card-content">
            <div className="property-card-tag">
                    {tag}
                </div>
                <h2 className="text-lg font-bold">
                    {`${price} | ${configuration} | Built in ${year}`}
                </h2>
                <p className="text-sand-soft/80 mt-1">{`Area: ${area} | ${location}`}</p>
                <p className="text-sand-soft/80 mt-1">{features}</p>
            </div>
        </Link>
    );
};


export default PropertyCard