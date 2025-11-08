import { motion } from 'framer-motion';

const useCasesByFeature = {
  'Video Generation': [
    { title: 'Creators & YouTubers', desc: 'Script to final cut with captions in minutes.', media: '/demos/video-thumb1.jpg' },
    { title: 'Marketing Teams', desc: 'Auto-variant social edits for every channel.', media: '/demos/video-thumb2.jpg' },
    { title: 'Educators', desc: 'Explainers with AI voice and b-roll suggestions.', media: '/demos/video-thumb3.jpg' },
  ],
  'Sound / Music Generation': [
    { title: 'Producers', desc: 'Turn a hum into a radio-ready hook.', media: '/demos/audio-wave1.jpg' },
    { title: 'Indie Devs', desc: 'Adaptive game music that reacts to play.', media: '/demos/audio-wave2.jpg' },
    { title: 'Filmmakers', desc: 'Cinematic scores synced to picture.', media: '/demos/audio-wave3.jpg' },
  ],
  'Image / Art Creation': [
    { title: 'Designers', desc: 'Moodboards and concept art from prompts.', media: '/demos/image-thumb1.jpg' },
    { title: 'E‑commerce', desc: 'Product shots in any setting, at scale.', media: '/demos/image-thumb2.jpg' },
    { title: 'Artists', desc: 'Iterate styles and characters consistently.', media: '/demos/image-thumb3.jpg' },
  ],
  'Text Generation / Summarization': [
    { title: 'Content Teams', desc: 'Briefs to publish-ready drafts fast.', media: '/demos/text-thumb1.jpg' },
    { title: 'Analysts', desc: 'Digest long reports into insights.', media: '/demos/text-thumb2.jpg' },
    { title: 'Support', desc: 'Reply suggestions with tone control.', media: '/demos/text-thumb3.jpg' },
  ],
  '3D Modeling / Scene Creation': [
    { title: 'Game Studios', desc: 'Prototype worlds and props rapidly.', media: '/demos/3d-thumb1.jpg' },
    { title: 'AR/VR', desc: 'Instant assets ready for real-time.', media: '/demos/3d-thumb2.jpg' },
    { title: 'Product', desc: 'Photoreal mockups without studios.', media: '/demos/3d-thumb3.jpg' },
  ],
  'Workflow Automation / Task AI': [
    { title: 'Operations', desc: 'Connect tools and cut manual work.', media: '/demos/flow-thumb1.jpg' },
    { title: 'Sales', desc: 'Route leads, draft emails, log CRM.', media: '/demos/flow-thumb2.jpg' },
    { title: 'HR', desc: 'Intake to onboarding with approvals.', media: '/demos/flow-thumb3.jpg' },
  ],
};

export default function UseCases({ featureName }) {
  const cases = useCasesByFeature[featureName] || [];
  return (
    <section id="demos" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">Use Cases</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={c.media}
                  alt={`${c.title} preview`}
                  loading="lazy"
                  className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold">{c.title}</h3>
                <p className="text-white/70 text-sm mt-1">{c.desc}</p>
              </div>
              <div className="absolute inset-0 bg-violet-500/0 group-hover:bg-violet-500/5 transition pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
