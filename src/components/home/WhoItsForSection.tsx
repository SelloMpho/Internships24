import { GraduationCap, BookOpen, Building2, UserSearch } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "University Graduates",
    description: "Recent graduates looking for their first professional experience in their field of study.",
  },
  {
    icon: BookOpen,
    title: "TVET Students",
    description: "Technical and vocational students seeking practical workplace experience and learnerships.",
  },
  {
    icon: Building2,
    title: "Current Students",
    description: "Students looking for vacation work, part-time internships, or bursary opportunities.",
  },
  {
    icon: UserSearch,
    title: "Unemployed Youth",
    description: "Young job seekers looking for entry-level opportunities to start their careers.",
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
            Whether you&apos;re a fresh graduate, current student, or looking to start your career, 
            Internships24 has resources for you.
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
