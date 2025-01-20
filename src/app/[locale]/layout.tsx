import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "../context/theme-provider";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import ClientLayout from "./clientLayout";
import CustomCursor from "../components/customCursor";
import { CursorProvider } from "../context/CursorContext";

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
  if (!routing.locales.includes(locale as "en" | "da")) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <CursorProvider>
              <CustomCursor />
              <ClientLayout>{children}</ClientLayout>
            </CursorProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
