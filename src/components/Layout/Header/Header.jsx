import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = {
    role: 'admin',
  };
  const isAuthenticated = true;
  function logouthandler() {
    console.log('logout');
    onClose();
  }
  return (
    <>
      <ColorModeSwitcher />
      <Button
        onClick={onOpen}
        colorScheme="yellow"
        width={'12'}
        height={'12'}
        zIndex={'overlay'}
        rounded={'full'}
        position={'fixed'}
        top="6"
        left={'6'}
      >
        <RiMenu5Fill />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay backdropFilter={'blur(3px)'} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'1px'}>COURSE BUNDLER</DrawerHeader>
          <DrawerBody>
            <VStack>
              <LinkButton onClose={onClose} />
              <LinkButton
                url="/courses"
                title="Browse All Courses"
                onClose={onClose}
              />
              <LinkButton
                url="/request"
                title="Request a Course"
                onClose={onClose}
              />
              <LinkButton url="/contact" title="Contact Us" onClose={onClose} />
              <LinkButton url="/about" title="About" onClose={onClose} />
              <HStack
                justifyContent={'space-evenly'}
                position="absolute"
                bottom={'2rem'}
                width="80%"
              >
                {' '}
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link to={'/profile'} onClick={onClose}>
                          <Button variant={'ghost'} colorScheme="yellow">
                            Profile
                          </Button>
                        </Link>
                        <Button variant={'ghost'} onclick={logouthandler}>
                          <RiLogoutBoxLine /> Logout
                        </Button>
                      </HStack>
                      {user && user.role === 'admin' && (
                        <Link to="/admin/dashboard" onClick={onClose}>
                          {' '}
                          <Button colorScheme="purple" variant={'ghost'}>
                            <RiDashboardFill style={{ margin: '4px' }} />{' '}
                            Dashboard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link to={'/login'} onClick={onClose}>
                      <Button colorScheme="yellow">Login</Button>
                    </Link>
                    <p>OR</p>
                    <Link to={'/register'} onClick={onClose}>
                      <Button colorScheme="yellow">Sign Up</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;

function LinkButton({ url = '/', title = 'Home', onClose }) {
  return (
    <Link to={url} onClick={onClose}>
      <Button variant={'ghost'}>{title}</Button>
    </Link>
  );
}
