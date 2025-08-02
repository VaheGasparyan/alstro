import type { Metadata } from "next";
import "./globals.css";
import MainPage from "./components/MainPage/MainPage";

export const metadata: Metadata = {
  title: "Альстромерии — Красота в каждом лепестке",
  description:
    "Добро пожаловать в мир альстромерий! Галерея ярких фотографий, вдохновения и свежих цветочных идей.",
  openGraph: {
    title: "Альстромерии — Галерея и вдохновение",
    description:
      "Погрузитесь в атмосферу нежности и красоты. Альстромерии — галерея лучших цветов для вдохновения и любви.",
    url: "https://alstro.am",
    siteName: "Alstro Gallery",
    images: [
      {
        url: "/images/og-alstro.jpg",
        width: 1200,
        height: 630,
        alt: "Альстромерия — нежные цветы",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://alstro.am",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <title>Альстромерии — Галерея цветов и вдохновение</title>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Alstro Gallery" />
        <meta
          name="keywords"
          content="альстромерия, цветы, галерея альстромерий, фото альстромерии, alstroemeria, alstro gallery, букет альстромерий, композиции из альстромерии, нежные цветы"
        />
        <meta
          name="description"
          content="Галерея альстромерий — яркие и нежные фотографии, композиции и идеи. Откройте для себя мир этих прекрасных цветов!"
        />
        <meta
          property="og:title"
          content="Альстромерии — Галерея красоты и вдохновения"
        />
        <meta
          property="og:description"
          content="Цветочная галерея альстромерий. Вдохновение, утонченность и красота в каждом лепестке."
        />
        <meta
          property="og:image"
          content="https://alstro.am/images/og-alstro.jpg"
        />
        <meta property="og:url" content="https://alstro.am" />
        <meta property="og:type" content="website" />
        <meta name="geo.region" content="RU" />
        <meta name="geo.placename" content="Россия" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.min.css"
        />
      </head>
      <body>
        <MainPage />
      </body>
    </html>
  );
}