"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface LetterState {
  char: string
  isMatrix: boolean
  isSpace: boolean
}

interface MatrixTextProps {
  text?: string
  className?: string
  initialDelay?: number
  letterAnimationDuration?: number
  letterInterval?: number
  // color?: string // Removed color prop, will use gradient
  delayBetweenPasses?: number
}

export const MatrixText = ({
  text = "HelloWorld!",
  className,
  initialDelay = 200,
  letterAnimationDuration = 500,
  letterInterval = 100,
  // color = "#00ff00", // Removed color prop default
  delayBetweenPasses = 3000, // 3 second delay between passes
}: MatrixTextProps) => {
  const [letters, setLetters] = useState<LetterState[]>(() =>
    text.split("").map((char) => ({
      char,
      isMatrix: false,
      isSpace: char === " ",
    })),
  )
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationPass, setAnimationPass] = useState(0) // 0: not started, 1: first pass, 2: second pass, 3: complete

  const getRandomChar = useCallback(() => (Math.random() > 0.5 ? "1" : "0"), [])

  const animateLetter = useCallback(
    (index: number) => {
      if (index < 0 || index >= text.length) return

      requestAnimationFrame(() => {
        setLetters((prev) => {
          const newLetters = [...prev]
          if (!newLetters[index].isSpace) {
            newLetters[index] = {
              ...newLetters[index],
              char: getRandomChar(),
              isMatrix: true,
            }
          }
          return newLetters
        })

        setTimeout(() => {
          setLetters((prev) => {
            const newLetters = [...prev]
            newLetters[index] = {
              ...newLetters[index],
              char: text[index],
              isMatrix: false,
            }
            return newLetters
          })
        }, letterAnimationDuration)
      })
    },
    [getRandomChar, text, letterAnimationDuration],
  )

  const startAnimation = useCallback(() => {
    if (isAnimating) return

    setIsAnimating(true)
    const newPass = animationPass + 1
    setAnimationPass(newPass)

    // First pass: left to right
    if (newPass === 1) {
      let currentIndex = 0

      const animateLeftToRight = () => {
        if (currentIndex >= text.length) {
          setIsAnimating(false)
          // Schedule second pass after the specified delay
          setTimeout(() => startAnimation(), delayBetweenPasses)
          return
        }

        animateLetter(currentIndex)
        currentIndex++
        setTimeout(animateLeftToRight, letterInterval)
      }

      animateLeftToRight()
    }
    // Second pass: right to left
    else if (newPass === 2) {
      let currentIndex = text.length - 1

      const animateRightToLeft = () => {
        if (currentIndex < 0) {
          setIsAnimating(false)
          return // Stop after second pass
        }

        animateLetter(currentIndex)
        currentIndex--
        setTimeout(animateRightToLeft, letterInterval)
      }

      animateRightToLeft()
    }
  }, [animateLetter, text, isAnimating, letterInterval, animationPass, delayBetweenPasses])

  useEffect(() => {
    if (animationPass === 0) {
      const timer = setTimeout(() => startAnimation(), initialDelay)
      return () => clearTimeout(timer)
    }
  }, [startAnimation, initialDelay, animationPass])

  // Use primary color for the matrix effect shadow, or adjust as needed
  const primaryColorHsl = "hsl(var(--primary))" // Get primary color from CSS variable
  // const foregroundColorHsl = "hsl(var(--foreground))" // No longer needed for matrix color
  const gray300Hsl = "hsl(220, 13%, 86%)" // HSL for gray-300 (#D1D5DB)
  const motionVariants = useMemo(
    () => ({
      matrix: {
        color: gray300Hsl, // Use gray-300 for the flashing matrix chars
        textShadow: `0 2px 4px ${primaryColorHsl}80`, // Keep primary shadow
      },
      normal: {
        color: 'transparent' // Make final text transparent to inherit parent gradient
      },
    }),
    [primaryColorHsl, gray300Hsl], // Dependencies updated
  )

  return (
    // Apply gradient classes here
    <div
      className={cn(
        "flex items-center justify-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent", // Gradient classes
        className,
      )}
      aria-label="Matrix text animation"
    >
      {/* Added break-words to help with wrapping on narrow screens */}
      <div className="flex flex-wrap items-baseline justify-center break-words">
        {letters.map((letter, index) => (
          <motion.div
            key={`${index}-${letter.char}`}
              className="font-mono text-4xl md:text-6xl text-center" // Removed w-[1ch]
              initial="initial"
              animate={letter.isMatrix ? "matrix" : "normal"}
              variants={motionVariants}
              transition={{
                duration: 0.1,
                ease: "easeInOut",
              }}
              style={{
                display: "inline-block",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {letter.isSpace ? "\u00A0" : letter.char}
            </motion.div>
          ))}
      </div>
      {/* Removed closing tag for intermediate div */}
    </div>
  )
}
