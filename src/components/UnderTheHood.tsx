import { motion } from 'framer-motion';
import { GitBranch, ToggleLeft, Gauge } from 'lucide-react';

export default function UnderTheHood() {
  const decisions = [
    {
      icon: GitBranch,
      title: 'Instance Hygiene & Update Sets',
      description: 'Strict adherence to preview/commit hygiene, batching related configurations, and documenting manual steps for seamless L2 support handover.',
      color: '#007b58',
    },
    {
      icon: ToggleLeft,
      title: 'UI Policy vs. Client Script',
      description: 'Judgment call: Zero-code UI Policies for simple mandatory/read-only states. onChange Client Scripts reserved for complex GlideAjax calls and dynamic DOM manipulation.',
      color: '#005689',
    },
    {
      icon: Gauge,
      title: 'GlideRecord Optimization',
      description: 'Avoiding queries inside while(gr.next()) loops. Utilizing GlideAggregate for counts and addEncodedQuery() for performance.',
      color: '#7c3aed',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  return (
    <section id="architecture" className="py-16 md:py-20 bg-[#f8faf9] relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 left-10 w-64 h-64 bg-[#007b58]/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-[#005689]/5 rounded-full blur-3xl"
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
            <span className="text-xs font-semibold text-[#007b58] uppercase tracking-wider">Architecture</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1f2937] tracking-tight">
            Under the Hood
          </h2>
          <p className="text-[15px] text-[#6b7280] mt-2 max-w-[600px]">
            Key architectural decisions that shape platform quality, maintainability, and performance.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-5"
        >
          {decisions.map((decision) => (
            <motion.div
              key={decision.title}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                y: -8,
                transition: { type: 'spring', stiffness: 300, damping: 20 },
              }}
              whileTap={{ scale: 0.98 }}
              className="rounded-lg border border-[#e5e7eb] bg-white p-6 card-hover cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: decision.color + '15' }}
              >
                <decision.icon size={24} style={{ color: decision.color }} />
              </motion.div>
              <h3 className="text-sm font-bold text-[#1f2937] mb-2">{decision.title}</h3>
              <p className="text-[13px] text-[#6b7280] leading-relaxed">{decision.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
