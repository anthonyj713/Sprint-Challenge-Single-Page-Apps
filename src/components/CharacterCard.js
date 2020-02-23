import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardText,
  Col
} from "reactstrap";

const CharacterCard = ({people}) => {
  return (
    <Col xs="12" md="4" xl="3">
    <Card>
      <CardHeader> {people.name}</CardHeader>
      <CardBody>
        <CardText>Species: {people.species}</CardText>
        <CardText>Status: {people.status}</CardText>
      </CardBody>
    </Card>
  </Col>  
  );
};

export default CharacterCard;
