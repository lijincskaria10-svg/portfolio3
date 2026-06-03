import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface TextSegment {
  text: string
  className?: string
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[]
  containerClassName?: string
}

export default function WordsPullUpMultiStyle({
  segments,
  containerClassName = '',
}: WordsPullUpMultiStyleProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const allWords: Array<{ word: string; className: string }> = []

  segments.forEach((segment) => {
    const words = segment.text.split(' ')
    words.forEach((word) => {
      allWords.push({
        word,
        className: segment.className || '',
      })
    })
  })

  let wordIdx = 0

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${containerClassName}`}>
      {allWords.map((item, idx) => {
        const currentWordIdx = wordIdx++

        return (
          <motion.span
            key={idx}
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              delay: currentWordIdx * 0.08,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`inline-block mr-2 ${item.className}`}
          >
            {item.word}
          </motion.span>
        )
      })}
    </div>
  )
}
