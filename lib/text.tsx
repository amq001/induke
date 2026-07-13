import { ReactNode } from "react";

export const renderAccentWord = (
  text: string,
  accentWord: string | undefined,
  mutedClassName: string
): ReactNode => {
  if (!accentWord) return text;

  const idx = text.toLowerCase().indexOf(accentWord.toLowerCase());
  if (idx === -1) return text;

  const before = text.slice(0, idx);
  const match = text.slice(idx, idx + accentWord.length);
  const after = text.slice(idx + accentWord.length);

  return (
    <>
      {before}
      <em
        className={`italic font-[family-name:var(--font-playfair)] font-medium ${mutedClassName}`}
      >
        {match}
      </em>
      {after}
    </>
  );
};
