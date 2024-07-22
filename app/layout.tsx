import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/utils/theme";
import MainHeader from "@/components/main-header/main-header";
import Footer from "@/components/footer/footer";
import { myFont } from "@/fonts/font";

export const metadata: Metadata = {
  title: "Bakerlist",
  description: "Bakerlist, website for baker!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <ThemeProvider theme={theme}>
          <MainHeader></MainHeader>
          <main className="w-full grid grid-cols-6">
            <div className="col-start-2 col-span-4">{children}</div>
          </main>
          <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
