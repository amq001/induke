import Link from "next/link";
import Button from "./Button";
import HeadingComponent from "./HeadingComponent";
import Reveal from "./Reveal";

// 1900d0

const ContactUsSection = () => {
  return (
    <div id="contact" className="scroll-mt-24 bg-black">
      <section className="relative min-h-screen w-full flex flex-col gap-12 items-center bg-black justify-center rounded-b-[50px] overflow-hidden">
        {/* background layer */}
        <div className="absolute inset-0 z-0">
          {/* tech grid pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* multi-colour ambient glow, matches rest of site */}
          <div className="absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-[#F37036] opacity-20 blur-[130px] animate-pulse-glow" />
          <div className="absolute top-1/2 -right-24 w-96 h-96 rounded-full bg-[#007DC5] opacity-20 blur-[130px] animate-pulse-glow" />
          <div className="absolute -bottom-16 left-1/3 w-96 h-96 rounded-full bg-[#8B5CF6] opacity-15 blur-[130px] animate-pulse-glow" />

          {/* vignette to keep content readable */}
          <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black" />
        </div>

        {/* content */}
        <div className="relative z-10 flex flex-col gap-10 items-center px-4">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs md:text-sm font-medium text-gray-300 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F37036] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F37036]" />
              </span>
              Let&apos;s Talk
            </span>
          </Reveal>

          <div className="relative rounded-4xl p-[1px] max-w-4xl overflow-hidden">
            <div
              className="absolute inset-0 opacity-70"
              style={{
                background:
                  "linear-gradient(120deg, #F37036 0%, #007DC5 50%, #8B5CF6 100%)",
              }}
            />
            <div className="relative rounded-4xl bg-black px-6 py-12 md:px-16 md:py-16 flex flex-col gap-10 items-center">
              <HeadingComponent
                heading="Let's get your idea to paying customers"
                // description="Let's Collaborate to Bring Your Vision to Life"
                variant="secondary"
                textCentered={true}
                italicWord="paying"
              />
              <Link
                href="https://cal.com/aqib-mehtab-g6vkca/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
              <Button variant="bordered">Book a Call</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsSection;
