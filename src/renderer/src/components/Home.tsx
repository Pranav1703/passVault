import HomeContent from './HomeContent'
import { Box } from '@chakra-ui/react'

const Home = () => {

  return (
    <Box
    h={"100vh"}
    bgColor={"black"}
    fontFamily={`"Silkscreen", sans-serif`}
    display={"flex"}
    >
        <HomeContent/>
    </Box>
  )
}

export default Home

