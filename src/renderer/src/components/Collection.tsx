import { Box } from '@chakra-ui/react'

type CollectionProps = {
    collectionName: string
    setList: React.Dispatch<React.SetStateAction<string[]>>
    id:number
}

const btnStyle = {
  "border":"0.5px solid grey",
  
}

const Collection = ({collectionName,setList,id}:CollectionProps) => {

  const deleteHandler = ()=>{
    setList((prevList)=>prevList.filter((_,index)=> index!=id))
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
    >
        <button>{collectionName}</button>
        <Box
        display={"flex"}
        justifyContent={"flex-end"}
        alignItems={"center"}
        >
          <button onClick={deleteHandler} style={btnStyle}>X</button>
        </Box>

    </Box>
  )
}

export default Collection

