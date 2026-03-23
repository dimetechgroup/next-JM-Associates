"use client";
import {
  Box,
  Stack,
  VStack,
  Text,
  Link,
  Flex,
  HStack,
  Icon,
  Image,
} from "@chakra-ui/react";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <Box
      position="relative"
      py={20}
      bgImage="url('/slider/Slide1.jpg')"
      bgSize="cover"
      backgroundPosition="center"
      bgRepeat="no-repeat"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={0.8}
        bg={"gray.900"}
      />

      {/* Footer Content */}
      <Stack
        direction={["column", "row"]}
        gap={8}
        justify="space-between"
        px={10}
        color="white"
        position={"relative"}
      >
        {/* Column 1: Logo and About */}
        <VStack align="start" w={["100%", "20%"]}>
          <Image
            src="/Logo.png"
            alt="JM Associates"
            w={40}
            h={20}
            objectFit="cover"
            loading="eager"
          />
          <Text fontSize="sm">
            We offer professional services in Audit, Tax, Consulting, and
            Financial Advisory across Africa.
          </Text>
        </VStack>

        {/* Column 2: Quick Links */}
        <VStack align="start" w={["100%", "15%"]}>
          <Text fontSize="lg" fontWeight="bold" color="red.500">
            Quick Links
          </Text>
          <Flex direction="column" gap={2}>
            <Link href="/about-us">
              <Text color="white">About Us</Text>
            </Link>
            <Link href="#">
              <Text color="white">Services</Text>
            </Link>
            <Link href="#">
              <Text color="white">Contact Us</Text>
            </Link>
          </Flex>
        </VStack>

        {/* Column 3: Contacts */}
        <VStack align="start" w={["100%", "20%"]}>
          <Text fontSize="lg" fontWeight="bold" color="red.500">
            Contacts
          </Text>
          <Box>
            <Text>Phone: +254 733 818 835</Text>
            <Text>
              Email:{" "}
              <Link href="mailto:info@jmassociates.co.ke">
                <Text as="span" color="white">
                  info@jmassociates.co.ke
                </Text>
              </Link>
            </Text>
          </Box>
        </VStack>

        {/* Column 4: Location */}
        <VStack align="start" w={["100%", "20%"]}>
          <Text fontSize="lg" fontWeight="bold" color="red.500">
            Location
          </Text>
          <Box>
            <Text>8th Floor, West Park Towers</Text>
            <Text>Mpesi Lane Off, Muthithi Road</Text>
            <Text>Westlands, Nairobi</Text>
          </Box>
        </VStack>

        {/* Column 5: Social Media */}
        <VStack align="start" w={["100%", "15%"]}>
          <Text fontSize="lg" fontWeight="bold" color={"red.500"}>
            Follow Us
          </Text>
          <HStack gap={3}>
            <Link href="https://www.facebook.com/jmassociateske">
              <Icon as={FaFacebookF} boxSize={5} color="blue.500" />
            </Link>
            <Link href="https://x.com/JMAssociatesLLP">
              <Icon as={FaXTwitter} boxSize={5} color="white" />
            </Link>
            <Link href="https://www.instagram.com/jmassociatesllp">
              <Icon as={FaInstagram} boxSize={5} color="red.500" />
            </Link>
            <Link href="https://www.linkedin.com/company/jm-associates-ke/">
              <Icon as={FaLinkedinIn} boxSize={5} color="blue.500" />
            </Link>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
