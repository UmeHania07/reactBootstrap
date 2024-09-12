import React from 'react';
import { Alert , Button } from 'react-bootstrap';

/* The following line can be included in your src/index.js or App.js file */
// import 'bootstrap/dist/css/bootstrap.min.css';


function ReactBS() {
    return (
        <div>
            <Alert variant='danger'>
                <Alert.Heading>
                    This is Alert Heading..
                </Alert.Heading>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, iure debitis veniam esse eveniet corrupti ullam voluptates et error numquam.</p>
             <Alert.Link href='https://www.Google.com'>
                Click this Link..
             </Alert.Link>
            </Alert>

            {/* <Button href='https://www.google.com' variant='danger' size='lg'>Click Me..</Button>
      <Button variant='danger' active>Click Me..</Button>
      <Button variant='danger' size='sm' disabled>Click Me..</Button> */}

            {/* normal boostrap mai btn danger hota h.. but ye react boostrap h */}

            {/* <Button variant='danger'>Click Me..</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button> */}

       <Button variant='outline-danger'>Click Me..</Button>
      <Button variant='outline-success'>Click Me..</Button>
      <Button variant='outline-dark'>Click Me..</Button>
      <Button variant='outline-secondary'>Click Me..</Button>

      

        </div>
    )
}

export default ReactBS
