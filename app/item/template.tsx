'use client'
import {motion} from 'motion/react';

export default function Template({ children }: { children: React.ReactNode }) {
    return (
      <motion.div
        className={'h-full'}
        initial={{ y:-60, opacity: 0 }}
        animate={{ y:0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.75 }}
      >
        {children}
      </motion.div>
    )
  }