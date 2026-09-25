import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maxence Bakana — Portfolio BTS SIO SISR",
  description: "Portfolio interactif de Maxence Bakana, étudiant en BTS SIO SISR."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}