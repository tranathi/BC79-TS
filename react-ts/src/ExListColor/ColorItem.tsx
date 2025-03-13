import React from "react";

interface Props {
  value: string;
  title?: string; // ? optional property  ~ thuộc tính không bắt buộc
}

export default function ColorItem(props: Props) {
  return (
    <div>
      <button
        style={{
          background: props.value,
          padding: "10px 25px",
          borderRadius: 4,
        }}
      >
        {props.value}
      </button>
    </div>
  );
}
