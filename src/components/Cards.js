import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

const Cards = ({ item, selectedImg, setSelectedImg }) => {
  let history = useHistory();

  const handleClick = () => {
    history.push("/card", {
      item: item,
    });
    setSelectedImg(item);
  };
  return (
    <Card
      style={{
        width: "18rem",
        border: "2px solid black",
        borderRadius: 10,
        backgroundColor: "red !important",
      }}
      className="bg-color"
      bg="dark"
    >
      <Card.Body bg="success">
        <Card.Title> {item.name}</Card.Title>
        <Card.Text>
          Age:
          {item.age}
          {item.age == 29 && <i className="fa fa-address-card"></i>}
          {item.age == 18 && <i className="fa fa-bookmark"></i>}
          {item.age == 60 && <i className="fa fa-cart-plus"></i>}
          {item.age == 32 && <i className="fa fa-coffee" aria-hidden="true"></i>}
          {item.age == 43 && <i className="fa fa-envira"></i>}
          {item.age == 14 && <i className="fa fa-comment"></i>}
        </Card.Text>

        <Button className="btn" onClick={handleClick} variant="info">
          Know more!
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Cards;
