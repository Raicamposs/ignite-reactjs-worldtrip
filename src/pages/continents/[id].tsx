import { Box, Center, Heading, HStack, SimpleGrid, Stack, Text, useColorModeValue, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import Image from 'next/image';
import { Header } from "../../components/Header";

type StatisticsProps = {
  title: string;
  quantity: number;
}

const Statistics = ({ quantity, title }: StatisticsProps) => {
  return (
    <VStack minW={'120px'} spacing={[4, 2]} align={['start', 'center']}   >
      <Heading fontWeight={'600'} color={'brand.500'} m={0} p={0} >{quantity}</Heading>
      <Text color={'dark.font'} fontSize={'lg'} fontWeight={'600'} >{title}</Text>
    </VStack>
  )
}


type CardProps = {
  country: string;
  countryImg: string;
  city: string;
  cityImg: string;
}

const Card = ({ city, cityImg, country, countryImg }: CardProps) => {
  return (
    <Box
      borderWidth={1}
      borderColor={'brand.300'}
      maxW={'256px'}
      w={'256px'}
      h={['279px']}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'lg'}
      rounded={'md'}
      overflow={'hidden'}>
      <Box
        h={['173px']}
        backgroundImage={cityImg}
        backgroundPosition={'center center'}
        backgroundSize={'cover'}
        pos={'relative'}>
      </Box>
      <HStack p={6} justify={'space-evenly'}>
        <Stack flex={1} justify={'stretch'}>
          <Heading fontSize={'xl'} fontWeight={500}>{city}</Heading>
          <Text fontSize={'xs'} color={'dark.info'} >{country}</Text>
        </Stack>
        <Image width="20" height="20" src={countryImg} title={country} alt={country} />
      </HStack>
    </Box>
  )
}



export default function Continents() {
  return (
    <VStack spacing={0} align={'center'} w={'100%'} minW='100%'  >
      <Header />
      <Center backgroundImage={"/img/Banner.png"}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
        w='100%' h={['150px', '500px']} >
        <VStack w={'full'} h={'full'}
          justify={['center', 'flex-end']} align={['center', 'start']} bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Heading p={8} color={'white'} as='h2' size='xl'>
            Europa
          </Heading>
        </VStack>
      </Center>

      <SimpleGrid py={[8, 16]} maxW={'1200px'} columns={[1, 2]} spacing={4}>
        <Text textAlign={'justify'} px={4}>
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
        <HStack px={4} justify={['start', 'space-evenly']} align={['start', 'center']}>
          <Statistics title={"países"} quantity={50} />
          <Statistics title={"linguas"} quantity={60} />
          <Statistics title={"cidades +100"} quantity={27} />
        </HStack>
      </SimpleGrid>

      <Heading maxW={'1200px'} w='100%' fontWeight='500' textAlign={'start'} py={[8]} px={[4, 0]} as='h2' size='xl'>
        Cidades +100
      </Heading>
      <Wrap maxW={'1200px'} justify={['center', 'start']} align={'center'} spacing={8} pb={4} >
        <WrapItem>
          <Card country={"Reino Unido"} cityImg={"/img/london.png"} city={"Londres"} countryImg={"/img/eng.png"} />
        </WrapItem>

        <WrapItem>
          <Card country={"França"} cityImg={"/img/Foto-3.png"} city={"Paris"} countryImg={"/img/Ellipse 6.png"} />
        </WrapItem>

        <WrapItem>
          <Card country={"Itália"} cityImg={"/img/Foto-2.png"} city={"Roma"} countryImg={"/img/Ellipse 6-2.png"} />
        </WrapItem>

        <WrapItem>
          <Card country={"República Tcheca"} cityImg={"/img/Foto-1.png"} city={"Praga"} countryImg={"/img/Ellipse 6-1.png"} />
        </WrapItem>

        <WrapItem>
          <Card country={"Holanda"} cityImg={"/img/Foto.png"} city={"Amsterdã"} countryImg={"/img/Ellipse 6-3.png"} />
        </WrapItem>


      </Wrap>

    </VStack >
  )
}