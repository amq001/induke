import FAQItem from "./FAQItem";
import HeadingComponent from "./HeadingComponent";
import SectionEyebrow from "./SectionEyebrow";
import { faqData } from "@/constants/data";

const FAQSection = () => {
  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-6">
          <SectionEyebrow label="FAQ" accent="#007DC5" dark={false} />
          <HeadingComponent
            heading="Questions you're probably asking"
            italicWord="probably"
            description="Can't find what you're looking for? Book a call and ask us directly."
            variant="primary"
            textCentered={true}
          />
        </div>

        <div className="flex w-full max-w-3xl flex-col gap-4 px-4">
          {faqData.map((faq, index) => (
            <FAQItem key={faq.question} {...faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
