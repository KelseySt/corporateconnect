import CompletionCard from "../components/CompletionCard";
import { outfit } from "../fonts";
import CompanyCard from "../components/CompanyCard";
import Image from "next/image";
import av1 from "../../../public/images/girl-pose-4.png";
import av2 from "../../../public/images/girl-pose-3.png";
import ProfileNav from "../components/ProfileNav";

export default function Profile() {
  const p = Math.random() * 40;

  return (
    <div>
      <ProfileNav></ProfileNav>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <h1 className={`${outfit.className} text-[3rem]`}>Profile</h1>
        <div className="grid grid-rows-1 items-center">
          <section className="items-center">
            <h2 className={`${outfit.className} text-[2rem] text-center`}>
              Avatar
            </h2>
            <div className="block">
              <Image
                alt="Avatar 1 background"
                className="object-cover rounded-xl mx-auto"
                src={p <= 20 ? av1 : av2}
                width={270}
              />
            </div>
          </section>
          <section className="items-center mt-1 mb-5">
            <h2 className={`${outfit.className} text-[2rem] text-center mb-3`}>
              Overview
            </h2>
            <div className="mx-4 grid grid-cols-3">
              <CompletionCard points={p}></CompletionCard>
              <CompletionCard points={0}></CompletionCard>
              <CompletionCard points={0}></CompletionCard>
            </div>
          </section>
          <section className="items-center mt-2">
            <h2 className={`${outfit.className} text-[2rem] text-center mb-3`}>
              Companies You Follow
            </h2>
            <div className="mx-4 grid grid-cols-3">
              <CompanyCard
                title="Spotify"
                img="hhttps://images.unsplash.com/photo-1613329671121-5d1cf551cc3f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BvdGlmeXxlbnwwfHwwfHx8Mg%3D%3D"
              ></CompanyCard>
              <CompanyCard
                title="Apple"
                img="https://images.unsplash.com/photo-1534802046520-4f27db7f3ae5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFwcGxlfGVufDB8fDB8fHwy"
              ></CompanyCard>
              <CompanyCard
                title="Truist"
                img="https://images.unsplash.com/photo-1631740566766-5b41b9ca58ef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VHJ1aXN0fGVufDB8fDB8fHwy"
              ></CompanyCard>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
