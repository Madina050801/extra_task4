/** @format */

import styled, { css } from "styled-components";
import headerLogo from "../../Assets/header/headerLogo/youtubeLogo.png";
import headerZoom from "../../Assets/header/headerinput/1.png";
import headerCamera from "../../Assets/header/headerMore/1.png";
import headerKategory from "../../Assets/header/headerMore/2.png";
import headeDzDz from "../../Assets/header/headerMore/3.png";

const cGrid = css`
  display: grid;
  justify-content: center;
  align-items: center;
`;
const border = css`
  border: 1px solid red;
`;

const Main = styled.div`
  width: 100%;
  height: 56px;
  background-color: #222;
  position: fixed;
  top: 0px;
  left: 0px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr;
  ${cGrid}
`;
Main.HeaderLogo = styled.img.attrs({
  src: `${headerLogo}`,
})`
  margin-left: 60px;
  cursor: pointer;
`;

Main.HeaderBlockInput = styled.input`
  ${border}
  height: 38px;
  width: 559px;
  margin-left: -20px;
  padding: 2px 6px;
  border-radius: 2px 0 0 2px;
  border: 1px solid #303030;
  background-color: #121212;
  color: #888888;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  outline: none;

  &:active {
    border: 0px;
    padding: 0px;
  }
`;
Main.HeaderBlockMore = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  width: 200px;
  ${cGrid}
  margin-left: 150px;
`;
Main.HeaderImgZoom = styled.img.attrs({
  src: `${headerZoom}`,
})`
  height: 38px;
  cursor: pointer;
`;
Main.HeaderImgCamera = styled.img.attrs({
  src: `${headerCamera}`,
})`
  height: 26px;
  cursor: pointer;
`;
Main.HeaderImgKategory = styled.img.attrs({
  src: `${headerKategory}`,
})`
  height: 24px;
  cursor: pointer;
`;
Main.HeaderImgDzDz = styled.img.attrs({
  src: `${headeDzDz}`,
})`
  height: 28px;
  cursor: pointer;
`;
Main.HeaderImgPerson = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #818181;
  cursor: pointer;
`;

Main.Bottom = styled.div`
  width: 100%;
  height: 56px;
  position: fixed;
  top: 56px;
  left: 0px;
  background-color: #222;
  // opacity: 0.5;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  padding-left: 300px;
  grid-gap: 20px;
`;

Main.BottomBlock1 = styled.div`
  background-color: #4d4d4d;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
  text-align: center;
  padding: 5px 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  &:hover {
    background-color: black;
    border-color: #4d4d4d;
  }
`;

export default Main;
