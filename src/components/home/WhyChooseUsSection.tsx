import { MapPin, RefreshCw, DollarSign, BookOpen, Shield, Users } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "South Africa Focused",
    description:
      "All opportunities shared on Internships24 are relevant to South African students, graduates, and job seekers. We focus on local programmes, companies, SETAs, and government initiatives so users can easily find opportunities that match South African eligibility requirements.",
  },
  {
    icon: DollarSign,
    title: "Completely Free",
    description:
      "Internships24 is free to use with no hidden fees, subscriptions, or premium access. You can browse opportunities, read guides, and access resources without paying anything at any stage of your job search.",
  },
  {
    icon: RefreshCw,
    title: "Regularly Updated",
    description:
      "We regularly review and update listings to keep information relevant. New internships, learnerships, and graduate programmes are added frequently, while expired or outdated opportunities are removed where possible.",
  },
  {
    icon: BookOpen,
    title: "Career Guidance",
    description:
      "In addition to listings, we publish practical career guidance articles covering CV writing, interview preparation, application tips, and understanding different career pathways to help users make informed decisions.",
  },
  {
    icon: Shield,
    title: "Verified Listings",
    description:
      "We source opportunities from official company websites, government portals, and trusted organisations. While users should always verify details independently, we aim to reduce exposure to scams and misleading job postings.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Internships24 is built by South Africans who understand the local education and employment landscape. Our content is shaped by real challenges faced by students and graduates navigating the South African job market.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Why Internships24
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Trusted Platform for Your Career Journey
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We understand the challenges South African students and graduates face when searching for
              opportunities. Internships24 was created to make career information easier to access,
              safer to navigate, and available to everyone at no cost.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className="flex items-start gap-3 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <reason.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl gradient-primary p-8 flex items-center justify-center">
              <div className="text-center text-primary-foreground">
                <div className="text-6xl md:text-7xl font-heading font-extrabold mb-2">100+</div>
                <div className="text-xl text-primary-foreground/80">Users Reached</div>
                <div className="mt-6 pt-6 border-t border-primary-foreground/20">
                  <div className="text-3xl md:text-4xl font-heading font-bold mb-1">100+</div>
                  <div className="text-primary-foreground/70">Active Listings Shared</div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/30 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
