import {
  Box,
  Grid,
  HStack,
  Heading,
  Progress,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Sidebar';
import { DoughnutChart, LineChart } from './Chart';
const Databox = ({ title, qty, qtyPercentage, profit }) => {
  return (
    <Box
      w={['full', '20%']}
      boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
      p={'8'}
      borderRadius={'lg'}
    >
      <Text children={title} />
      <HStack spacing={'6'}>
        <Text fontSize={'2xl'} fontWeight={'bold'} children={qty} />
        <HStack>
          <Text children={`${qtyPercentage}%`} />
          {profit ? (
            <RiArrowUpLine color="green" />
          ) : (
            <RiArrowDownLine color="red" />
          )}
        </HStack>
      </HStack>
      <Text opacity={'0.6'} children={'Since Last Month'} />
    </Box>
  );
};
const Bar = ({ title, value, profit }) => (
  <Box py={'4'} px={['0', '20']}>
    <Heading size={'sm'} children={title} mb="2" />
    <HStack w="full" alignItems={'center'}>
      <Text children={profit ? '0%' : value} />
      <Progress
        w={'full'}
        value={profit ? value : `-${value}%`}
        colorScheme="purple"
      />

      <Text children={`${value > 100 ? value : 100}%`} />
    </HStack>
  </Box>
);
function Dashbord() {
  return (
    <Grid
      css={{ cursor: `url(${cursor}),default` }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box boxSizing="border-box" py="16" px={['4', '0']}>
        <Text
          textAlign={'center'}
          opacity={'0.5'}
          children={`Last change was on ${new Date().toString().split('G')[0]}`}
        />
        <Heading
          children="Dashbord"
          ml={['0', '16']}
          mb="16"
          textAlign={['center', 'left']}
        />
        <Stack
          direction={['column', 'row']}
          minH={'24'}
          justifyContent={'space-evenly'}
        >
          <Databox title="View" qty={123} qtyPercentage={30} profit={true} />
          <Databox title="Usets" qty={43} qtyPercentage={78} profit={true} />
          <Databox
            title="Subscription"
            qty={34}
            qtyPercentage={20}
            profit={false}
          />
        </Stack>
        <Box
          m={['0', '16']}
          borderRadius={'lg'}
          p={['0', '20']}
          mt={['4', '16']}
          boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
        >
          <Heading
            textAlign={['center', 'left']}
            size={'md'}
            children="Views Graph"
            pt={['8', '0']}
            ml={['0', '16']}
          />
          {/* line Grap here */}
          <LineChart />
        </Box>

        <Grid templateColumns={['1fr', '2fr 1fr']}>
          <Box p="4">
            <Heading
              textAlign={['center', 'left']}
              size={'md'}
              children="progress Bar"
              my="8"
              ml={['0', '16']}
            />
            <Box>
              <Bar title="viwe" value={30} profit={true} />
            </Box>
          </Box>
          <Box p={['0', '16']} boxSizing="border-box" py={'4'}>
            <Heading textAlign={'center'} size={'md'} mb="4" children="Users" />
            {/* Dought Groppth */}
            <DoughnutChart />
          </Box>
        </Grid>
      </Box>
      <Sidebar />
    </Grid>
  );
}

export default Dashbord;
