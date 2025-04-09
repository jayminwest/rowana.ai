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
  color?: string
  delayBetweenPasses?: number
}

export const MatrixText = ({
  text = "HelloWorld!",
  className,
  initialDelay = 200,
  letterAnimationDuration = 500,
  letterInterval = 100,
  color = "#00ff00",
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

  const motionVariants = useMemo(
    () => ({
      matrix: {
        color: color,
        textShadow: `0 2px 4px ${color}80`,
      },
    }),
    [color],
  )

  return (
    <div className={cn("flex items-center justify-center text-white", className)} aria-label="Matrix text animation">
      <div className="flex items-center justify-center">
        <div className="flex flex-wrap items-center justify-center">
          {letters.map((letter, index) => (
            <motion.div
              key={`${index}-${letter.char}`}
              className="font-mono text-4xl md:text-6xl w-[1ch] text-center overflow-hidden"
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
      </div>
    </div>
  )
}
