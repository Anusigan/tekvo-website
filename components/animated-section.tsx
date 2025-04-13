"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  delay?: number
  animationType?: "fadeIn" | "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "zoomIn" | "bounce"
}

export function AnimatedSection({
  children,
  className,
  id,
  delay = 0,
  animationType = "fadeIn",
}: AnimatedSectionProps) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const [hasAnimated, setHasAnimated] = useState(false)

  const animations = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: { duration: 0.6, delay },
      },
    },
    fadeInUp: {
      initial: { opacity: 0, y: 30 },
      animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay },
      },
    },
    fadeInDown: {
      initial: { opacity: 0, y: -30 },
      animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay },
      },
    },
    fadeInLeft: {
      initial: { opacity: 0, x: -30 },
      animate: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, delay },
      },
    },
    fadeInRight: {
      initial: { opacity: 0, x: 30 },
      animate: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, delay },
      },
    },
    zoomIn: {
      initial: { opacity: 0, scale: 0.95 },
      animate: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, delay },
      },
    },
    bounce: {
      initial: { opacity: 0, y: 30 },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay,
          type: "spring",
          stiffness: 200,
          damping: 15,
        },
      },
    },
  }

  const selectedAnimation = animations[animationType]

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start(selectedAnimation.animate)
      setHasAnimated(true)
    }
  }, [controls, inView, hasAnimated, selectedAnimation])

  return (
    <motion.div ref={ref} id={id} className={className} initial={selectedAnimation.initial} animate={controls}>
      {children}
    </motion.div>
  )
}
