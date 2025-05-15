"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { getImagePath } from "@/lib/utils"

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-warm/30 via-background to-cool/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full text-center"
        >
          <div className="mb-2 inline-block rounded-full bg-gradient-to-r from-warm/80 to-cool/80 px-4 py-1.5 text-sm font-medium text-white shadow-md">
            A Thermodynamics Road-Trip Fable
          </div>

          <motion.h1
            className="mb-6 font-fredoka text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            The Thermal Twins:
            <span className="block text-primary">Enthalpy & Entropy&apos;s Excellent Adventure</span>
          </motion.h1>

          <motion.p
            className="mb-8 mx-auto max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Pack your beaker—we&apos;re leaving the lab for the wild world of heat and chaos! Join the Thermal Twins as
            they search for the Lowest-Possible Energy Picnic Spot in Chemisphere Kingdom.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mb-12 w-full"
          >
            <div className="mx-auto w-full max-w-4xl">
              <Image
                src={getImagePath("/images/thermal-twins-hero.png")}
                alt="The Thermal Twins: Enthalpy in warm orange with a flask showing ΔH, and Entropy in cool teal with swirling patterns"
                width={1200}
                height={1200}
                className="w-full h-auto rounded-xl shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Button asChild size="lg" className="bounce-on-hover font-fredoka text-lg">
              <Link href="/chapter-1">Begin the Adventure</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
