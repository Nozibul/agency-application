import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Contact from "@/components/shared/Contact";

export async function generateMetadata() {
  const res = await fetch(process.env.BASE_URL + "SiteMeta/home");

  const jsonData = await res.json();

  return {
    title: jsonData[0].title,
    description: jsonData[0].description,
    keywords: jsonData[0].keywords,
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader color="#269669" height={4} speed={200} />
        <Navbar />
        <main>{children}</main>
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
