import { Box } from "@chakra-ui/react"

type props = {
  id: number
}

const CredBox = ({id}:props) => {
  return (
    <Box>
      InfoBox
      for {id}
    </Box>
  )
}

export default CredBox