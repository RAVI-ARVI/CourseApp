import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

function ChangePassword() {
  const [oldpassword, setOldpassword] = useState('');
  const [newpassword, setNewpassword] = useState('');

  return (
    <Container minH={'90vh'} py={'16'}>
      <form>
        <Heading
          textTransform={'uppercase'}
          children="Change Password"
          my={'16'}
          textAlign={['center', 'left']}
        />
        <VStack spacing={'8'}>
          <Input
            required
            type="password"
            value={oldpassword}
            onChange={e => setOldpassword(e.target.value)}
            placeholder="Enter Old password"
            focusBorderColor="yellow.400"
          />
          <Input
            required
            type="password"
            value={newpassword}
            onChange={e => setNewpassword(e.target.value)}
            placeholder="Enter New password"
            focusBorderColor="yellow.400"
          />
          <Button w={'full'} colorScheme="yellow" type="submit">
            Change
          </Button>
        </VStack>
      </form>
    </Container>
  );
}

export default ChangePassword;
