
import CredBox from './CredBox'
import SideBar from './SideBar'
import { Box } from '@chakra-ui/react'


const Home = () => {
  // const {isOpen,onClose} = useDisclosure()
  return (
    <Box
    // h={563}
    h={"100vh"}
    bgColor={"black"}
    fontFamily={`"Silkscreen", sans-serif`}
    display={"flex"}
    >
        <SideBar/>
        <CredBox/>
    </Box>
  )
}

export default Home