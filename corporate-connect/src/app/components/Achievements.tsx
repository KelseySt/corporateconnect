"use client";
import React from "react";
import { Skeleton } from "@heroui/skeleton";

export default function Achievement() {
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
        <Skeleton className="rounded-lg">
          <div className="h-24 rounded-lg bg-default-300" />
        </Skeleton>
        <br></br>
        <div className="space-y-3">
          <Skeleton className="w-3/5 rounded-lg">
            <div className="mt-1 h-3 w-3/5 rounded-lg bg-default-200" />
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-3 w-4/5 rounded-lg bg-default-200" />
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-3 w-2/5 rounded-lg bg-default-300" />
          </Skeleton>
        </div>
        <br></br>
      </div>
    </div>
  );
}
