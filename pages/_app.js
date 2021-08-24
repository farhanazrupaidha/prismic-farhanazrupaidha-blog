// import App from 'next/app'
import { reset, globals } from 'styles'
import { 
  ChakraProvider,
  extendTheme,
  Flex,
  Box,
  Heading,
  Spacer,
  Link,
  Kbd,
 } from "@chakra-ui/react"
 import { ColorModeSwitcher } from '../styles/ColorModeSwitcher';
 import { SmallAddIcon } from '@chakra-ui/icons';
 import "@fontsource/rubik/400.css";

 const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  fonts: {
    heading: "Rubik",
  },
}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
    <Flex boxShadow="md">
    <Box p="2">
      <Heading size="md"><Link href="https://farhanazrupaidha.github.io">
       Click here for full portfolio.</Link></Heading>
    </Box>
    <Spacer />
    <Box>
    <span>
    <Kbd><Link href="https://studiofru.ck.page/6f1469dfd1" isExternal>
      Be my friend. <SmallAddIcon /></Link></Kbd>
    </span>
    <ColorModeSwitcher variant="ghost" justifySelf="flex-end" />
    </Box>  
    </Flex>
    <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
