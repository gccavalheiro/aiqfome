import { faUser } from "@fortawesome/free-regular-svg-icons";
import { DeliveryLocation } from "../delivery-location";

import { Header } from "../header";
import { Logo } from "../logo";
import { Search } from "../search";
import { Icon } from "../ui/icon";
import { Footer } from "../footer";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <div className="relative text-neutral-500">
      <Header.Root>
        <Header.Container>
          <Header.Content>
            <Header.Logo>
              <Logo />
            </Header.Logo>
            <Header.Location>
              <DeliveryLocation />
            </Header.Location>
            <Header.Search className="hidden md:block">
              <Search />
            </Header.Search>
            <Header.User>
              <Icon icon={faUser} size={20} />
            </Header.User>
          </Header.Content>
          <Header.Search className="md:hidden">
            <Search />
          </Header.Search>
        </Header.Container>
      </Header.Root>

      <main className="min-h-[calc(100dvh-6.25rem)] pt-[8.25rem] md:pt-[4.75rem]">
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
