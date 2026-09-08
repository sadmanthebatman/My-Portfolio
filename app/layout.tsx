import "./globals.css";

export const metadata={
 title:"Sadman Sakib Abir | Cybersecurity Portfolio",
 description:"Kali Linux inspired cybersecurity portfolio"
};

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en"><body>{children}</body></html>;
}
