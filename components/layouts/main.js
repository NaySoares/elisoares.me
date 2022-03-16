import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return (
    <Box as='main' pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Elienai Website" />
        <meta name="author" content="Elienai Soares" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <title>Elienai Soares - Homepage</title>
      </Head>

      <Navbar path = {router.asPath} />

      <Container maxW="760" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main