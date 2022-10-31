import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


export default function CardComponent() {
  return (
    <Card className="mx-2">
    <Card.Img variant="top" src="https://horsefeathers.b-cdn.net/data/tmp/0/1/86651_0.jpg?1639169031_1" />
    <Card.Body>
      <Card.Title>Clothes fancy winter</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in
        to additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button>
      <small className="btn btn-primary">Buy now</small>
      </Button>
    </Card.Footer>
  </Card>
  )
}
