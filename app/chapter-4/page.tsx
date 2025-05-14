import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import AskGibbsSidebar from "@/components/ask-gibbs-sidebar"
import ChapterNavigation from "@/components/chapter-navigation"
import InteractiveTemperature from "@/components/interactive-temperature"

export default function ChapterFour() {
  return (
    <div className="w-full">
      <div className="container py-8">
        <div className="mb-6">
          <h1 className="font-fredoka text-3xl font-bold md:text-4xl bg-gradient-to-r from-warm to-primary bg-clip-text text-transparent">
            Chapter 4: The Perfect Picnic Spot
          </h1>
          <p className="text-muted-foreground">The twins discover how temperature affects their journey...</p>
        </div>

        <div className="relative mb-8 w-full overflow-hidden rounded-xl shadow-xl">
          <Image
            src="/images/chapter-4.png"
            alt="The twins and Gibbs at the perfect picnic spot with HOT and COLD signposts"
            width={1200}
            height={675}
            className="chapter-image"
            priority
          />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="md:col-span-2 border-none shadow-lg bg-gradient-to-br from-background to-muted/30">
            <CardContent className="p-6">
              <div className="prose prose-lg dark:prose-invert">
                <p>
                  The twins stood at a crossroads, unsure which path to take. Before them were three valleys: one
                  steaming hot, one freezing cold, and one just right.
                </p>

                <p>
                  &quot;This is where it gets interesting,&quot; said Gibbs the Guide. &quot;The perfect picnic spot
                  depends not just on enthalpy and entropy, but also on <strong>temperature</strong>.&quot;
                </p>

                <p>
                  &quot;At high temperatures,&quot; Gibbs continued, pointing to the hot valley, &quot;entropy becomes
                  more important. The TΔS term in our equation grows larger.&quot;
                </p>

                <p>
                  &quot;And at low temperatures,&quot; he said, gesturing to the cold valley, &quot;enthalpy dominates
                  because the TΔS term is smaller.&quot;
                </p>

                <p>The twins looked at each other with understanding dawning on their faces.</p>

                <p>&quot;So the perfect picnic spot...&quot; Enthalpy began.</p>

                <p>
                  &quot;...is where ΔG is negative!&quot; Entropy finished. &quot;Where ΔH - TΔS gives us a negative
                  number!&quot;
                </p>

                <p>
                  &quot;Exactly!&quot; Gibbs smiled. &quot;When ΔG is negative, the process is{" "}
                  <strong>spontaneous</strong>—it happens naturally, without any push. That&apos;s your perfect picnic
                  spot!&quot;
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <InteractiveTemperature />
            <div className="block md:hidden">
              <AskGibbsContent
                title="Spontaneity and Temperature"
                equation="ΔG = ΔH - TΔS"
                explanation="Temperature (T) determines whether enthalpy (ΔH) or entropy (ΔS) has more influence on spontaneity. At high T, the TΔS term becomes more significant. At low T, ΔH dominates."
                chapterNumber={4}
              />
            </div>
          </div>
        </div>

        <ChapterNavigation
          prevChapter={{
            number: 3,
            title: "The Dance of Disorder",
          }}
        />

        <div className="hidden md:block">
          <AskGibbsSidebar
            title="Spontaneity and Temperature"
            equation="ΔG = ΔH - TΔS"
            explanation="Temperature (T) determines whether enthalpy (ΔH) or entropy (ΔS) has more influence on spontaneity. At high T, the TΔS term becomes more significant. At low T, ΔH dominates."
            chapterNumber={4}
          />
        </div>
      </div>
    </div>
  )
}

