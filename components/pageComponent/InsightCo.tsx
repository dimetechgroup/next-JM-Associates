"use client";

import Loading from "@/components/Loading";
import { MarginX } from "@/utils/constants";
import { useDefaultSectionArray } from "@/utils/hooks/useDefaultSectionArray";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
  HStack,
  Badge,
} from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const ITEMS_PER_PAGE = 9; // 3x3 grid looks better

const InsightCom = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    error: insightError,
    loading: insightLoading,
    sectionArray: insightData,
  } = useDefaultSectionArray("insights");

  if (insightLoading) return <Loading />;

  if (insightError) {
    return (
      <Box py={20} textAlign="center">
        <Text fontSize="xl" color="red.500">
          Error: {insightError}
        </Text>
      </Box>
    );
  }

  if (!insightData?.length) {
    return (
      <Box py={20} textAlign="center">
        <Text fontSize="xl" color="gray.500">
          No insights available at the moment.
        </Text>
      </Box>
    );
  }

  const totalPages = Math.ceil(insightData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = insightData.sort((a, b) =>{  
            const dateA = new Date(a._created ?? "").getTime();
            const dateB = new Date(b._created ?? "").getTime();
            return dateB - dateA; // Most recent first
          }).slice(startIndex, startIndex + ITEMS_PER_PAGE);

 
  return (
    <Box bg="gray.50" minH="100vh">
      {/* Hero Section */}
      <Box bg="white" py={16} borderBottom="1px solid" borderColor="gray.100">
        <Container maxW="7xl" mx="auto" px={MarginX}>
          <VStack textAlign="center" gap={4}>
            <Badge colorScheme="red" px={4} py={1} borderRadius="full" fontSize="sm">
              KNOWLEDGE HUB
            </Badge>
            <Heading
              as="h1"
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="900"
              letterSpacing="tight"
              mb={4}
              color="gray.900"
            >
              Latest Insights
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="2xl" mx="auto">
              Expert perspectives, industry trends, and strategic analysis to help your business thrive.
            </Text>
          </VStack>
        </Container>
      </Box>

      <Container maxW="7xl" mx="auto" px={MarginX} py={12}>
        {/* Insights Grid */}
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={8}
        >
          {currentItems.sort((a, b) =>{ 
            const dateA = new Date(a._created ?? "").getTime();
            const dateB = new Date(b._created ?? "").getTime();
            return dateB - dateA; // Most recent first
          }
          ).map((insight, index) => (
            <motion.div
              key={insight._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link href={`/blogs/insights/${insight._id}`}>
                <Box
                  bg="white"
                  borderRadius="2xl"
                  overflow="hidden"
                  boxShadow="md"
                  height="full"
                  transition="all 0.4s ease"
                  _hover={{
                    boxShadow: "2xl",
                    transform: "translateY(-8px)",
                  }}
                >
                  {/* Image */}
                  <Box position="relative" height="240px" overflow="hidden">
                    <Image
                      src={
                        insight.image
                          ? `https://cms.jmassociates.co.ke/storage/uploads${insight.image.path}`
                          : "/Home/about.jpeg"
                      }
                      alt={insight.title}
                      width="100%"
                      height="100%"
                      objectFit="cover"
                      transition="transform 0.6s ease"
                      _hover={{ transform: "scale(1.08)" }}
                    />
                    <Box
                      position="absolute"
                      top={4}
                      right={4}
                      bg="white"
                      px={3}
                      py={1}
                      borderRadius="full"
                      fontSize="xs"
                      fontWeight="600"
                      color="#aa1f30"
                      boxShadow="sm"
                    >
                      INSIGHT
                    </Box>
                  </Box>

                  {/* Content */}
                  <VStack align="stretch" p={6} gap={4}>
                    <HStack color="gray.500" fontSize="sm">
                      <FaCalendarAlt />
                      <Text>{"Recent"}</Text>
                    </HStack>

                    <Heading
                      as="h3"
                      fontSize="lg"
                      lineHeight="1.4"
                      fontWeight="700"
                      color="gray.900"
                    >
                      {insight.title}
                    </Heading>

                    <Flex align="center" color="#aa1f30" fontWeight="600" fontSize="sm" mt={2}>
                      Read Full Insight
                      <FaArrowRight style={{ marginLeft: "8px" }} />
                    </Flex>
                  </VStack>
                </Box>
              </Link>
            </motion.div>
          ))}
        </Grid>

        {/* Pagination */}
        {totalPages > 1 && (
          <Flex justify="center" mt={16} gap={3} flexWrap="wrap">
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              _hover={{ bg: "#aa1f30", color: "white", borderColor: "#aa1f30" }}
              p={{ base: 4, md: 6}}
            >
              ← Previous
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "solid" : "outline"}
                colorScheme={currentPage === page ? "red" : "gray"}
                onClick={() => setCurrentPage(page)}
                minW="44px"
              >
                {page}
              </Button>
            ))}

            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              p={{ base: 4, md: 6}}
              _hover={{ bg: "#aa1f30", color: "white", borderColor: "#aa1f30" }}
            >
              Next →
            </Button>
          </Flex>
        )}
      </Container>
    </Box>
  );
};

export default InsightCom;