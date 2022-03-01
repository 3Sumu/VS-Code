import React, { Component } from 'react'
import { Button,Card } from 'react-bootstrap'

export class ReactBootstrap extends Component {
  render() {
    return (
      <div>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71geVdy6-OS._SX569_.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
       <Button variant="success" size="lg">
       Click Me
       </Button><br />
       <Button variant="outline-primary">Enter</Button>
    </div>
    )
  }
}

export default ReactBootstrap

