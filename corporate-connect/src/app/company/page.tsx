"use client";
import { useState } from "react";
import { outfit } from "../fonts";
import { roboto_flex } from "../fonts";
import CompanyNav from "../components/CompanyNav";
import { Button } from "@heroui/react";
import {
  CircularProgress,
  Card,
  CardBody,
  CardFooter,
  Chip,
} from "@heroui/react";

export default function CompanyPage() {
  const [currentAssets, setCurrentAssets] = useState(Number);
  const [currentLiabilities, setCurrentLiabilities] = useState(Number);
  const [netIncome, setNetIncome] = useState(Number);
  const [totalAssets, setTotalAssets] = useState(Number);
  const [revenue, setRevenue] = useState(Number);
  const [expenses, setExpenses] = useState(Number);
  const [da, setDA] = useState(Number);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchStats = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://financialmodelingprep.com/api/v3/financial-statement-full-as-reported/SPOT?apikey=S9dpTbcZ5rfGn7O2APEz7F4lPKpUUXpN&period=annual"
      );
      const response2 = await fetch(
        "https://financialmodelingprep.com/api/v3/cash-flow-statement/SPOT?apikey=S9dpTbcZ5rfGn7O2APEz7F4lPKpUUXpN&period=annual"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data.");
      }
      if (!response2.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      console.log(data[1]);
      const data2 = await response2.json();
      console.log(data2[1]);
      setCurrentAssets(data[1].assets);
      console.log(currentAssets);
      setCurrentLiabilities(data[1].currenttaxliabilitiescurrent);
      console.log(currentLiabilities);
      setNetIncome(data2[1].netIncome);
      console.log(netIncome);
      setExpenses(51345000000);
      setTotalAssets(data[1].assets);
      setRevenue(data[1].revenuefromcontractswithcustomers);
      setDA(data2[1].depreciationAndAmortization);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <CompanyNav></CompanyNav>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="grid grid-cols-2 gap-5 mb-20">
          <h1 className={`${outfit.className} text-[3rem]`}>Spotify</h1>
          <Button
            color="secondary"
            variant="ghost"
            size="md"
            className="mt-5 ml-3"
            onPress={fetchStats}
          >
            Get stats
          </Button>
        </div>
        <br></br>
        <br></br>
        <div className="mt-20">
          <div>
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
              <div className="items-center">
                <div className="grid grid-cols-2 mt-20 pt-20">
                  <section className="items-center mt-4">
                    <h2
                      className={`${outfit.className} text-[2rem] text-center mt-2 mb-8`}
                    >
                      Current Ratio
                    </h2>
                    <h2
                      className={`${outfit.className} text-[4rem] text-center border-dashed border-5 border-brightpurple mx-8 py-10 rounded-lg`}
                    >
                      {(currentAssets / currentLiabilities).toFixed(2)}
                    </h2>
                  </section>
                  <section className="items-center mt-1">
                    <h2
                      className={`${outfit.className} text-[2rem] text-center mt-3 mb-3 pt-2`}
                    >
                      Return on Assets (ROA)
                    </h2>
                    <Card className="w-[240px] h-[240px] mx-auto border-none bg-gradient-to-br from-dpurple to-lpurple">
                      <CardBody className="justify-center items-center mx-auto pb-0">
                        <CircularProgress
                          classNames={{
                            svg: "w-36 h-36 drop-shadow-md",
                            indicator: "stroke-white",
                            track: "stroke-white/10",
                            value: "text-3xl font-semibold text-white",
                          }}
                          showValueLabel={true}
                          strokeWidth={4}
                          value={Math.ceil(netIncome / totalAssets) * 100}
                        />
                      </CardBody>
                      <CardFooter className="leading-none justify-center items-center pt-0 mb-2 text-white">
                        Percentage of how profitable a company's assets are in
                        generating revenue.
                      </CardFooter>
                    </Card>
                  </section>
                </div>
                <section className="items-center mt-1">
                  <h2
                    className={`${outfit.className} text-[2rem] text-center mt-10`}
                  >
                    Company Stock
                  </h2>
                  <h2
                    className={`${outfit.className} text-[4rem] text-center mt-4 border-solid border-brightpurple border-4 rounded-md`}
                  >
                    $624.99
                  </h2>
                </section>
                <section>
                  <h2
                    className={`${outfit.className} text-[2rem] text-center mt-10`}
                  >
                    EBITDA
                  </h2>
                  <div className="grid grid-cols-2 text-white text-center bg-gradient-to-r from-dpurple to-lpurple">
                    <div className="border-solid border-white border-3 py-7">
                      <h3 className={`${outfit.className} font-bold`}>
                        Equations
                      </h3>
                      <br></br>
                      <h3>{(revenue - expenses + da).toFixed(2)}</h3>
                      <h3>Revenue - Expenses + Deprecation + Amortization</h3>
                    </div>
                    <div className="border-solid border-brightpurple border-3 py-8">
                      <h3 className={`${outfit.className} font-bold`}>
                        EBITDA Margin
                      </h3>
                      <br></br>
                      <h3>
                        {((revenue - expenses + da) / revenue).toFixed(2)}
                      </h3>
                      <h3> EBITDA / Total Revenue</h3>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
