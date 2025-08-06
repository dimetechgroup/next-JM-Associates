"use client";
import Loading from "@/components/Loading";
import { MarginX } from "@/utils/constants";
import { useDefaultSectionArray } from "@/utils/hooks/useDefaultSectionArray";
import {
  Box,
  Image,
  Text,
  Grid,
  GridItem,
  Heading,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";

const HomeNews = () => {
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

  if (newsLoading || insightLoading) {
    return <Loading />;
  }

  if (newsError || insightError) {
    return <Text>Error: {newsError || insightError}</Text>;
  }

  if (!newsData?.length || !insightData?.length) {
    return <Text>No news or insights available</Text>;
  }

  // Sort by _created in descending order (most recent first)
  const sortedNews = [...newsData].sort(
    (a, b) =>
      new Date(b._created ?? "").getTime() -
      new Date(a._created ?? "").getTime()
  );
  const sortedInsights = [...insightData].sort(
    (a, b) =>
      new Date(b._created ?? "").getTime() -
      new Date(a._created ?? "").getTime()
  );

  return (
    <Box textAlign="center" py={10}>
      <Heading as="h2" fontSize="2xl" fontWeight="bold" mb={2}>
        RECENT NEWS
      </Heading>
      <Box width="50px" height="2px" bg="red.500" mx="auto" mb={6} />
      <Box marginX={MarginX}>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
          {sortedNews.slice(0, 3).map((article) => (
            <GridItem
              key={article._id}
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
              <Link href={`/blogs/${article._id}`}>
                <Image
                  src={
                    article.image
                      ? `https://cms.jmassociates.co.ke/storage/uploads${article.image.path}`
                      : "/Home/about.jpeg"
                  }
                  alt={article.title}
                  objectFit="cover"
                  width="100%"
                  height="200px"
                />
                <Box p={4}>
                  <Text fontSize="sm" color="gray.500">
                    {article.start_date}
                  </Text>
                  <Heading as="h3" fontSize="lg" fontWeight="semibold" mt={1}>
                    {article.title}
                  </Heading>
                </Box>
              </Link>
            </GridItem>
          ))}
        </Grid>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginX={MarginX}
        py={10}
      >
        <Heading as="h2" fontSize="2xl" fontWeight="bold" mb={2}>
          RECENT INSIGHTS
        </Heading>
      </Box>
      <Box width="50px" height="2px" bg="red.500" mx="auto" mb={6} />
      <Box marginX={MarginX}>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
          {sortedInsights.slice(0, 3).map((insight) => (
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
        <Flex justify="center" mt={4}>
          <Link href="/blogs/insights">
            <Box
              as="button"
              px={4}
              py={2}
              bg="red.500"
              color="white"
              borderRadius="md"
              fontWeight="bold"
              _hover={{ bg: "red.600", cursor: "pointer" }}
            >
              View All Insights
            </Box>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default HomeNews;
