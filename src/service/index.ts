import { CountryProps } from "@/types";

export async function getCountryList() {
  const response = await fetch(
    "/apis", // using proxy to bypass CORS error
    {
      headers: {
        Accept: "*/*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Credentials": "true",
        "Upgrade-Insecure-Requests": "1",
      },
    }
  );

  // Ensure the response is okay
  if (!response.ok) {
    const error = await response.json();
    throw new Error(JSON.stringify(error));
  }

  // Parse the response as JSON and type it as User[]
  const data: CountryProps[] = await response.json();
  return data;
}
