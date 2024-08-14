
import CredBox from './CredBox'
import SideBar from './SideBar'
import { Box } from '@chakra-ui/react'


const Home = () => {
  // const {isOpen,onClose} = useDisclosure()
  return (
    <Box
    h={"100vh"}
    bgColor={"black"}
    fontFamily={`"Silkscreen", sans-serif`}
    display={"flex"}
    >
        <SideBar/>
    </Box>
  )
}

export default Home