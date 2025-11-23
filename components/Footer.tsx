import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-900 to-red-950 text-amber-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-bold text-amber-300 mb-4">Keeping Latin Alive</h3>
            <p className="text-sm text-amber-100 opacity-90">
              Preserving and teaching the language of ancient Rome for modern learners.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-amber-300 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-amber-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-amber-300 transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-amber-300 mb-4">Connect</h3>
            <p className="text-sm text-amber-100 opacity-90">
              Join us in keeping Latin alive!
            </p>
          </div>
        </div>

        <div className="border-t border-red-800 mt-8 pt-6 text-center">
          <p className="text-sm text-amber-100 opacity-75">
            © {new Date().getFullYear()} Keeping Latin Alive. Carpe diem.
          </p>
        </div>
      </div>
    </footer>
  );
}