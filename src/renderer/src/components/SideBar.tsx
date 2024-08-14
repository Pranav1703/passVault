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
import CredBox from './CredBox'
import CreateCollectionModal from './CreateCollectionBtn'
import CreateCredentialBtn from './CreateCredentialBtn'


export type collection = {
  id: number
  name: string
}

const SideBar = () => {

  // const { isOpen, onOpen, onClose } = useDisclosure()
  const [newCollectionName,setNewCollectionName] = useState<string>("")
  const [collectionList,setCollectionList] = useState<Array<collection>>([])
  const [currId,setCurrId] = useState<number>(-1)

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
    w={"100%"}
    bg={"#232423"}
    display={"flex"}
    >
      <Box
      w={"25%"}
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
        border={"15px solid grey"}
        >
          <h1>PASSVAULT</h1>
        </Box>
        <Box
        borderBottom={"3px solid grey"}
        >
          <Text
          textAlign={"center"}
          marginTop={"8px"}
          borderRight={"4px solid grey"}
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
          m={0}
          p={0}
          >
            <TabList
              display={"flex"}
              flexDirection={"column"}
              borderBottom={"none"}
            >
              {
                collectionList?.length>0?(
                  collectionList.map((val,index=0)=>(
                      <Tab key={index++} _selected={{ color: 'white', bg: 'grey' }} p={1} onClick={()=>setCurrId(val.id)}>
                        <Collection key={val.id} collectionName={val.name} setList={setCollectionList} id={val.id}/>
                      </Tab>
                    )
                  )
                ):(
                  null
                )
              }
            </TabList>
          </Tabs>
        </Box>
      </Box>
      <Box
      w={"100%"}
      >
        <CreateCollectionModal setNewCollectionName={setNewCollectionName} createNewCollection={createNewCollection}/>
        <CreateCredentialBtn />
        <CredBox id={currId}/>
      </Box>
    </Box>
  )
}

export default SideBar

