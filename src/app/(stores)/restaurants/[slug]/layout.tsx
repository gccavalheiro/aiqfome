import { DeliveryLocation } from "@/components/delivery-location";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Logo } from "@/components/logo";
import { Icon } from "@/components/ui/icon";
import { CheckoutProvider } from "@/contexts/checkout.context";
import { getRestaurantBySlugService } from "@/services/restaurant-service";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

interface RestaurantLayoutProps {
  children: ReactNode;
  params: Promise<{
    slug: string;
  }>;
}

export default async function RestaurantLayout(props: RestaurantLayoutProps) {
  const { children, params } = props;

  const { slug } = await params;

  const restaurant = await getRestaurantBySlugService(slug);

  if (!restaurant) {
    redirect("/");
  }

  return (
    <CheckoutProvider restaurant={restaurant}>
      <div className="relative text-neutral-500">
        <Header.Root>
          <Header.Container>
            <Header.Content className="md:justify-start">
              <Header.Logo>
                <Logo />
              </Header.Logo>
              <Header.Location className="">
                <DeliveryLocation />
              </Header.Location>

              <Header.User className="md:ml-auto">
                <Icon icon={faUser} size={20} />
              </Header.User>
            </Header.Content>
          </Header.Container>
        </Header.Root>

        <main className="flex min-h-[calc(100dvh-6.25rem)] flex-col pt-[4.75rem]">
          {children}
        </main>

        <Footer.Root>
          <Footer.Container>
            <Footer.Location>feito com 💜 em maringá-PR</Footer.Location>
            <Footer.Copyright>
              aiqfome.com © 2007-2023 aiqfome LTDA . CNPJ: 09.186.786/0001-58
            </Footer.Copyright>
          </Footer.Container>
        </Footer.Root>
      </div>
    </CheckoutProvider>
  );
}
