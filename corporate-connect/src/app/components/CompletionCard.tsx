"use client";
import React from "react";
import { CircularProgress } from "@heroui/progress";
import { roboto_flex } from "../fonts";

export default function CompletionCard() {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-lgrey mx-5 @apply shadow-[0_4px_8px_0_rgba(0,0,0,0.5)] transition-[0.3s] hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)];">
      <div className="mt-5 px-4 py-0.5">
        <div>
          <h3 className={`${roboto_flex.className} text-center`}>Progress</h3>
        </div>
        <CircularProgress
          classNames={{
            svg: "w-36 h-36 drop-shadow-md",
            indicator: "lpurple",
            track: "lpurple",
            value: "text-3xl font-semibold text-lpurple",
          }}
          //showValueLabel={true}
          strokeWidth={4}
          //value={70}
          aria-label="Loading..."
          color="secondary"
          showValueLabel={true}
          size="lg"
          value={value}
        />
      </div>
    </div>
  );
}
