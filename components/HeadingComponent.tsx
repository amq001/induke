import Reveal from "./Reveal";

type Props = {
  className?: string;
  headingClassName?: string;
  heading?: string;
  description?: string;
  textCentered?: boolean;
  variant?: "primary" | "secondary" | "gradient";
};

const HeadingComponent = ({
  className,
  headingClassName,
  heading,
  description,
  textCentered = false,
  variant = "primary",
}: Props) => {
  return (
    <div
      className={`${className} flex flex-col ${
        textCentered ? "items-center justify-center max-w-3xl mx-auto" : ""
      } gap-4 px-4`}
      data-variant={variant}
    >
      {heading && (
        <Reveal>
          <h1
            data-variant={variant}
            className={`text-2xl md:text-5xl leading-10 md:leading-relaxed font-medium text-center data-[variant=primary]:text-black data-[variant=secondary]:text-white data-[variant=gradient]:text-transparent data-[variant=gradient]:bg-clip-text data-[variant=gradient]:bg-[linear-gradient(200deg,#000_20%,#F37036_100%)] ${headingClassName}`}
          >
            {heading}
          </h1>
        </Reveal>
      )}
      {description && (
        <Reveal>
          <p
            data-variant={variant}
            className="text-center text-md md:text-xl data-[variant=primary]:text-black data-[variant=secondary]:text-white"
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
};

export default HeadingComponent;
