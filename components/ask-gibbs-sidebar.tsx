"use client"

import { useState } from "react"
import { ChevronRight, HelpCircle, MessageCircleQuestion, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface AskGibbsProps {
  title: string
  equation: string
  explanation: string
  chapterNumber?: number
}

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

export default function AskGibbsSidebar({ title, equation, explanation, chapterNumber = 1 }: AskGibbsProps) {
  const [isOpen, setIsOpen] = useState(false)
  const questions = preloadedQuestions[chapterNumber as keyof typeof preloadedQuestions] || preloadedQuestions[1]

  return (
    <div className="fixed right-4 top-20 z-40 md:right-8">
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[320px] rounded-lg border bg-card shadow-lg transition-all duration-300 hover:shadow-xl"
      >
        <CollapsibleTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="flex w-full items-center justify-between p-4 border-0 bg-gradient-to-r from-warm/10 to-cool/10"
          >
            <div className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-primary" />
              <span className="font-fredoka text-lg">Ask Gibbs</span>
            </div>
            <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`} />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
          <Card className="border-0 shadow-none">
            <CardHeader className="pb-2 bg-gradient-to-r from-warm/5 to-cool/5">
              <CardTitle className="text-lg font-fredoka text-primary flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-4">
              <div className="rounded-md bg-muted p-3 font-mono text-sm">{equation}</div>
              <p className="text-sm text-muted-foreground">{explanation}</p>

              <Tabs defaultValue="concept">
                <TabsList className="w-full">
                  <TabsTrigger value="concept" className="flex-1">
                    Concept
                  </TabsTrigger>
                  <TabsTrigger value="questions" className="flex-1">
                    Questions
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="concept" className="mt-4">
                  <div className="space-y-2">
                    <h4 className="font-fredoka text-sm">Key Points:</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>{title} is central to understanding thermodynamics</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>The equation {equation.split("\n")[0]} helps predict reaction direction</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>This concept appears in Chapter {chapterNumber} of our adventure</span>
                      </li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="questions" className="mt-4">
                  <div className="space-y-4">
                    {questions.map((q, i) => (
                      <div key={i} className="space-y-2">
                        <h4 className="font-fredoka text-sm flex items-center gap-2">
                          <MessageCircleQuestion className="h-4 w-4 text-primary" />
                          {q.question}
                        </h4>
                        <p className="text-xs text-muted-foreground pl-6">{q.answer}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
