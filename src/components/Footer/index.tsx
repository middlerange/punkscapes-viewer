import React from 'react';
import { Text, HStack, chakra, VStack } from '@chakra-ui/react';
import { IconOpenSea, IconEtherscan, IconTwitter, IconDiscord } from '../Icons';

function Footer() {
  return (
    <chakra.footer borderTop="1px solid" borderColor="gray.200" py={10}>
      <VStack mx="auto" maxW="6xl" px={4} spacing={5}>
        <Text fontSize="sm" color="gray.600">
          Made by the{' '}
          <a href="https://punkscape.xyz/" target="_blank" rel="noreferrer">
            PunkScape community {'   '}
          </a>
          <chakra.a
            href="https://github.com/middlerange/punkscapes-viewer"
            title="Github"
            target="_blank"
            rel="noreferrer"
            textDecor="underline"
            color="blue.600"
          >
            GitHub
          </chakra.a>
        </Text>
        <HStack as="ul" direction="row" spacing={4} listStyleType="none">
          <li>
            <a
              title="OpenSea"
              className="mx-2 block"
              href="https://opensea.io/collection/punkscapes"
              target="_blank"
              rel="noreferrer"
            >
              <IconOpenSea />
            </a>
          </li>
          <li>
            <a
              title="Etherscan"
              className="mx-2 block"
              href="https://etherscan.io/address/0x51ae5e2533854495f6c587865af64119db8f59b4"
              target="_blank"
              rel="noreferrer"
            >
              <IconEtherscan />
            </a>
          </li>
          <li>
            <a
              title="Twitter"
              className="mx-2 block"
              href="https://twitter.com/PunkScape_ETH"
              target="_blank"
              rel="noreferrer"
            >
              <IconTwitter />
            </a>
          </li>
          <li>
            <a
              title="Discord"
              className="mx-2 block"
              href="https://discord.gg/aPS3Hre57D"
              target="_blank"
              rel="noreferrer"
            >
              <IconDiscord />
            </a>
          </li>
        </HStack>
      </VStack>
    </chakra.footer>
  );
}

export default Footer;
