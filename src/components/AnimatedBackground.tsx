import { motion } from "framer-motion";

export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 opacity-40" style={{ background: 'var(--gradient-mesh)' }} />
      
      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(circle, hsl(var(--brand-blue)) 0%, transparent 70%)' }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-40 right-20 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(circle, hsl(var(--brand-purple)) 0%, transparent 70%)' }}
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-1/3 w-64 h-64 rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(circle, hsl(var(--brand-teal)) 0%, transparent 70%)' }}
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
