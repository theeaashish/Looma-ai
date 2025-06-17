import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { ThemeProvider } from "@/Providers/theme-provider";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Looma – Automate Instagram DMs with AI",
  description:
    "Looma lets creators and businesses automate Instagram DMs triggered by keyword comments. Reply instantly with AI or custom messages.",
  keywords: [
    "Instagram DM automation",
    "AI Instagram bot",
    "Instagram auto message",
    "DM keyword trigger",
    "Looma AI",
    "Creator tools",
    "Social media automation",
  ],
  authors: [{ name: "Looma" }],
  creator: "Looma Team",
  openGraph: {
    title: "Looma – Automate Instagram DMs with AI",
    description:
      "Trigger Instagram DMs with comment keywords. Respond instantly with AI-powered or prewritten messages.",
    url: "https://looma.vercel.app",
    siteName: "Looma",
    images: [
      {
        url: "https://looma.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Looma - Instagram DM Automation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Looma – Automate Instagram DMs with AI",
    description:
      "Automate Instagram DMs when someone comments on your post — powered by AI or your own message.",
    images: ["https://looma.vercel.app/og-image.png"],
    creator: "@theeaashish",
  },
  metadataBase: new URL("https://looma.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className} suppressHydrationWarning>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
