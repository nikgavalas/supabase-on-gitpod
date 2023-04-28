import { supabase } from '@/src/lib/supabaseClient';

type Country = {
  id: string;
  name: string;
}

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
  // const res = await fetch('https://api.example.com/...');
  let { data } = await supabase.from('countries').select()
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  return (data || []) as Country[];
  // Recommendation: handle errors
  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data');
  // }

  // return res.json();
}

// export async function getServerSideProps() {
//   let { data } = await supabase.from('countries').select()

//   return {
//     props: {
//      countries: data
//     },
//   }
// }

// export default Page;