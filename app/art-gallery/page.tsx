import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import IllustrationCard from "@/components/illustration-card"

const illustrations = [
  {
    src: "/images/art-gallery/@Colorful Abstract Dancing Image Dance Studio Logo (1).jpg",
    alt: "Colorful Abstract Dancing Image 1",
    title: "Colorful Abstract Dancing Image 1",
    description: "A vibrant abstract dance-themed illustration.",
  },
  {
    src: "/images/art-gallery/@Colorful Abstract Dancing Image Dance Studio Logo (2).jpg",
    alt: "Colorful Abstract Dancing Image 2",
    title: "Colorful Abstract Dancing Image 2",
    description: "A vibrant abstract dance-themed illustration.",
  },
  {
    src: "/images/art-gallery/@Colorful Abstract Dancing Image Dance Studio Logo (3).jpg",
    alt: "Colorful Abstract Dancing Image 3",
    title: "Colorful Abstract Dancing Image 3",
    description: "A vibrant abstract dance-themed illustration.",
  },
  {
    src: "/images/art-gallery/@Colorful Abstract Dancing Image Dance Studio Logo (4).jpg",
    alt: "Colorful Abstract Dancing Image 4",
    title: "Colorful Abstract Dancing Image 4",
    description: "A vibrant abstract dance-themed illustration.",
  },
  {
    src: "/images/art-gallery/@Colorful Abstract Dancing Image Dance Studio Logo.jpg",
    alt: "Colorful Abstract Dancing Image 5",
    title: "Colorful Abstract Dancing Image 5",
    description: "A vibrant abstract dance-themed illustration.",
  },
]

export default function ArtGallery() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="font-fredoka text-3xl font-bold md:text-4xl">Art Gallery: Visual Metaphors</h1>
        <p className="text-muted-foreground">Explore how our illustrations connect to thermodynamic concepts</p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="font-fredoka text-xl">About Our Illustrations</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Each illustration in our story was carefully designed to visually represent key thermodynamic concepts.
            Click on any image to learn more about the visual metaphors and how they connect to the science.
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {illustrations.map((illustration, index) => (
          <IllustrationCard
            key={index}
            src={illustration.src}
            alt={illustration.alt}
            title={illustration.title}
            description={illustration.description}
          />
        ))}
      </div>
    </div>
  )
}
