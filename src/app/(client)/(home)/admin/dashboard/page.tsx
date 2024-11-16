import { dashboardData } from "@/constants"
import Link from "next/link"

const Dashboard = () => {
  return (
    <section className="min-h-screen flex justify-center items-center py-24 px-4 bg-gray-100 flex-col gap-4 w-full">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-burgundy">
        Admin Dashboard
      </h1>
      <hr className="max-w-xl w-full h-1 bg-burgundy" />
      <div className="m-auto max-w-4xl w-full grid grid-cols-2 gap-4 py-2">
        {dashboardData.map(({ link, title, color }, index) => (
          <Link href={link} className={`bg-${color}-500 duration hover:bg-${color}-600 dashboard-card flex-center`} key={index}>{title}</Link>
        ))}
      </div>
    </section>
  )
}
export default Dashboard