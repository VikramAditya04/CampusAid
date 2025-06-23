import { Link } from "wouter";
import { motion } from "framer-motion";

export default function FeatureCard({ icon, title, description, path }) {
  return (
    <motion.div
      whileHover={{ 
        y: -8,
        transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5 }
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative rounded-2xl overflow-hidden"
    >
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-primary/50 via-accent/50 to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <Link 
        href={path} 
        className="
          relative block p-8
          bg-glass backdrop-blur-xl
          rounded-2xl
          transition-all duration-500
          border border-glass-border
          hover:border-transparent
          overflow-hidden
        "
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />

        {/* Glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

        {/* Content */}
        <div className="relative z-10">
          <motion.div 
            className="
              flex items-center justify-center
              h-16 w-16 mb-6
              rounded-2xl
              bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10
              group-hover:from-primary/20 group-hover:via-accent/20 group-hover:to-primary/20
              transition-colors duration-500
              border border-glass-border group-hover:border-primary/20
            "
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {icon}
          </motion.div>

          <motion.h3 
            className="text-xl font-bold text-text mb-3 group-hover:text-primary/90 transition-colors duration-500"
            initial={false}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {title}
          </motion.h3>

          <p className="text-text-secondary text-base leading-relaxed">
            {description}
          </p>

          {/* Arrow indicator */}
          <motion.div
            className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500"
            initial={{ x: -10, opacity: 0 }}
            whileHover={{ x: 0, opacity: 1 }}
          >
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
} 