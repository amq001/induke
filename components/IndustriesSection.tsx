import HeadingComponent from "./HeadingComponent";
import IndustryCard from "./IndustryCard";
import { industriesData } from "@/constants/data";

const IndustriesSection = () => {
  return (
    <section id="industries" className="w-full scroll-mt-24 bg-gray-50 py-20 md:py-32">
      <div className="flex flex-col gap-16 items-center">
        <HeadingComponent
          heading="Industries We Work In"
          italicWord="Work"
          description="Domain expertise across the sectors that need software built right."
          variant="primary"
          textCentered={true}
        />

        <div className="grid w-full max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {industriesData.map((industry, index) => (
            <IndustryCard key={industry.name} {...industry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
