import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import { SITE_URLS } from "../../config/campaignLinks";

interface OfferQrCodeProps {
  url: string;
  label: string;
  highlighted?: boolean;
}

export const OfferQrCode: React.FC<OfferQrCodeProps> = ({
  url,
  label,
  highlighted = false,
}) => {
  const [dataUrl, setDataUrl] = useState<string>("");

  const resolvedUrl = url.startsWith("http")
    ? url
    : `${SITE_URLS.domain}${url.startsWith("/") ? url : `/${url}`}`;

  useEffect(() => {
    let active = true;
    QRCode.toDataURL(resolvedUrl, {
      width: 440,
      margin: 2,
      errorCorrectionLevel: "M",
      color: {
        dark: "#050608",
        light: "#FFFFFF",
      },
    })
      .then((generated) => {
        if (active) setDataUrl(generated);
      })
      .catch(() => {
        if (active) setDataUrl("");
      });

    return () => {
      active = false;
    };
  }, [resolvedUrl]);

  return (
    <div
      className={`mx-auto flex w-full max-w-[215px] flex-col items-center rounded-2xl bg-white p-3 transition ${
        highlighted
          ? "ring-4 ring-[#B9FC01]/70 shadow-[0_0_35px_rgba(185,252,1,0.3)]"
          : "ring-1 ring-white/20 shadow-xl"
      }`}
    >
      {dataUrl ? (
        <img
          src={dataUrl}
          alt={`QR Code para oferta ${label}`}
          className="aspect-square w-full rounded-lg object-contain"
        />
      ) : (
        <div className="flex aspect-square w-full items-center justify-center rounded-lg bg-zinc-100 font-mono text-[11px] font-semibold text-zinc-700">
          Gerando QR...
        </div>
      )}
    </div>
  );
};
