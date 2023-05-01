import { Country } from '@prisma/client';
import { prisma } from '@/src/lib/prisma-client';

export default async function Page() {
  const countries = await getData();
  return (
    <div>
      <h1>Countries</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.id}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
}

async function getData(): Promise<Country[]> {
  const data = await prisma.country.findMany();
  return data;
}
