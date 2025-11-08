import { useEffect, useState } from 'react';
import { Rocket, Home, Layers, DollarSign, PlayCircle, Mail } from 'lucide-react';

const FEATURES = [
  'Video Generation',
  'Sound / Music Generation',
  'Image / Art Creation',
  'Text Generation / Summarization',
  '3D Modeling / Scene Creation',
  'Workflow Automation / Task AI',
];

export default function HeaderNav({ featureName, onChangeFeature }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-black/70 backdrop-blur-lg border-b border-violet-500/20' : 'bg-transparent'
      }`}
      aria-label="Primary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 group" aria-label="Spark AI home">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg blur-md bg-violet-500/50 group-hover:bg-violet-400/60 transition" />
              <Rocket className="relative text-white" size={22} />
            </div>
            <span className="font-semibold text-white tracking-wide">Spark AI</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm" aria-label="Global">
            <a href="#" className="text-white/80 hover:text-white transition flex items-center gap-1"><Home size={16}/> Home</a>
            <a href="#features" className="text-white/80 hover:text-white transition flex items-center gap-1"><Layers size={16}/> Features</a>
            <a href="#pricing" className="text-white/80 hover:text-white transition flex items-center gap-1"><DollarSign size={16}/> Pricing</a>
            <a href="#demos" className="text-white/80 hover:text-white transition flex items-center gap-1"><PlayCircle size={16}/> Demos</a>
            <a href="#contact" className="text-white/80 hover:text-white transition flex items-center gap-1"><Mail size={16}/> Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <label className="sr-only" htmlFor="feature-select">Choose feature</label>
            <select
              id="feature-select"
              value={featureName}
              onChange={(e) => onChangeFeature(e.target.value)}
              className="bg-black/50 text-white border border-violet-500/30 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/60"
              aria-label="Select feature"
            >
              {FEATURES.map((f) => (
                <option key={f} value={f} className="bg-black">{f}</option>
              ))}
            </select>
            <a
              href="#try"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium shadow-[0_0_20px_rgba(139,92,246,0.4)] transition"
            >
              Try {featureName.split(' ')[0]} Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
