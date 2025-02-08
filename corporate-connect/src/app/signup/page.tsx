"use client";
import { roboto_flex } from "../fonts";
import { outfit } from "../fonts";
import { Input } from "@heroui/input";
import { Button, ButtonGroup } from "@heroui/button";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const handleSignupSubmit = () => {
    router.push("/");
  };
  return (
    <div className=" bg-llgrey grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className={`${outfit.className} text-[3rem] text-brightpurple`}>
        Signup
      </h1>
      <section className="bg-llgrey">
        <div className="rounded-3xl bg-llgrey py-[3rem] px-[10rem] border-4 border-brightpurple items-center">
          <div className="items-center">
            <div className="w-full flex flex-row flex-wrap gap-4">
              <Input
                className="rounded-xl max-w-[220px] bg-llgrey"
                color="secondary"
                variant="bordered"
                label="First Name"
                placeholder="Enter your first name"
                type="input"
              />
            </div>
            <br></br>
            <div className="w-full flex flex-row flex-wrap gap-4">
              <Input
                className="rounded-xl max-w-[220px] bg-llgrey border-dpurple"
                color="secondary"
                variant="bordered"
                label="Last Name"
                placeholder="Enter your last name"
                type="password"
              />
            </div>
            <br></br>
            <div className="w-full flex flex-row flex-wrap gap-4">
              <Input
                className="rounded-xl max-w-[220px] bg-llgrey border-dpurple"
                color="secondary"
                variant="bordered"
                label="Email"
                placeholder="Enter your email address"
                type="email"
              />
            </div>
            <br></br>
            <div className="w-full flex flex-row flex-wrap gap-4">
              <Input
                className="rounded-xl max-w-[220px] bg-llgrey border-dpurple"
                color="secondary"
                variant="bordered"
                label="Password"
                placeholder="Enter a password"
                type="password"
              />
            </div>
          </div>
          <br></br>
          <Button
            color="secondary"
            variant="ghost"
            onPress={handleSignupSubmit}
          >
            Signup
          </Button>
        </div>
      </section>
    </div>
  );
}
