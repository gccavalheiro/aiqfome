import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Layout } from "@/components/layout";
config.autoAddCss = false;

const geistSans = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
