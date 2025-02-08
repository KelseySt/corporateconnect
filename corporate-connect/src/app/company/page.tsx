import { outfit } from "../fonts";
import { roboto_flex } from "../fonts";
import CompanyInfo from "../components/CompanyInfo";
import CompanyNav from "../components/CompanyNav";

export default function CompanyPage() {
  return (
    <div>
      <CompanyNav></CompanyNav>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className={`${outfit.className} text-[3rem]`}>Company Name</h1>
        <CompanyInfo></CompanyInfo>
      </div>
    </div>
  );
}