function AskGibbsContent({ title, equation, explanation, chapterNumber = 1 }) {
  // Preloaded questions for each chapter
  const preloadedQuestions = {
    1: [
      {
        question: "What is Gibbs free energy?",
        answer:
          "Gibbs free energy (G) is a thermodynamic potential that measures the maximum reversible work that may be performed by a thermodynamic system at a constant temperature and pressure. The change in Gibbs free energy (ΔG) determines whether a process will occur spontaneously.",
      },
      {
        question: "Why is ΔG important?",
        answer:
          "ΔG tells us the direction in which a chemical reaction will proceed. If ΔG is negative, the reaction is spontaneous. If ΔG is positive, the reaction is non-spontaneous. If ΔG is zero, the reaction is at equilibrium.",
      },
      {
        question: "How do enthalpy and entropy relate to Gibbs free energy?",
        answer:
          "Gibbs free energy combines enthalpy (ΔH) and entropy (ΔS) in the equation ΔG = ΔH - TΔS. This shows that both energy transfer and disorder contribute to whether a process will occur spontaneously.",
      },
    ],
    2: [
      {
        question: "What is an exothermic reaction?",
        answer:
          "An exothermic reaction releases heat to the surroundings, resulting in a negative enthalpy change (ΔH < 0). This is represented by Sunny in our story, who gives out heat to everything around him.",
      },
      {
        question: "What is an endothermic reaction?",
        answer:
          "An endothermic reaction absorbs heat from the surroundings, resulting in a positive enthalpy change (ΔH > 0). This is represented by Shady in our story, who takes in heat from the surroundings.",
      },
      {
        question: "How does enthalpy affect stability?",
        answer:
          "When energy is released to the surroundings (negative ΔH), the system becomes more stable. When energy is absorbed (positive ΔH), the system becomes less stable.",
      },
    ],
    3: [
      {
        question: "What is entropy?",
        answer:
          "Entropy (S) is a measure of disorder or randomness in a system. The more ways particles can be arranged, the higher the entropy. In our story, Entropy's dance represents increasing disorder and randomness.",
      },
      {
        question: "What does the Second Law of Thermodynamics state?",
        answer:
          "The Second Law of Thermodynamics states that the total entropy of an isolated system always increases over time. Systems naturally tend toward states of higher entropy (more disorder).",
      },
      {
        question: "Why do systems prefer higher entropy?",
        answer:
          "Systems with higher entropy are more probable than systems with lower entropy. There are simply more possible ways to arrange particles in a disordered state than in an ordered state.",
      },
    ],
    4: [
      {
        question: "How does temperature affect spontaneity?",
        answer:
          "Temperature (T) determines whether enthalpy (ΔH) or entropy (ΔS) has more influence on spontaneity. At high temperatures, the TΔS term becomes more significant. At low temperatures, ΔH dominates.",
      },
      {
        question: "When is a process spontaneous?",
        answer:
          "A process is spontaneous when ΔG is negative. This can happen when: ΔH is negative and ΔS is positive (spontaneous at all temperatures), ΔH is negative and ΔS is negative (spontaneous at low temperatures), or ΔH is positive and ΔS is positive (spontaneous at high temperatures).",
      },
      {
        question: "What is the perfect picnic spot in thermodynamic terms?",
        answer:
          "The perfect picnic spot is where ΔG is negative, meaning the process happens spontaneously without any external input. This depends on the balance between enthalpy (ΔH), entropy (ΔS), and temperature (T).",
      },
    ],
  }

  const questions = preloadedQuestions[chapterNumber] || preloadedQuestions[1]

  return (
    <Card className="border-none shadow-lg">
      <CardContent className="p-4">
        <h3 className="font-fredoka text-lg text-primary mb-2">{title}</h3>
        <div className="rounded-md bg-muted p-3 font-mono text-sm mb-3">{equation}</div>
        <p className="text-sm text-muted-foreground mb-4">{explanation}</p>

        <div className="space-y-4">
          <h4 className="font-fredoka text-sm">Common Questions:</h4>
          {questions.map((q, i) => (
            <div key={i} className="space-y-1">
              <h5 className="font-medium text-sm">{q.question}</h5>
              <p className="text-xs text-muted-foreground">{q.answer}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
