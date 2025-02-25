import type { Metadata } from "next";
import { Provider } from "@/components/chakra-snippets/provider";
import { Container } from "@chakra-ui/react";
import { Navbar } from "@/components/navbar/navbar";

export const metadata: Metadata = {
  title: "Finalis interview",
  description: "Finalis human capital management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <Navbar />
          <Container padding={10}>{children}</Container>
        </Provider>
      </body>
    </html>
  );
}
