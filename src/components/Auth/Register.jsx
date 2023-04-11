import {
  Avatar,
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export const fileUploadcss = {
  cursor: 'pointer',
  marginLeft: '-5%',
  width: '110%',
  border: 'none',
  height: '100%',
  color: '#ECC94B',
  backgroundColor: 'white',
};
const fileUploadStyle = {
  '&::file-selector-button': fileUploadcss,
};
function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [image, setImage] = useState('');
  const handleImageChange = e => {
    const file = e.target.files[0];
    const render = new FileReader();
    render.readAsDataURL(file);
    render.onloadend = () => {
      setImagePreview(render.result);
      setImage(file);
    };
  };
  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading textTransform={'uppercase'} children={'Regisration'} />
        <form style={{ width: '100%' }}>
          <Box my="4" display={'flex'} justifyContent={'center'}>
            <Avatar size={'2xl'} src={imagePreview} />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              type="text"
              onChange={e => setName(e.target.value)}
              placeholder="Enter your name"
              focusBorderColor="yellow.400"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              type="email"
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              focusBorderColor="yellow.400"
            />
          </Box>
          <Box my={'4'}>
            {' '}
            <FormLabel htmlFor="password" children="Password Address" />
            <Input
              required
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password"
              focusBorderColor="yellow.400"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="avatar" children="Choose Avatar" />
            <Input
              accept="image/*"
              required
              id="avatar"
              type={'file'}
              focusBorderColor="yellow.400"
              css={fileUploadStyle}
              onChange={handleImageChange}
            />
          </Box>

          <Button my="4" colorScheme="yellow" type="submit">
            Sign Up
          </Button>
          <Box my="4">
            Already Signed Up?
            <Link to={'/login'}>
              <Button colorScheme="yellow" variant={'link'}>
                Login
              </Button>
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
}

export default Register;
