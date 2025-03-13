import { useState } from "react";
import ColorItem from "./ColorItem";
export default function ExListColor() {
  //   let colorArr: Array<string> = ["red", "green", "blue"];
  let colorArr: string[] = ["red", "green", "blue"];

  let [activeColor, setActiveColor] = useState<string>("black");
  let handleChangeColor = (value: string) => {
    setActiveColor(value);
  };
  let renderList = () => {
    return colorArr.map((color, index) => {
      return <ColorItem key={index} value={color} />;
    });
  };
  return (
    <div style={{ height: "100vh", backgroundColor: activeColor }}>
      {renderList()}
    </div>
  );
}
