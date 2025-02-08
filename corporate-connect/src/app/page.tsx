import { outfit } from "./fonts";
import { Input } from "@heroui/input";
import { Button, ButtonGroup } from "@heroui/button";
import { redirect, useRouter } from "next/navigation";
import { getSession } from '@auth0/nextjs-auth0';

export default async function Home() {
  const session = await getSession();

  if(!session) {
    return (
      <div className=" bg-llgrey grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className={`${outfit.className} text-[3rem] text-brightpurple`}>
          Welcome Back!
        </h1>
        <a href="/api/auth/login">Login</a>
        <section className="bg-llgrey">
          <div className="rounded-3xl bg-llgrey py-[3rem] px-[10rem] border-4 border-brightpurple">
            <div className="items-center">
              <div className="w-full flex flex-row flex-wrap gap-4">
                <a
                  className="rounded-xl max-w-[220px] bg-llgrey" 
                  href="/auth/login?screen_hint=signup">
                    <button>Sign Up</button>
                </a>
              </div>
              <br></br>
              <div className="w-full flex flex-row flex-wrap gap-4">
                <a
                  className="rounded-xl max-w-[220px] bg-llgrey" 
                  href="/auth/login">
                    <button>Log in</button>
                </a>
              </div>
            </div>
            <br></br>
            <div className="grid grid-cols-2 gap-2">
              <Button
                color="secondary"
                variant="ghost"
                href="/signup"
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

  redirect('/profile');
 
  
}
