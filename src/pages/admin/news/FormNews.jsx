import styles from "../../../assets/styles/Admin.module.scss";
import { Button, Grid, TextField } from "@mui/material";
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
  // const editorRef = useRef(null);
  const [data, setData] = useState({});
  const [editor, setEditor] = useState("");
  useEffect(() => {
    setData(formData);
  }, [formData]);
  return (
    <>
      <div className={styles.formContainer}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(data);
          }}
        >
          <Grid container columnSpacing={2}>
            <Grid item sm={6}>
              <TextField
                label="Judul"
                variant="outlined"
                margin="normal"
                fullWidth
                value={data ? (data.judul ? data.judul : "") : ""}
                onChange={(e) => {
                  setData((prevState) => {
                    return { ...prevState, judul: e.target.value };
                  });
                }}
              />
            </Grid>
            <Grid item sm={12}>
              <Editor
                apiKey="ul2nfqp4z83hvjqjioeb9ior4p7pmvv3t4v3wohb3fqbvngp"
                // onInit={(evt, editor) => (editorRef.current = editor)}
                value={data ? (data.deskripsi ? data.deskripsi : "") : ""}
                onEditorChange={(value) => {
                  setData((prevState) => {
                    return { ...prevState, deskripsi: value };
                  });
                }}
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
            </Grid>
          </Grid>
          <Button type="submit" color="primary" variant="contained">
            Save
          </Button>
        </form>
      </div>
    </>
  );
};

export default FormNews;
