import { Wrap } from '@chakra-ui/react';
import { ReactElement, useEffect, useState } from "react";
import { TravelType } from './TravelType';
import { TravelTypesItem } from './TravelTypesItem';




export const TravelTypes = (): ReactElement => {

  const [state, setState] = useState<TravelType[]>([]);

  useEffect(() => {
    fetch('api/travel/types')
      .then(response => response.json())
      .then(data => setState(data));
  }, [])

  return (
    <Wrap align={'center'} justify='center' p={8} spacing={8}>
      {state.map((type: TravelType) => <TravelTypesItem key={type.id} type={type} />)}
    </Wrap>
  )
}