"use client";
import { MarginX } from "@/utils/constants";
import { useDefaultSectionData } from "@/utils/hooks/useDefaultSectionData";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Loading from "@/components/Loading";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const About = () => {
  const { sectionData, error, loading } = useDefaultSectionData("homeabout");

  if (loading) return <Loading />;
  if (error) {
    return (
      <Box py={20} textAlign="center">
        <Text fontSize="xl" color="red.500">
          Error: {error}
        </Text>
      </Box>
    );
  }

  return (
    <Box as="section" py={{ base: 16, md: 24 }} bg="white">
      <Flex
        mx={MarginX}
        direction={{ base: "column", lg: "row" }}
        gap={{ base: 12, lg: 16 }}
        align="start"
      >
        {/* Left Side - Image */}
        <Box
          flex="1"
          position="relative"
          borderRadius="2xl"
          overflow="hidden"
          boxShadow="2xl"
          _hover={{ transform: "scale(1.02)" }}
          transition="transform 0.6s ease"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <Image
              src={
                sectionData?.image?.path
                  ? `https://cms.jmassociates.co.ke/storage/uploads${sectionData.image.path}`
                  : "/about.jpg"
              }
              alt="About JM Associates"
              width={800}
              height={600}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "16px",
              }}
              priority
            />
          </motion.div>

          {/* Subtle overlay accent */}
          <Box
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            height="40%"
            bg="linear-gradient(transparent, rgba(170,31,48,0.15))"
            pointerEvents="none"
          />
        </Box>

        {/* Right Side - Content */}
        <Box flex="1" p={{ base: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <VStack align="flex-start" gap={6}>
              {/* Accent Line + Title */}
              <Flex align="center" gap={4}>
                <Box w="60px" h="3px" bg="#aa1f30" borderRadius="full" />
                <Text
                  fontSize="sm"
                  fontWeight="600"
                  letterSpacing="2px"
                  color="#aa1f30"
                  textTransform="uppercase"
                >
                  Who We Are
                </Text>
              </Flex>

              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "4.5xl", lg: "5xl" }}
                lineHeight="1.1"
                fontWeight="700"
                color="gray.800"
              >
                {sectionData?.title || "About JM Associates"}
              </Heading>

              {/* Description */}
              <Text
                fontSize={{ base: "sm", md: "base" }}
                lineHeight="1.75"
                color="gray.600"
                dangerouslySetInnerHTML={{
                  __html:
                    sectionData?.description || "No description available.",
                }}
              />

              {/* Learn More Link */}
              <Link href="/about-us" passHref>
                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    gap: "3px",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="ghost"
                    color="#aa1f30"
                    fontSize="lg"
                    fontWeight="600"
                    _hover={{
                      bg: "transparent",
                      color: "#8a1926",
                    }}
                    px={0}
                    py={6}
                  >
                    <p>Learn more about us</p>
                  </Button>
                  <FaArrowRight size={10} color="#8a1926" />
                </motion.div>
              </Link>
            </VStack>
          </motion.div>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
