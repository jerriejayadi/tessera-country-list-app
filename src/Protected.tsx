"use client";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

export default function Protected({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const session = useSession();
  console.log(session);
  if (session.status === "unauthenticated") {
    router.push(`/`);
  }
  return children;
}
