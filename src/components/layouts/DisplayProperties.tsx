import { Property } from "@/types"
import PropertyCard from "../PropertyCard"


const DisplayProperties = ({ data }: { data: Property[] }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-2 items-center justify-center">
      {data && data.map(({ _id, propertyType, price, images, configuration, features, yearBuilt, area, location, recommend }) => (
        <PropertyCard
          key={_id}
          id={_id}
          imageSrc={images[0]}
          price={price}
          features={features.join(" | ")}
          configuration={configuration}
          tag={propertyType}
          year={yearBuilt}
          area={area}
          location={location}
          recommend={recommend}
        />
      ))}
    </div>
  )
}
export default DisplayProperties