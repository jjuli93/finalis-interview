import type { Metadata } from "next";
import { Provider } from "@/components/chakra-snippets/provider";
import { Box, Container } from "@chakra-ui/react";
import { Navbar } from "@/components/navbar/navbar";
import { Toaster } from "@/components/chakra-snippets/toaster";

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
          <Box position="sticky" top={0} zIndex="sticky">
            <Navbar />
          </Box>
          <Container padding={10}>{children}</Container>
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
