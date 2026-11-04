import { motion } from 'framer-motion';
import { XCircle, CheckCircle2 } from 'lucide-react';

export default function CodeQuality() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const codeBlockVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.95,
      rotateY: -10,
    },
    visible: { 
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  return (
    <section id="code-quality" className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(45deg, #007b58 0%, #005689 50%, #007b58 100%)',
          backgroundSize: '200% 200%',
          filter: 'blur(100px)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-5 rounded-full bg-[#007b58]" />
            <span className="text-xs font-semibold text-[#007b58] uppercase tracking-wider">Code Quality</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1f2937] tracking-tight">
            Writing Performant Server-Side Logic
          </h2>
          <p className="text-[15px] text-[#6b7280] mt-2 max-w-[600px]">
            Common anti-pattern vs. optimized approach — the difference between N+1 queries and platform-native aggregation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* BAD */}
          <motion.div
            variants={codeBlockVariants}
            whileHover={{
              scale: 1.02,
              transition: { type: 'spring', stiffness: 300, damping: 20 },
            }}
            className="rounded-lg border-2 border-red-200 bg-white overflow-hidden shadow-lg"
          >
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="px-5 py-3 border-b border-red-200 bg-red-50 flex items-center gap-2"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <XCircle size={16} className="text-red-500" />
              </motion.div>
              <span className="text-xs font-semibold text-red-700">Bad Practice — Querying Inside a Loop</span>
            </motion.div>
            <div className="bg-[#1E1E1E] p-5 overflow-x-auto">
              <pre className="font-mono text-[13px] leading-6 text-[#d4d4d4]">
                <code>
                  <span className="text-[#6b7280]">{`// BAD: Querying inside a loop`}</span>{'\n'}
                  <span className="text-[#c678dd]">{'var'}</span>{' '}<span className="text-[#e5c07b]">{'inc'}</span>{' '}<span className="text-[#56b6c2]">{'='}</span>{' '}<span className="text-[#c678dd]">{'new'}</span>{' '}<span className="text-[#e5c07b]">{'GlideRecord'}</span><span className="text-[#abb2bf]">{'('}</span><span className="text-[#98c379]">{"'incident'"}</span><span className="text-[#abb2bf]">{');'}</span>{'\n'}
                  <span className="text-[#e5c07b]">{'inc'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#61afef]">{'query'}</span><span className="text-[#abb2bf]">{'();'}</span>{'\n'}
                  <span className="text-[#c678dd]">{'while'}</span><span className="text-[#abb2bf]">{'('}</span><span className="text-[#e5c07b]">{'inc'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#61afef]">{'next'}</span><span className="text-[#abb2bf]">{'()) {'}</span>{'\n'}
                  {'   '}<span className="text-[#c678dd]">{'var'}</span>{' '}<span className="text-[#e5c07b]">{'usr'}</span>{' '}<span className="text-[#56b6c2]">{'='}</span>{' '}<span className="text-[#c678dd]">{'new'}</span>{' '}<span className="text-[#e5c07b]">{'GlideRecord'}</span><span className="text-[#abb2bf]">{'('}</span><span className="text-[#98c379]">{"'sys_user'"}</span><span className="text-[#abb2bf]">{');'}</span>{'\n'}
                  {'   '}<span className="text-[#e5c07b]">{'usr'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#61afef]">{'get'}</span><span className="text-[#abb2bf]">{'('}</span><span className="text-[#e5c07b]">{'inc'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#e06c75]">{'caller_id'}</span><span className="text-[#abb2bf]">{');'}</span>{'\n'}
                  {'   '}<span className="text-[#e5c07b]">{'gs'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#61afef]">{'info'}</span><span className="text-[#abb2bf]">{'('}</span><span className="text-[#e5c07b]">{'usr'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#e06c75]">{'name'}</span><span className="text-[#abb2bf]">{');'}</span>{'\n'}
                  <span className="text-[#abb2bf]">{'}'}</span>
                </code>
              </pre>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="px-5 py-3 border-t border-red-200 bg-red-50"
            >
              <p className="text-[12px] text-red-700">
                <strong>Problem:</strong> For every incident row, a separate database query fires to fetch the user. With 1,000 incidents, that's 1,001 queries.
              </p>
            </motion.div>
          </motion.div>

          {/* GOOD */}
          <motion.div
            variants={codeBlockVariants}
            whileHover={{
              scale: 1.02,
              transition: { type: 'spring', stiffness: 300, damping: 20 },
            }}
            className="rounded-lg border-2 border-green-200 bg-white overflow-hidden shadow-lg"
          >
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="px-5 py-3 border-b border-green-200 bg-green-50 flex items-center gap-2"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <CheckCircle2 size={16} className="text-green-600" />
              </motion.div>
              <span className="text-xs font-semibold text-green-700">Good Practice — Dot-Walking & GlideAggregate</span>
            </motion.div>
            <div className="bg-[#1E1E1E] p-5 overflow-x-auto">
              <pre className="font-mono text-[13px] leading-6 text-[#d4d4d4]">
                <code>
                  <span className="text-[#6b7280]">{`// GOOD: GlideAggregate for counts`}</span>{'\n'}
                  <span className="text-[#c678dd]">{'var'}</span>{' '}<span className="text-[#e5c07b]">{'count'}</span>{' '}<span className="text-[#56b6c2]">{'='}</span>{' '}<span className="text-[#c678dd]">{'new'}</span>{' '}<span className="text-[#e5c07b]">{'GlideAggregate'}</span><span className="text-[#abb2bf]">{'('}</span><span className="text-[#98c379]">{"'incident'"}</span><span className="text-[#abb2bf]">{');'}</span>{'\n'}
                  <span className="text-[#e5c07b]">{'count'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#61afef]">{'addAggregate'}</span><span className="text-[#abb2bf]">{'('}</span><span className="text-[#98c379]">{"'COUNT'"}</span><span className="text-[#abb2bf]">{');'}</span>{'\n'}
                  <span className="text-[#e5c07b]">{'count'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#61afef]">{'query'}</span><span className="text-[#abb2bf]">{'();'}</span>{'\n'}
                  {'\n'}
                  <span className="text-[#6b7280]">{`// Use dot-walking in lists/reports`}</span>{'\n'}
                  <span className="text-[#6b7280]">{`// instead of looping queries`}</span>{'\n'}
                  <span className="text-[#e5c07b]">{'inc'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#e06c75]">{'caller_id'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#e06c75]">{'name'}</span>
                </code>
              </pre>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="px-5 py-3 border-t border-green-200 bg-green-50"
            >
              <p className="text-[12px] text-green-700">
                <strong>Result:</strong> Single aggregate query for counts. Dot-walking resolves references at the database level — zero extra queries.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
