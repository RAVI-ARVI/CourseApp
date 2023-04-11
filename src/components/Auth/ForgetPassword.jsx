import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

function ForgetPassword() {
  const [email, setEmail] = useState('');
  return (
    <Container py={'16'} height={'90vh'}>
      <form>
        <Heading
          children="Forget Password"
          my="16"
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />
        <VStack spacing={'8'}>
          <Input
            required
            id="email"
            value={email}
            type="email"
            onChange={e => setEmail(e.target.value)}
            placeholder="abc@gmail.com"
            focusBorderColor="yellow.400"
          />
          <Button type="sumbit" w={'100%'} colorScheme="yellow">
            Send Rest Link
          </Button>
        </VStack>
      </form>
    </Container>
  );
}

export default ForgetPassword;
