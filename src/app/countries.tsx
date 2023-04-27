import { supabase } from '@/src/lib/supabaseClient';

type Country = {
  id: string;
  name: string;
}

function Page({ countries }: { countries: Country[] }) {
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.id}>{country.name}</li>
      ))}
    </ul>
  );
}

export async function getServerSideProps() {
  let { data } = await supabase.from('countries').select()

  return {
    props: {
     countries: data
    },
  }
}

export default Page;