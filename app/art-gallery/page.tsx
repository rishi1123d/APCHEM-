import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import IllustrationCard from "@/components/illustration-card"

const illustrations = [
  {
    src: "/images/art-gallery-fixed/thermal-twins.jpg",
    alt: "The Thermal Twins",
    title: "The Thermal Twins",
    description:
      "Enthalpy carries a glowing orb representing energy (ΔH), while Entropy is surrounded by swirling patterns representing disorder (ΔS). Their complementary colors (warm orange and cool teal) represent the balance between energy and disorder in thermodynamic systems.",
  },
  {
    src: "/images/art-gallery-fixed/gibbs-guide.jpg",
    alt: "Gibbs the Guide",
    title: "Gibbs the Guide",
    description:
      "The wise turtle's shell is shaped like the Gibbs free energy equation (ΔG = ΔH - TΔS). His slow, deliberate movement represents how thermodynamic systems seek their lowest energy state. The compass he carries symbolizes how ΔG guides the direction of spontaneous processes.",
  },
  {
    src: "/images/art-gallery-fixed/sunny-shady.jpg",
    alt: "Sunny and Shady",
    title: "Sunny and Shady",
    description:
      "Sunny glows orange, representing exothermic reactions that release heat (negative ΔH). Shady glows blue, representing endothermic reactions that absorb heat (positive ΔH). Their tug-of-war with a thermometer rope visualizes how energy transfer affects temperature.",
  },
  {
    src: "/images/art-gallery-fixed/crystal-garden.jpg",
    alt: "The Crystal Garden",
    title: "The Crystal Garden",
    description:
      "The rigid crystal patterns represent low entropy (high order). As Entropy dances through the garden, the crystals rearrange into beautiful random patterns, visualizing increasing entropy (disorder). This illustrates the Second Law of Thermodynamics: isolated systems naturally tend toward increasing entropy.",
  },
  {
    src: "/images/art-gallery-fixed/three-valleys.jpg",
    alt: "The Three Valleys",
    title: "The Three Valleys",
    description:
      "The hot, cold, and temperate valleys represent how temperature affects the Gibbs equation. The steaming hot valley (high T) shows entropy dominating, the freezing cold valley (low T) shows enthalpy dominating, and the temperate valley (moderate T) shows the balance between the two factors.",
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
