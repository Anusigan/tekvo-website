"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

export function FloatingParticles() {
  const containerRef = useRef<HTMLDivElement>(null)

  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }))

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/20 dark:bg-primary/10"
          style={{
            width: particle.size,
            height: particle.size,
            x: `${particle.x}%`,
            y: `${particle.y}%`,
          }}
          animate={{
            x: [`${particle.x}%`, `${(particle.x + 20) % 100}%`, `${(particle.x - 10) % 100}%`, `${particle.x}%`],
            y: [`${particle.y}%`, `${(particle.y - 20) % 100}%`, `${(particle.y + 10) % 100}%`, `${particle.y}%`],
          }}
          transition={{
            duration: particle.duration,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  )
}
