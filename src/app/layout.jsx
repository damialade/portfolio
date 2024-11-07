import "./styles/globals.css";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
});

export const metadata = {
  title: "Dami Alade | Frontend Engineer",
  description:
    "Dev Portfolio showcasing projects and Damilola Aladeokin's work as a Frontend Engineer with two years of professional experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />

        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${robotoMono.className} antialiased`}>{children}</body>
    </html>
  );
}
