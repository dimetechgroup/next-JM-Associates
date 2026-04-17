"use client";

import { ContactFormData, ContactFormSchema } from "@/schema/ContactSchema";
import { useState } from "react";
import { toaster } from "@/components/ui/toaster";
import emailjs from "@emailjs/browser";

import {
  Box,
  Button,
  Field,
  Fieldset,
  Input,
  Stack,
  Text,
  Textarea,
  Heading,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
  });

  const handleFormSubmit = async (data: ContactFormData) => {
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_0zolm9a",
        "template_m03wyr3",
        {
          name: data.Fullname,
          email: data.Email,
          subject: data.Subject,
          message: data.Message,
          time: new Date().toLocaleString(),
        },
        "nXgCxgWCHRmlr07qR",
      );

      toast.success("Message sent successfully! We will get back to you soon.");

      reset();
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit(handleFormSubmit)}>
      <Fieldset.Root
        border="1px solid"
        borderColor="gray.200"
        borderRadius="2xl"
        p={{ base: 8, md: 12 }}
        bg="white"
        boxShadow="sm"
        maxW="full"
      >
        <Stack gap={8}>
          {/* Header */}
          <Stack gap={2}>
            <Heading
              as="h3"
              size="lg"
              color="gray.800"
              fontWeight="600"
              letterSpacing="-0.02em"
            >
              Send us a Message
            </Heading>
            <Text color="gray.600" fontSize="md">
              We typically respond within 24–48 hours.
            </Text>
          </Stack>

          <Stack gap={6}>
            {/* Full Name */}
            <Field.Root invalid={!!errors.Fullname}>
              <Field.Label fontWeight="500" color="gray.700">
                Full Name
              </Field.Label>
              <Input
                {...register("Fullname")}
                placeholder="John Doe"
                size="lg"
                borderColor="gray.300"
                p={5}
                _focus={{
                  borderColor: "#aa1f30",
                  boxShadow: "0 0 0 1px #aa1f30",
                }}
                _hover={{ borderColor: "gray.400" }}
              />
              {errors.Fullname && (
                <Text fontSize="sm" color="red.500" mt={1}>
                  {errors.Fullname.message}
                </Text>
              )}
            </Field.Root>

            {/* Email */}
            <Field.Root invalid={!!errors.Email}>
              <Field.Label fontWeight="500" color="gray.700">
                Email Address
              </Field.Label>
              <Input
                {...register("Email")}
                type="email"
                placeholder="you@example.com"
                size="lg"
                p={5}
                borderColor="gray.300"
                _focus={{
                  borderColor: "#aa1f30",
                  boxShadow: "0 0 0 1px #aa1f30",
                }}
                _hover={{ borderColor: "gray.400" }}
              />
              {errors.Email && (
                <Text fontSize="sm" color="red.500" mt={1}>
                  {errors.Email.message}
                </Text>
              )}
            </Field.Root>

            {/* Subject */}
            <Field.Root invalid={!!errors.Subject}>
              <Field.Label fontWeight="500" color="gray.700">
                Subject
              </Field.Label>
              <Input
                {...register("Subject")}
                placeholder="How can we help you?"
                size="lg"
                p={5}
                borderColor="gray.300"
                _focus={{
                  borderColor: "#aa1f30",
                  boxShadow: "0 0 0 1px #aa1f30",
                }}
                _hover={{ borderColor: "gray.400" }}
              />
              {errors.Subject && (
                <Text fontSize="sm" color="red.500" mt={1}>
                  {errors.Subject.message}
                </Text>
              )}
            </Field.Root>

            {/* Message */}
            <Field.Root invalid={!!errors.Message}>
              <Field.Label fontWeight="500" color="gray.700">
                Message
              </Field.Label>
              <Textarea
                {...register("Message")}
                placeholder="Please share your inquiry or message..."
                size="lg"
                minH="160px"
                borderColor="gray.300"
                p={5}
                _focus={{
                  borderColor: "#aa1f30",
                  boxShadow: "0 0 0 1px #aa1f30",
                }}
                _hover={{ borderColor: "gray.400" }}
              />
              {errors.Message && (
                <Text fontSize="sm" color="red.500" mt={1}>
                  {errors.Message.message}
                </Text>
              )}
            </Field.Root>
          </Stack>

          {/* Submit Button */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              size="lg"
              w="full"
              bg="#aa1f30"
              color="white"
              fontWeight="600"
              py={7}
              fontSize="md"
              letterSpacing="0.5px"
              _hover={{
                bg: "#8a1926",
                transform: "translateY(-1px)",
              }}
              loading={isLoading}
              loadingText="Sending Message..."
              transition="all 0.3s ease"
            >
              SEND MESSAGE
            </Button>
          </motion.div>

          <Text fontSize="xs" color="gray.500" textAlign="center">
            All fields are required. Your information is secure.
          </Text>
        </Stack>
      </Fieldset.Root>
    </Box>
  );
};

export default ContactForm;
