import { Box,Button,Input,InputGroup,InputRightElement,Text, VStack } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "@renderer/App"
import { BiSolidHide } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";

export const Login = () => {
    
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [errMsg,setErrMsg] = useState("")
    const navigate = useNavigate()

    const [show,setShow] = useState<boolean>(false)
    const handleShow = ()=> setShow(!show)

    const {login,setId} = useContext(AuthContext)

    const loginHandler = async()=>{
        const resp = await window.api.loginUser({
            username:username,
            password:password
        })
        if(resp.found){
            login()
            setId(resp.userId)
            navigate("/home")
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
                >Login</Text>

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
                    <InputRightElement width='2rem'>
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
                onClick={loginHandler}
                >
                    Login
                </Button>
                <Text>
                    new user? <Link to={"/signup"}> ➤ signup</Link>
                </Text>
            </VStack>
        </Box>
    </Box>
  )
}
