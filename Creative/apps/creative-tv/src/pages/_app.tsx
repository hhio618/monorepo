import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThirdwebProvider, coinbaseWallet, localWallet, metamaskWallet, smartWallet } from '@thirdweb-dev/react'
import { Goerli } from '@thirdweb-dev/chains'
import { Layout } from 'components/layout'
import { ChakraProvider } from 'providers/Chakra'
import { useIsMounted } from 'hooks/useIsMounted'
import { Seo } from 'components/layout/Seo'
import { SMART_WALLET_KEY, ACCOUNT_FACTORY_TESTNET } from 'utils/config'

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = Goerli

export default function App({ Component, pageProps }: AppProps) {
  const isMounted = useIsMounted()
  // Create a client
  const queryClient = new QueryClient()

  return (
    <ChakraProvider>
      <Seo />
      <QueryClientProvider client={queryClient}>
        {true && (
          <ThirdwebProvider activeChain={activeChain} clientId="0521000f755075a1a61f120c3376bd43" supportedWallets={[metamaskWallet()]}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
          </ThirdwebProvider>
        )}
      </QueryClientProvider>
    </ChakraProvider>
  )
}
