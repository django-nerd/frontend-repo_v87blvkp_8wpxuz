import { motion } from 'framer-motion';
import { Film, Scissors, AudioLines, Sparkles, Image as ImageIcon, Shapes, Workflow, FileText } from 'lucide-react';

const FEATURE_ICONS = {
  'Video Generation': [
    { icon: Film, title: 'Scene Creation', desc: 'Generate storyboards and shots from prompts or scripts.' },
    { icon: Scissors, title: 'AI Editing', desc: 'Auto cuts, reframing, captions, and color matching.' },
    { icon: AudioLines, title: 'Voice & FX', desc: 'Voice-over, music, and sound design generation.' },
    { icon: Sparkles, title: 'Transitions', desc: 'Seamless motion transitions and camera moves.' },
  ],
  'Sound / Music Generation': [
    { icon: AudioLines, title: 'Style Transfer', desc: 'Transform melodies into any genre and mood.' },
    { icon: Sparkles, title: 'Stems & Remix', desc: 'Split, remix, and regenerate instruments instantly.' },
    { icon: Scissors, title: 'Smart Arranger', desc: 'Auto structures, loops, and drops that fit.' },
    { icon: Film, title: 'Sync to Video', desc: 'Beat‑matched scores for your visuals.' },
  ],
  'Image / Art Creation': [
    { icon: ImageIcon, title: 'High‑Res Output', desc: 'Photoreal to stylized art with SR upscaling.' },
    { icon: Scissors, title: 'In/Out‑Painting', desc: 'Extend, remove, and edit regions non‑destructively.' },
    { icon: Sparkles, title: 'Style Control', desc: 'Reference-driven look and consistent characters.' },
    { icon: Workflow, title: 'Batch & Queue', desc: 'Generate sets with presets and automation.' },
  ],
  'Text Generation / Summarization': [
    { icon: FileText, title: 'Draft & Rewrite', desc: 'From outline to polished prose with tone control.' },
    { icon: Sparkles, title: 'Summaries', desc: 'Bullet and narrative summaries with sources.' },
    { icon: Workflow, title: 'Templates', desc: 'Reusable blueprints for blogs, emails, docs.' },
    { icon: Shapes, title: 'Structured Output', desc: 'JSON, Markdown, or HTML ready to publish.' },
  ],
  '3D Modeling / Scene Creation': [
    { icon: Shapes, title: 'Text‑to‑3D', desc: 'Generate meshes with PBR materials and UVs.' },
    { icon: Sparkles, title: 'Auto Lighting', desc: 'Studio presets and global illumination.' },
    { icon: Scissors, title: 'Procedural Edits', desc: 'Boolean ops, decimate, remesh, and rig.' },
    { icon: Film, title: 'AR Preview', desc: 'Quick view on device via WebAR links.' },
  ],
  'Workflow Automation / Task AI': [
    { icon: Workflow, title: 'Multi‑Step Flows', desc: 'Chain tools, branches, approvals, and retries.' },
    { icon: Sparkles, title: 'Smart Triggers', desc: 'Events from apps, webhooks, or schedules.' },
    { icon: FileText, title: 'Audit Trails', desc: 'Track every action with logs and metrics.' },
    { icon: Shapes, title: 'Connectors', desc: 'Integrate Slack, Notion, Google, and more.' },
  ],
};

export default function Features({ featureName }) {
  const items = FEATURE_ICONS[featureName] || [];
  return (
    <section id="features" className="py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Capabilities</h2>
          <p className="text-white/70 text-sm max-w-md">Purpose‑built tools that adapt to your {featureName.toLowerCase()} workflow with intelligent defaults and beautiful results.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 hover:border-violet-400/40 transition"
            >
              <div className="absolute -top-6 right-4 w-24 h-24 bg-violet-500/20 blur-2xl rounded-full pointer-events-none" />
              <div className="w-10 h-10 rounded-lg bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-300 mb-3">
                <Icon size={20} />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="text-white/70 text-sm mt-1">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
