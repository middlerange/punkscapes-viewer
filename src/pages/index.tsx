import React, { useCallback, useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { chakra, Input, Text, VStack } from '@chakra-ui/react';
import PageLayout from '../layout/Page';

const queryClient = new QueryClient();

function App() {
  const router = useRouter();
  const id = getSearchID();
  const [ownerAddress, setownerAddress] = useState(id);

  const updateownerAddress = useCallback(
    (e) => {
      setownerAddress(e);
      router.replace({ query: { owner: e } });
    },
    [router],
  );

  function getSearchID() {
    if (process.browser) {
      const search = window.location.search;
      return new URLSearchParams(search).get('owner') || undefined;
    }
    return undefined;
  }

  return (
    <PageLayout>
      <QueryClientProvider client={queryClient}>
        <chakra.main>
          <VStack mx="auto" px={4} spacing={5} w="full" maxW="lg">
            <img
              src="https://punkscape.xyz/assets/logo.827c0d7f.png"
              alt="logo"
            />
            <VStack w="full">
              <Text fontSize="xl">Search PunkScapes</Text>
              <Input
                aria-label="Search owner punkscapes"
                placeholder="Enter owner address"
                value={ownerAddress}
                onChange={(e) => updateownerAddress(e.target.value)}
                id="hero-field"
                name="hero-field"
                bg="white"
              />
            </VStack>
            {typeof window !== 'undefined' && ownerAddress ? (
              <Nft ownerAddress={ownerAddress.toString()} />
            ) : null}
          </VStack>
        </chakra.main>
      </QueryClientProvider>
    </PageLayout>
  );
}

function Nft({ ownerAddress }: { ownerAddress: string }) {
  const { isLoading, error, data, isFetching } = useQuery(
    `punkscapes-${ownerAddress}`,
    () =>
      fetch(
        `https://api.punkscape.xyz/address/${ownerAddress}/punkscapes`,
      ).then((res) => res.json()),
    {
      refetchOnWindowFocus: false,
    },
  );

  if (isLoading || isFetching) return <Text>loading</Text>;

  if (error || !data) return <Text>Not found.</Text>;

  return (
    <div>
      <VStack w="full" spacing={5}>
        {data.map((token: any) => (
          <a
            href={`https://opensea.io/assets/0x51ae5e2533854495f6c587865af64119db8f59b4/${token.token_id}`}
            key={token.token_id}
            target="_blank"
            rel="noreferrer"
          >
            <chakra.img
              alt={'data'!}
              src={token.image_lg!}
              border={4}
              borderStyle="solid"
              borderColor="gray.200"
              w="full"
              objectFit="cover"
              objectPosition="center"
              rounded="md"
            />
          </a>
        ))}
      </VStack>
    </div>
  );
}

export default App;
