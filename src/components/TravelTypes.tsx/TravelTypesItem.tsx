import { Icon, Image, Stack, Text, useMediaQuery, WrapItem } from '@chakra-ui/react';
import { ReactElement } from "react";
import { BsDot } from 'react-icons/bs';
import { TravelType } from './TravelType';

type TravelTypesItemPros = {
  type: TravelType;
}


export const TravelTypesItem = ({ type: { image, title } }: TravelTypesItemPros): ReactElement => {

  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

  return (
    <WrapItem>
      <Stack direction={['row', 'column']} spacing={[0, 2]} width={36} height={[4, 28]} justify={'center'} align={'center'}>
        {isLargerThan768 && <Image height={12} src={image} title={title} alt={title} />}
        {!isLargerThan768 && <Icon w={8} h={8} color={'brand.500'} as={BsDot} />}
        <Text fontSize={'sm'} fontWeight={600}>{title}</Text>
      </Stack>
    </WrapItem>
  )
}