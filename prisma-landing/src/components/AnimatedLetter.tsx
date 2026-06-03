import { motion } from 'framer-motion'

interface AnimatedLetterProps {
  char: string
  progress: number
}

export default function AnimatedLetter({ char, progress }: AnimatedLetterProps) {
  const opacity = Math.max(0.2, Math.min(1, progress))

  return (
    <motion.span
      style={{
        opacity: progress < 0.2 ? 0.2 : progress > 1 ? 1 : 0.2 + progress * 0.8,
      }}
    >
      {char}
    </motion.span>
  )
}
