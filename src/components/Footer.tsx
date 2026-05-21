import { Rocket } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="absolute inset-0 circuit-bg opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-flex items-center gap-2 mb-4 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center glow-blue">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Vyombotics</span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Empowering the next generation of tech innovators through hands-on learning.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2">
              {['Courses', 'Teachers', 'About'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-500 hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-blue-400 text-sm transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © 2025 Vyombotics. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs">
            Built with passion for the future 🚀
          </p>
        </div>
      </div>
    </footer>
  );
}
