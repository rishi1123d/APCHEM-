"use client"

import { useState } from "react"
import { Thermometer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function InteractiveTemperature() {
  const [temperature, setTemperature] = useState(25)
  const [color, setColor] = useState("bg-secondary")

  const handleAddHeat = () => {
    if (temperature < 100) {
      setTemperature((prev) => prev + 10)
      updateColor(temperature + 10)
    }
  }

  const handleRemoveHeat = () => {
    if (temperature > 0) {
      setTemperature((prev) => prev - 10)
      updateColor(temperature - 10)
    }
  }

  const handleSliderChange = (value: number[]) => {
    setTemperature(value[0])
    updateColor(value[0])
  }

  const updateColor = (temp: number) => {
    if (temp < 20) {
      setColor("bg-blue-500")
    } else if (temp < 50) {
      setColor("bg-secondary")
    } else if (temp < 80) {
      setColor("bg-orange-400")
    } else {
      setColor("bg-red-500")
    }
  }

  return (
    <Card className="border-none shadow-lg overflow-hidden bg-gradient-to-br from-background to-muted/30">
      <CardHeader className="bg-gradient-to-r from-warm/10 to-cool/10 pb-2">
        <CardTitle className="font-fredoka text-lg flex items-center gap-2">
          <Thermometer className="h-5 w-5 text-primary" />
          Temperature Control
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-lg">{temperature}°C</span>
          </div>
        </div>

        <div className="mb-6">
          <Slider value={[temperature]} min={0} max={100} step={1} onValueChange={handleSliderChange} />
        </div>

        <div className="flex justify-center gap-4">
          <Button
            onClick={handleRemoveHeat}
            className="cool-button flex-1 bg-blue-500 hover:bg-blue-600 text-white border-none"
          >
            Cool Down
          </Button>
          <Button
            onClick={handleAddHeat}
            className="heat-button flex-1 bg-orange-500 hover:bg-orange-600 text-white border-none"
          >
            Add Heat
          </Button>
        </div>

        <div className="mt-6 flex items-center justify-center">
          <div className={`h-24 w-6 rounded-full ${color} transition-colors duration-500 shadow-md`}>
            <div className="h-full w-full rounded-full bg-gradient-to-t from-transparent to-white/20"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
