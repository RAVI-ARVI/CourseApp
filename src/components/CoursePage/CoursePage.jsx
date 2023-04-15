import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import video from '../../assets/videos/intro.mp4';

function CoursePage() {
  const [lectureNumber, setLectureNumber] = useState(0);

  const lectures = [
    {
      _id: 'dfdf',
      title: 'This is Sample Title',
      description: 'this is sample DiscrCription',
      video: {
        url: 'flkdsjf',
      },
    },
    {
      _id: 'dfdf2',
      title: 'This is Sample Title2',
      description: 'this is sample DiscrCription2',
      video: {
        url: 'flkdsjf',
      },
    },
    {
      _id: 'dfdf3',
      title: 'This is Sample Title3',
      description: 'this is sample DiscrCription3',
      video: {
        url: 'flkdsjf',
      },
    },
  ];
  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
          width={'100%'}
          src={video}
          controls
          autoPlay
          controlsList="nodownload  noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        ></video>
        <Heading
          m={'4'}
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
        />
        <Heading m={'4'} children="Description" />
        <Text m={'4'} children={`${lectures[lectureNumber].description}`} />
      </Box>
      <VStack>
        {lectures.map((elemt, index) => (
          <button
            onClick={() => setLectureNumber(index)}
            key={elemt._id}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              margin: 0,
              borderBottom: ' 1px solid rgba(0,0,0,0.2)',
            }}
          >
            <Text noOfLines={1}>
              #{index + 1}
              {elemt.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
}

export default CoursePage;
