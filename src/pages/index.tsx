import { Box, VStack } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { ContinentsSlide } from "../components/ContinentsSlide";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes.tsx";

export default function Home() {
  return (
    <VStack spacing={0} align={'center'} w={'100%'} minW='100%'  >
      <Header />
      <Banner />
      <TravelTypes />
      <ContinentsSlide />
      <Box pb={[4, 24]} ></Box>
    </VStack>
  )
}
