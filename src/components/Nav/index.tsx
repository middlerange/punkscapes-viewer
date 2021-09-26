import React from 'react';
import { chakra, Flex, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import { IconGitHub } from '../Icons';

function Nav() {
  return (
    <chakra.nav borderBottom="1px solid" borderColor="gray.200">
      <Flex
        justify="space-between"
        align="center"
        mx="auto"
        maxW="6xl"
        py={3}
        px={4}
      >
        <Link href="/" passHref>
          <HStack as="a" title="punkscapes" display="flex" alignItems="center">
            <img
              src="https://punkscape.xyz/assets/logo.827c0d7f.png"
              alt="logo"
              style={{ maxWidth: '140px' }}
            />
          </HStack>
        </Link>
        <HStack spacing={{ base: 3, sm: 10 }}>
          <Link href="/" passHref>
            Home
          </Link>
          <chakra.a
            href="https://github.com/middlerange/punkscapes-viewer"
            target="_blank"
            rel="noreferrer"
            title="punkscapes viewer repo"
          >
            <IconGitHub
              h={7}
              w={7}
              opacity={0.6}
              transition="opacity 300ms ease-in-out"
              _hover={{ opacity: 1 }}
            />
          </chakra.a>
        </HStack>
      </Flex>
    </chakra.nav>
  );
}

export default Nav;
