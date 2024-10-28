"use client"

import { Loader, PropertyCard } from "@/components"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Property } from "@/types"
import axios from "axios"
import { useEffect, useState } from "react"

const Properties = () => {

    const filterType = ["All", "Villa", "House", "Flat"]
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

    console.log("Data : ", data);

    if (loading) return <Loader />;

    return (
        <section className="h-screen w-full flex-center">
            <div className="flex-beteen w-full">
                <RadioGroup defaultValue={filterType[0]}>
                    {filterType.map((item, index) => (
                        <div className="flex items-center space-x-2" key={index}>
                            <RadioGroupItem value={item} id={`option-${index}`} />
                            <Label htmlFor={`option-${index}`}>{item}</Label>
                        </div>
                    ))}
                </RadioGroup>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 gap-2 items-center justify-center">
                {data && data.map(({ _id, propertyType, price, images, rooms, features, yearBuilt, area, location }) => (
                    <PropertyCard key={_id}
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
                ))}
            </div>
        </section>
    )
}
export default Properties