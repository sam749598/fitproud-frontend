import React, { useState, useRef, useMemo, useEffect } from 'react';
import JoditEditor from 'jodit-react';

const EditorPage = ({ placeholder, onChange }) => {
  const editor = useRef(null);
  const [content, setContent] = useState('');

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

  useEffect(() => {
    if (onChange) onChange(content);
  }, [content, onChange]);

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      tabIndex={1}
      onBlur={(newContent) => setContent(newContent)}
    />
  );
};

export default EditorPage;



