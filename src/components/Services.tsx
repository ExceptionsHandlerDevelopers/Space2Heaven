import Image from "next/image";
import FormDialogBox from "./FormDialogBox";

interface ServiceCardProps{
    imageSrc: string,
     title: string,
     description: string,
     buttonText: string
}

const ServiceCard = ({ imageSrc, title, description, buttonText } : ServiceCardProps) => (
    <div className="flex flex-col lg:flex-col md:flex-row items-center gap-4 p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 text-center">
      {/* Image on the left */}
      <div className="flex-shrink-0 w-full md:w-1/3 h-32">
        <Image
          src={imageSrc}
          alt={title}
          width={100}
          height={100}
          className="w-full h-full rounded-md object-cover"
        />
      </div>
  
      {/* Content on the right */}
      <div className="flex-grow">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <button className="btn-class">
          {buttonText}
        </button>
      </div>
    </div>
  );

const Services = () => {
  return (
    <section className="min-h-[80vh] flex-center flex-col py-8 px-4 md:px-8 lg:px-16 bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Our Services</h1>
      
      <div className="grid gap-6 lg:grid-cols-3">
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
      <FormDialogBox />
    </section>
  );
};

export default Services;
