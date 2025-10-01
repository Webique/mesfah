"use client";

import { useEffect, useState } from "react";

type Status = "loading" | "success" | "error";

export const CountryFlag = ({ code }: { code: string }) => {
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    setStatus("loading");

    if (!code) {
      setStatus("error");
      return;
    }

    const testImage = new Image();

    testImage.onload = () => {
      setStatus("success");
    };
    testImage.onerror = () => {
      setStatus("error");
    };
    testImage.src = `https://flagcdn.com/${code.toLowerCase()}.svg`;

    return () => {
      testImage.onload = null;
      testImage.onerror = null;
    };
  }, [code]);

  if (status === "loading") {
    return <div className="h-4 w-6 animate-pulse bg-gray-200" />;
  }

  if (status === "error") {
    return (
      <div className="flex h-4 w-6 items-center justify-center bg-gray-100 text-xs font-semibold">
        {code.toUpperCase()}
      </div>
    );
  }

  return (
    <div className="h-4 w-6 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://flagcdn.com/${code.toLowerCase()}.svg`}
        alt={`${code} flag`}
        className="h-full w-full object-cover"
      />
    </div>
  );
};
