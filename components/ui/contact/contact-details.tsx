import { contactsData, MarginX } from "@/utils/constants";
import { Flex, Heading, Icon, SimpleGrid, Stack, Text } from "@chakra-ui/react";

import Link from "next/link";
import ContactForm from "./contact-form";

const ContactDetails = () => {
  return (
    <>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        gap="2rem"
        paddingX={{ base: "1rem", md: "2rem" }}
        my="4rem"
        marginX={MarginX}
        alignItems="center"
      >
        <Stack>
          <Heading fontSize="xl">Send Direct Message</Heading>
          {contactsData.map((d, i) => (
            <Flex
              key={i}
              p={8}
              borderRadius="xl"
              boxShadow="xl"
              gap={4}
              align="center"
              bg="brand.primary"
              color="brand.white"
              transition="background-color 0.3s"
              _hover={{
                bg: "brand.black",
              }}
            >
              <Stack p={3} bg={d.bg} h="fit-content" borderRadius="full">
                <Icon color={d.color} boxSize={7}>
                  {d.icon}
                </Icon>
              </Stack>
              <Stack>
                <Heading fontSize="lg">{d.title}</Heading>
                <Link href={d.link}>
                  <Text fontSize="lg">{d.label}</Text>
                </Link>
              </Stack>
            </Flex>
          ))}
        </Stack>
        <ContactForm />
      </SimpleGrid>
    </>
  );
};

export default ContactDetails;
