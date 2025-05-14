"use client"

import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function DeltaGCalculator() {
  const [deltaH, setDeltaH] = useState(-20)
  const [deltaS, setDeltaS] = useState(0.1)
  const [temperature, setTemperature] = useState(298)
  const [deltaG, setDeltaG] = useState(0)
  const [isSpontaneous, setIsSpontaneous] = useState(false)

  useEffect(() => {
    // Calculate ΔG = ΔH - TΔS
    const tempInKelvin = temperature
    const calculatedDeltaG = deltaH - tempInKelvin * deltaS
    setDeltaG(Number.parseFloat(calculatedDeltaG.toFixed(2)))
    setIsSpontaneous(calculatedDeltaG < 0)
  }, [deltaH, deltaS, temperature])

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="font-fredoka text-xl">Gibbs Free Energy Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="deltaH">Enthalpy Change (ΔH) in kJ/mol</Label>
            <span className="font-mono">{deltaH} kJ/mol</span>
          </div>
          <Slider
            id="deltaH"
            min={-100}
            max={100}
            step={1}
            value={[deltaH]}
            onValueChange={(value) => setDeltaH(value[0])}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="deltaS">Entropy Change (ΔS) in kJ/(mol·K)</Label>
            <span className="font-mono">{deltaS} kJ/(mol·K)</span>
          </div>
          <Slider
            id="deltaS"
            min={-0.5}
            max={0.5}
            step={0.01}
            value={[deltaS]}
            onValueChange={(value) => setDeltaS(value[0])}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="temperature">Temperature (T) in K</Label>
            <span className="font-mono">{temperature} K</span>
          </div>
          <Slider
            id="temperature"
            min={0}
            max={1000}
            step={1}
            value={[temperature]}
            onValueChange={(value) => setTemperature(value[0])}
          />
        </div>

        <div className="rounded-md bg-muted p-4">
          <div className="mb-2 text-center font-fredoka text-lg">ΔG = ΔH - TΔS</div>
          <div className="text-center font-mono text-xl">{deltaG} kJ/mol</div>
          <div
            className={`mt-2 text-center font-medium ${isSpontaneous ? "text-green-500 dark:text-green-400" : "text-red-500 dark:text-red-400"}`}
          >
            {isSpontaneous ? "Spontaneous Reaction" : "Non-Spontaneous Reaction"}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
