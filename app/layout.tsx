import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SADMAN SAKIB ABIR",
  description:
    "Sadman Sakib Abir | Cybersecurity Enthusiast | Penetration Testing | SOC Operations",
  keywords: [
    "Cybersecurity",
    "Penetration Testing",
    "SOC Analyst",
    "Kali Linux",
    "Security Research",
    "Sadman Sakib Abir",
  ],
  authors: [
    {
      name: "Sadman Sakib Abir",
    },
  ],
  creator: "Sadman Sakib Abir",

  openGraph: {
    title: "SADMAN // CYBER OPERATIONS",
    description:
      "Cybersecurity portfolio and security research profile",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html lang="en">

      <body>

        <div className="cyber-overlay" />

        {children}

      </body>

    </html>

  );

}
