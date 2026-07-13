import HeadingComponent from "./HeadingComponent";
import IndustryCard from "./IndustryCard";
import SectionEyebrow from "./SectionEyebrow";
import { audienceData } from "@/constants/data";

const WhoWeHelpSection = () => {
  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-6">
          <SectionEyebrow label="Who We Help" accent="#F37036" dark={false} />
          <HeadingComponent
            heading="Built for teams at every stage"
            italicWord="stage"
            description="From first-time founders to enterprise teams, we tailor how we work to fit where you are."
            variant="primary"
            textCentered={true}
          />
        </div>

        <div className="grid w-full max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {audienceData.map((audience, index) => (
            <IndustryCard key={audience.name} {...audience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelpSection;
