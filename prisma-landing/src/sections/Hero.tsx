import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import WordsPullUp from '../components/WordsPullUp'
import { useState } from 'react'

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4'

const navItems = ['Our story', 'Collective', 'Workshops', 'Programs', 'Inquiries']

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  return (
    <section className="relative h-screen bg-black p-4 md:p-6">
      {/* Main container with rounded corners */}
      <div className="relative h-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          onCanPlay={() => setIsVideoLoaded(true)}
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>

        {/* Noise overlay */}
        <div className="noise-overlay absolute inset-0 mix-blend-overlay opacity-[0.7]"></div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>

        {/* Navbar */}
        <nav className="absolute left-1/2 top-0 z-10 -translate-x-1/2 translate-y-0 transform rounded-b-2xl md:rounded-b-3xl bg-black px-4 py-2 md:px-8 md:py-3">
          <ul className="flex gap-3 sm:gap-6 md:gap-12 lg:gap-14">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="text-[10px] sm:text-xs md:text-sm font-medium transition-colors duration-300"
                  style={{
                    color: 'rgba(225, 224, 204, 0.8)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#E1E0CC'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)'
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hero content - positioned at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8">
          <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8">
            {/* Left: Heading (8 columns) */}
            <div className="col-span-12 md:col-span-8">
              <div className="relative inline-block">
                <WordsPullUp
                  text="Prisma"
                  className="text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-medium leading-[0.85] tracking-[-0.07em]"
                  showAsterisk={true}
                />
              </div>
            </div>

            {/* Right: Description and CTA (4 columns) */}
            <div className="col-span-12 md:col-span-4 flex flex-col justify-end gap-4 md:gap-6">
              {/* Description */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-primary/70 text-xs sm:text-sm md:text-base leading-[1.2]"
              >
                Prisma is a worldwide network of visual artists, filmmakers and
                storytellers bound not by place, status or labels but by passion
                and hunger to unlock potential through our unique perspectives.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.7,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <button className="group inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 sm:px-6 sm:py-3 text-black font-medium text-sm sm:text-base transition-all duration-300 hover:gap-3">
                  Join the lab
                  <div className="flex items-center justify-center rounded-full bg-black w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110">
                    <ArrowRight size={18} className="text-primary" strokeWidth={2.5} />
                  </div>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
