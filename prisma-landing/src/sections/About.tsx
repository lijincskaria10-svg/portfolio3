import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'
import AnimatedLetter from '../components/AnimatedLetter'

const bodyText =
  'Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals.'

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = bodyText.split('')
  const totalChars = chars.length

  return (
    <section ref={containerRef} className="bg-black py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        {/* Card */}
        <div className="rounded-2xl md:rounded-3xl bg-[#101010] p-8 md:p-12 lg:p-16">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-12"
          >
            <span className="text-primary text-[10px] sm:text-xs font-medium tracking-widest uppercase">
              Visual arts
            </span>
          </motion.div>

          {/* Main heading with mixed styles */}
          <div className="mb-8 md:mb-12 lg:mb-16 text-center">
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: 'I am Marcus Chen,',
                  className: 'font-normal',
                },
                {
                  text: 'a self-taught director.',
                  className: 'font-serif italic',
                },
                {
                  text: 'I have skills in color grading, visual effects, and narrative design.',
                  className: 'font-normal',
                },
              ]}
              containerClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9]"
            />
          </div>

          {/* Body text with scroll-linked character opacity */}
          <motion.p className="text-center text-[#DEDBC8] text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-[1.6]">
            {chars.map((char, idx) => {
              const charProgress = idx / totalChars
              const range = [charProgress - 0.1, charProgress + 0.05]

              const opacity = useTransform(
                scrollYProgress,
                [Math.max(0, range[0]), Math.min(1, range[1])],
                [0.2, 1]
              )

              return (
                <motion.span key={idx} style={{ opacity }}>
                  {char}
                </motion.span>
              )
            })}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
