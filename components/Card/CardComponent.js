import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


export default function CardComponent({product}) {

  return (
    <Card className="mx-2">
    <Card.Img variant="top" src={product.image} />
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in
        to additional content.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button>
      <small className="btn btn-primary">{product.price}</small>
      </Button>
    </Card.Footer>
  </Card>
  )
}
