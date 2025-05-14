"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card } from "@/components/ui/card"

interface IllustrationCardProps {
  src: string
  alt: string
  title: string
  description: string
}

export default function IllustrationCard({ src, alt, title, description }: IllustrationCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Card className="overflow-hidden transition-all hover:scale-[1.02] hover:shadow-md cursor-pointer">
          <div className="aspect-video relative">
            <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" />
          </div>
          <div className="p-3">
            <h3 className="font-fredoka text-lg">{title}</h3>
          </div>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="font-fredoka text-xl">{title}</DialogTitle>
        </DialogHeader>
        <div className="relative aspect-video w-full overflow-hidden rounded-md">
          <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" />
        </div>
        <DialogDescription className="text-base">{description}</DialogDescription>
      </DialogContent>
    </Dialog>
  )
}
