import React from "react";

interface ChangelogInlineTextProps {
  text: string;
}

const TOKEN_REGEX = /(\*\*[^*]+\*\*|`[^`]+`)/g;

/**
 * Renderiza trechos simples com negrito (**texto**) e código (`codigo`) sem injeção de HTML bruto.
 */
export const ChangelogInlineText: React.FC<ChangelogInlineTextProps> = ({ text }) => {
  const parts = text.split(TOKEN_REGEX);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
          return (
            <strong key={index} className="font-semibold text-white">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
          return (
            <code
              key={index}
              className="rounded-md border border-white/10 bg-[#131622] px-1.5 py-0.5 font-mono text-[0.82em] text-[#B9FC01]"
            >
              {part.slice(1, -1)}
            </code>
          );
        }
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </>
  );
};
