import * as React from "react";
import { useState, Fragment } from "react";
import Image from "./components/Image";
import RandomNumber from "./components/RandomNumber";
import About from "./components/About";
import Info from "./components/Info";
import Button from "./components/Button";
import ContainerStyle from "./assets/styledComponents/ContainerStyle";
import AboutStyle from "./assets/styledComponents/AboutStyle";

import "./global.css";

function App() {
  const [dados, setDados] = useState();

  async function showInfo() {
    const response = await fetch(
      `https://swapi.dev/api/people/${RandomNumber}`
    );
    const json = await response.json();
    setDados(json);
  }

  return (
    <Fragment>
      <ContainerStyle>
        <h1>
          Star Wars
          <br />
          Card Game
        </h1>
        <Image />
        <AboutStyle>
          <About />
        </AboutStyle>
        {dados && <Info dados={dados} />}
        <div className="containerBtn">
          <Button onClick={showInfo}>
            <p className="btnText">Click and feel the force,baby!</p>
          </Button>
        </div>
      </ContainerStyle>
    </Fragment>
  );
}

export default App;
