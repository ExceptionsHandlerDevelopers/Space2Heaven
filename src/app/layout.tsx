import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Home2Nest",
  description: "Find your perfect space with Home Nest – your trusted partner in buying and selling properties tailored just for you.",
  icons:{
    icon: "/logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="bg-sand-soft">
        {children}
      </body>
    </html>
  );
}
