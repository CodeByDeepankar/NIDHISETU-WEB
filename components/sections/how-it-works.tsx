import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { LogIn, ClipboardList, Upload } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: LogIn,
      title: "Sign in",
      description: "Log in securely using your mobile number and verification code."
    },
    {
      icon: ClipboardList,
      title: "See your tasks",
      description: "Open “Evidence Tasks” to view what you must upload and any instructions."
    },
    {
      icon: Upload,
      title: "Upload & Track",
      description: "Upload the requested proof and track your verification status until completion."
    }
  ];

  return (
    <Section id="how-it-works" background="dark" className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute right-0 top-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How it works
          </h2>
          <p className="text-lg text-slate-300">
            Simple steps to complete your loan verification process.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-700 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-slate-800 border-4 border-slate-700 flex items-center justify-center mb-6 shadow-xl relative z-10">
                <step.icon size={32} className="text-indigo-400" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm border-2 border-slate-800">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
