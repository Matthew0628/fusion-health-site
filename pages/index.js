export default function FusionHealthHome() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="bg-blue-50 p-6 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-900">Fusion Health</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#services" className="hover:text-blue-600">Programs</a>
            <a href="#admissions" className="hover:text-blue-600">Admissions</a>
            <a href="#insurance" className="hover:text-blue-600">Insurance</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>
      <main className="p-10 text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Fusion Health</h2>
        <p className="text-lg mb-4">Your Recovery Journey Begins Here</p>
      </main>
      <footer className="bg-blue-50 text-center py-6 text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Fusion Health. All rights reserved.
      </footer>
    </div>
  );
}
