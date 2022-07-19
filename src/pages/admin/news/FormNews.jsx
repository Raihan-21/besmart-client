import styles from "../../../assets/styles/Admin.module.css";
import { Button, TextField } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
// import {
//   EditorState,
//   convertToRaw,
//   // convertFromHTML,
//   // ContentState,
// } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import draftToHtml from "draftjs-to-html";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import "../../../assets/styles/RichText.css";

// const html = "<div><h2>hello</h2></div>";
// const blocksFromHTML = convertFromHTML(html);
// const content = ContentState.createFromBlockArray(
//   blocksFromHTML.contentBlocks,
//   blocksFromHTML.entityMap
// );

const FormNews = ({ formData, onSubmit }) => {
  const editorRef = useRef(null);
  const [data, setData] = useState({});
  const [editor, setEditor] = useState("");
  // const [editorState, setEditorState] = useState(EditorState.createEmpty());
  // const onEditorStateChange = (editorState) => {
  //   setEditorState(editorState);
  // };
  useEffect(() => {
    setData(formData);
    // setEditorState(EditorState.createWithContent(content));
  }, [formData]);
  const click = () => {
    setEditor(editorRef.current.getContent());
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(data);
        }}
      >
        <div className={styles.inputs}>
          <TextField
            label="Judul"
            variant="outlined"
            margin="normal"
            className={styles.input}
            value={data ? (data.judul ? data.judul : "") : ""}
            onChange={(e) => {
              setData((prevState) => {
                return { ...prevState, judul: e.target.value };
              });
            }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: editor,
            }}
          ></div>
          {/* {} */}
          {/* <Editor
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
          /> */}
          {/* <TextField
            label="Deskripsi"
            variant="outlined"
            margin="normal"
            className={styles.input}
            value={data ? (data.deskripsi ? data.deskripsi : "") : ""}
            onChange={(e) => {
              setData((prevState) => {
                return { ...prevState, deskripsi: e.target.value };
              });
            }}
          /> */}

          <Editor
            apiKey="ul2nfqp4z83hvjqjioeb9ior4p7pmvv3t4v3wohb3fqbvngp"
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              // height: 500,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
        </div>
        <Button type="submit" color="primary" variant="contained">
          Save
        </Button>
        <Button onClick={click}>editor</Button>
      </form>
    </>
  );
};

export default FormNews;
