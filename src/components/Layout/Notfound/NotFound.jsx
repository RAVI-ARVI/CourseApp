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

function NotFound() {
  return (
    <Container h={'90vh'}>
      <VStack justifyContent={'center'} h="full" spacing={'4'}>
        <Heading my={'8'} textAlign={'center'} children="Page Not Found" />
        <RiErrorWarningFill size={'5rem'} />

        <Link to="/">
          <Button variant={'ghost'}>Go to Home</Button>
        </Link>
      </VStack>
    </Container>
  );
}

export default NotFound;
