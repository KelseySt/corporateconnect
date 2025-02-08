import CompletionCard from "../components/CompletionCard";
import { outfit } from "../fonts";
import { Avatar, AvatarGroup, AvatarIcon } from "@heroui/avatar";
import Achievement from "../components/Achievements";

export default function Profile() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className={`${outfit.className} text-[3rem]`}>Profile</h1>
      <div className="grid grid-rows-3 items-center">
        <section className="items-center mt-1">
          <h2 className={`${outfit.className} text-[2rem]`}>Avatar</h2>
          <div className="items-center">
            <Avatar className="w-20 h-20 items-center" name="User" />
          </div>
        </section>
        <section className="items-center mt-1">
          <h2 className={`${outfit.className} text-[2rem] text-center`}>
            Overview
          </h2>
          <div className="mx-4 grid grid-cols-3 ">
            <CompletionCard></CompletionCard>
            <CompletionCard></CompletionCard>
            <CompletionCard></CompletionCard>
          </div>
        </section>
        <section className="items-center mt-2">
          <h2 className={`${outfit.className} text-[2rem] text-center`}>
            Achievements
          </h2>
          <div className="mx-4 grid grid-cols-3 ">
            <Achievement></Achievement>
            <Achievement></Achievement>
            <Achievement></Achievement>
          </div>
        </section>
      </div>
    </div>
  );
}
