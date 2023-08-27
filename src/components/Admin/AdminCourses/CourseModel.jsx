import {
  Box,
  Button,
  Grid,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { fileUploadcss } from '../../Auth/Register';

function CourseModel({
  isOpen,
  onClose,
  id,
  deleteLecture,
  addLecture,
  courseTitle,
  lectures,
}) {
  const [title, setTitle] = useState('');
  const [video, setVideo] = useState('');
  const [description, setDescription] = useState('');
  const [videoprev, setVideoprev] = useState('');
  const changeVideoHandler = e => {
    const file = e.target.files[0];
    const render = new FileReader();
    render.readAsDataURL(file);
    render.onloadend = () => {
      setVideoprev(render.result);
      setVideo(file);
    };
  };
  const handleClose = () => {
    setDescription('');
    setTitle('');
    setVideo('');
    setVideoprev('');
    onClose();
  };
  return (
    <Modal
      isOpen={isOpen}
      size={'full'}
      onClose={handleClose}
      scrollBehavior="outside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{courseTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody p={'16'}>
          <Grid templateColumns={['1fr', '3fr 1fr']}>
            <Box px={['0', '16']}>
              <Box my={'5'}>
                <Heading children={courseTitle} />
                <Heading children={`#${id}}`} size={'sm'} opacity={0.4} />
              </Box>
              <VideoCard
                courseId={id}
                deleteButtonHandler={deleteLecture}
                description={'This is introduction to the Course'}
                lectureId={'dsfsadfas'}
                num={1}
                title={'React Introduction'}
                key={id}
              />
            </Box>
            <Box>
              <form
                onSubmit={e => addLecture(e, id, title, description, video)}
              >
                <VStack spacing={'4'}>
                  <Heading
                    children={'Add Lecture'}
                    size={'md'}
                    textTransform={'uppercase'}
                  />
                  <Input
                    focusBorderColor="purple.300"
                    placeholder="Title"
                    onChange={e => setTitle(e.target.value)}
                  />
                  <Input
                    focusBorderColor="purple.300"
                    placeholder="Description"
                    onChange={e => setDescription(e.target.value)}
                  />
                  <Input
                    accept="video/mp4"
                    required
                    type={'file'}
                    focusBorderColor="purle.400"
                    css={{
                      '&::file-selector-button': {
                        ...fileUploadcss,
                        color: 'purple',
                      },
                    }}
                    onChange={changeVideoHandler}
                  />
                  {videoprev && (
                    <video
                      controlsList="nodownload"
                      controls
                      src={videoprev}
                    ></video>
                  )}

                  <Button w={'full'} colorScheme="purple" type="submit">
                    Upload
                  </Button>
                </VStack>
              </form>
            </Box>
          </Grid>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default CourseModel;

const VideoCard = ({
  title,
  num,
  description,

  lectureId,
  courseId,
  deleteButtonHandler,
}) => {
  return (
    <Stack
      direction={['column', 'row']}
      my={'8'}
      borderRadius={'lg'}
      boxShadow={'0 0 10px rgba(107,70,193,0.4)'}
      justifyContent={['flex-start', 'space-between']}
      p={['4', '8']}
    >
      <Box>
        <Heading size={'sm'} children={`#${num} ${title}`} />
        <Text children={description} />
      </Box>
      <Button
        color={'purple.600'}
        onClick={() => deleteButtonHandler(courseId, lectureId)}
      >
        <RiDeleteBin7Fill />
      </Button>
    </Stack>
  );
};
