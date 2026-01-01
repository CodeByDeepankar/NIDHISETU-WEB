import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckSquare, Eye, RotateCcw, FileText, BarChart3 } from "lucide-react";

export function Workflows() {
  const workflows = [
    {
      title: "Task Management",
      icon: CheckSquare,
      items: ["View verification queue", "Prioritize by urgency", "Access beneficiary files"]
    },
    {
      title: "Evidence Review",
      icon: Eye,
      items: ["View uploaded evidence", "Check dates & context", "Record remarks"]
    },
    {
      title: "Corrections",
      icon: RotateCcw,
      items: ["Return for correction", "Provide clear reasons", "Track re-uploads"]
    },
    {
      title: "Notes & Timeline",
      icon: FileText,
      items: ["Internal notes", "Activity timeline", "Better coordination"]
    },
    {
      title: "Reports & Analytics",
      icon: BarChart3,
      items: ["Monitor total cases", "Track approval rates", "Risk alerts"]
    }
  ];

  return (
    <Section background="gray">
      <Container>
        <div className="mb-12">
          <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm">For Officials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Officer & Reviewer Workflows
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Powerful tools for officials to manage verification tasks, review evidence, and maintain accountability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflows.map((flow, index) => (
            <Card key={index} className="bg-white border-slate-200 hover:border-indigo-200 transition-colors">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                  <flow.icon size={24} />
                </div>
                <CardTitle className="text-lg">{flow.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {flow.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
