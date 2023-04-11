import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const params = useParams();
  console.log(params.token);
  return (
    <Container py={'16'} height={'90vh'}>
      <form>
        <Heading
          children="Reset Password"
          my="16"
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />
        <VStack spacing={'8'}>
          <Input
            required
            id="email"
            value={password}
            type="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="New Password"
            focusBorderColor="yellow.400"
          />
          <Button type="sumbit" w={'100%'} colorScheme="yellow">
            Reset Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
}

export default ResetPassword;
