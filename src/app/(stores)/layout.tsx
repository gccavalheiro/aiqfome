import { DeliveryLocation } from "@/components/delivery-location";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { ReactNode } from "react";

interface StoresLayoutProps {
  children: ReactNode;
}

export default function StoresLayout({ children }: StoresLayoutProps) {
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

      <Footer.Root>
        <Footer.Container>
          <Footer.Location>feito com 💜 em maringá-PR</Footer.Location>
          <Button
            className="ml-auto w-full min-w-[17rem] lg:hidden"
            size="lg"
            asChild
          >
            <Link href={`/checkouts/4d29fb5c-5a61-4b9c-b6ed-3ec4d993d98b`}>
              ver ticket
            </Link>
          </Button>
          <Footer.Copyright className="hidden lg:block">
            aiqfome.com © 2007-2023 aiqfome LTDA . CNPJ: 09.186.786/0001-58
          </Footer.Copyright>
        </Footer.Container>
      </Footer.Root>
    </div>
  );
}
