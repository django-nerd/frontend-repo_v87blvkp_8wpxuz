import { Rocket, Twitter, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="mt-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg blur-md bg-violet-500/40" />
              <Rocket className="relative text-white" size={20} />
            </div>
            <span className="font-semibold text-white">Spark AI</span>
          </div>
          <p className="text-white/70 text-sm mt-4 max-w-sm">All‑in‑one creative and productivity platform powered by state‑of‑the‑art AI. Build, design, and automate — securely and at scale.</p>
          <div className="flex gap-3 mt-4">
            <a href="#" aria-label="Twitter" className="p-2 rounded-md bg-white/5 border border-white/10 text-white/80 hover:text-white hover:border-white/20 transition"><Twitter size={16}/></a>
            <a href="#" aria-label="GitHub" className="p-2 rounded-md bg-white/5 border border-white/10 text-white/80 hover:text-white hover:border-white/20 transition"><Github size={16}/></a>
            <a href="mailto:hello@spark.ai" aria-label="Email" className="p-2 rounded-md bg-white/5 border border-white/10 text-white/80 hover:text-white hover:border-white/20 transition"><Mail size={16}/></a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold">Integrations</h4>
          <ul className="mt-3 text-white/70 text-sm space-y-2">
            <li>Adobe CC</li>
            <li>Figma</li>
            <li>Notion</li>
            <li>Slack</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Newsletter</h4>
          <form className="mt-3 flex gap-2">
            <label htmlFor="email" className="sr-only">Email</label>
            <input id="email" type="email" placeholder="you@domain.com" className="w-full bg-black/40 text-white placeholder-white/40 border border-white/10 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500/60" required />
            <button className="px-4 py-2 rounded-md bg-violet-600 text-white hover:bg-violet-500 transition">Join</button>
          </form>
        </div>
      </div>
      <div className="py-6 text-center text-white/50 text-xs border-t border-white/10">© {new Date().getFullYear()} Spark AI. All rights reserved.</div>
    </footer>
  );
}
