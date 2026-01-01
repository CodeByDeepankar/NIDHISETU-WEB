import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { 
  LayoutDashboard, 
  ListTodo, 
  UploadCloud, 
  MapPin, 
  History, 
  WifiOff, 
  Map, 
  Bell, 
  Headphones, 
  Calculator, 
  Bot 
} from "lucide-react";

export function Features() {
  const features = [
    {
      icon: LayoutDashboard,
      title: "Loan Tracking in One Place",
      description: "Clear snapshot of your loan—scheme, amount, bank, sanction details, and current status."
    },
    {
      icon: ListTodo,
      title: "Evidence Tasks",
      description: "See exactly what proof is required, instructions to follow, and allowed upload methods."
    },
    {
      icon: UploadCloud,
      title: "Easy Evidence Upload",
      description: "Quickly upload asset photos, invoices, or bills using camera capture or file gallery."
    },
    {
      icon: MapPin,
      title: "Geo-Tagged Submissions",
      description: "Automatically attach capture time and location to improve trust and validation."
    },
    {
      icon: History,
      title: "Submission History",
      description: "Track all previous submissions, pending items, and approval status in one view."
    },
    {
      icon: WifiOff,
      title: "Offline Support",
      description: "Work without internet. NIDHISETU saves drafts and syncs when you're back online."
    },
    {
      icon: Map,
      title: "Live Map View",
      description: "Visualize location-based workflows and assets on an interactive map interface."
    },
    {
      icon: Bell,
      title: "Notifications & Updates",
      description: "Stay informed with timely alerts on pending actions and verification results."
    },
    {
      icon: Headphones,
      title: "Contact & Support",
      description: "Directly reach assigned officers or find the nearest Common Service Centre (CSC)."
    },
    {
      icon: Calculator,
      title: "Calculators & Tools",
      description: "Built-in EMI, subsidy calculators, and eligibility predictors for better planning."
    },
    {
      icon: Bot,
      title: "Loan Assistant",
      description: "Smart guidance on next steps, document requirements, and repayment basics."
    }
  ];

  return (
    <Section id="features" background="white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Key Capabilities
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to manage, prove, and verify loan utilisation efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4 group">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  <feature.icon size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
