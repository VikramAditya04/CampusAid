import React from "react";
import { motion } from "framer-motion";

const base = `
  inline-flex items-center justify-center
  font-medium rounded-xl
  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-bg
  transition-all duration-300
  disabled:opacity-50 disabled:pointer-events-none
  relative overflow-hidden
`;

const sizes = {
  lg: "text-lg px-8 py-4 min-h-[56px]",
  md: "text-base px-6 py-3 min-h-[48px]",
  sm: "text-sm px-4 py-2 min-h-[40px]"
};

const variants = {
  solid: `
    bg-gradient-to-r from-primary to-accent
    text-text
    hover:from-primary-dark hover:to-accent-dark
    before:absolute before:inset-0
    before:bg-gradient-to-r before:from-primary-dark before:to-accent-dark
    before:opacity-0 before:transition-opacity before:duration-300
    hover:before:opacity-100
    [&>span]:relative [&>span]:z-10
  `,
  outline: `
    border border-glass-border
    text-text
    bg-transparent
    hover:border-primary
    before:absolute before:inset-0
    before:bg-gradient-to-r before:from-primary/10 before:to-accent/10
    before:opacity-0 before:transition-opacity before:duration-300
    hover:before:opacity-100
    [&>span]:relative [&>span]:z-10
  `,
  glass: `
    backdrop-blur-md
    bg-glass
    text-text
    border border-glass-border
    hover:bg-glass/80
    hover:border-primary/50
    before:absolute before:inset-0
    before:bg-gradient-to-r before:from-primary/5 before:to-accent/5
    before:opacity-0 before:transition-opacity before:duration-300
    hover:before:opacity-100
    [&>span]:relative [&>span]:z-10
  `
};

export function Button({
  size = "md",
  variant = "solid",
  className = "",
  asChild = false,
  children,
  ...props
}) {
  const classes = `${base} ${sizes[size] || sizes.md} ${variants[variant] || variants.solid} ${className}`;
  
  const content = (
    <span className="flex items-center justify-center w-full">
      {children}
    </span>
  );

  if (asChild) {
    return React.cloneElement(children, {
      className: `${children.props.className || ""} ${classes}`.trim(),
      ...props
    });
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10
      }}
      {...props}
    >
      {content}
    </motion.button>
  );
} 