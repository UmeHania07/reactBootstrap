import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function GridBS() {
    return (
        <div>
            <Container fluid='lg'>
                {/* ye offset and span size bharata h or offset left se kam krta h */}
                <Row>
                <Col md = {{ offset:2 , span:6 }} >
                        <div className='bg-primary p-4'>
                            My Div
                        </div>
                    </Col>
                    {/* <Col md = {{offset:2}}>
                        <div className='bg-primary p-4'>
                            My Div
                        </div>
                    </Col> */}
                    <Col>
                        <div className='bg-danger p-4'>
                            My Div
                        </div>
                    </Col>
                    <Col >
                        <div className='bg-warning p-4'>
                            My Div
                        </div>
                    </Col>
                   {/* <Col>
                        <div className='bg-success p-4'>
                            My Div
                        </div>
                    </Col>  */}
                   

                </Row>
                {/* <br/>
                <Row className='mt-2'>
                    <Col>
                        <div className='bg-primary p-4'>
                            My Div
                        </div>
                    </Col>
                    <Col>
                        <div className='bg-danger p-4'>
                            My Div
                        </div>
                    </Col>
                    <Col>
                        <div className='bg-warning p-4'>
                            My Div
                        </div>
                    </Col>
                    <Col>
                        <div className='bg-success p-4'>
                            My Div
                        </div>
                    </Col>
                </Row>  */}
               
            </Container>
        </div>
    )
}

export default GridBS
