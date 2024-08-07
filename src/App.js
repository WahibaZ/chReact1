import Card from "react-bootstrap/Card";
import "./App.css";
import Description from "./Description";
import Image from "./Image";
import Name from "./Name";
import Prix from "./Prix";

const firstName = "";

function App() {
  return (
    <div className="App">

      <div>
        {firstName ? (
          <>
            <p>Bonjour, {firstName}!</p>
            <img src="" alt="User" />
          </>
        ) : (
          <p>Bonjour!</p>
        )}
      </div>

      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Card style={{ width: "40rem" }}>
          <Card.Img variant="top" src={require("./produit1.jpg")} />
          <Card.Body>
            <Card.Title>
              <Name />
            </Card.Title>
            <Card.Text>
              <Description />
            </Card.Text>
            <Prix />
          </Card.Body>
        </Card>
      </div>
      
    </div>
  );
}

export default App;
