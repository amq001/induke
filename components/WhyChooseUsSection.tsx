import HeadingComponent from "./HeadingComponent";
import WhyChooseCard from "./WhyChooseCard";
import SectionEyebrow from "./SectionEyebrow";
import { whyChooseUsData } from "@/constants/data";

const WhyChooseUsSection = () => {
  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-6">
          <SectionEyebrow label="Why Choose Us" accent="#EC4899" dark={false} />
          <HeadingComponent
            heading="What working with us actually looks like"
            italicWord="actually"
            description="No smoke and mirrors — just the fundamentals done consistently well."
            variant="primary"
            textCentered={true}
          />
        </div>

        <div className="grid w-full max-w-5xl grid-cols-1 gap-5 px-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {whyChooseUsData.map((item, index) => (
            <WhyChooseCard key={item.title} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
