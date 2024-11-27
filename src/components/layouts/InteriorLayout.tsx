import Image from "next/image";
import Pattern from "./Pattern";

const InteriorLayout = () => {
    return (
        <section className="section-genral-class relative">
            <Pattern />
            <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12 mb-6 lg:mb-10">
                {/* Text Section */}
                <div className=" flex-center flex-col gap-8 flex-1">
                    <h1 className="header-class text-interior text-2xl lg:text-4xl font-bold">
                        Who We Are?
                    </h1>
                    <hr className="bg-slate-600" />
                    <p className="text-sm md:text-base lg:text-lg text-grey-1 leading-relaxed text-center">
                        <strong className="text-interior uppercase">Space2Heaven</strong> offers creative and personalized interior design services, transforming spaces into stylish, functional, and inspiring environments. From modern homes to commercial projects, they bring visions to life with elegance and detail.
                    </p>
                </div>
                
                <div className="relative w-full lg:w-auto h-64 md:h-80 lg:h-96 max-w-lg flex-shrink-0 flex-center">
                    <Image
                        src="/images/who-we-are.webp"
                        alt="self-intro"
                        fill
                        className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                </div>
            </div>

        </section>
    );
};

export default InteriorLayout;
