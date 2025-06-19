import { faUser } from "@fortawesome/free-regular-svg-icons";
import type { Metadata } from "next";

import "../globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Header } from "@/components/header";
import { Logo } from "@/components/logo";
import { DeliveryLocation } from "@/components/delivery-location";
import { Search } from "@/components/search";
import { Icon } from "@/components/ui/icon";
import { Footer } from "@/components/footer";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "O aiqfome é o melhor app de delivery da sua cidade e região",
  description:
    "Peça seu delivery pelo aiqfome ou torne-se um lojista ou licenciado parceiro para fazer parte do 2º maior app de delivery do Brasil e líder do interior",
  openGraph: {
    title: "O aiqfome é o melhor app de delivery da sua cidade e região",
    description:
      "Peça seu delivery pelo aiqfome ou torne-se um lojista ou licenciado parceiro para fazer parte do 2º maior app de delivery do Brasil e líder do interior",
    url: "https://site-set-blog-next.vercel.app/og-image.jpg",
    siteName: "Aiqfome",
    locale: "pt-BR",
    type: "website",
    images: [
      {
        url: "https://site-set-blog-next.vercel.app/og-image.jpg",
        width: 800,
        height: 600,
        alt: "O aiqfome é o melhor app de delivery da sua cidade e região",
      },
    ],
  },
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative text-neutral-500">
      <Header.Root>
        <Header.Container>
          <Header.Content className="grid-template-header grid grid-cols-[auto_1fr_auto] md:flex">
            <Header.Logo className="[grid-area:logo]">
              <Logo />
            </Header.Logo>
            <Header.Location className="[grid-area:location]">
              <DeliveryLocation />
            </Header.Location>
            <Header.Search className="[grid-area:search]">
              <Search />
            </Header.Search>
            <Header.User className="[grid-area:user]">
              <Icon icon={faUser} size={20} />
            </Header.User>
          </Header.Content>
        </Header.Container>
      </Header.Root>

      <main className="min-h-[calc(100dvh-6.25rem)] pt-[7.875rem] md:pt-[4.75rem]">
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
  );
}
