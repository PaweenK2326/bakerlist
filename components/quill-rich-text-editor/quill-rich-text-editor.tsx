"use client";

import dynamic from "next/dynamic";
import ReactQuill from "react-quill";
import { useState, useMemo } from "react";
import "react-quill/dist/quill.snow.css";
import "./quill-rich-text-editor.css";

export default function QuillRichTextEditor() {
  const [value, setValue] = useState<ReactQuill.Value>(
    "<ol><li><br></li></ol>"
  );
  const QuillNoSSRWrapper = useMemo(
    () =>
      dynamic(() => import("react-quill"), {
        ssr: false,
        loading: () => <p>loading...</p>,
      }),
    []
  );

  return (
    <QuillNoSSRWrapper
      theme="snow"
      value={value}
      onChange={setValue}
      modules={{
        toolbar: false,
        clipboard: {
          matchVisual: false,
        },
      }}
      formats={["list"]}
    />
  );
}
