import { Property } from "@/types"
import PropertyCard from "../PropertyCard"


const DisplayProperties = ({ data }: { data: Property[] }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-center justify-center">
      {data && data.map(({ _id, propertyType, price, images, rooms, features, yearBuilt, area, location }) => (
        <PropertyCard
          key={_id}
          id={_id}
          imageSrc={images[0]}
          price={price}
          features={features.join(" | ")}
          rooms={rooms.bedrooms}
          tag={propertyType}
          year={yearBuilt}
          area={area}
          location={location}
        />
      ))}
    </div>
  )
}
export default DisplayProperties