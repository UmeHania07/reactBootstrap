import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

function CardsBS() {
  return (
    <>
    <div>
        <Container>
            <Row>
                <Col md={4}>
                <Card border="danger">
                    <Card.Img src='Images/Elfilpic.jpg'/>
                    <Card.Body>
                        <Card.Title><h4>Card Title</h4></Card.Title>
                        <Card.Subtitle><h5>Card Subtitle</h5></Card.Subtitle>
                        <Card.Text>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Id dignissimos temporibus nihil recusandae quos ipsa magnam sit asperiores obcaecati placeat rem,
                            odit nesciunt doloribus voluptatum dicta necessitatibus vero?
                            Similique quod quae nemo blanditiis cumque a vel animi accusantium unde.</p>
                        </Card.Text>
                        <Card.Link href='https://www.Google.com'>
                         Click Here..
                        </Card.Link>
                        <div className='d-grid'>
                        <Button variant='danger'>Read More..</Button>
                        </div>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card border='secondary'>
                    <Card.Img src='Images/Elfilpic.jpg'/>
                    <Card.Body>
                        <Card.Title><h4>Card Title</h4></Card.Title>
                        <Card.Subtitle><h5>Card Subtitle</h5></Card.Subtitle>
                        <Card.Text>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Id dignissimos temporibus nihil recusandae quos ipsa magnam sit asperiores obcaecati placeat rem,
                            odit nesciunt doloribus voluptatum dicta necessitatibus vero?
                            Similique quod quae nemo blanditiis cumque a vel animi accusantium unde.</p>
                        </Card.Text>
                        <Card.Link href='https://www.Google.com'>
                         Click Here..
                        </Card.Link>
                        <div className='d-grid'>
                        <Button variant='secondary'>Read More..</Button>
                        </div>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card border='warning'>
                    <Card.Img src='Images/Elfilpic.jpg'/>
                    <Card.Body>
                        <Card.Title><h4>Card Title</h4></Card.Title>
                        <Card.Subtitle><h5>Card Subtitle</h5></Card.Subtitle>
                        <Card.Text>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Id dignissimos temporibus nihil recusandae quos ipsa magnam sit asperiores obcaecati placeat rem,
                            odit nesciunt doloribus voluptatum dicta necessitatibus vero?
                            Similique quod quae nemo blanditiis cumque a vel animi accusantium unde.</p>
                        </Card.Text>
                        <Card.Link href='https://www.Google.com'>
                         Click Here..
                        </Card.Link>
                        <div className='d-grid'>
                        <Button variant='warning'>Read More..</Button>
                        </div>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    </div>
    </>
  )
}

export default CardsBS
