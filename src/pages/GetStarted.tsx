import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  FileText, 
  Send, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight,
  Lightbulb,
  Shield,
  Clock
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse Opportunities",
    description: "Start by exploring our carefully curated listings of internships, learnerships, graduate programmes, and bursaries available across South Africa. Use categories and filters to narrow down opportunities that align with your field of study, qualifications, and career interests. New opportunities are added regularly, so checking back often is recommended.",
  },
  {
    icon: FileText,
    title: "Read the Details Carefully",
    description: "Open each opportunity to view the full description, including minimum requirements, age limits (if any), closing dates, and application instructions. Take time to read everything thoroughly to ensure you meet the eligibility criteria before applying. This helps you avoid wasting time on applications that may not be suitable.",
  },
  {
    icon: Send,
    title: "Apply Directly to the Source",
    description: "When you are ready, follow the provided application link to the official company, organisation, or government website. Applications should always be submitted directly to the employer or programme provider. Internships24 never asks for payment and does not collect applications on your behalf.",
  },
  {
    icon: CheckCircle2,
    title: "Track & Follow Up",
    description: "Keep a simple record of where and when you have applied, including closing dates and reference numbers if provided. If you do not receive feedback within the expected timeframe, it is acceptable to follow up professionally using the contact details supplied in the advert.",
  },
];

const tips = [
  {
    icon: Lightbulb,
    title: "Tailor Your CV",
    description: "Avoid sending the same CV to every opportunity. Instead, adjust your CV to highlight the skills, subjects, and experiences that are most relevant to each role. Even small changes can significantly improve your chances of being shortlisted.",
  },
  {
    icon: Clock,
    title: "Apply Early",
    description: "Do not wait until the closing date to submit your application. Many employers review applications as they are received and may stop the process once suitable candidates are found. Applying early also gives you time to correct mistakes if needed.",
  },
  {
    icon: Shield,
    title: "Verify Opportunities",
    description: "Always double-check opportunity details by visiting the official company or organisation website. Be cautious of adverts that lack contact information, have unclear requirements, or pressure you to act urgently. Legitimate opportunities are transparent and professional.",
  },
];

const scamWarnings = [
  "Never pay money to apply for a job, internship, or learnership",
  "Be cautious of guaranteed job offers without interviews or assessments",
  "Confirm company details using official websites and verified contact information",
  "Do not share banking details, passwords, or ID documents upfront",
  "Report any suspicious listings or messages to us immediately",
];

const GetStarted = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-primary section-padding">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-primary-foreground mb-6">
              How to Use Internships24
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              This page walks you through exactly how to use Internships24 to find and apply
              for legitimate career opportunities in South Africa.
              <br /><br />
              Whether you are a student, recent graduate, or unemployed job seeker, these
              steps will help you navigate the application process with confidence and avoid
              common mistakes.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Getting Started
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Four Simple Steps to Find Your Opportunity
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Finding the right opportunity does not have to be complicated. Follow these
              four steps to move from browsing to applying in a clear and organised way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="card-elevated p-6 relative animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 mt-2">
                  <step.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="section-padding bg-muted">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Best Practices
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tips for Successful Applications
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Small improvements in how you apply can make a big difference. Use the tips
              below to increase your chances of success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {tips.map((tip, index) => (
              <div
                key={tip.title}
                className="card-elevated p-6 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <tip.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {tip.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scam Warning Section */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <div className="card-elevated p-8 border-2 border-destructive/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    Avoid Scams
                  </h2>
                  <p className="text-muted-foreground">
                    Stay informed and protect yourself from fraud
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {scamWarnings.map((warning, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{warning}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm text-muted-foreground">
                If you come across a suspicious opportunity or believe you may have been
                targeted by a scam, please{" "}
                <Link to="/contact" className="text-accent hover:underline">
                  contact us
                </Link>{" "}
                immediately. Your report helps us protect other job seekers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-primary">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Find Your Opportunity?
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Start exploring hundreds of verified internships, learnerships, and graduate
              opportunities available across South Africa — all in one place and completely
              free to access.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/blog">
                Browse Opportunities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GetStarted;
