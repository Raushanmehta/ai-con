"use client";

import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";


export default function OutputSection() {
  

  return (
    <div className="shadow-md rounded-lg border border-gray-800">
      <div className="flex justify-between items-center p-3">
        <h2 className="text-lg font-semibold">Your Result</h2>
        <Button
          className="bg-black border border-gray-800 hover:bg-pink-500 cursor-pointer"
        >
          <Copy className="mr-2 h-4 w-4" />
          Copy
        </Button>
      </div>

     <div>
      Editor
     </div>
    </div>
  );
}
