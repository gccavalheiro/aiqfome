import { DeliveryLocation } from "@/components/delivery-location";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { ReactNode } from "react";

interface CheckoutLayoutProps {
  children: ReactNode;
}

export default function CheckoutLayout({ children }: CheckoutLayoutProps) {
  return (
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

      <main className="min-h-[calc(100dvh-6.25rem)] pt-[4.75rem]">
        {children}
      </main>

      <Footer.Root className="sticky bottom-0">
        <Footer.Container>
          <div className="flex w-full flex-wrap items-center justify-between gap-3">
            <div className="flex flex-1 flex-col items-start">
              <h6 className="text-sm: font-bold text-neutral-900 md:text-lg">
                subtotal
              </h6>
              <h3 className="text-xl font-extrabold text-purple-500 md:text-2xl">
                R$ 100,00
              </h3>
            </div>

            <Button size="lg" className="xs:w-fit w-full" asChild>
              <Link href={`/checkouts/4d29fb5c-5a61-4b9c-b6ed-3ec4d993d98b`}>
                ir para pagamento
              </Link>
            </Button>
          </div>
        </Footer.Container>
      </Footer.Root>
    </div>
  );
}
