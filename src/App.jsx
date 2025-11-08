import { useState } from 'react';
import HeaderNav from './components/HeaderNav';
import Hero from './components/Hero';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Footer from './components/Footer';

function App() {
  const [featureName, setFeatureName] = useState('Video Generation');

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-violet-600/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-violet-500/10 blur-3xl rounded-full" />
      </div>

      <HeaderNav featureName={featureName} onChangeFeature={setFeatureName} />

      <main>
        <Hero featureName={featureName} />
        <Features featureName={featureName} />
        <UseCases featureName={featureName} />

        <section id="try" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-violet-600/20 via-violet-500/10 to-transparent p-8 sm:p-12 text-center">
              <h3 className="text-2xl sm:text-3xl font-semibold">Experience {featureName} now</h3>
              <p className="text-white/70 mt-2">Type a prompt and preview AI output instantly. No signup required.</p>
              <div className="mt-6 max-w-xl mx-auto flex gap-2">
                <label htmlFor="prompt" className="sr-only">Prompt</label>
                <input id="prompt" className="flex-1 bg-black/40 text-white placeholder-white/40 border border-white/10 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500/60" placeholder={`Describe what to ${featureName.toLowerCase()}...`} />
                <button className="px-5 py-3 rounded-md bg-violet-600 hover:bg-violet-500 transition font-semibold">Generate</button>
              </div>
              <p className="text-xs text-white/50 mt-3">This is a visual demo. Connect your account to unlock full quality and exports.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
