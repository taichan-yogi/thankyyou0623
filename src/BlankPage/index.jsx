import React, { useState } from "react";
import { Link } from "react-router-dom";

const BlankPage = () => {
  const [text, setText] = useState("工事中です。");

  return (
    <>
      <h1 style={{ color: "red" }}>{text}</h1>
      <div>
        <Link to="/blank">ブランクページへ</Link>
      </div>
      <div>
        <Link to="/my_page">マイページへ</Link>
      </div>
      <img src="https://4.bp.blogspot.com/-pwFCxy4007s/WMfCNtlUzAI/AAAAAAABClg/B-YK7BXBGAAyW2Lilrkl48zqryJUAUlLgCLcB/s800/onsei_ninshiki_computer.png" alt="画像の説明" width="10%" height="10%" />
    </>
  );
};

export default BlankPage;
