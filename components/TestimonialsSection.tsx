import HeadingComponent from "./HeadingComponent";
import TestimonialCard from "./TestimonialCard";
import SectionEyebrow from "./SectionEyebrow";
import { testimonialsData } from "@/constants/data";

const TestimonialsSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black py-20 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/3 h-72 w-72 rounded-full bg-[#8B5CF6] opacity-15 blur-[120px]" />
        <div className="absolute bottom-0 -right-16 h-72 w-72 rounded-full bg-[#F37036] opacity-15 blur-[120px]" />
      </div>

      <div className="relative flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-6">
          <SectionEyebrow label="Testimonials" accent="#8B5CF6" dark={true} />
          <HeadingComponent
            heading="Don't just take our word for it"
            italicWord="word"
            description="A few words from the people we've shipped products with."
            variant="secondary"
            textCentered={true}
          />
        </div>

        <div className="grid w-full max-w-6xl grid-cols-1 gap-6 px-4 md:gap-8 lg:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              {...testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
