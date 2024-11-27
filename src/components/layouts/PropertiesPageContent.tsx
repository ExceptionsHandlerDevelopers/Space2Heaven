"use client";

import {
  DisplayProperties,
  LoaderLayout,
  PropertyById,
} from "@/components";
import { FilterObject, Property } from "@/types";
import axios from "axios";
import { useEffect, useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import InfiniteScroll from "react-infinite-scroll-component";

const PropertiesPageContent = ({ search, filters }: { search: string, filters: FilterObject }) => {
  const [data, setData] = useState<Property[]>([]); // Cached fetched data
  const [displayedData, setDisplayedData] = useState<Property[]>([]); // Data to display
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [page, setPage] = useState(1);
  const [searchResults, setSearchResults] = useState<Property[]>([]);

  const itemsPerPage = 4;
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  // Fetch data and cache it
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Property[]>("/api/");
        if (response && Array.isArray(response.data)) {
          setData(response.data); // Cache the data
        } else {
          throw new Error("Unexpected response structure");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load properties. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter data based on filters
  const filteredData = useMemo(() => {
    return data.filter((property) => {
      const matchesCity =
        filters.city === "" || property.address.city === filters.city;
      const matchesState =
        filters.state === "" || property.address.state === filters.state;
      const matchesBhk =
        filters.bhk === "" || property.bhk === filters.bhk;
      const matchesBudget =
        (filters.budget.min === "" ||
          parseInt(property.price, 10) >= parseInt(filters.budget.min, 10)) &&
        (filters.budget.max === "" ||
          parseInt(property.price, 10) <= parseInt(filters.budget.max, 10));
      const matchesPropertyType =
        filters.propertyType.length === 0 ||
        filters.propertyType.includes(property.propertyType);

      return (
        matchesCity &&
        matchesState &&
        matchesBhk &&
        matchesBudget &&
        matchesPropertyType
      );
    });
  }, [data, filters]);

  useEffect(() => {
    const searchData = data.filter((property) => property?.title.includes(search) 
    // && property?.address.city.includes(filters.state) 
    // && property?.bhk.includes(filters.bhk) 
    // && ((filters.budget.min === "" ||
    //   parseInt(property.price, 10) >= parseInt(filters.budget.min, 10)) 
    //   && (filters.budget.max === "" ||
    //     parseInt(property.price, 10) <= parseInt(filters.budget.max, 10)))
      // && property.propertyType.includes(filters.propertyType.map(item => item))
    );
    setSearchResults(searchData);
  }, [search, data]);

  // Handle pagination when scrolling
  useEffect(() => {
    const initialData = filteredData.slice(0, itemsPerPage);
    setDisplayedData(initialData);
    setPage(1);
  }, [filteredData]);

  const loadMoreData = () => {
    const nextPage = page + 1;
    const nextPageData = filteredData.slice(
      page * itemsPerPage,
      nextPage * itemsPerPage
    );
    setDisplayedData((prevData) => [...prevData, ...nextPageData]);
    setPage(nextPage);
  };

  if (loading) {

    return (
      <>{id ?
        <LoaderLayout loaderType="single" />
        : <LoaderLayout />
      }
      </>

    );
  }

  if (error) return <p className="text-center text-red-600">{error}</p>;

  // Conditionally render PropertyById when id is present
  if (id) {
    return (
      <Suspense fallback={<LoaderLayout loaderType="single" />}>
        <PropertyById id={id} />
      </Suspense>
    );
  }

  // console.log("Filtered Data", filteredData);


  return (
    <section className="min-h-screen w-full flex-center flex-col md:flex-row px-4 md:px-10 bg-[url(/images/pattern.png)]">
      <main className="flex flex-col w-full p-4 md:p-6 gap-4">
        <h1 className="text-2xl font-semibold">Discover Your Dream Property</h1>
        <div className="flex items-center gap-4 w-full text-xs">
          <p className="text-gray-600">Filters applied:</p>
          {filters ? (
            <>
              {filters.city && (
                <span className="px-4 py-1 rounded-full border bg-sand-soft text-home capitalize">
                  {filters.city}
                  {filters.state && `, ${filters.state}`} {/* Only display state if available */}
                </span>
              )}
              {filters.bhk && (
                <span className="px-4 py-1 rounded-full border bg-sand-soft text-home uppercase">
                  {filters.bhk}
                </span>
              )}
              {(filters.budget.min || filters.budget.max) && (
                <span className="px-4 py-1 rounded-full border bg-sand-soft text-home capitalize">
                  Budget : {filters.budget.min || "Min"} - {filters.budget.max || "Max"}
                </span>
              )}
            </>
          ) : (
            <span>None</span>
          )}
        </div>

        <InfiniteScroll
          dataLength={displayedData.length}
          next={loadMoreData}
          hasMore={displayedData.length < filteredData.length}
          loader={<LoaderLayout />}
        >
          <DisplayProperties data={searchResults.length > 0 ? searchResults : displayedData} />
        </InfiniteScroll>
      </main>
    </section>
  );
};

export default PropertiesPageContent;
