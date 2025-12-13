import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Internships24?",
    answer: "Internships24 is an information platform that helps South African students and graduates find internships, learnerships, graduate programmes, bursaries, and career opportunities. We compile and verify opportunities from trusted sources to make your job search easier.",
  },
  {
    question: "Does Internships24 guarantee internships or jobs?",
    answer: "No, we do not offer placements or guarantee employment. Internships24 is an informational resource that helps you discover opportunities. You apply directly to the companies or organisations offering the positions.",
  },
  {
    question: "Is Internships24 free to use?",
    answer: "Yes! All content and listings on Internships24 are completely free to access. We believe career information should be available to everyone without barriers.",
  },
  {
    question: "How often are opportunities updated?",
    answer: "We regularly update our listings to ensure information remains relevant and accurate. New opportunities are added frequently, and expired listings are removed to keep our platform current.",
  },
  {
    question: "Does Internships24 work with companies directly?",
    answer: "We share publicly available opportunities from reputable sources. While we verify listings for authenticity, we may collaborate with organisations in the future to bring you exclusive opportunities.",
  },
  {
    question: "How can I avoid internship scams?",
    answer: "We publish safety tips and guidelines on our platform. Key advice: never pay for job opportunities, verify company information independently, be wary of vague job descriptions, and trust your instincts if something seems suspicious.",
  },
];

export function FAQSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              FAQ
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Got questions? We&apos;ve got answers. Find everything you need to know about Internships24.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-elevated border-none px-6 data-[state=open]:ring-2 data-[state=open]:ring-accent/20"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-accent hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
