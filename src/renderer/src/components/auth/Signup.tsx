import { Box, VStack, Text, Input, Button, InputGroup, InputRightElement, background } from "@chakra-ui/react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BiSolidHide } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";


export const Signup = () => {

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [errMsg,setErrMsg] = useState("")
    const navigate = useNavigate()


    const [show,setShow] = useState<boolean>(false)
    const handleShow = ()=> setShow(!show)

    const signupHandler=async()=>{
        const resp = await window.api.signupUser({
            username:username,
            password:password
        })
        if(resp.created){
            navigate("/")
        }else if(resp.err){
            setErrMsg(resp.err)
        }
    }

  return (
    <Box
    h={"100vh"}
    bgColor={"grey"}
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
                fontFamily={`"VT323",monospace`}
                fontSize={"20px"}
                border={"1px solid"} 
                borderRadius={0}
                minLength={4}
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                />
                
                <InputGroup
                display={"flex"}
                justifyContent={"center"}
                >
                    <Input 
                    width={370} 
                    marginRight={0} 
                    paddingLeft={"5px"}
                    placeholder='Password' 
                    bg={"whitesmoke"} 
                    color={"black"} 
                    fontFamily={`"VT323",monospace`}
                    fontSize={"20px"}
                    border={"1px solid"} 
                    borderRadius={0}
                    minLength={4}
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    type={show ? 'text' : 'password'}
                    />
                    <InputRightElement width='2rem' p={0}>
                        <Button size='xs' onClick={handleShow} borderRadius={0} p={0}>
                        {show ? (
                                <BiSolidHide style={{color:"black",backgroundColor:"black"}} size={24} width={50}/>
                            ) : (
                                <BiSolidShow style={{color:"black",backgroundColor:"black"}} size={24} width={50}/>
                            )
                        }
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <Text textAlign={"center"}>{errMsg}</Text>
                <Button
                fontSize={"20px"}
                borderRadius={0}
                onClick={signupHandler}
                >
                    SignUp
                </Button>
                <Text>
                    already a user? <Link to={"/"}> ➤ Login</Link>
                </Text>
            </VStack>
        </Box>
    </Box>
  )
}
