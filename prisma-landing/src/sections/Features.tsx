import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Check } from 'lucide-react'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'

const FEATURE_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4'

const features = [
  {
    type: 'video',
    title: 'Your creative canvas.',
    video: FEATURE_VIDEO,
  },
  {
    type: 'card',
    number: '01',
    title: 'Project Storyboard.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
    items: [
      'Collaborative storyboarding',
      'Visual reference library',
      'Shot planning tools',
      'Timeline management',
    ],
  },
  {
    type: 'card',
    number: '02',
    title: 'Smart Critiques.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
    items: [
      'AI-powered analysis',
      'Detailed creative notes',
      'Tool integrations',
    ],
  },
  {
    type: 'card',
    number: '03',
    title: 'Immersion Capsule.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
    items: [
      'Notification silencing',
      'Ambient soundscapes',
      'Schedule syncing',
    ],
  },
]

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0]
  index: number
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-100px',
  })

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  if (feature.type === 'video') {
    return (
      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative h-full overflow-hidden rounded-2xl lg:rounded-3xl"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src={feature.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <p className="text-primary text-sm sm:text-base md:text-lg font-medium">
            {feature.title}
          </p>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="rounded-2xl lg:rounded-3xl bg-[#212121] p-6 md:p-8 lg:p-10 flex flex-col justify-between h-full"
    >
      {/* Header with icon */}
      <div>
        <div className="mb-6 md:mb-8">
          <img
            src={feature.icon}
            alt={feature.title}
            className="h-10 w-10 sm:h-12 sm:w-12 rounded object-cover"
          />
        </div>

        {/* Title and number */}
        <div className="mb-6 md:mb-8">
          <p className="text-gray-500 text-xs md:text-sm font-medium mb-2">
            {feature.number}
          </p>
          <h3 className="text-primary text-lg sm:text-xl md:text-2xl font-medium">
            {feature.title}
          </h3>
        </div>

        {/* Checklist */}
        <ul className="space-y-3 md:space-y-4">
          {feature.items.map((item, idx) => (
            <li key={idx} className="flex gap-3 items-start">
              <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
              <span className="text-gray-400 text-xs sm:text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Learn more link */}
      <div className="mt-6 md:mt-8">
        <button className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors duration-300">
          <span className="text-xs md:text-sm font-medium">Learn more</span>
          <ArrowRight
            size={16}
            className="transform -rotate-45"
            strokeWidth={2.5}
          />
        </button>
      </div>
    </motion.div>
  )
}

export default function Features() {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section className="relative min-h-screen bg-black py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Subtle noise background */}
      <div className="bg-noise absolute inset-0 opacity-[0.15]"></div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="mb-16 md:mb-24 lg:mb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 md:mb-8"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-primary">
              Studio-grade workflows for visionary creators.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-gray-500">
              Built for pure vision. Powered by art.
            </p>
          </motion.div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:gap-0 lg:h-[480px]">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
