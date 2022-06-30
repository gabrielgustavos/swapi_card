import * as React from "react";
import { useState, useEffect, Fragment } from "react";
import Image from "./components/Image";
import RandomNumber from "./components/RandomNumber";
import About from "./components/About";
import ContainerStyle from "./assets/styledComponents/ContainerStyle";
import AboutStyle from "./assets/styledComponents/AboutStyle";
import InfoStyle from "./assets/styledComponents/InfoStyle";
import PersonIcon from "@mui/icons-material/Person";

import "./global.css";

function App() {
  const [dados, setDados] = useState();

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${RandomNumber}`)
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

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
        {dados && (
          <InfoStyle>
            <PersonIcon fontSize="small" />
            <p>ATK: 100 / DEF: 100</p>
            <p>{dados.name}</p>
            <p>{dados.height}cm</p>
            <p>{dados.mass}kg</p>
            <p>{dados.eye_color} eyes</p>
          </InfoStyle>
        )}
      </ContainerStyle>
    </Fragment>
  );
}

export default App;
