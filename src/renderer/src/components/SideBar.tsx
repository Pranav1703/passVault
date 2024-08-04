import { 
    Box, 
    Button,
    Text,

} from '@chakra-ui/react'

import logo from "../assets/passvault-high-resolution-logo.png"

const SideBar = () => {

    

  return (
    <Box
    w={"23%"}
    h={"full"}
    background={"#313335"}
    p={"0"} 
    paddingLeft={"1px"}
    display={"flex"}
    flexDirection={"column"}
    >
      <Box
      fontSize={"25px"}
      p={"6px"}
      border={"10px solid grey"}
      >
        <h1>PASSVAULT</h1>
      </Box>
      <Box
      borderBottom={"1px solid grey"}
      >
        <Button
        w={"100%"}
        borderRadius={0}
        >
            create Collection
        </Button>
        <Text
        textAlign={"center"}
        >List</Text>
      </Box>
    </Box>
  )
}

export default SideBar