"use client"
import { useEffect, useState } from "react"
import PropertyCaraousel from "./PropertyCaraousel"
import { Property } from "@/types"
import axios from "axios"

const PropertyPane = () => {

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

  return (
    <section className="min-h-[80vh] flex-center flex-col py-8 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="flex-center gap-4 flex-col mb-6 lg:mb-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
          PropertyPane
        </h1>
        <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto text-center">
          Discover your dream property with us. Explore a wide range of real estate options for every taste and budget.
        </p>
      </div>
      <PropertyCaraousel data={data} />
    </section>

  )
}
export default PropertyPane