"use client";

import { MarginX } from "@/utils/constants";
import { useDefaultSectionData } from "@/utils/hooks/useDefaultSectionData";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  HStack,
  Badge,
  IconButton,
  SimpleGrid,
} from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  FaDownload,
  FaCalendarAlt,
  FaArrowLeft,
  FaShare,
  FaBookmark,
  FaEye,
} from "react-icons/fa";
import Link from "next/link";
import Loading from "@/components/Loading";
import { useDefaultSectionArray } from "@/utils/hooks/useDefaultSectionArray";
import { useEffect } from "react";

const InsightDetail = ({ details }: { details: any }) => {
  const params = useParams();
  const id = params.id as string;

  const {
    error,
    loading,
    sectionData: insight,
  } = useDefaultSectionData(`insights/${id}`);

  useEffect(() => {
    if (insight) {
      details = insight; // Update the global variable with fetched data
    }
  }, [insight]);

  const {
    error: insightError,
    loading: insightLoading,
    sectionArray: insightData,
  } = useDefaultSectionArray("insights");

  if (loading) return <Loading />;

  if (error || !insight) {
    return (
      <Box py={20} textAlign="center">
        <Text fontSize="xl" color="red.500">
          {error || "Insight not found"}
        </Text>
      </Box>
    );
  }

  const { Attachment } = insight as any;
  const attachmentPath = Attachment ? Attachment.path : null;

  const imageUrl = insight.image
    ? `https://cms.jmassociates.co.ke/storage/uploads${insight.image.path}`
    : "/Home/about.jpeg";
  const { _modified } = insight as any;
  const date = _modified
    ? new Date(_modified).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "No date";

  return (
    <Box bg="gray.50" minH="100vh">
      <Container maxW="7xl" mx="auto" px={MarginX} py={{ base: 12, md: 16 }}>
        {/* Back Button - Simplified */}
        <Link href="/blogs" passHref>
          <HStack
            as="div"
            mb={10}
            gap={2}
            color="gray.600"
            _hover={{ color: "#aa1f30" }}
            transition="all 0.2s"
            width="fit-content"
          >
            <FaArrowLeft size={14} />
            <Text fontWeight="500">Back to All Insights</Text>
          </HStack>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Box bg="white" borderRadius="2xl" boxShadow="xl" overflow="hidden">
            {/* Hero Image with reduced height */}
            <Box position="relative" h={{ base: "280px", md: "420px" }}>
              <Image
                src={imageUrl}
                alt={insight.title}
                objectFit="cover"
                w="100%"
                h="100%"
              />
            </Box>

            {/* Main Content - More airy gap */}
            <Box p={{ base: 6, md: 10, lg: 12 }}>
              {/* Title Overlay (optional - for dramatic effect) */}
              <Box mb={6}>
                <Badge
                  colorScheme="red"
                  px={4}
                  py={1.5}
                  borderRadius="full"
                  fontSize="xs"
                  fontWeight="600"
                  mb={3}
                  display="inline-block"
                >
                  INSIGHT
                </Badge>
                <Heading
                  as="h1"
                  fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                  fontWeight="900"
                  color="#aa1f30"
                  textShadow={"2xl"}
                  lineHeight="1.2"
                  maxW="4xl"
                >
                  {insight.title}
                </Heading>
              </Box>
              <VStack align="stretch" gap={8}>
                {/* Meta Information with Actions */}
                <Flex
                  direction={{ base: "column", sm: "row" }}
                  justify="space-between"
                  align={{ base: "flex-start", sm: "center" }}
                  gap={4}
                  wrap="wrap"
                >
                  <HStack wrap="wrap" gap={4}>
                    <HStack color="gray.500" fontSize="sm" gap={2}>
                      <FaCalendarAlt />
                      <Text fontWeight="500">{"No date yet"}</Text>
                    </HStack>
                    <HStack color="gray.500" fontSize="sm" gap={2}>
                      <FaEye />
                      <Text>5 min read</Text>
                    </HStack>
                  </HStack>

                  {/* Action Buttons */}
                  <HStack gap={2}>
                    <IconButton
                      aria-label="Share"
                      // <FaShare />}
                      variant="ghost"
                      size="sm"
                      color="gray.600"
                      _hover={{ color: "#aa1f30", bg: "gray.100" }}
                    />
                    <IconButton
                      aria-label="Bookmark"
                      // <FaBookmark />}
                      variant="ghost"
                      size="sm"
                      color="gray.600"
                      _hover={{ color: "#aa1f30", bg: "gray.100" }}
                    />
                  </HStack>

                  {/* Rich Content - Better readability */}
                  <Box className="insight-content" py={2}>
                    <style jsx global>{`
                      .insight-content {
                        font-size: 1.05rem;
                        color: #2d3748;
                      }
                      .insight-content h1,
                      .insight-content h2,
                      .insight-content h3 {
                        font-weight: 700;
                        margin-top: 2.5rem;
                        margin-bottom: 1rem;
                        color: #1a202c;
                      }
                      .insight-content h2 {
                        font-size: 1.75rem;
                        margin-top: 2rem;
                      }
                      .insight-content h3 {
                        font-size: 1.35rem;
                      }
                      .insight-content p {
                        margin-bottom: 1.5rem;
                        line-height: 1.8;
                      }
                      .insight-content ul,
                      .insight-content ol {
                        padding-left: 1.8rem;
                        margin-bottom: 1.5rem;
                      }
                      .insight-content li {
                        margin-bottom: 0.6rem;
                        line-height: 1.7;
                      }
                      .insight-content strong {
                        color: #1a202c;
                        font-weight: 700;
                      }
                      .insight-content blockquote {
                        border-left: 4px solid #aa1f30;
                        padding-left: 1.5rem;
                        padding-top: 0.5rem;
                        padding-bottom: 0.5rem;
                        margin: 2rem 0;
                        background: #f8fafc;
                        border-radius: 4px;
                        font-style: italic;
                        color: #4a5568;
                      }
                      .insight-content a {
                        color: #aa1f30;
                        text-decoration: none;
                        border-bottom: 1px solid transparent;
                        transition: border-color 0.2s;
                      }
                      .insight-content a:hover {
                        border-bottom-color: #aa1f30;
                      }
                      .insight-content img {
                        max-width: 100%;
                        height: auto;
                        border-radius: 8px;
                        margin: 1.5rem 0;
                      }
                      @media (max-width: 768px) {
                        .insight-content {
                          font-size: 1rem;
                        }
                        .insight-content h2 {
                          font-size: 1.5rem;
                        }
                      }
                    `}</style>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: insight.description || "",
                      }}
                    />
                  </Box>
                </Flex>

                {/* Tags Section - New addition for better content discovery */}
                {/* {insight?.tags && insight?.tags.length > 0 && (
                  <Box pt={4}>
                    <Text fontSize="sm" fontWeight="600" color="gray.600" mb={3}>
                      Tags:
                    </Text>
                    <HStack wrap="wrap" gap={2}>
                      {insight.tags.map((tag: string, index: number) => (
                        <Badge
                          key={index}
                          bg="gray.100"
                          color="gray.700"
                          px={3}
                          py={1}
                          borderRadius="full"
                          fontSize="xs"
                          fontWeight="500"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </HStack>
                  </Box>
                )} */}

                {/* Download Section - More integrated design */}
                {attachmentPath && (
                  <Box
                    mt={6}
                    bg="linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)"
                    p={{ base: 8, md: 10 }}
                    borderRadius="2xl"
                    border="1px solid"
                    borderColor="gray.200"
                  >
                    <SimpleGrid
                      columns={{ base: 1, md: 2 }}
                      gap={8}
                      alignItems="center"
                    >
                      <VStack
                        align={{ base: "center", md: "flex-start" }}
                        gap={3}
                      >
                        <Heading
                          as="h3"
                          fontSize="xl"
                          fontWeight="700"
                          color="gray.800"
                        >
                          Download Full Report
                        </Heading>
                        <Text
                          color="gray.600"
                          textAlign={{ base: "center", md: "left" }}
                          fontSize="sm"
                        >
                          Get the complete PDF with detailed analysis, charts,
                          and supporting data.
                        </Text>
                      </VStack>

                      <Button
                        as="button"
                        size="lg"
                        bg="#aa1f30"
                        color="white"
                        px={8}
                        py={6}
                        fontSize="md"
                        fontWeight="600"
                        borderRadius="xl"
                        width={{ base: "100%", md: "auto" }}
                        _hover={{
                          bg: "#8a1926",
                          transform: "translateY(-2px)",
                          boxShadow: "lg",
                        }}
                        transition="all 0.3s"
                      >
                        <a
                          href={`https://cms.jmassociates.co.ke/storage/uploads${attachmentPath}`}
                          target="_blank"
                          download
                          rel="noopener noreferrer"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8px",
                          }}
                        >
                          <FaDownload /> Download PDF
                        </a>
                      </Button>
                    </SimpleGrid>
                  </Box>
                )}

                <Box pt={4}>
                  <Heading
                    as="h3"
                    fontSize="xl"
                    fontWeight="700"
                    color="gray.800"
                    mb={6}
                  >
                    You might also like
                  </Heading>
                  <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
                    {insightData?.slice(0, 3).map((item) => (
                      <Box
                        key={item._id}
                        bg="gray.50"
                        borderRadius="lg"
                        overflow="hidden"
                        _hover={{
                          transform: "translateY(-4px)",
                          boxShadow: "md",
                        }}
                        transition="all 0.3s"
                      >
                        <Image
                          src={
                            item.image
                              ? `https://cms.jmassociates.co.ke/storage/uploads${item.image.path}`
                              : "/Home/about.jpeg"
                          }
                          alt={item.title}
                          width="100%"
                          h={"160px"}
                          objectFit="cover"
                        />
                        <Box p={4}>
                          <Text fontWeight="800" fontSize="sm">
                            {item.title}
                          </Text>
                          <Link
                            href={`/blogs/insights/${item._id}`}
                            color="#aa1f30"
                          >
                            <Text
                              color={"#aa1f30"}
                              fontSize={"xs"}
                              mt={3}
                              fontWeight={"bold"}
                            >
                              Read more →
                            </Text>
                          </Link>
                        </Box>
                      </Box>
                    ))}
                  </SimpleGrid>
                </Box>
              </VStack>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default InsightDetail;
