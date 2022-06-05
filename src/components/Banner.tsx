import { Flex, HStack, Image, Stack, Text, useBreakpointValue, useMediaQuery } from "@chakra-ui/react"
import { ReactElement } from "react"


export const Banner = (): ReactElement => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
  return (

    <Flex
      w={'full'}
      h={['48', '64']}
      backgroundImage={
        'url("/svg/background.svg")'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <HStack
        w={'full'}
        justify={'center'}
        spacing={[4, 24]}
        px={[4, 8]}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={[4, 6]}>
          <Text
            color={'white'}
            fontWeight={500}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: 'md', md: 'xl' })}>
            5 Continentes,<br />
            infinitas possibilidades.
          </Text>
          <Text
            color={'white'}
            fontWeight={400}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: 'xs', md: 'sm' })}>
            Chegou a hora de tirar do papel a viagem que você <br /> sempre sonhou.
          </Text>
        </Stack>
        {isLargerThan768 &&
          <Image height={48} src="/svg/airplane.svg" title="WorldTrip" alt="WorldTrip" />
        }
      </HStack>
    </Flex>
  )
}