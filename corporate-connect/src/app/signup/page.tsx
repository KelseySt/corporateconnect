"use client";
import { roboto_flex } from "../fonts";
import { outfit } from "../fonts";
import { Input } from "@heroui/input";
import { Button, ButtonGroup } from "@heroui/button";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";

type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default function SignupPage() {
  const router = useRouter();
  const handleSignupSubmit = () => {
    router.push("/");
  };

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const firstNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const lastNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const emailHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    const newUser: User = { firstName, lastName, email, password };

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const data = await response.json();

      if (response.ok) {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setError("");

        router.push("/");
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setError("An error occured. Please try again.");
    }
  };
  return (
    <div className=" bg-llgrey grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className={`${outfit.className} text-[3rem] text-brightpurple`}>
        Signup
      </h1>
      <section className="bg-llgrey">
        <div className="rounded-3xl bg-llgrey py-[3rem] px-[10rem] border-4 border-brightpurple items-center">
          <div className="items-center">
            <form className="items-center" onSubmit={submitHandler}>
              {error && <p>{error}</p>}
              <div className="w-full flex flex-row flex-wrap gap-4">
                <Input
                  className="rounded-xl max-w-[220px] bg-llgrey"
                  color="secondary"
                  variant="bordered"
                  label="First Name"
                  placeholder="Enter your first name"
                  type="input"
                  value={firstName}
                  onChange={firstNameHandler}
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
                  type="input"
                  value={lastName}
                  onChange={lastNameHandler}
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
                  value={email}
                  onChange={emailHandler}
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
                  value={password}
                  onChange={passwordHandler}
                />
              </div>
              {/*</div>*/}
              <br></br>
              <Button
                color="secondary"
                variant="ghost"
                type="submit"
                //onPress={handleSignupSubmit}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
