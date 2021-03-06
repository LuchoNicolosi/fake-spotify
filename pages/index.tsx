import { Box, Text, Flex } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import GradientLayout from '../components/gradientLayout'
// import { useMe } from '../lib/hooks'
import prisma from '../lib/prisma'

const Home = ({ artists }) => {
  // const { user } = useMe()

  return (
    <GradientLayout
      roundImage
      color="gray"
      subtitle="perfil"
      title="Luciano Nicolosi"
      description="10 playlists publicas"
      image="fotoperfilmain.jpg"
    >
      <Box color="white" paddingX="40px" flexWrap="wrap">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Artistas principales este mes
          </Text>
          <Text fontSize="md">Solo visibles para ti</Text>
        </Box>
        <Flex>
          {artists.map((artist) => (
            <Box paddingX="10px" width="20%">
              <Box
                bg="gray.900"
                borderRadius="4px"
                padding="15px"
                width="100%"
                height="100%"
              >
                <Image
                  src="https://placekitten.com/300/300"
                  borderRadius="100%"
                />
                <Box marginTop="20px">
                  <Text fontSize="large">{artist.name}</Text>
                  <Text fontSize="x-small">Artista</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  )
}

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({})

  return {
    props: { artists },
  }
}

export default Home
