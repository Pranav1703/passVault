import { Box, Button, Text } from '@chakra-ui/react'

type CardProps = {
  id: number
  name: string
  email: string
  username: string
  password: string
  getCreds: ()=>Promise<void>
}

const CredCard = ({id,name,email,username,password,getCreds}:CardProps) => {

  const deleteCred = async()=>{
    try {
      await window.api.deleteCredential(id)
      getCreds()
      .then(()=>console.log("called getCred"))
      .catch((err)=>console.log(err))
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <Box
    border={"1px solid azure"}
    w={"50vh"}
    h={"33vh"}
    display={"grid"}
    gridTemplateColumns={"0.4fr 1fr"}
    gridTemplateRows={"1fr 1fr 1fr 1fr 1fr"}
    padding={"10px"}
    margin={"10px"}
    fontFamily={`"VT323",monospace`}
    >

      <Text 
      textAlign={'center'} 
      fontSize={"2xl"} 
      w={"100%"}
      gridArea={"1 / 1 / 2 / 3"}
      >
        {name}
      </Text>

      <Text
      gridArea={"2 / 1 / 3 / 2"}
      display={"flex"}
      alignItems={"center"}
      >
        Email:
      </Text>
      <Text
      gridArea={"2 / 2 / 3 / 3"}
      bg={"#1c1c1c"}
      p={"5px"}
      display={"flex"}
      alignItems={"center"}
      h={"80%"}
      alignSelf={"center"}
      >
        {email}
      </Text>

      <Text
      gridArea={"3 / 1 / 4 / 2"}
      display={"flex"}
      alignItems={"center"}
      >
        UserName:
      </Text>
      <Text
      gridArea={"3 / 2 / 4 / 3"}
      bg={"#1c1c1c"}
      p={"5px"}
      display={"flex"}
      alignItems={"center"}
      h={"80%"}
      alignSelf={"center"}
      >
        {username}
      </Text>

      <Text
      gridArea={"4 / 1 / 5 / 2"}
      display={"flex"}
      alignItems={"center"}
      >
        Password:
      </Text>
      <Text
      gridArea={"4 / 2 / 5 / 3"}
      bg={"#1c1c1c"}
      p={"5px"}
      display={"flex"}
      alignItems={"center"}
      h={"80%"}
      alignSelf={"center"}
      >
        {password}
      </Text>

      <Box
      gridArea={"5 / 1 / 6 / 3"}
      display={"flex"}
      justifyContent={"space-between"}
      >
        <Button
        borderRadius={0}
        >
          Edit
        </Button>
        <Button
        borderRadius={0}
        onClick={deleteCred}
        m={0}
        >
          Delete
        </Button>
      </Box>
    </Box>
  )
}

export default CredCard