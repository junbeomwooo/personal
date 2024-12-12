import type { Metadata } from "next";
import "../globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import {NextIntlClientProvider} from 'next-intl';
import CustomCursor from "../components/customCursor";
import Header from "../components/header";

export const metadata: Metadata = {
  title: "Junbeom Woo - Full Stack Developer",
  description: "Junbeom Woo's personal website",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as 'en' | 'da')) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <CustomCursor />
            <Header/>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
