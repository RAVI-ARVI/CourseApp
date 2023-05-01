import React from 'react';
import cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Sidebar';
import { Box, Grid } from '@chakra-ui/react';

function CreateCourse() {
  return (
    <Grid
      css={{ cursor: `url(${cursor}),default` }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box></Box>
      <Sidebar />
    </Grid>
  );
}

export default CreateCourse;
