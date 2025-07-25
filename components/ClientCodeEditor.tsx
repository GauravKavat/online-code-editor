// components/ClientCodeEditor.tsx
'use client';

import dynamic from 'next/dynamic';

// This is now a Client Component, so we can use dynamic import with ssr: false here.
const CodeEditorWithNoSSR = dynamic(
  () => import('./CodeEditor'),
  { ssr: false }
);

export default function ClientCodeEditor() {
  return <CodeEditorWithNoSSR />;
}