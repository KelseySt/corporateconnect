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
                img="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green-300x300.png"
              ></CompanyCard>
              <CompanyCard
                title="Apple"
                img="https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg"
              ></CompanyCard>
              <CompanyCard
                title="Truist"
                img="https://interbrand.com/wp-content/uploads/2020/01/1_Logo-cropped.jpg"
              ></CompanyCard>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
