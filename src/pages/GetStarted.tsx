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
    description: "Explore our curated listings of internships, learnerships, graduate programmes, and bursaries. Use categories to find opportunities that match your qualifications.",
  },
  {
    icon: FileText,
    title: "Read the Details",
    description: "Click on any opportunity to see full details including requirements, deadlines, and application instructions. Make sure you meet the eligibility criteria.",
  },
  {
    icon: Send,
    title: "Apply Directly",
    description: "Follow the application link to the official company or organisation website. Submit your application directly to them — never through third-party sites charging fees.",
  },
  {
    icon: CheckCircle2,
    title: "Track & Follow Up",
    description: "Keep records of your applications. Follow up professionally if you don't hear back within the stated timeframe.",
  },
];

const tips = [
  {
    icon: Lightbulb,
    title: "Tailor Your CV",
    description: "Customise your CV for each application. Highlight relevant skills and experiences that match the job requirements.",
  },
  {
    icon: Clock,
    title: "Apply Early",
    description: "Don't wait until the deadline. Many companies review applications on a rolling basis and may close early if they find suitable candidates.",
  },
  {
    icon: Shield,
    title: "Verify Opportunities",
    description: "Always verify the legitimacy of opportunities. Check company websites directly and be wary of vague job descriptions.",
  },
];

const scamWarnings = [
  "Never pay for job applications or placements",
  "Be suspicious of guaranteed job offers without interviews",
  "Verify company details on their official website",
  "Don't share sensitive personal information upfront",
  "Report suspicious listings to us immediately",
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
            <p className="text-lg text-primary-foreground/80">
              Your step-by-step guide to finding and applying for career opportunities 
              in South Africa. Let&apos;s get you started on your path to success.
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
                    Protect yourself from fraudulent opportunities
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
                If you encounter a suspicious listing or believe you&apos;ve been targeted by a scam, 
                please <Link to="/contact" className="text-accent hover:underline">contact us</Link> immediately 
                so we can investigate and protect other users.
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
            <p className="text-lg text-primary-foreground/80 mb-8">
              Browse hundreds of verified internships, learnerships, and career opportunities 
              across South Africa.
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
