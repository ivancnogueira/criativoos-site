import React, { useEffect } from "react";
import { OmegaKeynoteDeck } from "../components/keynote/OmegaKeynoteDeck";

export const PresentationBlackPage: React.FC = () => {
  useEffect(() => {
    document.title = "CriativoOS | Apresentação Oficial Lançamento & Black Friday";
  }, []);

  return <OmegaKeynoteDeck edition="black" />;
};
