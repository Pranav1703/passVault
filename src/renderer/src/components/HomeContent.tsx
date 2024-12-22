import { 
    Box, 
    Button, 
    HStack, 
    Tab,
    TabList,
    Tabs,
    Text,
} from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import Collection from './Collection'
import CredBox from './CredBox'
import CreateCollectionModal from './CreateCollectionBtn'
import CreateCredentialBtn from './CreateCredentialBtn'
import { AuthContext } from '@renderer/App'
import { useNavigate } from 'react-router-dom'



export type collection = {
  id: number
  name: string
}

export type Credential = {
  id: number
  name: string
  email: string
  username: string
  password: string
  collectionId: number
}

const HomeContent = () => {

  // const { isOpen, onOpen, onClose } = useDisclosure()
  const [newCollectionName,setNewCollectionName] = useState<string>("")
  const [collectionList,setCollectionList] = useState<Array<collection>>([])
  const [currCollectionId,setCurrCollectionId] = useState<number>(-1)
  const [credentialList,setCredentialList] = useState<Array<Credential>>([])

  const {logout,userId,setId} = useContext(AuthContext)

  const navigate = useNavigate()

  const createNewCollection = async()=>{
    try {
      console.log("current user id: ",userId)
      await window.api.createCollection(newCollectionName,userId)
      await getAllCollections()
    } catch (error) {
      console.log("error when trying to create a collection: ",error)
    }
  }

  const getAllCollections = async()=>{
    const allCollections = await window.api.getAllCollections(userId)
    console.log("retieved: ",allCollections)
    setCollectionList(allCollections)

  }

  const getCredentails = async()=>{
    try {
      const credentials = await window.api.getAllCredentials(currCollectionId)
      setCredentialList(credentials)
    } catch (error) {
      console.log(error)
    }
  }

  const logoutHandler = ()=>{
    logout()
    setId(-1)
    navigate("/")
  }

  useEffect(() => {
    getAllCollections()
      .catch(err=>console.log(err))

    
    if(currCollectionId !== -1){
      getCredentails()
        .catch((err)=>console.log(err))
    }

    // if(currId===-1){
    //   setDisableBtn(true)
    // }else{
    //   setDisableBtn(false)
    // }

  }, [collectionList.length,currCollectionId])
  

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
                      <Tab key={index++} _selected={{ color: 'white', bg: 'grey' }} p={1} onClick={()=>setCurrCollectionId(val.id)}>
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
        <HStack>
          <Box w={"95%"} p={0} m={0}>
            <CreateCollectionModal setNewCollectionName={setNewCollectionName} createNewCollection={createNewCollection}/>
          </Box>
          <Button 
          borderRadius={0}
          borderLeft={"3px solid grey"}
          onClick={logoutHandler}
          >
              LogOut
          </Button>
        </HStack>
        <CreateCredentialBtn collectionId={currCollectionId} getCreds={getCredentails}/>
        <CredBox credList={credentialList} getCreds={getCredentails}/>
        {
          currCollectionId===-1?(
              <p>Click on any collection in the list to show the credentials, <br /> Then only you can create new credentials</p>
          ):(
            null
          )
        }
      </Box>
    </Box>
  )
}

export default HomeContent

