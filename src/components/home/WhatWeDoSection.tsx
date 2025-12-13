import { FileText, Search, Shield, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Curated Opportunities",
    description: "We research and compile internships, learnerships, graduate programmes, and bursaries from trusted sources across South Africa.",
  },
  {
    icon: FileText,
    title: "Career Guidance",
    description: "Our articles help you understand the application process, build your CV, and prepare for interviews.",
  },
  {
    icon: Shield,
    title: "Scam Protection",
    description: "We verify listings and provide tips to help you identify and avoid fraudulent job opportunities.",
  },
  {
    icon: Lightbulb,
    title: "Free Resources",
    description: "All our content is free to access. We believe career information should be available to everyone.",
  },
];

export function WhatWeDoSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            What We Do
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Gateway to Career Opportunities
          </h2>
          <p className="text-muted-foreground text-lg">
            Internships24 is an information platform that connects South African youth with career opportunities. 
            We are not a recruitment agency — we help you find and apply for opportunities independently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-elevated p-6 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
