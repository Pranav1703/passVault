import { Box } from '@chakra-ui/react'
import { collection } from './SideBar'

type CollectionProps = {
    collectionName: string
    setList: React.Dispatch<React.SetStateAction<collection[]>>
    id:number
}

const btnStyle = {
  "border":"0.5px solid grey",
  
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
    borderTop={"1px solid "}
    borderBottom={"1px solid"}
    display={"grid"}
    gridTemplateColumns={"3fr 0.5fr"}
    gridTemplateRows={"1fr"}
    p={1}
    wordBreak={"break-all"}
    w={"100%"}
    >
        <button>{collectionName}</button>
        <Box
        display={"flex"}
        justifyContent={"flex-end"}
        alignItems={"center"}
        >
          <div onClick={deleteHandler} style={btnStyle}>X</div>
        </Box>

    </Box>
  )
}

export default Collection

