import React, { useEffect } from "react";
import { OmegaKeynoteDeck } from "../components/keynote/OmegaKeynoteDeck";

export const PresentationMigrationPage: React.FC = () => {
  useEffect(() => {
    document.title = "CriativoOS | Apresentação Oficial de Migração da Base";
  }, []);

  return <OmegaKeynoteDeck edition="migration" />;
};
