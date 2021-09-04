import "./App.css";
import React, { useState } from "react";
import Cards from "./components/Cards";
import { data } from "./data";
import ImageCarousel from "./components/ImageCarousel";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <h1> My card gallery </h1>

            <div style={{ display: "flex", flexDirection: "row" }}>
              {data.map((item) => (
                <Cards
                  key={item.age}
                  item={item}
                  selectedImg={selectedImg}
                  setSelectedImg={setSelectedImg}
                />
              ))}
            </div>
          </div>
        </Route>
        <Route to="/card">
          {selectedImg ? (
            <ImageCarousel selectedImg={selectedImg} />
          ) : (
            <h1>Click on the button to view the corresponding carousel</h1>
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
