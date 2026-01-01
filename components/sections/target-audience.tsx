import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Briefcase, FileCheck } from "lucide-react";

export function TargetAudience() {
  const audiences = [
    {
      title: "For Beneficiaries",
      icon: User,
      color: "text-blue-600",
      bg: "bg-blue-50",
      features: [
        "Track your loan status and key details",
        "View tasks assigned by officials",
        "Upload required evidence with time/location",
        "See submission history and progress"
      ]
    },
    {
      title: "For Officers",
      subtitle: "(District / Field / Agency Teams)",
      icon: Briefcase,
      color: "text-teal-600",
      bg: "bg-teal-50",
      features: [
        "View a verification task queue",
        "Review evidence submitted by beneficiaries",
        "Add requirements and instructions",
        "Monitor progress via dashboards"
      ]
    },
    {
      title: "For Reviewers",
      icon: FileCheck,
      color: "text-purple-600",
      bg: "bg-purple-50",
      features: [
        "View submissions assigned for review",
        "Check evidence and make decisions",
        "Support consistent verification",
        "Approve or reject with remarks"
      ]
    }
  ];

  return (
    <Section background="gray">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Who is it for?
          </h2>
          <p className="text-lg text-slate-600">
            NIDHISETU connects all stakeholders in the loan verification process, ensuring transparency and efficiency for everyone involved.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className={`w-14 h-14 ${audience.bg} ${audience.color} rounded-xl flex items-center justify-center mb-4`}>
                  <audience.icon size={28} />
                </div>
                <CardTitle className="text-xl">{audience.title}</CardTitle>
                {audience.subtitle && (
                  <p className="text-sm text-slate-500 mt-1">{audience.subtitle}</p>
                )}
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {audience.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-slate-600 text-sm">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${audience.color.replace('text-', 'bg-')}`} />
                      <span className="leading-relaxed">{feature}</span>
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
