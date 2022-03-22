import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const Editor = ({ onChange, name, value }) => {
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ header: [2, 3, 4, 5] }],
      [{ align: [] }],
      ["clean"],
    ],
  };
  return (
    <ReactQuill
      theme="snow"
      value={value}
      modules={modules}
      onChange={(content, event, editor) => {
        onChange({ target: { name, value: content } });
      }}
    />
  );
};

export default Editor;
