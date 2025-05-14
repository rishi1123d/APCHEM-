import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileDown, FileText, FileSpreadsheet, FileQuestion } from "lucide-react"

const resources = [
  {
    title: "Lesson Plan",
    description: "A complete 5-day lesson plan for teaching thermodynamics using The Thermal Twins story",
    icon: FileText,
    downloadText: "Download Lesson Plan (PDF)",
    fileSize: "1.2 MB",
  },
  {
    title: "Student Worksheet",
    description: "Guided reading questions and activities to accompany each chapter",
    icon: FileSpreadsheet,
    downloadText: "Download Worksheet (PDF)",
    fileSize: "850 KB",
  },
  {
    title: "Assessment Quiz",
    description: "A 20-question quiz to assess student understanding of thermodynamic concepts",
    icon: FileQuestion,
    downloadText: "Download Quiz (PDF)",
    fileSize: "750 KB",
  },
  {
    title: "Lab Activity",
    description: "Hands-on calorimetry lab that connects to the story concepts",
    icon: FileText,
    downloadText: "Download Lab Instructions (PDF)",
    fileSize: "1.5 MB",
  },
]

export default function TeacherZone() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="font-fredoka text-3xl font-bold md:text-4xl">Teacher Zone</h1>
        <p className="text-muted-foreground">Educational resources to support classroom instruction</p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="font-fredoka text-xl">Teaching with The Thermal Twins</CardTitle>
          <CardDescription>Resources and guidance for educators</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Welcome to the Teacher Zone! This area provides supplementary materials to help you incorporate The Thermal
            Twins story into your chemistry curriculum. These resources align with AP Chemistry standards and are
            designed to make abstract thermodynamic concepts more accessible and engaging for students.
          </p>
          <p>
            The story can be used as an introduction to thermodynamics, a review activity, or a creative assessment
            option. The downloadable resources below include lesson plans, student worksheets, assessment materials, and
            hands-on lab activities.
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-6 sm:grid-cols-2">
        {resources.map((resource, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <resource.icon className="h-5 w-5 text-primary" />
                <CardTitle className="font-fredoka">{resource.title}</CardTitle>
              </div>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="#">
                  <FileDown className="mr-2 h-4 w-4" />
                  {resource.downloadText}
                  <span className="ml-auto text-xs text-muted-foreground">{resource.fileSize}</span>
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="font-fredoka text-xl">Implementation Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>
                <strong>Flipped Classroom</strong>: Assign the story as pre-reading before diving into the mathematical
                aspects of thermodynamics.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>
                <strong>Visual Anchors</strong>: Reference the story characters when introducing new equations (e.g.,
                "Remember how Gibbs explained...").
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>
                <strong>Creative Assessment</strong>: Have students create their own thermodynamic characters or extend
                the story with new chapters.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>
                <strong>Cross-Curricular</strong>: Partner with English/Art teachers for a cross-disciplinary project on
                scientific storytelling.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>
                <strong>Differentiation</strong>: The story provides an accessible entry point for visual learners while
                the Lab Notes section supports technical understanding.
              </span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
