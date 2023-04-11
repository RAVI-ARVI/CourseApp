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

function Request() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  return (
    <Container h={'92vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading children="Request New Course" />
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
            <FormLabel id="course" children="Course" />
            <Textarea
              id="course"
              value={course}
              onChange={e => setCourse(e.target.value)}
              placeholder="Explain The Course....... "
              focusBorderColor="yellow.400"
            />
          </Box>
          <Button type="submit" my={'4'} colorScheme="yellow">
            Send
          </Button>
          <Box my="4">
            See Avaliable Courses ! {'  '}
            <Link to={'/courses'}>
              <Button colorScheme="yellow" variant={'link'}>
                Click {'  '}
              </Button>
              {'  '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
}

export default Request;
