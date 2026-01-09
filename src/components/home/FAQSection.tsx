import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
 {
  question: "Who can use Internships24?",
  answer: "Internships24 is created for South African learners and job seekers at different stages of their education and career journey. This includes high school learners, TVET college students, university students, recent graduates, and unemployed youth who are actively searching for internships, learnerships, bursaries, graduate programmes, and entry-level career opportunities."
},
{
  question: "Do I need formal qualifications to apply for internships?",
  answer: "Qualification requirements differ depending on the opportunity and the organisation offering it. Some internships and learnerships require completed qualifications, while others are open to current students, recent matriculants, or candidates with relevant skills. Applicants should always review the stated requirements carefully before applying."
},
{
  question: "How do I apply for opportunities listed on Internships24?",
  answer: "Each opportunity published on Internships24 includes clear application instructions and a link to the official employer, training provider, or organisation. All applications are submitted directly to the opportunity provider, as Internships24 does not collect applications or act as a recruitment agency."
},
{
  question: "Are opportunities on Internships24 limited to South African citizens?",
  answer: "Most opportunities listed on Internships24 are intended for South African citizens or permanent residents, particularly those funded by government departments or SETAs. Eligibility requirements, including citizenship or residency conditions, are always specified in the opportunity description."
},
{
  question: "Can I apply for more than one internship or learnership?",
  answer: "Yes, applicants are encouraged to apply for multiple opportunities as long as they meet the minimum requirements for each role. Applying to several suitable opportunities can increase your chances of being shortlisted or selected."
},
{
  question: "Does Internships24 provide help with CVs and cover letters?",
  answer: "Yes. Internships24 offers career guidance content, including CV writing tips, cover letter guidance, and interview preparation resources. These materials are designed to help students and graduates improve their applications and present themselves professionally to employers."
},
{
  question: "How can I tell if an opportunity is legitimate?",
  answer: "We aim to share opportunities from official and reputable sources such as company websites, government platforms, and recognised organisations. However, applicants are strongly advised to verify details independently, avoid paying any fees, and conduct their own research before applying."
},
{
  question: "Do internships and learnerships usually pay a stipend?",
  answer: "Payment structures vary depending on the programme and organisation. Some internships and learnerships offer a monthly stipend or allowance, while others may be unpaid but provide valuable work experience. Stipend or payment details are typically stated in the opportunity listing."
},
{
  question: "Can I submit an opportunity to be featured on Internships24?",
  answer: "Yes. If you are aware of a legitimate internship, learnership, bursary, or graduate programme, you may contact Internships24 for review. Approved opportunities may be published at no cost, provided they meet our content and verification guidelines."
},
{
  question: "Will Internships24 ever ask users to pay fees?",
  answer: "No. Internships24 will never request payment for access to opportunities, applications, or career information. If anyone claims to represent Internships24 and asks for money, users should treat this as a potential scam and proceed with caution."
}

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
