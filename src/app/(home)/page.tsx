import { Hero } from "@/components/hero";

import Image from "next/image";
import { RestaurantsPage } from "./components/restaurants.component";

interface HomePageProps {
  searchParams: Promise<{ q?: string }>;
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
