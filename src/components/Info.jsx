import React from "react";
import InfoStyle from "../assets/styledComponents/InfoStyle";
import PersonIcon from "@mui/icons-material/Person";

export const Info = ({ dados }) => {
  const name = dados.name;
  const height = dados.height;
  const mass = dados.mass;
  const eyeColor = dados.eye_color;

  return (
    <div>
      <InfoStyle>
        <PersonIcon fontSize="small" />
        <p>ATK: 100 / DEF: 100</p>
        <p>{name}</p>
        <p>{height}cm</p>
        <p>{mass}kg</p>
        <p style={{ color: eyeColor }}>{eyeColor} eyes</p>
      </InfoStyle>
    </div>
  );
};

export default Info;
