// Card.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardGroup } from 'react-bootstrap';

const CardComponent = () => {
  return (
    <CardGroup>
      <Card bg="primary" text="white">
        <Card.Body>
          <Card.Title>Card 1</Card.Title>
          <Card.Text>This is a sample card content for Card 1.</Card.Text>
        </Card.Body>
      </Card>

      <Card bg="danger" text="white">
        <Card.Body>
          <Card.Title>Card 2</Card.Title>
          <Card.Text>This is a sample card content for Card 2.</Card.Text>
        </Card.Body>
      </Card>

      <Card bg="success" text="white">
        <Card.Body>
          <Card.Title>Card 3</Card.Title>
          <Card.Text>This is a sample card content for Card 3.</Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default CardComponent;


