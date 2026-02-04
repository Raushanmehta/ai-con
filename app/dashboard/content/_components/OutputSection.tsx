"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import "@toast-ui/editor/dist/toastui-editor.css";


const Editor = dynamic(
  () => import("@toast-ui/react-editor").then((mod) => mod.Editor),
  { ssr: false }
);

export default function OutputSection() {
  const editorRef = useRef<any>(null); 

  const handleCopy = () => {
    const editor = editorRef.current?.getInstance();
    const content = editor?.getMarkdown();
    if (content) navigator.clipboard.writeText(content);
  };

  return (
    <div className="shadow-md rounded-lg border border-gray-800">
      <div className="flex justify-between items-center p-3">
        <h2 className="text-lg font-semibold">Your Result</h2>
        <Button
          onClick={handleCopy}
          className="bg-black border border-gray-800 hover:bg-pink-500 cursor-pointer"
        >
          <Copy className="mr-2 h-4 w-4" />
          Copy
        </Button>
      </div>

      <Editor
        useCommandShortcut
        ref={editorRef}
        previewStyle="vertical"
        height="400px"
        initialEditType="markdown"
        initialValue="hello"
      />
    </div>
  );
}
