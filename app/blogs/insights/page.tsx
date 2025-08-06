"use client";
import Loading from "@/components/Loading";
import { MarginX } from "@/utils/constants";
import { useDefaultSectionArray } from "@/utils/hooks/useDefaultSectionArray";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";

const ITEMS_PER_PAGE = 10;

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    error: insightError,
    loading: insightLoading,
    sectionArray: insightData,
  } = useDefaultSectionArray("insights");

  if (insightLoading) {
    return (
      <Text>
        <Loading />
      </Text>
    );
  }

  if (insightError) {
    return <Text>Error: {insightError}</Text>;
  }

  if (!insightData?.length) {
    return <Text>No insights available</Text>;
  }

  // Pagination logic
  const totalPages = Math.ceil(insightData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = insightData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <>
      <Box textAlign="center" py={10}>
        <Heading as="h2" fontSize="2xl" fontWeight="bold" mb={4}>
          All INSIGHTS
        </Heading>
        <Box marginX={MarginX}>
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
            {currentItems.map((insight) => (
              <GridItem
                key={insight._id}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                _hover={{
                  boxShadow: "xl",
                  cursor: "pointer",
                  transform: "scale(1.05)",
                  transition: "all 0.3s",
                }}
              >
                <Link href={`/blogs/insights/${insight._id}`}>
                  <Image
                    src={
                      insight.image
                        ? `https://cms.jmassociates.co.ke/storage/uploads${insight.image.path}`
                        : "/Home/about.jpeg"
                    }
                    alt={insight.title}
                    objectFit="cover"
                    width="100%"
                    height="200px"
                  />
                  <Box p={4}>
                    <Text fontSize="sm" color="gray.500">
                      {insight.start_date}
                    </Text>
                    <Heading as="h3" fontSize="lg" fontWeight="semibold" mt={1}>
                      {insight.title}
                    </Heading>
                    <Flex align="center" mt={2}>
                      <Text
                        fontSize="sm"
                        color="blue.500"
                        textDecoration="underline"
                      >
                        Read More
                      </Text>
                    </Flex>
                  </Box>
                </Link>
              </GridItem>
            ))}
          </Grid>

          {/* Pagination controls */}
          <Flex justify="center" mt={8} gap={4}>
            <Button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <Text fontWeight="bold" alignSelf="center">
              Page {currentPage} of {totalPages}
            </Text>
            <Button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Page;
