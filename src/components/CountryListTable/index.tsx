"use client";
import Image from "next/image";
import { getCountryList } from "@/service";
import { CountryProps } from "@/types";
import { useState, useMemo, useEffect } from "react";

export default function CountryListTable() {
  const [data, setData] = useState<CountryProps[]>(),
    [loading, setLoading] = useState<boolean>(true), // set Loading state
    [error, setError] = useState<string | null>(null);

    // memoize data
  const memoizedData = useMemo(() => {
    return data;
  }, [data]);

  useEffect(() => {
    getCountryList()
      .then((res) => {
        setData(res);
        setLoading(false); // remove loading state when fetching is done
      })
      .catch((error) => {
        setError(error);
        setLoading(false);  // remove loading state when fetching is done
      });
  }, []);


  // loading state
  if (loading) {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-3 shrink-0 gap-4 md:gap-8`}>
        {[0, 1, 2, 3, 4, 5].map((rows, index) => (
          <div
            className={`flex items-center shrink-0 gap-4 md:flex-col`}
            key={`country-${index}`}
          >
            <div
              className={`w-10 h-10 bg-background-secondary animate-pulse`}
            />

            <div className={`flex flex-col md:items-center`}>
              <p className={`h-4 w-20 bg-background-secondary animate-pulse`} />
              <p
                className={`mt-1 h-3 w-6 bg-background-secondary animate-pulse`}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }


  // error state
  if (error) {
    return (
      <div
        className={`flex flex-col items-center justify-center text-center w-full py-10`}
      >
        <h1 className={`text-6xl`}>:&#40;</h1>
        <div className={`mt-4`}>
          <h2 className={`text-2xl`}>We are Sorry</h2>
          <p className={`mt-1`}>Failed to fetch data</p>
        </div>
      </div>
    );
  }


  // table
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 shrink-0 gap-4 md:gap-8`}>
      {memoizedData?.map((rows, index) => (
        <div
          className={`flex  items-center shrink-0 gap-4 md:flex-col`}
          key={`country-${index}`}
        >
          <div>
            <Image
              className={`shrink-0 w-10 md:w-20 `}
              alt={`Country Image ${index}`}
              src={rows.countryImage}
              loader={({ src }) => src}
              width={1000}
              height={1000}
            />
          </div>
          <div className={`md:text-center`}>
            <p className={`text-text`}>{rows.name}</p>
            <p className={`text-text-secondary text-sm`}>{rows.alphaCode}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
