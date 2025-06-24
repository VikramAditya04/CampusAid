// src/components/Navbar.jsx
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { scrollY } = useScroll();
  
  // const navBackground = useTransform(
  //   scrollY,
  //   [0, 100],
  //   ["rgba(13, 13, 13, 0)", "rgba(13, 13, 13, 0.95)"]
  // );
  
  // const navBorder = useTransform(
  //   scrollY,
  //   [0, 100],
  //   ["rgba(109, 40, 217, 0)", "rgba(109, 40, 217, 0.2)"]
  // );
  
  // const navBlur = useTransform(
  //   scrollY,
  //   [0, 100],
  //   ["blur(0px)", "blur(12px)"]
  // );

  return (
    <motion.nav
      className="fixed top-0 left-2 right-2 z-50 bg-glass backdrop-blur-xl "
      style={{
         borderRadius: "1rem",
         padding: "0"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between h-16">
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
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1 bg-neutral-800/50 border border-neutral-700 rounded-full p-2">
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
                  className="text-text-secondary font-medium transition-colors relative group rounded-full px-4 py-2 hover:bg-neutral-700/50"
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Auth buttons */}
          <div className="hidden md:flex items-center space-x-2  bg-gradient-to-r from-blue-500 via-primary to-purple-500 rounded-full">
            <Link href="/login" className="text-text-secondary font-medium transition-colors rounded-full px-4 py-2 ">
              Login
            </Link>
            <Link href="/signup" className="bg-primary text-white font-medium transition-colors rounded-full px-4 py-2  flex items-center gap-2">
              Sign Up
            </Link>
          </div>

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
          <motion.div
            className="flex flex-col space-y-2 pt-4 pb-2 px-2 mt-2 border-t border-glass-border"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <Link 
              href="/login" 
              className="w-full text-center text-text-secondary font-medium transition-colors rounded-md px-4 py-2 bg-neutral-800/50 hover:bg-neutral-700/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <Link 
              href="/signup" 
              className="w-full text-center bg-primary text-white font-medium transition-colors rounded-md px-4 py-2 hover:bg-primary/80"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
