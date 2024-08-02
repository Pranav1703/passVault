import { Link} from 'react-router-dom'

import {
    Button
} from "@chakra-ui/react"

const Navigate = () => {
  
  return (
    <>
        <Button>
            <Link to={"/testing"} style={{"margin":"20px"}}>
                test window
            </Link>
        </Button>
        
    </>
  )
}

export default Navigate