// components/CodeEditor.tsx
'use client';

import { useState, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';
import 'prismjs/themes/prism-tomorrow.css'; // A nice dark theme

const DEFAULT_HTML = `<div class="container">
  <h1>Welcome to Your Editor!</h1>
  <p>Start coding and see the magic happen.</p>
</div>`;

const DEFAULT_CSS = `/* Your CSS styles here */
body {
  font-family: sans-serif;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.container {
  padding: 20px;
  text-align: center;
}`;

const DEFAULT_JS = `// Your JavaScript code here
console.log("Editor loaded!");`;

export default function CodeEditor() {
  const [htmlCode, setHtmlCode] = useState(DEFAULT_HTML);
  const [cssCode, setCssCode] = useState(DEFAULT_CSS);
  const [jsCode, setJsCode] = useState(DEFAULT_JS);
  const [output, setOutput] = useState('');

  // Combine code and update the preview
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const combinedOutput = `
        <html>
          <head>
            <style>
              ${cssCode}
            </style>
          </head>
          <body>
            ${htmlCode}
            <script>${jsCode}</script>
          </body>
        </html>
      `;
      setOutput(combinedOutput);
    }, 300); // Debounce update

    return () => clearTimeout(timeoutId);
  }, [htmlCode, cssCode, jsCode]);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-900 text-white">
      {/* Code Editors Pane */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col p-4 space-y-4">
        {/* HTML Editor */}
        <div className="flex-1 flex flex-col">
          <h2 className="text-lg font-semibold mb-2 text-gray-300">HTML</h2>
          <div className="flex-1 bg-[#2d2d2d] rounded-lg overflow-hidden">
            <Editor
              value={htmlCode}
              onValueChange={code => setHtmlCode(code)}
              highlight={code => highlight(code, languages.markup, 'markup')}
              padding={15}
              className="h-full"
              style={{
                fontFamily: '"Fira Code", "Fira Mono", monospace',
                fontSize: 14,
              }}
            />
          </div>
        </div>

        {/* CSS Editor */}
        <div className="flex-1 flex flex-col">
          <h2 className="text-lg font-semibold mb-2 text-gray-300">CSS</h2>
           <div className="flex-1 bg-[#2d2d2d] rounded-lg overflow-hidden">
            <Editor
              value={cssCode}
              onValueChange={code => setCssCode(code)}
              highlight={code => highlight(code, languages.css, 'css')}
              padding={15}
              className="h-full"
              style={{
                fontFamily: '"Fira Code", "Fira Mono", monospace',
                fontSize: 14,
              }}
            />
          </div>
        </div>

        {/* JavaScript Editor */}
        <div className="flex-1 flex flex-col">
          <h2 className="text-lg font-semibold mb-2 text-gray-300">JavaScript</h2>
           <div className="flex-1 bg-[#2d2d2d] rounded-lg overflow-hidden">
            <Editor
              value={jsCode}
              onValueChange={code => setJsCode(code)}
              highlight={code => highlight(code, languages.javascript, 'javascript')}
              padding={15}
              className="h-full"
              style={{
                fontFamily: '"Fira Code", "Fira Mono", monospace',
                fontSize: 14,
              }}
            />
          </div>
        </div>
      </div>

      {/* Output Preview Pane */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full p-4 flex flex-col">
        <h2 className="text-lg font-semibold mb-2 text-gray-300 flex-shrink-0">Preview</h2>
        <div className="w-full flex-1">
          <iframe
            className="w-full h-full bg-white border-4 border-gray-700 rounded-lg"
            srcDoc={output}
            title="output"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      </div>
    </div>
  );
}