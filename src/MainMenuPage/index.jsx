import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Group2 , Group3 , Group4
 } from '../ui-components';

const MainMenuPage = () => {
  const [text, setText] = useState("工事中です。");

  return (
    <>
  <Group2 />
  <br />
  <Group3 />
  <br />
  <Group4 />
    </>
  );
};

export default MainMenuPage;
