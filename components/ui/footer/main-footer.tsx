"use client";

import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
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
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <Box
      as="footer"
      position="relative"
      bg="gray.900"
      color="white"
      overflow="hidden"
    >
      {/* Background Image + Overlay */}
      <Box
        position="absolute"
        inset={0}
        bgImage="url('/slider/Slide1.jpg')"
        bgSize="cover"
        // bgPosition="center"
        opacity={0.12}
        zIndex={0}
      />
      <Box
        position="absolute"
        inset={0}
        bg="linear-gradient(to bottom, rgba(0, 0, 0, 0.33), rgba(170, 31, 47, 0.3))"
        zIndex={1}
      />

      <Container
        position="relative"
        zIndex={2}
        px={{ base: 10 }}
        py={{ base: 16, md: 20 }}
      >
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "2fr 1fr 1fr 1.2fr 1fr",
          }}
          gap={{ base: 4, md: 6, lg: 8 }}
        >
          {/* 1. Logo + About */}
          <GridItem>
            <VStack align="start" gap={6}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/Logo.png"
                  alt="JM Associates"
                  width={100}
                  height={70}
                  style={{ objectFit: "contain" }}
                />
              </motion.div>

              <Text fontSize="md" lineHeight="1.75" maxW="320px" opacity={0.95}>
                We offer professional services in Audit, Tax, Consulting, and
                Financial Advisory across Africa.
              </Text>

              <Text fontSize="sm" opacity={0.75}>
                Member of ANTEA — Alliance of Independent Firms
              </Text>
            </VStack>
          </GridItem>

          {/* 2. Quick Links */}
          <GridItem>
            <VStack align="start" gap={5}>
              <Heading as="h3" size="sm" color="#aa1f30" letterSpacing="1px">
                QUICK LINKS
              </Heading>
              <VStack align="start" gap={3}>
                <Link href="/about-us" passHref>
                  <Text _hover={{ color: "#aa1f30" }} transition="color 0.2s">
                    About Us
                  </Text>
                </Link>
                <Link href="/services" passHref>
                  <Text _hover={{ color: "#aa1f30" }} transition="color 0.2s">
                    Our Services
                  </Text>
                </Link>
                <Link href="/insights" passHref>
                  <Text _hover={{ color: "#aa1f30" }} transition="color 0.2s">
                    Insights
                  </Text>
                </Link>
                <Link href="/careers" passHref>
                  <Text _hover={{ color: "#aa1f30" }} transition="color 0.2s">
                    Careers
                  </Text>
                </Link>
                <Link href="/contact-us" passHref>
                  <Text _hover={{ color: "#aa1f30" }} transition="color 0.2s">
                    Contact Us
                  </Text>
                </Link>
              </VStack>
            </VStack>
          </GridItem>

          {/* 3. Get in Touch */}
          <GridItem>
            <VStack align="start" gap={5}>
              <Heading as="h3" size="sm" color="#aa1f30" letterSpacing="1px">
                GET IN TOUCH
              </Heading>
              <VStack align="start" gap={3}>
                <Text fontWeight="medium">Phone</Text>
                <Link href="tel:+254733818835">
                  <Text _hover={{ color: "#aa1f30" }}>+254 733 818 835</Text>
                </Link>

                <Text fontWeight="medium" mt={4}>
                  Email
                </Text>
                <Link href="mailto:info@jmassociates.co.ke">
                  <Text _hover={{ color: "#aa1f30" }}>
                    info@jmassociates.co.ke
                  </Text>
                </Link>
              </VStack>
            </VStack>
          </GridItem>

          {/* 4. Office Location */}
          <GridItem>
            <VStack align="start" gap={5}>
              <Heading as="h3" size="sm" color="#aa1f30" letterSpacing="1px">
                OUR OFFICE
              </Heading>
              <VStack align="start" gap={1}>
                <Text>8th Floor, West Park Towers</Text>
                <Text>Mpesi Lane, Off Muthithi Road</Text>
                <Text>Westlands, Nairobi, Kenya</Text>
                <Text>PO Box 23598-00625</Text>
              </VStack>
            </VStack>
          </GridItem>

          {/* 5. Social Media */}
          <GridItem>
            <VStack align="start" gap={5}>
              <Heading as="h3" size="sm" color="#aa1f30" letterSpacing="1px">
                FOLLOW US
              </Heading>
              <HStack gap={6}>
                <Link
                  href="https://www.facebook.com/jmassociateske"
                  target="_blank"
                >
                  <Icon
                    as={FaFacebookF}
                    boxSize={6}
                    _hover={{ color: "#aa1f30" }}
                    transition="color 0.2s"
                  />
                </Link>
                <Link href="https://x.com/JMAssociatesLLP" target="_blank">
                  <Icon
                    as={FaXTwitter}
                    boxSize={6}
                    _hover={{ color: "#aa1f30" }}
                    transition="color 0.2s"
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/jmassociatesllp"
                  target="_blank"
                >
                  <Icon
                    as={FaInstagram}
                    boxSize={6}
                    _hover={{ color: "#aa1f30" }}
                    transition="color 0.2s"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/jm-associates-ke/"
                  target="_blank"
                >
                  <Icon
                    as={FaLinkedinIn}
                    boxSize={6}
                    _hover={{ color: "#aa1f30" }}
                    transition="color 0.2s"
                  />
                </Link>
              </HStack>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
