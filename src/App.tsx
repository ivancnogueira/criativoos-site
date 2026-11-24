import React, { useEffect, useState } from "react";
import { HomePage } from "./pages/HomePage";
import { ThankYouPage } from "./pages/ThankYouPage";
import { PresentationMigrationPage } from "./pages/PresentationMigrationPage";
import { PresentationBlackPage } from "./pages/PresentationBlackPage";
import { PresenterScriptPage } from "./pages/PresenterScriptPage";
import { WhatsAppCampaignKitPage } from "./pages/WhatsAppCampaignKitPage";

function normalizePathname(raw: string): string {
  const clean = (raw || "/").split("?")[0].split("#")[0].replace(/\/+$/, "");
  return clean === "" ? "/" : clean;
}

export const App: React.FC = () => {
  const [pathname, setPathname] = useState<string>(() =>
    typeof window !== "undefined" ? normalizePathname(window.location.pathname) : "/"
  );

  useEffect(() => {
    const onPopState = () => {
      setPathname(normalizePathname(window.location.pathname));
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  if (pathname === "/apresentacao-migracao") {
    return <PresentationMigrationPage />;
  }

  if (pathname === "/apresentacao-black" || pathname === "/apresentacao") {
    return <PresentationBlackPage />;
  }

  if (pathname === "/meu-roteiro") {
    return <PresenterScriptPage />;
  }

  if (pathname === "/kit-whatsapp") {
    return <WhatsAppCampaignKitPage />;
  }

  if (pathname === "/obrigado") {
    return <ThankYouPage />;
  }

  return <HomePage />;
};

export default App;
