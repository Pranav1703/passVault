import { 
    Box, 
    Button,

} from '@chakra-ui/react'


const SideBar = () => {

    

  return (
    <Box
    w={"25%"}
    h={"full"}
    background={"#313335"}
    p={"5"}
    >

        <Button>
            New Folder
        </Button>
    </Box>
  )
}

export default SideBar