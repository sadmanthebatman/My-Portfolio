import "./globals.css";

export const metadata = {
  title: "Sadman Sakib Abir | Portfolio | Cybersecurity Enthusiast",
  description: "Cybersecurity portfolio of Sadman Sakib Abir"
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}