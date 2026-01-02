'use client';

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Download, Phone } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-linear-to-b from-indigo-50 to-white">
      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-6">
              Official Loan Verification App
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Track, Prove, and Verify <br className="hidden md:block" />
            <span className="text-indigo-600">Loan Utilisation</span> Simply.
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A single app for beneficiaries and officials to manage loan progress, upload required evidence, and complete verification with clear status updates.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="https://drive.usercontent.google.com/download?id=1Dia3TDvSmOnYnM8Lme2IH0DLrNr_qP5x&export=download&authuser=0&confirm=t&uuid=30d95f99-3107-4364-8c2f-39ad038b7bce&at=ANTm3cw2sDYH-gULYnmB4Y1qNyaN%3A1767362520231" download>
              <Button size="lg" className="gap-2 text-base h-14 px-8 shadow-lg shadow-indigo-200 w-full sm:w-auto">
                <Download size={20} />
                Download NIDHISETU
              </Button>
            </a>
            <a href="mailto:support@nidhisetu.gov.in">
              <Button variant="outline" size="lg" className="gap-2 text-base h-14 px-8 w-full sm:w-auto">
                <Phone size={20} />
                Contact Support
              </Button>
            </a>
          </motion.div>
        </div>
      </Container>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-indigo-100/50 blur-3xl"></div>
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-teal-100/50 blur-3xl"></div>
      </div>
    </section>
  );
}
