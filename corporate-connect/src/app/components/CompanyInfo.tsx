import React from "react";
import { outfit } from "../fonts";
import { roboto_flex } from "../fonts";

export default function CompanyInfo() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="items-center">
        <section className="items-center mt-1">
          <h2 className={`${outfit.className} text-[2rem] text-center`}>
            Balance Sheet
          </h2>
        </section>
        <section className="items-center mt-1">
          <h2 className={`${outfit.className} text-[2rem] text-center`}>
            Horizontal Analysis
          </h2>
        </section>
        <section className="items-center mt-1">
          <h2 className={`${outfit.className} text-[2rem] text-center`}>
            Key Metrics
          </h2>
        </section>
      </div>
    </div>
  );
}
