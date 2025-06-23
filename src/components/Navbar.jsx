// src/components/Navbar.jsx
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(13, 13, 13, 0)", "rgba(13, 13, 13, 0.95)"]
  );
  
  const navBorder = useTransform(
    scrollY,
    [0, 100],
    ["rgba(109, 40, 217, 0)", "rgba(109, 40, 217, 0.2)"]
  );
  
  const navBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"]
  );

  return (
    <motion.nav
      className="fixed top-1 left-2 right-2 z-50 bg-glass backdrop-blur-xl border border-glass-border shadow-xl transition-all duration-500"
      style={{
         borderRadius: "1rem",
         padding: "0"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="text-2xl font-bold text-text">
              <span className="gradient-text">Campus</span>Aid
            </Link>
          </motion.div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-text hover:text-primary p-2 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.div>
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4 rounded-full px-4 py-2">
            {[
              ["Study Help", "/study-help"],
              ["Marketplace", "/marketplace"],
              ["Clubs & Events", "/clubs-events"],
              ["Roommate Finder", "/roommate-finder"],
              ["Lost & Found", "/lost-found"]
            ].map(([label, href], index) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={href}
                  className="text-text-secondary font-medium transition-colors relative group rounded-full px-5 py-2 border border-transparent bg-white/10 hover:bg-primary/10 hover:border-primary/40 backdrop-blur-md shadow-sm"
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-glass backdrop-blur-md border-t border-glass-border"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {[
            ["Study Help", "/study-help"],
            ["Marketplace", "/marketplace"],
            ["Clubs & Events", "/clubs-events"],
            ["Roommate Finder", "/roommate-finder"],
            ["Lost & Found", "/lost-found"]
          ].map(([label, href], index) => (
            <motion.div
              key={href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={href}
                className="block px-3 py-2 text-text-secondary hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
