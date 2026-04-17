"use client";

import { MarginX, newsArticles } from "@/utils/constants";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  Flex,
  Badge,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const RecentNews = () => {
  return (
    <Box as="section" py={{ base: 20, md: 28 }} bg="gray.50">
      <Box mx={MarginX}>
        {/* Header */}
        <VStack gap={5} textAlign="center" mb={16}>
          <Badge
            colorScheme="red"
            px={4}
            py={1}
            borderRadius="full"
            fontSize="sm"
            fontWeight="600"
            letterSpacing="1px"
          >
            INSIGHTS & UPDATES
          </Badge>

          <Heading
            as="h2"
            fontSize={{ base: "3.2rem", md: "4.8rem" }}
            fontWeight="700"
            lineHeight="1.05"
            color="gray.800"
          >
            Recent News
          </Heading>

          <Text maxW="620px" fontSize="lg" color="gray.600">
            Stay informed with the latest legal insights, industry developments,
            and success stories from JM Associates.
          </Text>
        </VStack>

        {/* News Grid - Enhanced Cards */}
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={{ base: 8, lg: 12 }}
        >
          {newsArticles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
            >
              <Link href={`/news/${article.slug}`}>
                <GridItem
                  bg="white"
                  borderRadius="3xl"
                  overflow="hidden"
                  boxShadow="lg"
                  height="100%"
                  display="flex"
                  flexDirection="column"
                  _hover={{
                    boxShadow: "2xl",
                    transform: "translateY(-15px)",
                  }}
                  transition="all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)"
                >
                  {/* Image Container */}
                  <Box
                    position="relative"
                    height={{ base: "260px", md: "280px" }}
                  >
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    {/* Date Badge */}
                    <Box
                      position="absolute"
                      top={5}
                      right={5}
                      bg="white"
                      color="#aa1f30"
                      px={4}
                      py={1}
                      borderRadius="full"
                      fontSize="xs"
                      fontWeight="700"
                      boxShadow="md"
                    >
                      {article.date}
                    </Box>
                  </Box>

                  {/* Content */}
                  <VStack align="flex-start" p={8} gap={5} flex="1">
                    <Heading
                      as="h3"
                      fontSize="xl"
                      fontWeight="600"
                      lineHeight="1.35"
                      color="gray.800"
                      _hover={{ color: "#aa1f30" }}
                      transition="color 0.3s"
                    >
                      {article.title}
                    </Heading>

                    <Text
                      color="gray.600"
                      lineHeight="1.75"
                      // noOfLines={4}
                    >
                      {article.excerpt}
                    </Text>

                    <Flex
                      align="center"
                      mt="auto"
                      pt={4}
                      color="#aa1f30"
                      fontWeight="600"
                      fontSize="sm"
                      _hover={{ gap: 3 }}
                      transition="all 0.3s"
                    >
                      Read Full Article
                      <Box
                        as="span"
                        ml={1}
                        fontSize="20px"
                        transition="transform 0.3s"
                      >
                        →
                      </Box>
                    </Flex>
                  </VStack>
                </GridItem>
              </Link>
            </motion.div>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default RecentNews;
