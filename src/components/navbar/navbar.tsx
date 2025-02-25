"use client";

import { Flex, Image } from "@chakra-ui/react";
import {
  ColorModeButton,
  useColorModeValue,
} from "../chakra-snippets/color-mode";
import Link from "next/link";

export function Navbar() {
  return (
    <Flex
      as="header"
      justifyContent="space-between"
      alignItems="center"
      py={2}
      px={4}
      borderBottom={1}
      borderBottomStyle="solid"
      bg={useColorModeValue("white", "gray.800")}
      borderColor={useColorModeValue("gray.200", "gray.900")}
    >
      <Link href={"/"}>
        <Image
          src={useColorModeValue(
            "/finalis-logo.svg",
            "/finalis-logo-white.svg"
          )}
          alt="finalis logo"
        />
      </Link>
      <ColorModeButton />
    </Flex>
  );
}
