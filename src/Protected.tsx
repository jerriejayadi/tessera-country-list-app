"use client";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";


// Protected Route, to protect when user try to access country page but not logged in yet
export default function Protected({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const session = useSession();

  // if session returns unauthenticated A.K.A not logged in, immediately push to login page
  if (session.status === "unauthenticated") {
    router.push(`/`); 
  }
  return children;
}
