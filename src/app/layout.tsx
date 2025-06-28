import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SimplerContent - Organize your content. Simplify your workflow.",
  description: "From client shoots to final uploads — SimplerContent helps creators stay on track, look professional, and grow without the chaos. Mobile-first content workflow management.",
  keywords: ["content creation", "workflow management", "mobile creators", "file organization", "professional photography", "content management"],
  authors: [{ name: "SimplerContent" }],
  creator: "SimplerContent",
  publisher: "SimplerContent",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://simplercontent.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SimplerContent - Organize your content. Simplify your workflow.",
    description: "From client shoots to final uploads — SimplerContent helps creators stay on track, look professional, and grow without the chaos.",
    url: "https://simplercontent.com",
    siteName: "SimplerContent",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SimplerContent - Content workflow management for creators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SimplerContent - Organize your content. Simplify your workflow.",
    description: "From client shoots to final uploads — SimplerContent helps creators stay on track, look professional, and grow without the chaos.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
