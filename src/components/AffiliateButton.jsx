import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";

const Affiliateutton = ({ value, onChange }) => {
  const editor = useRef(null);

  const config = {
    readonly: false,
    height: 400,
    buttons: [
      "bold", "italic", "underline", "|",
      "link", "|",
      {
        name: "affiliateLink",
        iconURL: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png", // Amazon icon example
        tooltip: "Insert Affiliate Link",
        exec: (editor) => {
          const url = prompt("Enter affiliate link URL:");
          if (!url) return;
          const buttonText = prompt(
            "Enter button text (e.g., View on Amazon, View Details):",
            "View on Amazon"
          );
          if (!buttonText) return;

          const html = `
            <a href="${url}" target="_blank" 
               style="display:inline-block;padding:8px 14px;
                      background:#ff9900;color:white;
                      border-radius:4px;text-decoration:none;
                      font-weight:bold;">
              ${buttonText}
            </a>
          `;
          editor.s.insertHTML(html);
        },
      },
    ],
  };

  return (
    <JoditEditor
      ref={editor}
      value={value}
      config={config}
      onBlur={(newContent) => onChange(newContent)}
      onChange={() => {}}
    />
  );
};

export default Affiliateutton;
