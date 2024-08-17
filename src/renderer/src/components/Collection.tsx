import { Box } from '@chakra-ui/react'
import { collection } from './HomeContent'

type CollectionProps = {
    collectionName: string
    setList: React.Dispatch<React.SetStateAction<collection[]>>
    id:number
}

const Collection = ({collectionName,setList,id}:CollectionProps) => {

  const deleteHandler = async()=>{
    
    try {
      await window.api.deleteCollection(id)
    } catch (error) {
      console.log("error :",error)
    }
    setList((prevList)=>prevList.filter((val)=> val.id!=id))
  }

  return (
    <Box
    textAlign={"center"}
    margin={1}
    border={"1px solid"}
    display={"grid"}
    gridTemplateColumns={"3fr 0.5fr"}
    gridTemplateRows={"1fr"}
    p={1}
    wordBreak={"break-all"}
    w={"100%"}
    fontFamily={`"VT323", monospace`}
    fontSize={"20px"}
    >
      <p>{collectionName}</p>
      <Box
      display={"flex"}
      justifyContent={"flex-end"}
      alignItems={"center"}
      >
        <div onClick={deleteHandler} >X</div>
      </Box>

    </Box>
  )
}

export default Collection

