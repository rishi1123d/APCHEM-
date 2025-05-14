"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, BookOpen, FlaskRoundIcon as Flask, ImageIcon, School, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"

const routes = [
  {
    name: "Home",
    path: "/",
    icon: <Home className="h-5 w-5" />,
  },
  {
    name: "Chapter 1",
    path: "/chapter-1",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    name: "Chapter 2",
    path: "/chapter-2",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    name: "Chapter 3",
    path: "/chapter-3",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    name: "Chapter 4",
    path: "/chapter-4",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    name: "Lab Notes",
    path: "/lab-notes",
    icon: <Flask className="h-5 w-5" />,
  },
  {
    name: "Art Gallery",
    path: "/art-gallery",
    icon: <ImageIcon className="h-5 w-5" />,
  },
  {
    name: "Teacher Zone",
    path: "/teacher-zone",
    icon: <School className="h-5 w-5" />,
  },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <MobileNav pathname={pathname} setOpen={setOpen} />
          </SheetContent>
        </Sheet>
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-fredoka text-xl font-bold">Thermal Twins</span>
        </Link>
        <nav className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <div className="flex gap-6">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === route.path ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {route.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <ModeToggle />
          </div>
        </nav>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

function MobileNav({
  pathname,
  setOpen,
}: {
  pathname: string
  setOpen: (open: boolean) => void
}) {
  return (
    <div className="flex flex-col gap-4 py-4">
      <div className="flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="font-fredoka text-xl font-bold">Thermal Twins</span>
        </Link>
        <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="mr-2">
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </Button>
      </div>
      <div className="flex flex-col gap-2 px-2">
        {routes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            onClick={() => setOpen(false)}
            className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
              pathname === route.path ? "bg-accent text-accent-foreground" : "text-muted-foreground"
            }`}
          >
            {route.icon}
            {route.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
