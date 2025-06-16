import { Hero } from "@/components/hero";
import { RestaurantsPage } from "@/pages/restaurants";
import { NextJsSearchParams } from "@/types/nextjs";
import Image from "next/image";

interface HomePageProps {
  searchParams: NextJsSearchParams;
}

export default async function Home(props: HomePageProps) {
  const { searchParams } = props;
  const query = ((await searchParams)?.q || "") as string;

  return (
    <div>
      <Hero.Root>
        <Image
          src="/assets/images/hero-banner.jpg"
          alt="Hero"
          width={1200}
          height={400}
        />
      </Hero.Root>
      <RestaurantsPage query={query} />
    </div>
  );
}
