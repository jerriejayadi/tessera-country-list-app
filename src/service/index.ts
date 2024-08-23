import { CountryProps } from "@/types";

export async function getCountryList() {
  const response = await fetch(
    "https://yourtessera-backend-api-staging.up.railway.app/locations/countries"
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
