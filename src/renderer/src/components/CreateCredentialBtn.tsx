import { Box, 
    Button, 
    Input, 
    Modal, 
    ModalBody, 
    ModalCloseButton, 
    ModalContent, 
    ModalFooter, 
    ModalHeader, 
    ModalOverlay,
    useDisclosure 
} from "@chakra-ui/react"
import { useState } from "react"

type props = {
  collectionId: number
  getCreds: ()=>Promise<void>
}

const CreateCredentialBtn = ({collectionId,getCreds}:props) => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [name,setName] = useState<string>("")
  const [username,setUsername] = useState<string>("")
  const [password,setPassword] = useState<string>("")
  const [email,setEmail] = useState<string>("") 

  const createNewCredential = async()=>{
    try {
      await window.api.createCredential(collectionId,name,email,username,password)
      getCreds()
    } catch (error) {
      console.log(error)
    }
    setEmail("")
    setName("")
    setPassword("")
    setUsername("")

  }
  return (

    <Box>
        <Button
        w={"100%"}
        borderRadius={0}
        onClick={()=>{
          if(collectionId!==-1){
            onOpen()  
          }
        }}
        border={"2px solid grey"}
        >
          New Credentials
        </Button>
        <Modal
            isCentered
            onClose={onClose}
            isOpen={isOpen}
            motionPreset='slideInBottom'

          >
            <ModalOverlay backdropFilter={"auto"} backdropBlur={"25px"}/>
            <ModalContent
            borderRadius={"0"}
            bg={"grey"}
            w={"100vw"}
            >
              <ModalHeader textAlign={"center"} color={"grey"} padding={0}>Enter Credentials</ModalHeader>
              <ModalCloseButton />
              <ModalBody 
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
     
              >
                <Box
                paddingLeft={5}
                >
                    <Input 
                    width={370} 
                    marginRight={0} 
                    p={0}
                    paddingLeft={"5px"}
                    placeholder='Name' 
                    bg={"whitesmoke"} 
                    color={"black"} 
                    fontFamily={"VT323"} 
                    fontSize={"25px"}
                    border={"1px solid"} 
                    borderRadius={0}
                    minLength={3}
                    value={name}
                    onChange={(event)=>setName(event.target.value)}
                    />
                    <Input 
                    width={370} 
                    marginRight={0} 
                    p={0}
                    paddingLeft={"5px"}
                    placeholder='Email' 
                    bg={"whitesmoke"} 
                    color={"black"} 
                    fontFamily={"VT323"} 
                    fontSize={"25px"}
                    border={"1px solid"} 
                    borderRadius={0}
                    minLength={3}
                    value={email}
                    onChange={(event)=>setEmail(event.target.value)}
                    />
                    <Input 
                    width={370} 
                    marginRight={0} 
                    p={0}
                    paddingLeft={"5px"}
                    placeholder='Username' 
                    bg={"whitesmoke"} 
                    color={"black"} 
                    fontFamily={"VT323"} 
                    fontSize={"25px"}
                    border={"1px solid"} 
                    borderRadius={0}
                    minLength={3}
                    value={username}
                    onChange={(event)=>setUsername(event.target.value)}
                    />
                    <Input 
                    width={370} 
                    marginRight={0} 
                    p={0}
                    paddingLeft={"5px"}
                    placeholder='Password' 
                    bg={"whitesmoke"} 
                    color={"black"} 
                    fontFamily={"VT323"}
                    fontSize={"25px"} 
                    border={"1px solid"} 
                    borderRadius={0}
                    minLength={3}
                    value={password}
                    onChange={(event)=>setPassword(event.target.value)}
                    />
                    <Button marginRight={0} borderRadius={0} onClick={createNewCredential} w={370}>Save</Button>
                </Box>

              </ModalBody>
              <ModalFooter>
              </ModalFooter>
            </ModalContent>
        </Modal>
    </Box>
    
)
}

export default CreateCredentialBtn