"use client";

import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

import { useDefaultSectionArray } from "@/utils/hooks/useDefaultSectionArray";
import Loading from "@/components/Loading";

const CarouselComponent = () => {
  const {
    error,
    loading,
    sectionArray: slides,
  } = useDefaultSectionArray("carousel");

  if (loading) return <Loading />;
  if (error) {
    return (
      <Box
        height="85vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="gray.50"
      >
        <Text fontSize="xl" color="red.500">
          Error loading carousel: {error}
        </Text>
      </Box>
    );
  }

  if (!slides || slides.length === 0) {
    return (
      <Box
        height="85vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="gray.50"
      >
        <Text fontSize="xl" color="gray.500">
          No slides available.
        </Text>
      </Box>
    );
  }

  return (
    <Box
      position="relative"
      width="100%"
      height={{ base: "90vh", md: "85vh" }}
      overflow="hidden"
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          bulletElement: "span",
        }}
        loop={true}
        speed={800}
        style={{ width: "100%", height: "100%" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box position="relative" width="100%" height="100%">
              {/* Background Image */}
              <Image
                src={
                  slide.image
                    ? `https://cms.jmassociates.co.ke/storage/uploads${slide.image.path}`
                    : "/Home/about.jpeg"
                }
                alt={slide.title || `Slide ${index + 1}`}
                fill
                priority={index === 0}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />

              {/* Dark Gradient Overlay */}
              <Box
                position="absolute"
                inset={0}
                bg="linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.75))"
              />

              {/* Content Container */}
              <Flex
                position="absolute"
                inset={0}
                align="center"
                justify="center"
                px={{ base: 6, md: 12 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1 }}
                  style={{ width: "100%", maxWidth: "920px" }}
                >
                  <VStack
                    gap={8}
                    textAlign="center"
                    color="white"
                    maxW="800px"
                    mx="auto"
                  >
                    {/* Title */}
                    <Heading
                      my={{ base: 4, md: 6 }}
                      as="h1"
                      fontSize={{ base: "3.2rem", md: "4.8rem", lg: "5.4rem" }}
                      lineHeight="1.05"
                      fontWeight="700"
                      letterSpacing="-0.02em"
                    >
                      {slide.title}
                    </Heading>

                    {/* Description */}
                    {slide.description && (
                      <Text
                        fontSize={{ base: "lg", md: "xl" }}
                        maxW="620px"
                        opacity={0.95}
                        lineHeight="1.6"
                      >
                        {slide.description}
                      </Text>
                    )}

                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Link href={slide.link || "/about-us"} passHref>
                        <Button
                          size="sm"
                          bg="#aa1f30"
                          color="white"
                          px={8}
                          py={5}
                          fontSize={{ base: "md", md: "lg" }}
                          fontWeight="600"
                          borderRadius="md"
                          _hover={{
                            bg: "#8a1926",
                            boxShadow: "lg",
                          }}
                          boxShadow="md"
                        >
                          See More
                        </Button>
                      </Link>
                    </motion.div>
                  </VStack>
                </motion.div>
              </Flex>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Optional subtle scroll indicator */}
      <Box
        position="absolute"
        bottom={8}
        left="50%"
        transform="translateX(-50%)"
        display={{ base: "none", md: "block" }}
        zIndex={10}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Text fontSize="sm" color="whiteAlpha.700" letterSpacing="widest">
            SCROLL TO EXPLORE ↓
          </Text>
        </motion.div>
      </Box>
    </Box>
  );
};

export default CarouselComponent;
