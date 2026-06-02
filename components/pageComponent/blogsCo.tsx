"use client";

import Loading from "@/components/Loading";
import { MarginX } from "@/utils/constants";
import { useDefaultSectionArray } from "@/utils/hooks/useDefaultSectionArray";
import {
  Box,
  Badge,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  Flex,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const metadata = {
  title: "Latest News & Insights - JM Associates LLP",
  description:
    "Stay updated with the latest news and insights from JM Associates LLP, a leading audit, tax, and advisory firm in Kenya. Discover expert perspectives on financial matters and business strategies across East Africa.",
};


const BlogsCom = () => {
  const {
    error: newsError,
    loading: newsLoading,
    sectionArray: newsData,
  } = useDefaultSectionArray("blogs");

  const {
    error: insightError,
    loading: insightLoading,
    sectionArray: insightData,
  } = useDefaultSectionArray("insights");

  if (newsLoading || insightLoading) return <Loading />;

  if (newsError || insightError) {
    return (
      <Box py={20} textAlign="center">
        <Text color="red.500">Error: {newsError || insightError}</Text>
      </Box>
    );
  }
  // Helper function to safely get date
  const getDateValue = (item: any): string => {
    return item.date || item.createdAt || item.publishedAt || new Date().toISOString();
  };

  // Sort by most recent first
  const sortedNews = [...(newsData || [])].sort(
    (a, b) => new Date(getDateValue(b)).getTime() - new Date(getDateValue(a)).getTime()
  );

  const sortedInsights = [...(insightData || [])].sort((a, b) =>{  
            const dateA = new Date(a._created ?? "").getTime();
            const dateB = new Date(b._created ?? "").getTime();
            return dateA - dateB; // Most recent first
          })

  // Get latest 3 items from each
  const latestNews = sortedNews.slice();
  const latestInsights = sortedInsights.slice(0, 3);

  const formatDate = (item: any) => {
    const dateValue = getDateValue(item);
    return new Date(dateValue).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  const getImageUrl = (item: any) => {
    if (item.image?.path) {
      return `https://cms.jmassociates.co.ke/storage/uploads${item.image.path}`;
    }
    return "/Home/about.jpeg";
  };


  return (
    <Box as="section" py={{ base: 16, md: 24 }} bg="gray.50">
      <Box mx={MarginX}>

        {/* ====================== RECENT NEWS ====================== */}
        <VStack  textAlign="center" mb={16}>
          <Badge
            colorScheme="red"
            px={5}
            py={1.5}
            borderRadius="full"
            fontSize="sm"
            fontWeight="600"
            letterSpacing="1px"
          >
            LATEST UPDATES
          </Badge>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="700"
            color="gray.800"
          >
            Recent News
          </Heading>
        </VStack>

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={{ base: 4, lg: 6 }}
          mb={20}
        >
          {newsData.slice((Number(newsData.length)-2), Number(newsData.length)).map((article, index) => (
            <motion.div
              key={article._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <Link href={`/blogs/${article._id}`}>
                <GridItem
                  bg="white"
                  borderRadius="xl"
                  overflow="hidden"
                  boxShadow="lg"
                  _hover={{ boxShadow: "2xl", transform: "translateY(-12px)" }}
                  transition="all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)"
                  height="100%"
                  display="flex"
                  flexDirection="column"
                >
                  <Box position="relative" height="340">
                    <Image
                      src={
                        article.image
                          ? `https://cms.jmassociates.co.ke/storage/uploads${article.image.path}`
                          : "/Home/about.jpeg"
                      }
                      alt={article.title}
                      objectFit="fit"
                      width="400"
                      height="326"
                    />
                  </Box>

                  <VStack align="flex-start" p={8} gap={4} flex="1">
                    <Heading as="h3" fontSize="lg" fontWeight="700" lineHeight="1.35">
                      {article.title}
                    </Heading>
                  </VStack>
                </GridItem>
              </Link>
            </motion.div>
          ))}
        </Grid>

        {/* ====================== RECENT INSIGHTS ====================== */}
        <VStack gap={5} textAlign="center" mb={16}>
          <Badge
            colorScheme="red"
            px={5}
            py={1.5}
            borderRadius="full"
            fontSize="sm"
            fontWeight="600"
            letterSpacing="1px"
          >
            EXPERT INSIGHTS
          </Badge>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "4.5xl" }}
            fontWeight="700"
            color="gray.800"
          >
            Recent Insights
          </Heading>
        </VStack>

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={{ base: 4, lg: 6 }}
        >
          {sortedInsights.slice(Number(sortedInsights.length - 3),Number(sortedInsights.length)).sort((a, b) =>{  
            const dateA = new Date(a._created ?? "").getTime();
            const dateB = new Date(b._created ?? "").getTime();
            return dateB - dateA; // Most recent first
          }).map((insight, index) => (
            <motion.div
              key={insight._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <Link href={`/blogs/insights/${insight._id}`}>
                <GridItem
                  bg="white"
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="lg"
                  _hover={{ boxShadow: "2xl", transform: "translateY(-12px)" }}
                  transition="all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)"
                  height="100%"
                  display="flex"
                  flexDirection="column"
                >
                  <Box position="relative" height="260px">
                    <Image
                      src={
                        insight.image
                          ? `https://cms.jmassociates.co.ke/storage/uploads${insight.image.path}`
                          : "/Home/about.jpeg"
                      }
                      alt={insight.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </Box>

                  <VStack align="flex-start" p={8} gap={4} flex="1">
                    <Text fontSize="sm" color="gray.500" fontWeight="medium">
                      {insight.start_date}
                    </Text>
                    <Heading as="h3" fontSize="xl" fontWeight="600" lineHeight="1.35">
                      {insight.title}
                    </Heading>

                    <Text
                      color="#aa1f30"
                      fontWeight="600"
                      fontSize="sm"
                      mt="auto"
                      _hover={{ textDecoration: "underline" }}
                    >
                      Read More →
                    </Text>
                  </VStack>
                </GridItem>
              </Link>
            </motion.div>
          ))}
        </Grid>

        {/* View All Button */}
        <Flex justify="center" mt={12}>
          <Link href="/blogs/insights">
            <Button
              size="lg"
              bg="#aa1f30"
              color="white"
              px={10}
              py={7}
              fontSize="md"
              fontWeight="600"
              _hover={{ bg: "#8a1926", transform: "translateY(-2px)" }}
              transition="all 0.3s"
            >
              View All Insights
            </Button>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default BlogsCom;