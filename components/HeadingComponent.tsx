import { renderAccentWord } from "@/lib/text";
import Reveal from "./Reveal";

type Props = {
  className?: string;
  headingClassName?: string;
  heading?: string;
  description?: string;
  textCentered?: boolean;
  variant?: "primary" | "secondary" | "gradient";
  italicWord?: string;
};

const HeadingComponent = ({
  className,
  headingClassName,
  heading,
  description,
  textCentered = false,
  variant = "primary",
  italicWord,
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
            className={`text-2xl md:text-5xl leading-tight md:leading-[1.15] font-semibold text-center bg-clip-text text-transparent data-[variant=primary]:bg-gradient-to-b data-[variant=primary]:from-gray-900 data-[variant=primary]:via-gray-900 data-[variant=primary]:to-gray-500 data-[variant=secondary]:bg-gradient-to-b data-[variant=secondary]:from-white data-[variant=secondary]:via-white data-[variant=secondary]:to-gray-400 data-[variant=gradient]:bg-[linear-gradient(200deg,#000_20%,#F37036_100%)] ${headingClassName}`}
          >
            {renderAccentWord(
              heading,
              italicWord,
              variant === "secondary" ? "text-gray-400" : "text-gray-500"
            )}
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
