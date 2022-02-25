import { useState } from 'react';
import type { NextPage } from 'next';
import { Box, keyframes, Heading } from '@chakra-ui/react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

const shake = keyframes`
  0% {
    transform: rotate(0deg) translate(-50%, -50%);
  }
  25%{
    transform: rotate(1deg) translate(-50%, -50%);
  }
  50%{
    transform: rotate(0deg) translate(-50%, -50%);
  }
  70%{
    transform: rotate(-1deg) translate(-50%, -50%);
  }
  100%{
    transform: rotate(0deg) translate(-50%, -50%);
  }
`;

const boxOpen = keyframes`
  0%{
    top:0px;
    opacity:1;
  }
  100%{
    top:-50px;
    opacity:0;
  }
`;

const bgChange = keyframes`
  from {
    background-color: #F0E2DB;
  }

  to {
    background-color: #EFA5B2;
  }
`;

const videoOpen = keyframes`
  0% {
    top: 110%;
  }

  100% {
    top: 50%;
  }
`;

const Home: NextPage = () => {
  const { width, height } = useWindowSize();
  const [isVisible, setIsVisible] = useState(false);
  const [isConfettiVisible, setIsConfettiVisible] = useState(false);
  const shakeAnimation = `${shake} infinite 0.5s`;
  const boxOpenAnimation = `${boxOpen} 1s forwards`;
  const videoOpenAnimation = `${videoOpen} 1s`;
  const bgAnimation = `${bgChange} 1s forwards`;

  const handleOpenSurprise = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsConfettiVisible(true);
    }, 1000);
  };

  return (
    <>
      <Box
        h="100vh"
        w="100%"
        transition="1s"
        overflow="hidden"
        bg="#F0E2DB"
        animation={isVisible ? bgAnimation : 'none'}
      >
        {isConfettiVisible && <Confetti width={width} height={height} />}
        <Box
          pos="absolute"
          top="50%"
          left="50%"
          width="100px"
          height="100px"
          transform="translate(-50%, -50%)"
          transition="1s"
          cursor="pointer"
          animation={shakeAnimation}
          onClick={handleOpenSurprise}
          opacity={isVisible ? 0 : 1}
        >
          <Box
            pos="relative"
            width="110%"
            height="25%"
            bg="#F54537"
            borderRadius="5px 5px 0 0"
            transform="translate3d(-5%, 0, 0)"
            backgroundImage="linear-gradient(to right, #F54537 0%, #F54537 44%, #FFC113 44%, #FFC113 56%, #F54537 56%, #F54537 100%);"
            transition="1s"
            _after={{
              content: '""',
              width: '20px',
              height: '20px',
              border: '5px solid #FFC113',
              borderRadius: '50% 50% 0 50%',
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translate3d(-100%, -100%, 0) skew(10deg, 10deg)',
            }}
            _before={{
              content: '""',
              width: '20px',
              height: '20px',
              border: '5px solid #FFC113',
              borderRadius: '50% 50% 0 50%',
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translate3d(-100%, -100%, 0) skew(10deg, 10deg)',
            }}
            animation={isVisible ? boxOpenAnimation : 'none'}
          />
          <Box
            _after={{
              content: '""',
              width: '20px',
              height: '20px',
              border: '5px solid #FFC113',
              borderRadius: '50% 50% 50% 0',
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translate3d(0, -100%, 0) skew(-10deg, -10deg);',
            }}
            _before={{
              content: '""',
              width: '20px',
              height: '20px',
              border: '5px solid #FFC113',
              borderRadius: '50% 50% 0 50%',
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translate3d(-100%, -100%, 0) skew(10deg, 10deg)',
            }}
            animation={isVisible ? boxOpenAnimation : 'none'}
          />
          <Box
            width="100%"
            height="75%"
            pos="relative"
            backgroundImage="linear-gradient(to right, #D43130 0%, #D43130 45%, #FF900A 45%, #FF900A 55%, #D43130 55%, #D43130 100%);"
            borderRadius="0 0 5px 5px"
            transition="1s"
          />
        </Box>
        {isConfettiVisible && (
          <Box
            as="video"
            w="90%"
            h="65%"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            pos="absolute"
            autoPlay
            controls
            animation={videoOpenAnimation}
          >
            <Box as="source" src="bato_bol.mp4" type="video/mp4" />
          </Box>
        )}
      </Box>
    </>
  );
};

export default Home;
