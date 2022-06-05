import { Center, Heading, Text, VStack } from "@chakra-ui/react";
import { ReactElement } from "react";
import { Continent } from "./Continents";

type SlideParams = {
  continent: Continent
}


export const Slide = ({ continent }: SlideParams): ReactElement => {
  return (
    <Center as='section' backgroundImage={continent.image}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      w='100%' h='450px' >
      <VStack w={'full'} h={'full'}
        justify={'center'} bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Heading color={'white'} as='h3' size='lg'>
          {continent.name}
        </Heading>
        <Text color={'white'}>{continent.title}</Text>
      </VStack>
    </Center>
  )
}