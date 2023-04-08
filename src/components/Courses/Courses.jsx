import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylist,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize={'60'} objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW={'200px'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        size={'sm'}
        children={title}
      />
      <Text noOfLines={2} children={description} />
      <HStack>
        <Text
          fontWeight={'bold'}
          textTransform={'uppercase'}
          children={'Creator'}
        />
        <Text
          fontFamily={'body'}
          textTransform={'uppercase'}
          children={creator}
        />
      </HStack>
      <Heading
        textAlign={'center'}
        size={'xs'}
        children={`Lectures -${lectureCount}`}
        textTransform={'uppercase'}
      />
      <Heading
        size={'xs'}
        children={`Views -${views}`}
        textTransform={'uppercase'}
      />
      <Stack direction={['column', 'row']} alignItems={'center'}>
        <Link to={`/course/${id}`}>
          <Button colorScheme="yellow"> Watch Now</Button>
        </Link>
        <Button
          variant={'ghost'}
          colorScheme="yellow"
          onClick={() => addToPlaylist(id)}
        >
          Add to Playlist
        </Button>
      </Stack>
    </VStack>
  );
};

function Courses() {
  const [Keyword, setKeyword] = useState('');
  const [categorie, setCategorie] = useState('');
  const categories = [
    'Web development',
    'Artificial Intellegence',
    'App Developement',
    'Web development',
    'Artificial Intellegence',
    'App Developement',
    'Web development',
    'Artificial Intellegence',
    'App Developement',
    'Web development',
    'Artificial Intellegence',
    'App Developement',
  ];
  return (
    <Container minH={'95vh'} maxW="container.lg" padding={'8'}>
      <Heading children="All Courses" m={'8'} />
      <Input
        value={Keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder={'Search a course...'}
        type="text"
        focusBorderColor="yellow.500"
      />
      <HStack
        overflow={'auto'}
        paddingY={'8'}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {categories.map(item => (
          <Button key={item} minW={'60'} onClick={() => setCategorie(item)}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>
      <Stack
        direction={['column', 'row']}
        flexWrap={'wrap'}
        alignItems={['center', 'flex-start']}
        justifyContent={['flex-start', 'space-evenly']}
      >
        <Course
          addToPlaylist={() => console.log('addtolaylist')}
          creator={'test'}
          description={'test'}
          id={'tss'}
          imageSrc={
            'https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
          }
          lectureCount={'3'}
          title={'test'}
          views={2000}
        />{' '}
      </Stack>
    </Container>
  );
}

export default Courses;
