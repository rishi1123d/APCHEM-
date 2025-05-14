import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import DeltaGCalculator from "@/components/delta-g-calculator"

export default function LabNotes() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="font-fredoka text-3xl font-bold md:text-4xl">Lab Notes: The Science Behind the Story</h1>
        <p className="text-muted-foreground">A concise summary of the thermodynamic concepts presented in our fable</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-fredoka text-xl">Thermodynamics Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-medium">Heat Transfer</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Heat transfer is the movement of thermal energy from one object or system to another. In our
                      story, this is represented by the characters Sunny (exothermic) and Shady (endothermic).
                    </p>
                    <ul className="ml-6 list-disc space-y-1">
                      <li>
                        <strong>Exothermic processes</strong> (ΔH &lt; 0): Release heat to surroundings (Sunny)
                      </li>
                      <li>
                        <strong>Endothermic processes</strong> (ΔH &gt; 0): Absorb heat from surroundings (Shady)
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="font-medium">Hess&apos;s Law</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Hess&apos;s Law states that the total enthalpy change in a reaction is the same regardless of the
                      pathway taken from reactants to products.
                    </p>
                    <p>
                      In our story, this is represented by the different paths the twins could take to reach their
                      destination. No matter which route they choose, the total energy change would be the same.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="font-medium">Entropy and Spontaneity</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Entropy (S) is a measure of disorder or randomness in a system. The Second Law of Thermodynamics
                      states that the total entropy of an isolated system always increases over time.
                    </p>
                    <p className="mb-2">
                      In our story, Entropy&apos;s dance in the crystal garden represents increasing disorder and
                      randomness.
                    </p>
                    <p>
                      <strong>Spontaneous processes</strong> (ΔG &lt; 0) occur without external input. The Gibbs free
                      energy equation (ΔG = ΔH - TΔS) determines spontaneity by combining enthalpy, entropy, and
                      temperature.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="font-medium">Calorimetry</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Calorimetry is the science of measuring heat transfer during chemical reactions or physical
                      changes.
                    </p>
                    <p className="mb-2">
                      The equation q = mcΔT relates heat (q) to mass (m), specific heat capacity (c), and temperature
                      change (ΔT).
                    </p>
                    <p>
                      In our story, Captain Calorimeter (who appears in later chapters) represents this concept with his
                      coffee-cup calorimeter cape.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-fredoka text-xl">Story-to-Science Connections</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    <strong>Enthalpy character</strong>: Represents ΔH (heat energy transfer)
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    <strong>Entropy character</strong>: Represents ΔS (disorder/randomness)
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    <strong>Gibbs the Guide</strong>: Represents Gibbs free energy (ΔG)
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    <strong>Sunny&apos;s orange flash</strong>: Exothermic reaction (negative ΔH)
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    <strong>Shady&apos;s blue aura</strong>: Endothermic reaction (positive ΔH)
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    <strong>Crystal garden dance</strong>: Increasing entropy (positive ΔS)
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    <strong>Three valleys</strong>: Temperature&apos;s effect on the ΔG equation
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    <strong>Perfect picnic spot</strong>: Spontaneous process (negative ΔG)
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <DeltaGCalculator />

          <Card>
            <CardHeader>
              <CardTitle className="font-fredoka text-xl">AP Chemistry Alignment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">This story aligns with the following AP Chemistry objectives:</p>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    <strong>Unit 6: Thermodynamics</strong>: Energy, enthalpy, and calorimetry
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    <strong>Unit 9: Applications of Thermodynamics</strong>: Gibbs free energy and spontaneity
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    <strong>Science Practice 1</strong>: Models and representations
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    <strong>Science Practice 2</strong>: Question and method
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    <strong>Science Practice 4</strong>: Model analysis
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    <strong>Science Practice 6</strong>: Argumentation
                  </span>
                </li>
              </ul>

              <div className="mt-6">
                <h3 className="mb-2 font-fredoka text-lg">References</h3>
                <ul className="space-y-1 text-sm">
                  <li>College Board. (2019). AP Chemistry Course and Exam Description.</li>
                  <li>Zumdahl, S. S., & Zumdahl, S. A. (2019). Chemistry (10th ed.). Cengage Learning.</li>
                  <li>Chang, R., & Goldsby, K. A. (2018). Chemistry (13th ed.). McGraw-Hill Education.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
