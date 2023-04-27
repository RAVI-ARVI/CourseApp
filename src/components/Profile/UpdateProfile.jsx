import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

function UpdateProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <Container minH={'90vh'} py={'16'}>
      <form>
        <Heading
          textTransform={'uppercase'}
          children="Update Profle"
          my={'16'}
          textAlign={['center', 'left']}
        />
        <VStack spacing={'8'}>
          <Input
            required
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
            focusBorderColor="yellow.400"
          />
          <Input
            required
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            focusBorderColor="yellow.400"
          />
          <Button w={'full'} colorScheme="yellow" type="submit">
            Update
          </Button>
        </VStack>
      </form>
    </Container>
  );
}

export default UpdateProfile;
