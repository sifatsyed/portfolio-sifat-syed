export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="min-h-screen font-sans">
        <header className="p-4 bg-white border-b">[Header]</header>
        <main className="p-6">{children}</main>
        <footer className="p-4 text-center text-gray-500 border-t">© 2025 Sifat</footer>
      </div>
    );
  }
  