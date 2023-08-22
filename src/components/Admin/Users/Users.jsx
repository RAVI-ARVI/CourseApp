import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Sidebar';
const users = [
  {
    _id: 'teakdsjlas',
    name: 'ravi',
    email: 'ravi@gmail.com',
    role: 'admin',
    subscription: {
      status: 'active',
    },
  },
];
function Users() {
  const handleDelete = id => {
    console.log(id);
  };
  const handleChange = id => {
    console.log(id);
  };
  return (
    <Grid
      css={{ cursor: `url(${cursor}),default` }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box p={['0', '16']} overflowX={'auto'}>
        <Heading
          textTransform={'uppercase'}
          children="All Users"
          my={'16'}
          textAlign={['center', 'left']}
        />
        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size={'lg'}>
            <TableContainer>All available users in the database</TableContainer>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>

                <Th>Email</Th>

                <Th>Role</Th>

                <Th>Subscription</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map(item => (
                <Row
                  item={item}
                  key={item._id}
                  handleChange={handleChange}
                  handleDelete={handleDelete}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Sidebar />
    </Grid>
  );
}

export default Users;

function Row({ item, handleChange, handleDelete }) {
  return (
    <Tr>
      <Td>#{item?._id}</Td>
      <Td>#{item?.name}</Td>

      <Td>#{item?.email}</Td>
      <Td>#{item?.role}</Td>
      <Td>
        #{item?.subscription?.status === 'active' ? 'Active' : 'Not Active'}
      </Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            variant={'outline'}
            color={'purple.500'}
            onClick={() => handleChange(item?._id)}
          >
            Change Role
          </Button>
          <Button color={'purple.600'} onClick={() => handleDelete(item?._id)}>
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
