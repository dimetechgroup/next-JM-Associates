"use client";
import Loading from "@/components/Loading";
import { MarginX } from "@/utils/constants";
import { useDefaultSectionData } from "@/utils/hooks/useDefaultSectionData";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

interface Props {
  id:string;
}

const BlogDetail = ({id}:Props) => {


  const {
    error,
    loading,
    sectionData: sectionData,
  } = useDefaultSectionData(`blogs/${id}`);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <Box p={8} marginX={MarginX}>
      <Box mb={4} justifyContent={"center"} display="flex">
        <Image
          src={
            sectionData!.image
              ? `https://cms.jmassociates.co.ke/storage/uploads${
                  sectionData!.image.path
                }`
              : "/Home/about.jpeg"
          }
          alt={sectionData!.title}
          objectFit="cover"
          width="75%"
          height="450px"
          mb={4}
        />
      </Box>

      <Heading as="h1" fontSize="3xl" mb={4} textAlign="center">
        {sectionData!.title}
      </Heading>
      <Text fontSize="lg" color="gray.600" mb={4}>
        {sectionData!.start_date}
      </Text>
      <Text
        fontSize="md"
        lineHeight={1.8}
        color="gray.700"
        dangerouslySetInnerHTML={{ __html: sectionData!.description || "" }}
      />
    </Box>
  );
};

export default BlogDetail;
