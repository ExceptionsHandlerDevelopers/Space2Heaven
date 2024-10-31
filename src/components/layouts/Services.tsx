import Image from "next/image";
import FormDialogBox from "./FormDialogBox";

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
}

const ServiceCard = ({ imageSrc, title, description, buttonText }: ServiceCardProps) => (
  <div className="flex-center flex-col md:flex-row xl:flex-col gap-4 p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 text-center md:text-left lg:text-center">
    {/* Image on the left or top */}
    <div className="flex-shrink w-full md:w-1/2 xl:w-full h-50 md:h-60">
      <Image
        src={imageSrc}
        alt={title}
        width={100}
        height={100}
        className="w-full h-full rounded-md object-cover"
      />
    </div>

    {/* Content on the right or bottom */}
    <div className="flex-grow flex-center flex-col">
      <h2 className="text-lg lg:text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2 text-sm lg:text-base text-center md:text-left lg:text-center">{description}</p>
      <button className="btn-class">
        {buttonText}
      </button>
    </div>
  </div>
);

const Services = () => {
  return (
    <section className="min-h-[45vh] flex flex-col items-center py-8 px-4 md:px-8 lg:px-16 bg-gray-100" id="services">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">Our Services</h1>

      <div className="grid gap-6 xl:grid-cols-3 w-full max-w-7xl">
        <ServiceCard
          imageSrc="/images/buying.svg"
          title="Property Buying"
          description="Find the perfect property with our expert guidance and tailored solutions."
          buttonText="Learn More"
        />
        <ServiceCard
          imageSrc="/images/interior.svg"
          title="Interior Design"
          description="Bring your dream space to life with our professional interior design services."
          buttonText="Explore Design"
        />
        <ServiceCard
          imageSrc="/images/selling.svg"
          title="Property Selling"
          description="Sell your property with ease and confidence through our reliable platform."
          buttonText="Get Started"
        />
      </div>

      {/* Form Dialog Box component */}
      <div className="mt-8 w-full flex justify-center">
        <FormDialogBox />
      </div>
    </section>
  );
};

export default Services;
