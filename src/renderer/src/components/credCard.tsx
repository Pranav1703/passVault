import { Box, Button, Input, Text } from '@chakra-ui/react'
import { useState } from 'react'

type CardProps = {
  id: number
  name: string
  email: string
  username: string
  password: string
  getCreds: ()=>Promise<void>
}

const CredCard = ({id,name,email,username,password,getCreds}:CardProps) => {

  const [nameChange,setNameChange] = useState<string>(name)
  const [emailChange,setEmailChange] = useState<string>(email)
  const [usernameChange,setUsernameChange] = useState<string>(username)
  const [passwordChange,setPasswordChange] = useState<string>(password)
 
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

      <Input
        textAlign={'center'} 
        fontSize={"2xl"} 
        w={"100%"}
        gridArea={"1 / 1 / 2 / 3"}
        border={"none"}
        value={nameChange}
        onChange={(event)=>setNameChange(event.target.value)}
      />

      <Text
      gridArea={"2 / 1 / 3 / 2"}
      display={"flex"}
      alignItems={"center"}
      >
        Email:
      </Text>

      <Input
        gridArea={"2 / 2 / 3 / 3"}
        bg={"#1c1c1c"}
        p={"5px"}
        display={"flex"}
        alignItems={"center"}
        h={"80%"}
        alignSelf={"center"}
        borderRadius={0}
        border={"none"}
        value={emailChange}
        onChange={(event)=>setEmailChange(event.target.value)}
      />


      <Text
      gridArea={"3 / 1 / 4 / 2"}
      display={"flex"}
      alignItems={"center"}
      >
        UserName:
      </Text>

      <Input
        gridArea={"3 / 2 / 4 / 3"}
        bg={"#1c1c1c"}
        p={"5px"}
        display={"flex"}
        alignItems={"center"}
        h={"80%"}
        alignSelf={"center"}
        borderRadius={0}
        border={"none"}
        value={usernameChange}
        onChange={(event)=>setUsernameChange(event.target.value)}
      />

      <Text
      gridArea={"4 / 1 / 5 / 2"}
      display={"flex"}
      alignItems={"center"}
      >
        Password:
      </Text>

      <Input
        gridArea={"4 / 2 / 5 / 3"}
        bg={"#1c1c1c"}
        p={"5px"}
        display={"flex"}
        alignItems={"center"}
        h={"80%"}
        alignSelf={"center"}
        borderRadius={0}
        border={"none"}
        value={passwordChange}
        onChange={(event)=>setPasswordChange(event.target.value)}
      />

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