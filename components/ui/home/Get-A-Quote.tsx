"use client";

import { QuoteFormData, QuoteFormSchema } from "@/schema/QuoteSchema";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";

// Import Form components from the dedicated package
import { FormControl, FormErrorMessage } from "@chakra-ui/form-control";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toaster } from "../toaster";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

export default function GetAQuote() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(QuoteFormSchema),
  });

  const handleFormSubmit = async (data: QuoteFormData) => {
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_0zolm9a",
        "template_fohpjjk",
        {
          name: data.Fullname,
          email: data.Email,
          phone: data.Phone,
          company: data.Company,
          message: data.Message,
          time: new Date().toLocaleString(),
        },
        "nXgCxgWCHRmlr07qR",
      );

      toast.success(
        "Quote Request Sent, Thank you for reaching out! We'll get back to you within 24 hours.",
      );

      reset();
    } catch (error) {
      console.error("Email sending error:", error);
      toast.error("Failed to send quote request. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box as="section" id="quote" position="relative" py={{ base: 16, md: 24 }}>
      {/* Background Image */}
      <Box
        position="absolute"
        inset={0}
        bgImage="url('/slider/Slide1.jpg')"
        bgSize="cover"
        // bgPosition="center"
        bgRepeat="no-repeat"
      />

      {/* Dark Overlay */}
      <Box
        position="absolute"
        inset={0}
        bg="linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(170,31,48,0.85))"
      />

      <Container position="relative" zIndex={2}>
        <VStack gap={12} align="center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <VStack gap={4} textAlign="center" color="white">
              <Flex align="center" my={{ base: "lg", md: "lg" }} gap={3}>
                <Box w="60px" h="3px" bg="#aa1f30" borderRadius="full" />
                <Text
                  fontSize="sm"
                  fontWeight="600"
                  letterSpacing="2px"
                  textTransform="uppercase"
                >
                  Let’s Get Started
                </Text>
              </Flex>

              <Heading
                as="h2"
                fontSize={{ base: "4xl", md: "5xl" }}
                fontWeight="700"
                my={{ base: 2, md: 4 }}
                lineHeight="1.1"
              >
                Get a Quote
              </Heading>

              <Text
                my={{ base: 4, md: 6 }}
                fontSize={{ base: "sm", md: "lg" }}
                maxW="560px"
                opacity={0.95}
              >
                Fill out the form below and our team will respond within 24
                hours with a tailored proposal.
              </Text>
            </VStack>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            style={{ width: "100%", maxWidth: "900px" }}
          >
            <Box
              bg="white"
              color="gray.800"
              borderRadius="2xl"
              p={{ base: 4, md: 6 }}
              mx={{ base: 4 }}
              boxShadow="2xl"
            >
              <form onSubmit={handleSubmit(handleFormSubmit)}>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                  <FormControl isInvalid={!!errors.Fullname}>
                    <Input
                      placeholder="Full Name *"
                      px={{ base: 3 }}
                      size="lg"
                      bg="gray.50"
                      borderColor="gray.200"
                      _focus={{
                        borderColor: "#aa1f30",
                        boxShadow: "0 0 0 3px rgba(170,31,48,0.15)",
                      }}
                      {...register("Fullname")}
                    />
                    <FormErrorMessage>
                      {errors.Fullname?.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.Company}>
                    <Input
                      placeholder="Company Name *"
                      size="lg"
                      px={{ base: 3 }}
                      bg="gray.50"
                      borderColor="gray.200"
                      _focus={{
                        borderColor: "#aa1f30",
                        boxShadow: "0 0 0 3px rgba(170,31,48,0.15)",
                      }}
                      {...register("Company")}
                    />
                    <FormErrorMessage>
                      {errors.Company?.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.Email}>
                    <Input
                      type="email"
                      placeholder="Email Address *"
                      size="lg"
                      px={{ base: 3 }}
                      bg="gray.50"
                      borderColor="gray.200"
                      _focus={{
                        borderColor: "#aa1f30",
                        boxShadow: "0 0 0 3px rgba(170,31,48,0.15)",
                      }}
                      {...register("Email")}
                    />
                    <FormErrorMessage>{errors.Email?.message}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.Phone}>
                    <Input
                      type="tel"
                      placeholder="Phone Number *"
                      size="lg"
                      px={{ base: 3 }}
                      bg="gray.50"
                      borderColor="gray.200"
                      _focus={{
                        borderColor: "#aa1f30",
                        boxShadow: "0 0 0 3px rgba(170,31,48,0.15)",
                      }}
                      {...register("Phone")}
                    />
                    <FormErrorMessage>{errors.Phone?.message}</FormErrorMessage>
                  </FormControl>

                  <FormControl
                    isInvalid={!!errors.Message}
                    gridColumn={{ base: "span 1", md: "span 2" }}
                  >
                    <Textarea
                      placeholder="Tell us more about your requirements..."
                      size="lg"
                      bg="gray.50"
                      px={{ base: 3 }}
                      borderColor="gray.200"
                      height={{ base: "140px", md: "160px" }}
                      _focus={{
                        borderColor: "#aa1f30",
                        boxShadow: "0 0 0 3px rgba(170,31,48,0.15)",
                      }}
                      {...register("Message")}
                    />
                    <FormErrorMessage>
                      {errors.Message?.message}
                    </FormErrorMessage>
                  </FormControl>
                </SimpleGrid>

                <Flex justify="center" mt={10}>
                  <Button
                    type="submit"
                    size="lg"
                    bg="#aa1f30"
                    color="white"
                    px={12}
                    py={7}
                    fontSize="lg"
                    fontWeight="600"
                    // isLoading={isLoading}
                    loadingText="Sending..."
                    _hover={{ bg: "#8a1926", transform: "translateY(-2px)" }}
                    transition="all 0.3s"
                    boxShadow="md"
                  >
                    SUBMIT REQUEST
                  </Button>
                </Flex>
              </form>
            </Box>
          </motion.div>
        </VStack>
      </Container>
    </Box>
  );
}
