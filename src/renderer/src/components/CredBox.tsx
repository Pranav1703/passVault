import { Box } from "@chakra-ui/react"
import { Credential } from "./HomeContent"

type props = {
  id: number
  credList : Credential[]
}

const CredBox = ({id,credList}:props) => {
  return (
    <Box
    overflowY={"scroll"}
    border={"1px solid red"}
    h={"100%"}
    >
      Displays creds
      for {id}
      {credList.map((val)=>
        <>
        <br />
          <p>{val.name}</p>
          <p>{val.email}</p>
          <p>{val.username}</p>
          <p>{val.password}</p>
          <br />
        </>
      )}
    </Box>
  )
}

export default CredBox