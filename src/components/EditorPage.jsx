// src/components/EditorPage.jsx
import React, { useState, useRef, useMemo, useEffect } from 'react';
import JoditEditor from 'jodit-react';

const EditorPage = ({ placeholder, value = "", onChange }) => {
  const editor = useRef(null);
  const [content, setContent] = useState(value); // initialize from prop

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || 'Start typing...',
      useSplitBlocks: true,
      enter: 'p',
      cleanPaste: true,
      cleanHTML: true,
      forceCleanPaste: true,
      removeEmpty: true,
    }),
    [placeholder]
  );

  // 🔄 Keep in sync when parent updates (e.g. EditPost loads content)
  useEffect(() => {
    setContent(value);
  }, [value]);

  // 🔁 Notify parent when content changes
  useEffect(() => {
    if (onChange) onChange(content);
  }, [content, onChange]);

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      tabIndex={1}
      onBlur={(newContent) => setContent(newContent)} // update on blur
    />
  );
};

export default EditorPage;




