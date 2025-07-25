// app/page.tsx
import ClientCodeEditor from '../components/ClientCodeEditor';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <ClientCodeEditor />
    </main>
  );
}