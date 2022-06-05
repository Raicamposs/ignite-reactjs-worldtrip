import { Heading, VStack } from "@chakra-ui/react";
import { ReactElement } from "react";
import { Carousel } from "./Slides/Carousel";

export const ContinentsSlide = (): ReactElement => {



  return (
    <VStack spacing={[4, 8]} w="full" maxW={1024} align={'center'}  >
      <Heading fontSize={['xl', '3xl']} fontWeight={500}>Vamos nessa?</Heading>
      <Heading fontSize={['xl', '3xl']} fontWeight={500}>  Então escolha seu continente</Heading>
      <Carousel />
    </VStack>
  )
}