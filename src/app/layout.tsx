
import "./globals.css";
import { Metadata } from "next";
import { Layout } from "@/components/Layout";

export const metadata: Metadata = {
  title: "Hobnob and Evil",
  description: "Josh and Eve are tying the knot this November! We've been planning our wedding since our third date, and we can't wait to finally celebrate with our nearest and dearest.",
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Layout>
        {children}
      </Layout>
    </html>
  );
}
