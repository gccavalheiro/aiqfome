import { Hero } from "@/components/hero";
import { RestaurantsPage } from "@/pages/restaurants";
import { data } from "@/utils/data";
import Image from "next/image";

export default async function Home() {
  return (
    <main>
      <Hero.Root>
        <Image
          src="/assets/images/hero-banner.jpg"
          alt="Hero"
          width={1200}
          height={400}
        />
      </Hero.Root>
      <RestaurantsPage data={data} />
    </main>
  );
}
