import { z } from "zod";

const BASE_ENDPOINT = "https://restcountries.com/v3.1";

const GetCountryCurrenciesResponseSchema = z.array(
  z.object({
    currencies: z.record(
      z.string(),
      z.object({
        name: z.string(),
        symbol: z.string(),
      })
    ),
  })
);

export const getCountryCurrencies = async (country: string) => {
  const response = await fetch(
    `${BASE_ENDPOINT}/name/${country}?fullText=true&fields=currencies`
  ).then((res) => res.json());
  const data = GetCountryCurrenciesResponseSchema.parse(response);

  return Object.values(data[0].currencies);
};
