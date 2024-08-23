"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";

export default function Home() {
  const { data: session, status } = useSession();
  const [error, setError] = useState<string | "">("");
  const router = useRouter();

  // Onmount Check
  useEffect(() => {
    if (session) {
      router.push(`/country`); // if user is already logged in, immediately push to the Country List page
    }
  }, [session]);
  return (
    <main className="flex min-h-screen flex-col items-start justify-center p-6 bg-background md:p-40">
      <div className={`w-full md:w-[50%]`}>
        <h1 className={`text-4xl font-bold leading-10 text-text`}>
          Tessera Country List
        </h1>
        <p className={`mt-2 text-text`}>
          Welcome to Tessera Country List! Sign in with your Google Account to
          be able to see the country list in our database!
        </p>
        <button
          onClick={() => signIn("google")}
          className={`px-5 py-3  flex items-center gap-2 bg-primary rounded-lg mt-6 w-full active:brightness-75 md:hover:brightness-75 transition-all duration-200`}
        >
          <FaGoogle /> Sign in with google
        </button>
      </div>
    </main>
  );
}
