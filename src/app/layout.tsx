import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AuthProvider } from "@/components/auth/auth-provider";
// Theme switching is handled directly by daisyUI via data-theme attribute
// import { ThemeScript } from "@/components/theme/theme-script";
import "./globals.css";
import { SimpleThemeProvider } from "@/components/theme/simple-theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Journaly - by EFX24",
  description: "Professional Trading Journal with Multi-Account Support and Advanced Analytics - Created by EFX24",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <title>Journaly - by EFX24</title>
        <meta name="description" content="Professional Trading Journal with Multi-Account Support and Advanced Analytics - Created by EFX24" />
      </head>
      <body className={geistSans.className}>
        <SimpleThemeProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </SimpleThemeProvider>
      </body>
    </html>
  );
}
