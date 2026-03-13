import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: unknown[]) { return twMerge(clsx(inputs)) }

interface TypingEffectProps {
  texts?: string[]
  className?: string
  rotationInterval?: number
  typingSpeed?: number
}

export const TypingEffect = ({
  texts = ['Design', 'Development', 'Marketing'],
  className,
  rotationInterval = 3000,
  typingSpeed = 100,
}: TypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true })

  const currentText = texts[currentTextIndex % texts.length]

  useEffect(() => {
    if (!isInView) return

    if (charIndex < currentText.length) {
      const t = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText.charAt(charIndex))
        setCharIndex(charIndex + 1)
      }, typingSpeed)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        setDisplayedText('')
        setCharIndex(0)
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
      }, rotationInterval)
      return () => clearTimeout(t)
    }
  }, [charIndex, currentText, isInView, rotationInterval, texts, typingSpeed])

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative inline-flex items-center justify-center text-center',
        className
      )}
    >
      {displayedText}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
        className="ml-[2px] h-[1em] w-[2px] rounded-sm bg-current inline-block"
      />
    </div>
  )
}

export default TypingEffect
