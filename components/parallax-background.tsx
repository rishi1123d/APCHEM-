"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ParallaxBackground() {
  const [isMounted, setIsMounted] = useState(false)
  const { scrollY } = useScroll()

  // Transform values for parallax effect
  const cloudY1 = useTransform(scrollY, [0, 500], [0, -150])
  const cloudY2 = useTransform(scrollY, [0, 500], [0, -100])
  const cloudY3 = useTransform(scrollY, [0, 500], [0, -50])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Sky background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-200 to-blue-400 dark:from-blue-900 dark:to-indigo-900" />

      {/* Parallax clouds */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-64 h-24 bg-white rounded-full opacity-80 dark:opacity-30"
        style={{ y: cloudY1 }}
      />
      <motion.div
        className="absolute top-[20%] right-[15%] w-48 h-20 bg-white rounded-full opacity-70 dark:opacity-20"
        style={{ y: cloudY2 }}
      />
      <motion.div
        className="absolute top-[30%] left-[25%] w-56 h-16 bg-white rounded-full opacity-60 dark:opacity-10"
        style={{ y: cloudY3 }}
      />

      {/* Ground/horizon */}
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-green-500 to-green-300 dark:from-green-900 dark:to-green-700" />
    </div>
  )
}
