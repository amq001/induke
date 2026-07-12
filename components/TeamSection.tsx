import HeadingComponent from "./HeadingComponent";
import TeamCard from "./TeamCard";
import { teamData } from "@/constants/data";

const TeamSection = () => {
  return (
    <section className="relative w-full bg-black py-20 md:py-32 overflow-hidden">
      {/* multi-colour ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/4 w-72 h-72 rounded-full bg-[#F37036] opacity-20 blur-[120px]" />
        <div className="absolute top-1/3 -right-10 w-72 h-72 rounded-full bg-[#007DC5] opacity-20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-[#8B5CF6] opacity-20 blur-[120px]" />
      </div>

      <div className="relative flex flex-col gap-16 items-center">
        <HeadingComponent
          heading="Meet the Team"
          description="The people building, designing, and shipping every product we touch."
          variant="secondary"
          textCentered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto place-items-center">
          {teamData.map((member, index) => (
            <TeamCard key={member.name} {...member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
