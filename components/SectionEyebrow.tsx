import Reveal from "./Reveal";

type Props = {
  label: string;
  accent?: string;
  dark?: boolean;
};

const SectionEyebrow = ({ label, accent = "#F37036", dark = true }: Props) => {
  return (
    <Reveal>
      <span
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs md:text-sm font-medium backdrop-blur-sm ${
          dark
            ? "border-white/15 bg-white/5 text-gray-300"
            : "border-black/10 bg-black/[0.03] text-gray-600"
        }`}
      >
        <span className="relative flex h-2 w-2">
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
            style={{ background: accent }}
          />
          <span
            className="relative inline-flex h-2 w-2 rounded-full"
            style={{ background: accent }}
          />
        </span>
        {label}
      </span>
    </Reveal>
  );
};

export default SectionEyebrow;
