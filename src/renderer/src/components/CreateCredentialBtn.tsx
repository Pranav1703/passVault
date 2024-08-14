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


const CreateCredentialBtn = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (

    <Box>
        <Button
        w={"100%"}
        borderRadius={0}
        onClick={()=>{
          onOpen()
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
                    placeholder='Username' 
                    bg={"whitesmoke"} 
                    color={"black"} 
                    fontFamily={"Silkscreen"} 
                    border={"1px solid"} 
                    borderRadius={0}
                    minLength={3}
                    onChange={(event)=>{}}
                    />
                    <Input 
                    width={370} 
                    marginRight={0} 
                    p={0}
                    paddingLeft={"5px"}
                    placeholder='Password' 
                    bg={"whitesmoke"} 
                    color={"black"} 
                    fontFamily={"Silkscreen"} 
                    border={"1px solid"} 
                    borderRadius={0}
                    minLength={3}
                    onChange={(event)=>{}}
                    />
                    <Button marginRight={0} borderRadius={0} onClick={()=>{}} w={370}>Save</Button>
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