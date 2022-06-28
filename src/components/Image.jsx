//JS components
import RandomNumber from "./RandomNumber";

// Styled components
import ImageStyle from "../assets/styledComponents/ImageStyle";

//Import Imgs
import C3PO from "../assets/images/C3PO.jpg";
import DarthVader from "../assets/images/darthvader.jpg";
import Leia from "../assets/images/leia.jpg";
import Luke from "../assets/images/Luke.jpg";
import R2D2 from "../assets/images/R2D2.jpg";

const characters = {
  1: Luke,
  2: C3PO,
  3: R2D2,
  4: DarthVader,
  5: Leia,
};

export const Image = () => {
  return (
    <div>
      <ImageStyle
        src={characters[RandomNumber]}
        alt="Star wars characters"
        loading="lazy"
      ></ImageStyle>
    </div>
  );
};

export default Image;
