import { Box } from "@chakra-ui/react"
import { Credential } from "./HomeContent"
import CredCard from "./credCard"

type props = {
  id: number
  credList : Credential[]
  getCreds: ()=>Promise<void>
}

const CredBox = ({id,credList,getCreds}:props) => {
  return (
    <Box
    overflowY={"scroll"}
    h={"87vh"}
    w={"100%"}
    display={"flex"}
    flexWrap={"wrap"}
    >
      {credList?.map((val)=>
        <CredCard id={val.id} name={val.name} email={val.email} username={val.username} password={val.password} getCreds={getCreds}/>
      )}

    </Box>
  )
}

export default CredBox