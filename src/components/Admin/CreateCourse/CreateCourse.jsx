import {
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Input,
  Select,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import cursor from '../../../assets/images/cursor.png';
import { fileUploadcss } from '../../Auth/Register';
import { categories } from '../../Courses/Courses';
import Sidebar from '../Sidebar';

function CreateCourse() {
  const [title, setTilte] = useState('');
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const handleImageChange = e => {
    const file = e.target.files[0];
    const render = new FileReader();
    render.readAsDataURL(file);
    render.onloadend = () => {
      setImagePrev(render.result);
      setImage(file);
    };
  };
  return (
    <Grid
      css={{ cursor: `url(${cursor}),default` }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Container py={'16'}>
        <form>
          <Heading
            textTransform={'uppercase'}
            children="Create Course"
            my={'16'}
            textAlign={['center', 'left']}
          />
          <VStack m={'auto'} spacing={8}>
            <Input
              required
              type="text"
              value={title}
              onChange={e => setTilte(e.target.value)}
              placeholder="Title"
              focusBorderColor="purple.300"
            />
            <Input
              required
              type="text"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Description"
              focusBorderColor="purple.300"
            />
            <Input
              required
              type="text"
              value={createdBy}
              onChange={e => setCreatedBy(e.target.value)}
              placeholder="Creator Name"
              focusBorderColor="purple.300"
            />
            <Select
              focusBorderColor="purple.300"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value={''}>category</option>
              {categories.map(item => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </Select>
            <Input
              accept="image/*"
              required
              type={'file'}
              focusBorderColor="purle.400"
              css={{
                '&::file-selector-button': {
                  ...fileUploadcss,
                  color: 'purple',
                },
              }}
              onChange={handleImageChange}
            />
            {imagePrev && (
              <Image src={imagePrev} boxSize={'64'} objectFit={'contain'} />
            )}
            <Button w={'full'} colorScheme="purple" type="submit">
              Create
            </Button>
          </VStack>
        </form>
      </Container>
      <Sidebar />
    </Grid>
  );
}

export default CreateCourse;
