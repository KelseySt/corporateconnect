"use client";
import Image from "next/image";
import { roboto_flex } from "./fonts";
import { outfit } from "./fonts";
import { Input } from "@heroui/input";
import { Button, ButtonGroup } from "@heroui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleSignupClick = () => {
    router.push("/signup");
  };
  return (
    <div className=" bg-llgrey grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className={`${outfit.className} text-[3rem] text-brightpurple`}>
        Welcome Back!
      </h1>
      <section className="bg-llgrey">
        <div className="rounded-3xl bg-llgrey py-[3rem] px-[10rem] border-4 border-brightpurple">
          <div className="items-center">
            <div className="w-full flex flex-row flex-wrap gap-4">
              <Input
                className="rounded-xl max-w-[220px] bg-llgrey"
                color="secondary"
                variant="bordered"
                label="Email"
                placeholder="Enter your email"
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
                placeholder="Enter your password"
                type="password"
              />
            </div>
          </div>
          <br></br>
          <div className="grid grid-cols-2 gap-2">
            <Button
              color="secondary"
              variant="ghost"
              href="/signup"
              onPress={handleSignupClick}
            >
              Signup
            </Button>
            <Button color="secondary">Login</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
