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
    Tab,
    TabList,
    Tabs,
    Text,
    useDisclosure,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Collection from './Collection'


export type collection = {
  id: number
  name: string
}

const SideBar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [newCollectionName,setNewCollectionName] = useState<string>("")
  const [collectionList,setCollectionList] = useState<Array<collection>>([])


  const createNewCollection = async()=>{
    
    try {
      await window.api.createCollection(newCollectionName)
      await getAllCollections()
    } catch (error) {
      console.log("error when trying to create a collection: ",error)
    }
  }

  const getAllCollections = async()=>{
    const allCollections = await window.api.getAllCollections()
    console.log("retieved: ",allCollections)
    setCollectionList(allCollections)

  }

  useEffect(() => {
    getAllCollections()
      .then(()=>console.log("called getAllCollection"))
      .catch(err=>console.log(err))
  }, [collectionList.length])
  

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
                onChange={(event)=>setNewCollectionName(event.target.value)}
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
        <Tabs
        >
          <TabList
                    display={"flex"}
                    flexDirection={"column"}
          >
            <Tab w={"100%"} _selected={{ color: 'white', bg: 'blue.500' }}>test1</Tab>
            <Tab _selected={{ color: 'white', bg: 'green.400' }}>test2</Tab>
          </TabList>

        </Tabs>
        {
          collectionList?.length>0?(
            collectionList.map((val)=>(
                <Collection key={val.id} collectionName={val.name} setList={setCollectionList} id={val.id}/>
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

