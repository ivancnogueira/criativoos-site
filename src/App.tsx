import React, { useEffect, useState } from "react";
import { HomePage } from "./pages/HomePage";
import { ThankYouPage } from "./pages/ThankYouPage";
import { PresentationMigrationPage } from "./pages/PresentationMigrationPage";
import { PresentationBlackPage } from "./pages/PresentationBlackPage";
import { PresenterScriptPage } from "./pages/PresenterScriptPage";
import { WhatsAppCampaignKitPage } from "./pages/WhatsAppCampaignKitPage";
import { RouteSeoSync } from "./components/seo/RouteSeoSync";

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

  let page: React.ReactNode = <HomePage />;

  if (pathname === "/apresentacao-migracao") {
    page = <PresentationMigrationPage />;
  } else if (pathname === "/apresentacao-black" || pathname === "/apresentacao") {
    page = <PresentationBlackPage />;
  } else if (pathname === "/meu-roteiro") {
    page = <PresenterScriptPage />;
  } else if (pathname === "/kit-whatsapp") {
    page = <WhatsAppCampaignKitPage />;
  } else if (pathname === "/obrigado") {
    page = <ThankYouPage />;
  }

  return (
    <>
      <RouteSeoSync pathname={pathname} />
      {page}
    </>
  );
};

export default App;
