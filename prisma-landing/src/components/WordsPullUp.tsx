import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import React from 'react'

interface WordsPullUpProps {
  text: string
  className?: string
  showAsterisk?: boolean
}

export default function WordsPullUp({ text, className = '', showAsterisk = false }: WordsPullUpProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const words = text.split(' ')

  return (
    <div ref={ref} className={`flex flex-wrap justify-center ${className}`}>
      {words.map((word, idx) => {
        const isLastWord = idx === words.length - 1
        const isLastChar = isLastWord && word.endsWith('a')

        return (
          <motion.span
            key={idx}
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              delay: idx * 0.08,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block mr-2"
          >
            {word}
            {isLastChar && showAsterisk && (
              <motion.span
                className="absolute top-[0.65em] -right-[0.3em] text-[0.31em] font-normal"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  delay: idx * 0.08 + 0.3,
                  duration: 0.6,
                }}
              >
                *
              </motion.span>
            )}
          </motion.span>
        )
      })}
    </div>
  )
}
