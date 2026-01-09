import { GraduationCap, BookOpen, Building2, UserSearch } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "University Graduates",
    description:
      "Recent university graduates who have completed diplomas or degrees and are seeking their first professional work experience. This includes graduates looking for internships, graduate programmes, or entry-level roles that help them apply academic knowledge in real-world work environments.",
  },
  {
    icon: BookOpen,
    title: "TVET Students",
    description:
      "Students and graduates from TVET colleges who are pursuing technical or vocational careers and are looking for learnerships, apprenticeships, or workplace-based training opportunities to gain practical skills and industry exposure.",
  },
  {
    icon: Building2,
    title: "Current Students",
    description:
      "High school learners, TVET students, and university students who are still studying and are searching for vacation work, part-time internships, bursaries, or funding opportunities to support their education and gain early career experience.",
  },
  {
    icon: UserSearch,
    title: "Unemployed Youth",
    description:
      "Young South Africans who are currently unemployed and actively seeking entry-level opportunities, skills development programmes, or work experience initiatives that can help them enter the job market and build employability.",
  },
];

export function WhoItsForSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Who It&apos;s For
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Supporting South African Youth
          </h2>
          <p className="text-muted-foreground text-lg">
            Internships24 is designed to support South African youth at different stages of their education
            and career journey. Whether you are studying, recently graduated, or searching for your first
            opportunity, our platform provides guidance and information to help you explore available options.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="card-elevated p-6 text-center group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <audience.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {audience.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
