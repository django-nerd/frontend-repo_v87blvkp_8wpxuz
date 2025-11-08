import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero({ featureName }) {
  const headlineMap = {
    'Video Generation': 'Generate Stunning Videos Instantly',
    'Sound / Music Generation': 'Compose AI Music in Seconds',
    'Image / Art Creation': 'Create High‑Quality AI Images in Seconds',
    'Text Generation / Summarization': 'Write & Summarize with AI Precision',
    '3D Modeling / Scene Creation': 'Design Immersive 3D Scenes Effortlessly',
    'Workflow Automation / Task AI': 'Automate Complex Workflows with AI',
  };
  const subMap = {
    'Video Generation': 'Scene creation, smart editing, seamless transitions, and auto voice‑over — all powered by Spark AI.',
    'Sound / Music Generation': 'Style transfer, stems, mastering, and looping powered by generative audio intelligence.',
    'Image / Art Creation': 'Prompts to photoreal or stylized art. Advanced upscaling, in/out‑painting, and style control.',
    'Text Generation / Summarization': 'Draft, refine, and summarize content with controllable tone and citations.',
    '3D Modeling / Scene Creation': 'From text to mesh with PBR materials, lighting presets, and instant AR previews.',
    'Workflow Automation / Task AI': 'Trigger multi‑step automations across your tools with guardrails and human‑in‑the‑loop.',
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(139,92,246,0.25),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.15),transparent_35%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {headlineMap[featureName]}
            </motion.h1>
            <motion.p
              className="mt-5 text-white/80 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {subMap[featureName]}
            </motion.p>
            <motion.div
              className="mt-8 flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <a
                href="#try"
                className="px-5 py-3 rounded-md bg-violet-600 text-white font-semibold shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:bg-violet-500 transition"
              >
                Try {featureName}
              </a>
              <a href="#demos" className="px-5 py-3 rounded-md border border-white/15 text-white/90 hover:text-white hover:border-white/30 transition">View Demos</a>
            </motion.div>
          </div>
          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-xl overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none" />
            <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
