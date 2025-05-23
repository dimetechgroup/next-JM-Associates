"use client";

import { ContactFormData, ContactFormSchema } from "@/schema/ContactSchema";
import { useState } from "react";
import { toaster } from "@/components/ui/toaster";
import emailjs from "@emailjs/browser";

import {
  Button,
  Field,
  Fieldset,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
        "service_pwu86hk",
        "template_33g1mff",
        {
          from_name: data.Fullname,
          from_email: data.Email,
          subject: data.Subject,
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
      <Fieldset.Root
        borderWidth={"1px"}
        borderRadius={"lg"}
        borderColor={"brand.gray"}
        padding={"2rem"}
        boxShadow={"lg"}
        _hover={{ boxShadow: "xl", cursor: "pointer" }}
        _active={{ boxShadow: "md" }}
        _focus={{ boxShadow: "md" }}
        transition={"box-shadow 0.3s"}
        marginX={{ base: "1rem", md: "2rem" }}
        marginY={"2rem"}
        marginBottom={{ base: "2rem", md: "0" }}
      >
        <Stack>
          <Fieldset.Legend>Leave a message</Fieldset.Legend>
          <Fieldset.HelperText>
            Please fill in the form below to send us a message.
          </Fieldset.HelperText>
        </Stack>
        <Fieldset.Content>
          <Field.Root invalid={!!errors.Fullname}>
            <Field.Label>Full Name</Field.Label>
            <Input
              {...register("Fullname")}
              required
              placeholder="Your full name"
            />
            {errors.Fullname && (
              <Text color="red.500">{errors.Fullname.message}</Text>
            )}
          </Field.Root>

          <Field.Root invalid={!!errors.Email}>
            <Field.Label>Email</Field.Label>
            <Input
              {...register("Email")}
              required
              type="email"
              autoComplete="email"
              autoCapitalize="off"
              placeholder="Your email address"
            />
            {errors.Email && (
              <Text color="red.500">{errors.Email.message}</Text>
            )}
          </Field.Root>

          <Field.Root invalid={!!errors.Subject}>
            <Field.Label>Subject</Field.Label>
            <Input {...register("Subject")} required placeholder="Subject" />
            {errors.Subject && (
              <Text color="red.500">{errors.Subject.message}</Text>
            )}
          </Field.Root>

          <Field.Root invalid={!!errors.Message}>
            <Field.Label>Message</Field.Label>
            <Textarea
              {...register("Message")}
              required
              placeholder="Enter your message"
            />
            {errors.Message && (
              <Text color="red.500">{errors.Message.message}</Text>
            )}
          </Field.Root>
        </Fieldset.Content>
        <Button
          type="submit"
          alignSelf="flex-start"
          bg="brand.maroon"
          color="brand.white"
          _hover={{ bg: "brand.gray" }}
          loading={isLoading}
          loadingText="Sending..."
        >
          Send Message
        </Button>
      </Fieldset.Root>
    </form>
  );
};

export default ContactForm;
