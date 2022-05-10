import { Box, Text, Flex } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import GradientLayout from '../components/gradientLayout'
import prisma from '../lib/prisma'
import { useMe } from '../lib/hooks'

const Home = ({ artists }) => {
  const { user } = useMe()

  return (
    <GradientLayout
      roundImage
      color="gray"
      subtitle="perfil"
      title={`${user?.firstName} ${user?.lastName}`}
      description={`${user?.playlistsCount} playlists publicas`}
      image="https://dam.smashmexico.com.mx/wp-content/uploads/2018/03/Goku-el-h%C3%A9roe-que-ha-muerto-y-resucitado-en-m%C3%A1s-de-una-ocasi%C3%B3n7-770x433.jpg"
    >
      <Box color="white" paddingX="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Artistas principales este mes
          </Text>
          <Text fontSize="md">Solo visibles para ti</Text>
        </Box>
        <Flex>
          {artists.map((artist) => (
            <Box paddingX="10px" width="20%">
              <Box bg="gray.900" borderRadius="4px" padding="15px" width="100%">
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
