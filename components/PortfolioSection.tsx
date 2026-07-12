import Link from "next/link";
// import { projects } from "../constants/data";
import Button from "./Button";
import HeadingComponent from "./HeadingComponent";
import StickyCard from "./StickyCard";

type Props = {
  heading: string;
  portfolio: any[];
};

const PortfolioSection = ({heading, portfolio}: Props) => {
  return (
    <section className="min-h-screen flex flex-col gap-12 items-center pt-12 xl:pt-20">
      <HeadingComponent
        heading={heading}
        variant="secondary"
        textCentered={true}
      />
      <div className="flex flex-col gap-4">
        {portfolio.slice(0, 5).map((project, index) => (
          <StickyCard key={index} {...project} />
        ))}
      </div>
      <Link href="/portfolio">
        <Button variant="bordered">View Full Portfolio</Button>
      </Link>
    </section>
  );
};

export default PortfolioSection;
