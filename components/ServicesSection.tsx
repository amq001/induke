import HeadingComponent from "./HeadingComponent";
import ServiceCard from "./ServiceCard";
import SectionEyebrow from "./SectionEyebrow";
import { servicesData } from "@/constants/data";

const ServicesSection = () => {
  return (
    <section id="services" className="relative w-full scroll-mt-24 overflow-hidden bg-black py-20 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-[#F37036] opacity-15 blur-[120px]" />
        <div className="absolute bottom-0 -right-10 h-72 w-72 rounded-full bg-[#007DC5] opacity-15 blur-[120px]" />
      </div>

      <div className="relative flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-6">
          <SectionEyebrow label="Services" accent="#007DC5" dark={true} />
          <HeadingComponent
            heading="Everything it takes to ship your product"
            italicWord="ship"
            description="From first sketch to production infrastructure, one team covers the whole build."
            variant="secondary"
            textCentered={true}
          />
        </div>

        <div className="grid w-full max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
