import { ModalProvider } from "@/providers/ModalProvider";
import { ToasterProvider } from "@/providers/ToastProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Admin Dashboard",
  description: "admin dashboard",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
