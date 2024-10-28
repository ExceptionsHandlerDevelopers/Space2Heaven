import { Skeleton } from "@/components/ui/skeleton"

const CardLoader = () => {
    return (
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[300px] md:h-[350px] lg:h-[400px] max-w-sm rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    )
}
export default CardLoader