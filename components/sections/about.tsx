import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CheckCircle2, ShieldCheck, Clock } from "lucide-react";

export function About() {
  return (
    <Section id="about" background="white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              What is NIDHISETU?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              NIDHISETU is a loan tracking and verification app designed to reduce confusion and delays after a loan is sanctioned. It helps beneficiaries understand what is required, submit the right proof, and track progress.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              It also helps officers and reviewers verify submissions, request corrections, and close cases faster.
            </p>
            
            <div className="pt-4 space-y-4">
              <div className="flex gap-3">
                <div className="mt-1 bg-indigo-100 p-1.5 rounded-full text-indigo-600">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Clear Requirements</h3>
                  <p className="text-slate-600">Know exactly what documents and photos are needed.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="mt-1 bg-teal-100 p-1.5 rounded-full text-teal-600">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Secure Verification</h3>
                  <p className="text-slate-600">Geo-tagged and time-stamped evidence for trust.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="mt-1 bg-orange-100 p-1.5 rounded-full text-orange-600">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Faster Processing</h3>
                  <p className="text-slate-600">Reduce delays with instant updates and feedback.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square md:aspect-4/3 rounded-2xl bg-slate-100 overflow-hidden border border-slate-200 shadow-xl relative">
               {/* Placeholder for App Screenshot or Illustration */}
               <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center text-indigo-600">
                      <ShieldCheck size={40} />
                    </div>
                    <p className="text-slate-400 font-medium">App Interface Preview</p>
                  </div>
               </div>
               
               {/* Decorative UI Elements Mockup */}
               <div className="absolute top-8 left-8 right-8 bottom-0 bg-white rounded-t-xl shadow-lg border border-slate-200 p-6">
                  <div className="h-4 w-1/3 bg-slate-100 rounded mb-6"></div>
                  <div className="space-y-4">
                    <div className="h-20 bg-indigo-50 rounded-lg border border-indigo-100 p-4 flex items-center gap-4">
                       <div className="h-10 w-10 rounded-full bg-indigo-200"></div>
                       <div className="space-y-2 flex-1">
                          <div className="h-3 w-3/4 bg-indigo-200 rounded"></div>
                          <div className="h-2 w-1/2 bg-indigo-200 rounded"></div>
                       </div>
                    </div>
                    <div className="h-20 bg-white rounded-lg border border-slate-100 p-4 flex items-center gap-4 shadow-sm">
                       <div className="h-10 w-10 rounded-full bg-slate-100"></div>
                       <div className="space-y-2 flex-1">
                          <div className="h-3 w-3/4 bg-slate-200 rounded"></div>
                          <div className="h-2 w-1/2 bg-slate-200 rounded"></div>
                       </div>
                    </div>
                  </div>
               </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 max-w-xs">
              <p className="font-bold text-indigo-600 text-2xl">100%</p>
              <p className="text-sm text-slate-600">Transparent Process</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
