"use client";

import { MarginX } from "@/utils/constants";
import { useDefaultSectionArray } from "@/utils/hooks/useDefaultSectionArray";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Loading from "@/components/Loading";

const Services = () => {
  const {
    sectionArray: services,
    error,
    loading,
  } = useDefaultSectionArray("services");
  console.log(services);

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
  if (!services || services.length === 0) {
    return (
      <Box py={20} textAlign="center">
        <Text fontSize="xl" color="gray.500">
          No services available
        </Text>
      </Box>
    );
  }

  return (
    <Box as="section" bg="gray.50" py={{ base: 16, md: 24 }}>
      <Box mx={MarginX}>
        {/* Section Header */}
        <VStack gap={4} textAlign="center" mb={16}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Flex align="center" justify="center" gap={3} mb={3}>
              <Box w="50px" h="3px" bg="#aa1f30" borderRadius="full" />
              <Text
                fontSize="sm"
                fontWeight="600"
                letterSpacing="2px"
                color="#aa1f30"
                textTransform="uppercase"
              >
                What We Offer
              </Text>
            </Flex>

            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "4.5xl" }}
              fontWeight="700"
              color="gray.800"
            >
              Our Professional Services
            </Heading>
          </motion.div>

          <Text
            maxW="680px"
            mx="auto"
            fontSize={{ base: "sm", md: "base" }}
            color="gray.600"
            lineHeight="1.7"
          >
            Discover the wide range of professional services we offer to help
            your business thrive. From accounting and taxation to risk
            management and corporate finance, we deliver tailored solutions.
          </Text>
        </VStack>

        {/* Services Grid */}
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={{ base: 2, md: 3 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GridItem
                as={"a"}
                // href={`/services?tab=${service._id}`}
                bg="white"
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="md"
                _hover={{
                  boxShadow: "2xl",
                  transform: "translateY(-12px)",
                }}
                transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                height="100%"
                display="flex"
                flexDirection="column"
              >
                {/* Service Image */}
                <Box position="relative" height="220px" overflow="hidden">
                  <Image
                    src={
                      service.image
                        ? `https://cms.jmassociates.co.ke/storage/uploads${service.image.path}`
                        : "/Home/about.jpeg"
                    }
                    alt={service.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                  {/* Subtle red overlay on hover */}
                  <Box
                    position="absolute"
                    inset={0}
                    bg="linear-gradient(transparent, rgba(170,31,48,0.15))"
                    opacity={0}
                    _groupHover={{ opacity: 1 }}
                    transition="opacity 0.4s"
                  />
                </Box>

                {/* Content */}
                <VStack
                  align="flex-start"
                  p={8}
                  gap={4}
                  flex="1"
                  justify="space-between"
                >
                  <VStack align="flex-start" gap={3}>
                    <Heading
                      as="h3"
                      fontSize="xl"
                      fontWeight="600"
                      color="gray.800"
                      lineHeight="1.3"
                    >
                      {service.title}
                    </Heading>

                    <Text
                      color="gray.600"
                      fontSize="xs"
                      lineHeight="1.7"
                      dangerouslySetInnerHTML={{
                        __html:
                          service.description
                            ?.split(" ")
                            .slice(0, 35)
                            .join(" ") + "...",
                      }}
                    />
                  </VStack>

                  {/* Learn More */}
                  <ChakraLink
                    color="#aa1f30"
                    fontWeight="600"
                    fontSize="md"
                    display="inline-flex"
                    href={`/services?tab=${service._id}`}
                    alignItems="center"
                    gap={2}
                    _hover={{ color: "#8a1926" }}
                  >
                    Learn More
                    <Box as="span" fontSize="lg" transition="transform 0.3s">
                      →
                    </Box>
                  </ChakraLink>
                </VStack>
              </GridItem>
            </motion.div>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Services;
