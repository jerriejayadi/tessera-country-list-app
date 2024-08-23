"use client";
import CountryListTable from "@/components/CountryListTable";
import { getCountryList } from "@/service";
import { CountryProps } from "@/types";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function Country() {
  const handleLogout = () => {
    signOut();
    redirect("/");
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-start md:items-center justify-center gap-6 p-6`}
    >
      <h1 className={`text-2xl leading-9 font-bold`}>Country List</h1>
      <CountryListTable />
      <button
        onClick={() => {
          handleLogout();
        }}
        className={` text-error active:underline`}
      >
        Logout
      </button>
    </main>
  );
}
