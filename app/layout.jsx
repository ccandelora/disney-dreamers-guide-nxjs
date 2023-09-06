import "./globals.css";
import Script from "next/script";
import { Inter } from "next/font/google";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const GTM_ID = "GTM-TDBSR6HL";

export const metadata = {
  title: "Disney Dreamer's Guide",
  description: "Get all the info you need to plan you next Disney World trip!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-J1ZE0F4796"
      />
      <Script id="ga">
        {`
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-J1ZE0F4796');
        `}
      </Script>

      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2603238801904684"
        crossorigin="anonymous"
      />

      <body className={inter.className}>
        <div className="bg-page-pattern">
          <Navbar />
          {children}
          {/*
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
          
        />
        */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
