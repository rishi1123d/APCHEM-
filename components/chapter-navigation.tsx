import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ChapterNavigationProps {
  prevChapter?: {
    number: number
    title: string
  }
  nextChapter?: {
    number: number
    title: string
  }
}

export default function ChapterNavigation({ prevChapter, nextChapter }: ChapterNavigationProps) {
  return (
    <div className="flex items-center justify-between py-8">
      {prevChapter ? (
        <Button variant="ghost" asChild>
          <Link href={`/chapter-${prevChapter.number}`} className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            <span>
              Chapter {prevChapter.number}: {prevChapter.title}
            </span>
          </Link>
        </Button>
      ) : (
        <Button variant="ghost" asChild>
          <Link href="/" className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </Button>
      )}

      {nextChapter && (
        <Button variant="ghost" asChild>
          <Link href={`/chapter-${nextChapter.number}`} className="flex items-center gap-2">
            <span>
              Chapter {nextChapter.number}: {nextChapter.title}
            </span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      )}
    </div>
  )
}
