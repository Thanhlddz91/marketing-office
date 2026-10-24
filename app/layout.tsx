import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ABABY · Văn phòng điều hành",
  description: "Văn phòng chibi trực quan cho các bộ phận ABABY.",
  
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased">{children}</body>
    </html>
  );
}

