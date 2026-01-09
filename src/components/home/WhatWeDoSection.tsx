import { FileText, Search, Shield, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Curated Opportunities",
    description:
      "We carefully research, review, and compile internships, learnerships, graduate programmes, and bursaries from trusted public sources across South Africa. Our goal is to make it easier for students and job seekers to discover legitimate opportunities without needing to search multiple platforms.",
  },
  {
    icon: FileText,
    title: "Career Guidance",
    description:
      "Our educational articles and guides help you understand application requirements, improve your CV and cover letter, prepare for interviews, and make informed career decisions. The content is designed to support students and graduates at different stages of their career journey.",
  },
  {
    icon: Shield,
    title: "Scam Protection",
    description:
      "We promote safe job searching by verifying listings against official sources and sharing clear guidance on how to identify and avoid scams. We also educate users on common warning signs, such as payment requests and unverified contacts, to help protect personal information.",
  },
  {
    icon: Lightbulb,
    title: "Free Resources",
    description:
      "All resources on Internships24 are completely free to access. We do not charge application fees or require subscriptions. Our mission is to make career information and guidance accessible to everyone, regardless of background or financial situation.",
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
            Internships24 is an independent information platform that helps South African youth discover career
            opportunities such as internships, learnerships, graduate programmes, and bursaries. We do not act
            as a recruitment agency or employer — instead, we provide guidance and direct links so users can
            apply independently through official channels.
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
