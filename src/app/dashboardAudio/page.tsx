"use client";

import React, { useRef, useState } from "react";
import Axios from "axios";

export default function Dashboard() {
  const [text, settext] = useState();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newfile = event.target.files?.[0];
    console.log(newfile);

    if (!newfile) {
      console.warn("No file selected.");
      return;
    }

    const formData = new FormData();
    formData.append("file", newfile);

    try {
      console.log("Uploading file...");

      const response = await Axios.post("api/transcription", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("File upload response:", response.data.text);
      settext(response.data.text);
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <main className="mx-auto max-w-7xl md:p-10">
      <input
        type="file"
        accept="audio/*"
        onChange={(event) => handleFileChange(event)}
        ref={inputRef}
      />
      <p>{text}</p>
    </main>
  );
}
