import { Box, VStack, Text, Input, Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"



export const Signup = () => {

    const navigate = useNavigate()

    const signupHandler=()=>{
        navigate("/")
    }

  return (
    <Box
    h={"100vh"}
    bgColor={"black"}
    fontFamily={`"Silkscreen", sans-serif`}
    display={"flex"}
    m={0}
    p={0}
    >
        <Box
        w={"50%"}
        border={"4px solid grey"}
        height={"45%"}
        m={"auto"}
        >
            <VStack
            h={"100%"}
            justifyContent={"space-evenly"}
            >
                <Text
                fontSize={"25px"}
                fontFamily={"Silkscreen"}
                
                >Sign UP</Text>
                <Input 
                width={370} 
                marginRight={0} 
                paddingLeft={"5px"}
                placeholder='Username' 
                bg={"whitesmoke"} 
                color={"black"} 
                fontFamily={"Silkscreen"} 
                fontSize={"20px"}
                border={"1px solid"} 
                borderRadius={0}
                minLength={4}
                
                onChange={()=>{}}
                />
                
                <Input 
                width={370} 
                marginRight={0} 
                paddingLeft={"5px"}
                placeholder='Password' 
                bg={"whitesmoke"} 
                color={"black"} 
                fontFamily={"Silkscreen"} 
                fontSize={"20px"}
                border={"1px solid"} 
                borderRadius={0}
                minLength={4}
                
                onChange={()=>{}}
                />

                <Button
                fontSize={"20px"}
                borderRadius={0}
                onClick={signupHandler}
                >
                    SignUp
                </Button>
            </VStack>
        </Box>
    </Box>
  )
}
