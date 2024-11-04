import { Skeleton } from "@/components/ui/skeleton"

const LoaderLayout = ({ loaderType = "all" }: { loaderType?: string }) => {

    return (
        <>{loaderType === "single" ?
            <section className="min-h-screen w-full flex-center flex-col my-20 px-4">

                <div className="w-full max-w-6xl mb-10 h-[300px] md:h-[400px] lg:h-[500px]">
                    <Skeleton className="w-full h-full" />
                </div>

                <div className="w-full max-w-6xl space-y-6 bg-white p-6 rounded-lg shadow-md">

                    <Skeleton className="h-8 w-full" />
                    <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                    </div>

                    <Skeleton className="h-8 w-full" />

                    <div className="flex flex-wrap gap-4 items-center text-lg">
                        <Skeleton className="h-8 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                    </div>

                    <hr className="my-4" />

                    {/* Property Description */}
                    <div className="flex flex-col gap-4">
                        <Skeleton className="h-8 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                    </div>
                    {/* Form Dialog Box component */}
                    <div className="mt-8 w-full flex justify-center">
                        <button className="btn-class">Get in touch</button>
                    </div>
                </div>

            </section>
            :
            <section className="min-h-screen w-full flex flex-col md:flex-row my-20 px-4 md:px-10">
                <aside className="flex flex-col gap-6 md:gap-8 w-full md:w-1/4 lg:w-1/5 px-4 py-6 md:py-10 bg-white shadow-md rounded-lg h-fit">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                </aside>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-center justify-center">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <Skeleton key={index} className="h-[300px] md:h-[350px] lg:h-[400px] max-w-sm rounded-xl" />
                    ))}
                </div>
            </section>
        }
        </>
    )
}
export default LoaderLayout