import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import "./styles.css";
import Icons from "./Components/Icons";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const itemArray = new Array(9).fill("empty");
const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
  };

  const checkWinner = () => {
    if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2]
    ) {
      setWinMessage(`${itemArray[0]} wins`);
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[3] === itemArray[5]
    ) {
      setWinMessage(`${itemArray[3]} wins`);
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[6] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[6]} wins`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[0] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[0]} wins`);
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[1] === itemArray[7]
    ) {
      setWinMessage(`${itemArray[1]} wins`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[2] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[2]} wins`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[0] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[0]} wins`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[2] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[2]} wins`);
    }
  };

  const changeItem = itemNumber => {
    if (winMessage) {
      return toast(winMessage, {
        type: "success"
      });
    }
    if (itemArray[itemNumber] !== "empty") {
      return toast("Already filled!", {
        type: "error"
      });
    }
    itemArray[itemNumber] = isCross ? "Cross" : "Circle";
    setIsCross(!isCross);
    checkWinner();
  };
  return (
    <Container className="App mt-4">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="text-center">
              <h1 className="text-success">{winMessage}</h1>
              <button
                color="success"
                className="btn btn-success center"
                onClick={reloadGame}
              >
                Reload Game
              </button>
              <br />
              <br />
            </div>
          ) : (
            <h1 className="text-warning text-center mb-4">
              {isCross ? "Cross" : "Circle"} turn
            </h1>
          )}
          <div className="grid">
            {itemArray.map((item, itemIndex) => (
              <Card
                color="warning"
                key={itemIndex}
                onClick={() => changeItem(itemIndex)}
              >
                <CardBody className="text-center">
                  <Icons name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
