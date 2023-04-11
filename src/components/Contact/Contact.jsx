import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <Container h={'92vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading children="Contact US" />
        <form style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel id="name" children="Name" />
            <Input
              type="text"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter your name"
              focusBorderColor="yellow.400"
              required
            />
          </Box>
          <Box my={'4'}>
            <FormLabel id="email" children="Email" />
            <Input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.come"
              focusBorderColor="yellow.400"
              required
            />
          </Box>
          <Box my={'4'}>
            <FormLabel id="message" children="Message" />
            <Textarea
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Your Message ....... "
              focusBorderColor="yellow.400"
            />
          </Box>
          <Button type="submit" my={'4'} colorScheme="yellow">
            Send
          </Button>
          <Box my="4">
            Request for a course?
            <Link to={'/request'}>
              <Button colorScheme="yellow" variant={'link'}>
                Click
              </Button>
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
}

export default Contact;
