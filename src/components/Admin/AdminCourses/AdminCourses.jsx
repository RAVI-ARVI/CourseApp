import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Sidebar';
import CourseModel from './CourseModel';

const courses = [
  {
    _id: 'teakdsjlas',
    title: 'React Course',
    category: 'Web Development',
    poster: {
      url: 'https://images.pexels.com/photos/16237440/pexels-photo-16237440/free-photo-of-grass-on-dunes-on-beach-under-fog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    createdBy: 'Ravi Sankar',

    viwes: 1233,
    numOfVideos: 12,
  },
];
function AdminCourses() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const handleDelete = id => {
    console.log(id);
  };
  const handleView = id => {
    onOpen();
    console.log(id);
    console.log('this is open');
  };
  const deleteLecture = (courseId, lectureId) => {
    console.log('lecture deleted', courseId, lectureId);
  };
  const addLecture = (e, courseId, lectureId, description, video) => {
    console.log('this is lecture');
  };
  return (
    <Grid
      css={{ cursor: `url(${cursor}),default` }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box p={['0', '8']} overflowX={'auto'}>
        <Heading
          textTransform={'uppercase'}
          children="All Courses"
          my={'16'}
          textAlign={['center', 'left']}
        />
        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size={'lg'}>
            <TableCaption>All available Courses in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>

                <Th>Title</Th>

                <Th>Category</Th>

                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {courses.map(item => (
                <Row
                  item={item}
                  key={item._id}
                  handleView={handleView}
                  handleDelete={handleDelete}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <CourseModel
          isOpen={isOpen}
          onClose={onClose}
          deleteLecture={deleteLecture}
          id={'djflsjfdlsa'}
          courseTitle={'React Course'}
          addLecture={addLecture}
          lectures={[]}
        />
      </Box>
      <Sidebar />
    </Grid>
  );
}

function Row({ item, handleView, handleDelete }) {
  return (
    <Tr>
      <Td>#{item?._id}</Td>
      <Td>
        <Image src={item?.poster?.url} />
      </Td>
      <Td>{item?.title}</Td>

      <Td textTransform={'uppercase'}>#{item?.category}</Td>
      <Td>{item?.createdBy}</Td>
      <Td isNumeric>{item?.viwes}</Td>
      <Td isNumeric>{item?.numOfVideos}</Td>

      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            variant={'outline'}
            color={'purple.500'}
            onClick={() => handleView(item?._id)}
          >
            View Lectures
          </Button>
          <Button color={'purple.600'} onClick={() => handleDelete(item?._id)}>
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}

export default AdminCourses;
