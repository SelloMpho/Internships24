import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl font-bold text-foreground mb-4">
              Terms & Conditions
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: December 13, 2024
            </p>

            <div className="prose prose-lg max-w-none space-y-6 text-foreground">
              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using Internships24, you accept and agree to be bound by these Terms 
                  and Conditions. If you do not agree to these terms, please do not use our website.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Description of Service</h2>
                <p className="text-muted-foreground">
                  Internships24 is an informational website that provides resources about internships, 
                  learnerships, graduate programmes, bursaries, and career guidance in South Africa. 
                  We aggregate and share publicly available opportunities to help users in their job search.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">No Employment Guarantee</h2>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Important:</strong> Internships24 is not a recruitment agency and does not 
                  guarantee job placements or employment. We provide information to help you find 
                  opportunities, but the application process and hiring decisions are entirely at the 
                  discretion of the respective companies and organisations.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">User Responsibilities</h2>
                <p className="text-muted-foreground mb-4">When using our website, you agree to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Use the website for lawful purposes only</li>
                  <li>Verify opportunity details with official sources before applying</li>
                  <li>Not submit false or misleading information through our contact forms</li>
                  <li>Not attempt to interfere with the proper functioning of the website</li>
                  <li>Not reproduce or distribute our content without permission</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Content Accuracy</h2>
                <p className="text-muted-foreground">
                  While we strive to provide accurate and up-to-date information, we cannot guarantee 
                  the accuracy, completeness, or timeliness of all content. Opportunity details may 
                  change without notice. Always verify information with the official sources before 
                  making any decisions.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All content on Internships24, including text, graphics, logos, and images, is the 
                  property of Internships24 or its content suppliers and is protected by copyright laws. 
                  Unauthorised use is prohibited.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Third-Party Links</h2>
                <p className="text-muted-foreground">
                  Our website may contain links to external websites. We are not responsible for the 
                  content, privacy practices, or availability of these third-party sites. Accessing 
                  external links is at your own risk.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  Internships24 shall not be liable for any direct, indirect, incidental, consequential, 
                  or punitive damages arising from your use of our website or reliance on any information 
                  provided herein.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these Terms and Conditions at any time. Changes will 
                  be effective immediately upon posting. Your continued use of the website constitutes 
                  acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms and Conditions, please{" "}
                  <Link to="/contact" className="text-accent hover:underline">contact us</Link>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
