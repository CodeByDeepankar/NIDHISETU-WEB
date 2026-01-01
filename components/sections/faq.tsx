"use client";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left text-base font-medium text-slate-900 hover:text-indigo-600 transition-colors"
      >
        {question}
        <ChevronDown
          className={cn("h-5 w-5 text-slate-500 transition-transform duration-200", isOpen && "rotate-180")}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-slate-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  const faqs = [
    {
      question: "Is NIDHISETU for beneficiaries only?",
      answer: "No. NIDHISETU supports beneficiaries as well as officers and reviewers with role-based access."
    },
    {
      question: "What kind of documents/evidence might be required?",
      answer: "This depends on your loan and verification process. Common examples include asset photos, invoices/bills, and site/workshop photos."
    },
    {
      question: "What if I don’t have internet?",
      answer: "You can still capture and prepare submissions. The app can store drafts and sync them when the connection returns."
    },
    {
      question: "How do I know what to upload?",
      answer: "Open “Evidence Tasks”. Each task includes instructions and allowed upload methods."
    },
    {
      question: "How can I get help?",
      answer: "Use “Contact Officer” or visit your nearest Common Service Centre (CSC)."
    }
  ];

  return (
    <Section id="faq" background="white">
      <Container>
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 mb-6">
              Can&apos;t find the answer you&apos;re looking for? Reach out to our support team.
            </p>
            <div className="p-6 bg-indigo-50 rounded-xl border border-indigo-100">
              <h4 className="font-semibold text-indigo-900 mb-2">Need help installing?</h4>
              <p className="text-sm text-indigo-700 mb-4">
                Contact our support team for assistance with the app installation.
              </p>
              <a href="#" className="text-sm font-medium text-indigo-600 hover:underline">
                Contact Support &rarr;
              </a>
            </div>
          </div>
          
          <div className="md:col-span-8">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
