import HeadingComponent from "./HeadingComponent";
import ProjectCard from "./ProjectCard";
import SectionEyebrow from "./SectionEyebrow";
import { portfolioData } from "@/constants/data";

const FeaturedWorkSection = () => {
  return (
    <section id="work" className="w-full scroll-mt-24 bg-black py-20 md:py-32">
      <div className="flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-6">
          <SectionEyebrow label="Featured Work" accent="#8B5CF6" dark={true} />
          <HeadingComponent
            heading="Recent work we're proud of"
            description="A few of the products we've helped take from idea to production."
            variant="secondary"
            textCentered={true}
          />
        </div>

        <div className="grid w-full max-w-6xl grid-cols-1 gap-6 px-4 md:gap-8 lg:grid-cols-3">
          {portfolioData.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;
