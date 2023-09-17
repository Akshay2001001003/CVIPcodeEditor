import React, { useEffect } from "react";
import { useState } from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = ({ code, theme, language, onChange }) => {
  const [val, setVal] = useState(code || "");
  const handleChange = (value) => {
    setVal(value);
    onChange("code", value);
  };
  const [width, setWidth] = useState(`65.10416666666667vw`);
  const [height, setHight] = useState("80vh");
  const updateWidth = () => {
    if (window.innerWidth <= 778) {
      setWidth("100%");
    } else {
      setWidth(`65.10416666666667vw`);
    }
  };

  useEffect(() => {
    // Set the initial width
    updateWidth();

    // Add event listener to update width on window resize
    window.addEventListener("resize", updateWidth);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);
  return (
    <>
      <Editor
        className="editor"
        height={height}
        width={width}
        language={language || "C++"}
        value={val}
        theme={theme}
        defaultValue="// some comment"
        onChange={handleChange}
      />
    </>
  );
};

export default CodeEditor;
