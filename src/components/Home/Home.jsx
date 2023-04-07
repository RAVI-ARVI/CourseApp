import React from 'react';
import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import './home.css';
import { Link } from 'react-router-dom';
import vg from '../../assets/images/bg.png';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiUdemy, SiCoursera } from 'react-icons/si';
import { DiAws } from 'react-icons/di';

function Home() {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height={'100%'}
          justifyContent={['center', 'space-between']} //you can add flex-end at web
          alignItems={'center'}
          spacing={['16', '56']}
        >
          <VStack width={'full '}>
            <Heading children={'LEARN FROM THE EXPERTS'} size={'2xl'} />
            <Text children={'Find Valueable Content At Reasonable Price'} />
            <Link to={'/courses'}>
              <Button size={'lg'} colorScheme="yellow">
                Expore Now
              </Button>
            </Link>
          </VStack>
          <Image boxSize={'md'} src={vg} objectFit={'contain'} />
        </Stack>
      </div>
      <Box padding={'8'}>
        <Heading
          children={'OUR BRANDS'}
          textAlign={'center'}
          fontFamily={'body'}
          color={'yellow.400'}
        />
        <HStack>
          <CgGoogle />
          <CgYoutube />
          <SiUdemy />
          <SiCoursera />
          <DiAws />
        </HStack>
      </Box>
    </section>
  );
}

export default Home;
