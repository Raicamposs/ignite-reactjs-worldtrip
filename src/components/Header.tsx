import { Flex, IconButton, Image, Spacer } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { ReactElement } from "react"
import { IoIosArrowBack } from "react-icons/io"


export const Header = (): ReactElement => {

  const router = useRouter()

  const contaisContinents = router.pathname.includes("continents");


  return (
    <Flex bg="header" m={0} as="header" align={'center'} h="100%" w="100%" justify="center" py="4">

      {contaisContinents && <IconButton
        onClick={() => router.back()}
        _hover={{ bg: 'transparent', color: 'brand.500', border: 'none' }}
        ml={[0, 8]} background={"transparent"} aria-label='Voltar' icon={<IoIosArrowBack fontSize={24} />} />}
      <Spacer />
      <Image height={6} src="/svg/logo.svg" title="WorldTrip" alt="WorldTrip" />
      <Spacer />
    </Flex>
  )
}