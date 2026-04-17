"use client";

import Loading from "@/components/Loading";
import { MarginX } from "@/utils/constants";
import {
  Box,
  Heading,
  Image,
  Text,
  VStack,
  HStack,
  Container,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

// Define the interface for the blog post
interface BlogPost {
  _id: string;
  title: string;
  description?: string;
  excerpt?: string;
  image?: {
    path: string;
    alt?: string;
  };
  date?: string;
  createdAt?: string;
  category?: string;
  type?: string;
}

interface BlogDetailProps {
  post: BlogPost; // Define the post prop type
}

const BlogDetail = ({ post }: BlogDetailProps) => {
  const [processedDescription, setProcessedDescription] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(true);

  const imageUrl = post.image?.path
    ? `https://cms.jmassociates.co.ke/storage/uploads${post.image.path}`
    : "/Home/about.jpeg";

  const formattedDate =
    post.date || post.createdAt
      ? new Date(post.date || post.createdAt || "").toLocaleDateString(
          "en-US",
          {
            year: "numeric",
            month: "long",
            day: "numeric",
          },
        )
      : "";

  // Process HTML content for LinkedIn links
  const processDescription = (html: string): string => {
    if (!html) return "";

    // Create a temporary div element
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    const links = tempDiv.querySelectorAll("a");
    links.forEach((link) => {
      const href = link.getAttribute("href");
      if (href && href.includes("linkedin.com")) {
        const container = document.createElement("div");
        container.className = "linkedin-cta";

        const styledLink = document.createElement("a");
        styledLink.href = href;
        styledLink.target = "_blank";
        styledLink.rel = "noopener noreferrer";
        styledLink.className = "linkedin-button";
        styledLink.innerHTML = `
          <span style="display: inline-flex; align-items: center; gap: 8px;">
            <svg style="width: 20px; height: 20px;" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.202 0 22.225 0z"/>
            </svg>
            <hr style={{ marginBottom: "24px", borderColor: "rgb(41, 41, 42)" }}/>
            <span>Read Full Article on LinkedIn</span>
            <svg style="width: 16px; height: 16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </span>
        `;

        const parentNode = link.parentNode;
        if (parentNode) {
          parentNode.replaceChild(container, link);
        }
        container.appendChild(styledLink);

        const prevText = container.previousSibling;
        if (prevText && prevText.textContent?.includes("To read more click:")) {
          const note = document.createElement("div");
          note.className = "cta-note";
          note.innerHTML = `
            <div style="display: flex; align-items: center; margin: 0px 20px; gap: 12px; margin-bottom: 16px;">
              <div style="flex: 1; height: 1px; background: linear-gradient(90deg, transparent, #e2e8f0, transparent);"></div>
              <span style="font-size: 14px; color: #64748b; letter-spacing: 1px;">CONTINUE READING</span>
              <div style="flex: 1; height: 1px; background: linear-gradient(90deg, transparent, #e2e8f0, transparent);"></div>
            </div>
          `;
          container.insertBefore(note, container.firstChild);
          if (prevText) {
            prevText.textContent = "";
          }
        }
      }
    });

    return tempDiv.innerHTML;
  };

  // Process description on client side only
  useEffect(() => {
    if (post.description) {
      const processed = processDescription(post.description);
      setProcessedDescription(processed);
    }
    setIsProcessing(false);
  }, [post.description]);

  // Extract LinkedIn URL from description
  const linkedInUrl =
    post.description?.match(/https?:\/\/[^\s]+linkedin[^\s]+/)?.[0] || "#";

  if (isProcessing) {
    return <Loading />;
  }

  return (
    <Container maxW="container.xl" px={{ base: 4, md: 8 }} py={8}>
      <Box mx={MarginX}>
        {/* Back Button */}
        <IconButton
          aria-label="Back to blogs"
          variant="ghost"
          mb={6}
          onClick={() => window.history.back()}
          _hover={{ bg: "#aa1f30", color: "white" }}
        />

        {/* Hero Image */}
        <Box
          position="relative"
          mb={10}
          borderRadius="xl"
          overflow="hidden"
          boxShadow="lg"
        >
          <Image
            src={imageUrl}
            alt={post.title}
            width="100%"
            height={{ base: "320px", md: "480px" }}
            objectFit="contain"
          />
        </Box>

        {/* Main Content */}
        <Box
          maxW="full"
          mx="auto"
          bg="white"
          borderRadius="xl"
          p={{ base: 6, md: 10 }}
          boxShadow="sm"
          borderWidth="1px"
          borderColor="gray.100"
        >
          <VStack align="stretch" gap={8}>
            <Heading
              as="h1"
              size="3xl"
              color="#aa1f30"
              lineHeight={1.2}
              fontWeight="900"
            >
              {post.title}
            </Heading>

            <HStack justify="space-between" fontSize="sm" color="gray.600">
              <Text>Published on {formattedDate}</Text>
            </HStack>

            {/* Blog Body - Using processed description */}
            {processedDescription ? (
              <Box
                className="blog-content prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: processedDescription }}
                // sx={{
                //   // Basic typography
                //   "h2": { fontSize: "2xl", fontWeight: "600", mt: 10, mb: 4, color: "#1a202c" },
                //   "h3": { fontSize: "xl", fontWeight: "600", mt: 8, mb: 3, color: "#1a202c" },
                //   "p": { mb: 6, lineHeight: "1.8" },
                //   "ul, ol": { pl: 6, mb: 6 },
                //   "li": { mb: 2 },
                //   "a": {
                //     color: "#aa1f30",
                //     textDecoration: "underline",
                //     fontWeight: "500",
                //     _hover: { color: "#7a1623" }
                //   },
                //   "strong": { color: "#1a202c", fontWeight: "700" },
                //   "img": {
                //     borderRadius: "lg",
                //     my: 8,
                //     boxShadow: "md",
                //     maxWidth: "100%"
                //   },

                //   // LinkedIn CTA styles
                //   ".linkedin-cta": {
                //     my: 8,
                //     py: 6,
                //     px: { base: 4, md: 8 },
                //     bg: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
                //     borderRadius: "2xl",
                //     border: "1px solid #e2e8f0",
                //     textAlign: "center",
                //   },
                //   ".linkedin-button": {
                //     display: "inline-flex !important",
                //     alignItems: "center !important",
                //     justifyContent: "center !important",
                //     gap: "8px !important",
                //     backgroundColor: "#0077b5 !important",
                //     color: "white !important",
                //     fontWeight: "600 !important",
                //     fontSize: "16px !important",
                //     padding: "12px 28px !important",
                //     borderRadius: "9999px !important",
                //     textDecoration: "none !important",
                //     transition: "all 0.3s ease !important",
                //     boxShadow: "0 4px 6px rgba(0, 119, 181, 0.2) !important",
                //     "&:hover": {
                //       backgroundColor: "#005e8c !important",
                //       transform: "translateY(-2px) !important",
                //     },
                //   },
                //   ".cta-note": { mb: 4 },
                // }}
              />
            ) : (
              /* Fallback Content */
              post.description && (
                <Box mt={6}>
                  <hr
                    style={{
                      marginBottom: "24px",
                      borderColor: "rgb(0, 0, 0)",
                    }}
                  />
                  <Text fontSize="lg" mb={4}>
                    {
                      post.description
                        .replace(/<[^>]*>/g, "")
                        .split("To read more click:")[0]
                    }
                  </Text>
                  {post.description.includes("linkedin.com") && (
                    <Box
                      textAlign="center"
                      py={8}
                      px={6}
                      bg="linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)"
                      borderRadius="2xl"
                      border="1px solid #e2e8f0"
                    >
                      <HStack justify="center" mb={4} gap={3}>
                        <Box
                          flex="1"
                          h="1px"
                          bg="linear-gradient(90deg, transparent, #e2e8f0, transparent)"
                        />
                        <Text
                          fontSize="sm"
                          color="#64748b"
                          fontWeight="600"
                          letterSpacing="1px"
                        >
                          CONTINUE READING
                        </Text>
                        <Box
                          flex="1"
                          h="1px"
                          bg="linear-gradient(90deg, transparent, #e2e8f0, transparent)"
                        />
                      </HStack>

                      <Button
                        as="a"
                        bg="#0077b5"
                        color="white"
                        size="lg"
                        px={8}
                        py={6}
                        _hover={{
                          bg: "#005e8c",
                          transform: "translateY(-2px)",
                        }}
                        transition="all 0.3s ease"
                      >
                        <a
                          href={linkedInUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read Full Article on LinkedIn
                        </a>
                      </Button>
                    </Box>
                  )}
                </Box>
              )
            )}
          </VStack>
        </Box>
      </Box>
    </Container>
  );
};

export default BlogDetail;
