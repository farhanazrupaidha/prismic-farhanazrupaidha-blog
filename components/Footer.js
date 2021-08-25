import React from 'react'
import { footerStyles } from 'styles'
import { 
  Stack,
  Flex,
  Box,
  Heading,
  Spacer,
  Link,
  Kbd,
  Text,
} from "@chakra-ui/react"
import { SmallAddIcon } from '@chakra-ui/icons';
import "@fontsource/rubik/400.css";

/**
 * Site footer component
 */
const Footer = () => (
  <footer> 
   <Stack boxShadow="dark-lg" h="130px">
     <Flex>
    <Box p="4">
      <Heading as="h2" size="2xl"><Link href="https://farhanazrupaidha.github.io">
        Work Documentation.</Link></Heading>
    </Box>
    <Spacer />
    <span>
    <Box p="2">
    <Kbd><Link href="https://instagram.com/studiofru" isExternal>
      Instagram <SmallAddIcon /></Link></Kbd>
    </Box>
    <Box p="2"> 
    <Kbd><Link href="https://www.youtube.com/channel/UCPe5yVHCmunxQIx_TMZCRTA?view_as=subscriber" isExternal>
      Youtube <SmallAddIcon /></Link></Kbd>
    </Box>  
    <Box p="2"> 
    <Kbd><Link href="https://farhanazrupaidha.bandcamp.com/" isExternal>
      Bandcamp <SmallAddIcon /></Link></Kbd>
    </Box> 
    </span>
    </Flex>
    <Text p="3" textAlign={[ 'right']}>
    © 2021 Farhanaz Rupaidha. All rights reserved. Cirebon, Indonesia | farhanaz.rupaidha@gmail.com 
    </Text>
    </Stack>
  </footer>
)

export default Footer
