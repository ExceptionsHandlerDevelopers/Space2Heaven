import FormDialogBox from "./DialogBox";
import { ServiceSectionProps } from "@/types";
import ServiceCard from "./ServiceCard";
import Pattern from "./Pattern";

const Services = ({ title, data, bgClassName = "bg-gradient-to-b from-home to-gray-800" }: ServiceSectionProps) => {

  return (
    <section
      className={`section-genral-class relative ${bgClassName}`}
    >
      <Pattern />
      {/* Section Header */}
      <div className="w-full flex-center flex-col py-8 px-4 md:px-8 lg:px-16 gap-8">
        <h1 className="text-sand-soft2 header-class">
          {title}
        </h1>
        <hr className="bg-sand-soft2" />

        {/* Services Grid */}
        <div className="grid gap-6 grid-cols-2 xl:grid-cols-5 w-full max-w-7xl">
          {data.map((service, index) => (
            <ServiceCard
              key={index}
              imageSrc={service.imageSrc}
              title={service.title}
              url={service.url}
            />
          ))}
        </div>

        <FormDialogBox />
      </div>
    </section>
  );
};

export default Services;
