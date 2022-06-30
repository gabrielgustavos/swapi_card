import RandomNumber from "./RandomNumber";

const C3PO =
  "O C-3PO é um androide do mundo fictício de Star Wars fluente em 6 milhões de meios de comunicação";
const Luke = "NOOOOOOOOOOOOOO!!!!!!";
const R2D2 =
  "R2-D2 é um simples droide astromecânico, responsável por salvar a rainha Amidala de Naboo";
const darthVader = "I AM YOUR FATHER ! ";
const leia =
  "A princesa Leia, uma das principais heroínas da Galáxia, é filha de Padmé Amidala e Anakin Skywalker";

function About() {
  const aboutRandom = {
    1: Luke,
    2: C3PO,
    3: R2D2,
    4: darthVader,
    5: leia,
  };

  return (
    <div>
      <p>{aboutRandom[RandomNumber]}</p>
    </div>
  );
}

export default About;
