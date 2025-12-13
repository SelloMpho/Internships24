import { Layout } from "@/components/layout/Layout";
import { Target, Eye, Users, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We exist to help South African youth access opportunities that can change their lives.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We are clear about who we are and what we offer — no hidden agendas.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Built by South Africans who understand the unique challenges of our job market.",
  },
  {
    icon: Heart,
    title: "Accessibility",
    description: "Career information should be free and available to everyone, regardless of background.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-primary section-padding">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-primary-foreground mb-6">
              About Internships24
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Your trusted partner in navigating the South African job market. We connect 
              graduates and students with verified career opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Our Story
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why We Started Internships24
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                South Africa faces one of the highest youth unemployment rates in the world. 
                Many graduates and students struggle to find their first opportunity, often 
                because they don&apos;t know where to look or how to navigate the job market.
              </p>
              <p>
                Internships24 was created to bridge this gap. We aggregate internships, 
                learnerships, graduate programmes, and bursaries from trusted sources across 
                South Africa, making it easier for you to discover opportunities that match 
                your qualifications and goals.
              </p>
              <p>
                Our team is passionate about empowering young South Africans. We understand 
                the challenges you face because we&apos;ve been there. That&apos;s why we&apos;re 
                committed to providing free, verified, and regularly updated information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-elevated p-8">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower South African graduates and students by providing free, reliable, 
                and up-to-date information about internships, learnerships, and career 
                opportunities — helping them take the first step toward a successful career.
              </p>
            </div>
            <div className="card-elevated p-8">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A South Africa where every young person has access to the information and 
                resources they need to find meaningful employment and build a prosperous future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Our Values
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Guides Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="card-elevated p-6 text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Statement */}
      <section className="section-padding bg-muted">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
              Transparency Statement
            </h2>
            <div className="card-elevated p-8 text-left">
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Internships24 is an independent informational website.</strong> We 
                are not a recruitment agency and do not guarantee job placements. We do not charge 
                for access to our content, and we never will.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our platform may display advertisements and affiliate links to support our 
                operations. We are committed to clearly labeling any sponsored content.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are not affiliated with the South African government unless explicitly 
                stated. All information provided is for educational purposes and should be 
                verified with official sources before making any decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
