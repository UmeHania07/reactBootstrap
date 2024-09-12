import { Alert, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'

function Dismissed() {
    const [show, setShow] = useState(true)
    if (show) {
        return (
            <div>
   <Alert variant='danger' onClose={()=> setShow(false)} dismissible>
    <Alert.Heading>
        This is Alert Heading..
        </Alert.Heading>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, iure debitis veniam esse eveniet corrupti ullam voluptates et error numquam.</p>
    <Alert.Link href='https://www.Google.com'>
          Click this Link..
         </Alert.Link>
         </Alert>
            </div>
        )
    }
}

export default Dismissed
