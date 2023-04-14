import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function PaymentFail() {
  return (
    <Container h={'90vh'}>
      <VStack justifyContent={'center'} h="full" spacing={'4'}>
        <Heading
          my={'8'}
          textAlign={'center'}
          textTransform={'uppercase'}
          children="Payment Fail"
        />
        <RiErrorWarningFill size={'5rem'} />

        <Link to="/subscribe">
          <Button variant={'ghost'}>Try Again</Button>
        </Link>
      </VStack>
    </Container>
  );
}
export default PaymentFail;
