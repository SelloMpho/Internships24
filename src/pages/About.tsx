import { Layout } from "@/components/layout/Layout";
import { Target, Eye, Users, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "Everything we do is focused on helping South African youth access real, life-changing career opportunities.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "We believe in honesty, clarity, and trust. No misleading claims, no hidden costs, and no false promises.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "Built by South Africans for South Africans, with a deep understanding of local education and employment challenges.",
  },
  {
    icon: Heart,
    title: "Accessibility",
    description:
      "We are committed to keeping career information free, simple, and accessible to everyone, regardless of background.",
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
      <p className="text-lg text-primary-foreground/80 leading-relaxed">
        Internships24 is a South African career information platform created to support
        students, graduates, and unemployed youth who are trying to take their first
        steps into the working world.
        <br /><br />
        We understand how overwhelming the job market can be — especially when you are
        searching for internships, learnerships, or entry-level opportunities with little
        or no work experience. That is why Internships24 exists: to make career information
        easier to access, easier to understand, and easier to trust.
        <br /><br />
        Our platform brings together verified internships, learnerships, graduate programmes,
        bursaries, and skills development opportunities from reputable organisations across
        South Africa, all in one place. We focus on clarity, accuracy, and regular updates
        so that users can spend less time searching and more time applying with confidence.
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
                Thousands of capable graduates and students struggle to secure their first
                opportunity due to limited access to information, experience requirements,
                and fragmented job listings.
              </p>
              <p>
                Internships24 was created to solve this problem by bringing opportunities into
                one trusted, easy-to-navigate platform. Instead of searching across dozens of
                websites and social media pages, users can find relevant opportunities in one place.
              </p>
              <p>
                We source internships, learnerships, graduate programmes, and bursaries from
                reputable companies, SETAs, institutions, and public listings, ensuring that
                our content is accurate, verified, and regularly updated.
              </p>
              <p>
                Our goal is not just to list opportunities, but to empower young South Africans
                with the knowledge and confidence needed to take meaningful steps toward employment.
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
                To provide free, reliable, and up-to-date career information that helps South
                African students and graduates access internships, learnerships, and entry-level
                opportunities, enabling them to build sustainable careers.
              </p>
            </div>
            <div className="card-elevated p-8">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A South Africa where every young person, regardless of background or location,
                has equal access to career opportunities, skills development, and employment pathways.
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

      {/* Who We Serve */}
      <section className="section-padding bg-muted">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
              Who Internships24 Is For
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Internships24 serves university students, TVET college students, recent graduates,
              unemployed youth, and career starters looking for internships, learnerships,
              graduate programmes, and skills development opportunities within South Africa.
            </p>
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
                <strong className="text-foreground">
                  Internships24 is an independent informational platform.
                </strong>{" "}
                We are not a recruitment agency and do not guarantee placements or employment.
                All applications are submitted directly to the official organisations.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Access to Internships24 is completely free. We do not request payment, banking
                details, or personal financial information from users.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                To support platform operations, we may display advertisements or affiliate links.
                Any sponsored content is clearly disclosed, and users are encouraged to verify
                opportunities through official sources.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
