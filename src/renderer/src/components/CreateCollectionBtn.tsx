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
} from '@chakra-ui/react'

type modelProps = {
    setNewCollectionName: React.Dispatch<React.SetStateAction<string>>
    createNewCollection: ()=>Promise<void>
}

const CreateCollectionModal = ({setNewCollectionName,createNewCollection}:modelProps) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
   <Box>
        <Button
            w={"100%"}
            borderRadius={0}
            border={"2px solid grey"}
            onClick={()=>{
              onOpen()
            }}
            >
              create Collection
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
              <ModalHeader textAlign={"center"} color={"grey"} padding={0}>Enter Collection Name</ModalHeader>
              <ModalCloseButton />
              <ModalBody 
              display={"flex"}
              justifyContent={"center"}
              >
                <Input 
                  width={310} 
                  marginRight={0} 
                  p={0}
                  paddingLeft={"5px"}
                  placeholder='Enter New Collection name' 
                  bg={"whitesmoke"} 
                  color={"black"} 
                  fontFamily={"VT323"} 
                  fontSize={"20px"}
                  border={"1px solid"} 
                  borderRadius={0}
                  minLength={3}
                  onChange={(event)=>setNewCollectionName(event.target.value)}
                  maxLength={26}
                  />
                <Button marginRight={0} borderRadius={0} onClick={createNewCollection}>+</Button>
              </ModalBody>
              <ModalFooter>
              </ModalFooter>
            </ModalContent>
        </Modal>
   </Box> 
  )
}

export default CreateCollectionModal