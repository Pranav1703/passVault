import { 
    Box, 
    Button,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure,
} from '@chakra-ui/react'
import { useState } from 'react'
import Collection from './Collection'

const SideBar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [newCollection,setNewCollection] = useState<string>("")
  const [collectionList,setCollectionList] = useState<Array<string>>([])


  const createNewCollection = ()=>{
    setCollectionList([...collectionList,newCollection]);

  }

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
      borderBottom={"4px solid grey"}
      >
        <Button
        w={"100%"}
        borderRadius={0}
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
                fontFamily={"Silkscreen"} 
                border={"1px solid"} 
                borderRadius={0}
                minLength={3}
                onChange={(event)=>setNewCollection(event.target.value)}
                maxLength={26}
                />
              <Button marginRight={0} borderRadius={0} onClick={createNewCollection}>+</Button>
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Text
        textAlign={"center"}
        marginTop={"5px"}
        >
          Collections
        </Text>
      </Box>
      <Box
      display={"flex"}
      overflowY={"scroll"}
      flexDirection={"column"}
      >
        {
          collectionList.length>0?(
            collectionList.map((val,index=0)=>(
                <Collection key={index+1} collectionName={val} setList={setCollectionList} id={index}/>
              )
            )
          ):(
            null
          )
        }
      </Box>
    </Box>
  )
}

export default SideBar

