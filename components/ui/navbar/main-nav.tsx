"use client";

import { homectas, MarginX } from "@/utils/constants";
import { Box, Flex, Icon, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MainNav = () => {
  return (
    <Box py={4}>
      <Flex
        flexWrap="wrap"
        justify="space-between"
        align="center"
        mx={MarginX}
        gap={{ base: 4, md: 6 }}
      >
        {/* Logo */}
        <Box display="flex" gap={4}>
          <Link href={"/"}>
            {" "}
            <Image
              src="/Logo.png"
              alt="logo"
              width={useBreakpointValue({ base: 100, md: 200 })}
              height={useBreakpointValue({ base: 50, md: 100 })}
              loading="eager"
            />
          </Link>

          <Link href={"/"}>
            <Box pt={{ base: 0, md: 6 }}>
              {" "}
              <Image
                src="/Antea.png"
                alt="logo"
                width={useBreakpointValue({ base: 100, md: 160 })}
                height={useBreakpointValue({ base: 50, md: 110 })}
              />
            </Box>
          </Link>
        </Box>

        {/* CTA Section */}
        <Flex
          flexWrap="wrap"
          gap={{ base: 3, md: 5 }}
          justify={{ base: "center", md: "flex-end" }}
        >
          {homectas.map((cta, index) => (
            <Flex
              key={index}
              align="center"
              gap={3}
              flexDirection={{ base: "column", md: "row" }}
              textAlign={{ base: "center", md: "left" }}
            >
              {/* Icon Container */}
              <Box
                border={{ base: "none", md: "1px solid red" }}
                p={3}
                borderRadius="full"
              >
                <Icon color="red" boxSize={{ base: 5, md: 6 }}>
                  {cta.icon}
                </Icon>
              </Box>

              {/* Text Section */}
              <Box>
                <Text fontSize={{ base: "sm", md: "md" }} fontWeight="bold">
                  {cta.text}
                </Text>
                <Text fontSize={{ base: "xs", md: "sm" }}>{cta.desc}</Text>
              </Box>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default MainNav;
