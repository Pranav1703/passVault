import { Box } from '@chakra-ui/react'

type CollectionProps = {
    collectionName: string
}

const Collection = ({collectionName}:CollectionProps) => {
  return (
    <Box
    textAlign={"center"}
    margin={1}
    borderTop={"1px solid "}
    borderBottom={"1px solid"}
    onClick={()=>console.log("clicked on ",collectionName," name.")}
    >
        {collectionName}
    </Box>
  )
}

export default Collection