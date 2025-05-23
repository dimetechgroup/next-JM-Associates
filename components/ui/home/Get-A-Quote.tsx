"use client";

import { QuoteFormData, QuoteFormSchema } from "@/schema/QuoteSchema";
import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toaster } from "../toaster";

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
        "service_pwu86hk",
        "template_eumafxt",
        {
          from_name: data.Fullname,
          from_email: data.Email,
          phone: data.Phone,
          company: data.Company,
          message: data.Message,
        },
        "S1k6jCwLU4goE_9wb"
      );

      // toaster.create({
      //   title: "Message Sent",
      //   description: "Your message was sent successfully!",
      //   type: "success",
      // });
      alert("Message sent successfully!");

      reset();
    } catch (error) {
      toaster.create({
        title: "Error",
        description: "There was an error sending your message.",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Box
        bgImage="url('/slider/Slide1.jpg')"
        bgSize="cover"
        backgroundPosition="center"
        bgRepeat="no-repeat"
        position="relative"
        py={20}
        id="quote"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="red.900"
          opacity={0.7}
        />
        <Container
          maxW="6xl"
          position="relative"
          color="white"
          textAlign="center"
        >
          <Text fontSize="3xl" fontWeight="bold" mb={4}>
            GET A QUOTE
          </Text>
          <Text mb={10}>
            Fill out the form below to get a quote for our services. We will get
            back to you as soon as possible.
          </Text>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
            <Input
              placeholder="Name"
              bg="whiteAlpha.800"
              color="black"
              required
              _placeholder={{ color: "gray.600" }}
              {...register("Fullname")}
            />
            <Input
              placeholder="Company"
              bg="whiteAlpha.800"
              color="black"
              required
              _placeholder={{ color: "gray.600" }}
              {...register("Company")}
            />
            <Input
              placeholder="Email"
              bg="whiteAlpha.800"
              color="black"
              required
              _placeholder={{ color: "gray.600" }}
              type="email"
              {...register("Email")}
            />
            <Input
              placeholder="Phone"
              bg="whiteAlpha.800"
              color="black"
              required
              _placeholder={{ color: "gray.600" }}
              type="tel"
              {...register("Phone")}
            />
            <Textarea
              placeholder="Message"
              bg="whiteAlpha.800"
              color="black"
              required
              _placeholder={{ color: "gray.600" }}
              height={{ base: "100px", md: "150px" }}
              gridColumn={{ base: "span 1", md: "span 2" }}
              {...register("Message")}
            />
          </SimpleGrid>

          <Flex justify="center" mt={6}>
            <Button
              bg="black"
              color="white"
              size="lg"
              _hover={{ bg: "gray.700" }}
              type="submit"
              loading={isLoading} // Replace with your loading state
            >
              SUBMIT
            </Button>
          </Flex>
        </Container>
      </Box>
    </form>
  );
}
