import React, { useState, useEffect } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
  ContentState,
} from "draft-js";
import "draft-js/dist/Draft.css";
import { Box, Button, Typography } from "@mui/material";

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    // Load user data from localStorage
    const savedUserData = JSON.parse(localStorage.getItem("userData"));

    // Load saved editor content from localStorage
    const savedContent = localStorage.getItem("richTextContent");

    if (savedContent) {
      setEditorState(
        EditorState.createWithContent(convertFromRaw(JSON.parse(savedContent)))
      );
    } else if (savedUserData) {
      // Format user data as initial content
      const initialText = `
        Name: ${savedUserData.name}
        Email: ${savedUserData.email}
        Address: ${savedUserData.address}
        Phone: ${savedUserData.phone}
      `;

      const contentState = ContentState.createFromText(initialText);
      setEditorState(EditorState.createWithContent(contentState));
    }
  }, []);

  // Save content to localStorage whenever content changes
  useEffect(() => {
    const contentState = editorState.getCurrentContent();
    localStorage.setItem(
      "richTextContent",
      JSON.stringify(convertToRaw(contentState))
    );
  }, [editorState]);

  // Handle text formatting (bold, italic, underline)
  const handleStyleChange = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  return (
    <Box
      sx={{
        maxWidth: 500,
        margin: "auto",
        p: 2,
        border: "1px solid #ccc",
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" textAlign="center" gutterBottom>
        Rich Text Editor
      </Typography>

      <Box display="flex" justifyContent="center" mb={1}>
        <Button
          onClick={() => handleStyleChange("BOLD")}
          variant="outlined"
          sx={{ mx: 1 }}
        >
          Bold
        </Button>
        <Button
          onClick={() => handleStyleChange("ITALIC")}
          variant="outlined"
          sx={{ mx: 1 }}
        >
          Italic
        </Button>
        <Button
          onClick={() => handleStyleChange("UNDERLINE")}
          variant="outlined"
          sx={{ mx: 1 }}
        >
          Underline
        </Button>
      </Box>

      <Box
        sx={{ minHeight: 100, border: "1px solid #ddd", p: 2, cursor: "text" }}
      >
        <Editor editorState={editorState} onChange={setEditorState} />
      </Box>
    </Box>
  );
};

export default RichTextEditor;
