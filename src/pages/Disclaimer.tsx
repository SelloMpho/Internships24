import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const Disclaimer = () => {
  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl font-bold text-foreground mb-4">
              Disclaimer
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: December 13, 2024
            </p>

            <div className="prose prose-lg max-w-none space-y-6 text-foreground">
              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">General Information</h2>
                <p className="text-muted-foreground">
                  The information provided on Internships24 is for general informational purposes only. 
                  All information on the site is provided in good faith; however, we make no representation 
                  or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, 
                  reliability, availability, or completeness of any information on the site.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Not a Recruitment Agency</h2>
                <div className="card-elevated p-6 border-2 border-accent/20 bg-accent/5">
                  <p className="text-foreground font-medium mb-2">Important Notice:</p>
                  <p className="text-muted-foreground">
                    Internships24 is an <strong className="text-foreground">independent informational website</strong>. 
                    We are <strong className="text-foreground">not a recruitment agency</strong> and do not guarantee job 
                    placements or employment. We do not process applications or make hiring decisions.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">No Payment Required</h2>
                <p className="text-muted-foreground">
                  Legitimate employers and training providers do not charge candidates for job applications 
                  or placements. <strong className="text-foreground">Never pay money</strong> for any opportunity you find through 
                  our website or any other platform. If a listing requires payment, it is likely a scam.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Government Affiliation</h2>
                <p className="text-muted-foreground">
                  Internships24 is <strong className="text-foreground">not affiliated with the South African government</strong> or 
                  any government department unless explicitly stated. Government opportunities shared on our 
                  platform are sourced from publicly available information and should be verified through 
                  official government channels.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Third-Party Listings</h2>
                <p className="text-muted-foreground">
                  We share opportunities from various sources, including company websites, job boards, and 
                  public announcements. While we make efforts to verify the legitimacy of listings, we 
                  cannot guarantee the authenticity of every opportunity. Always conduct your own due 
                  diligence before applying.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Advertisements</h2>
                <p className="text-muted-foreground">
                  This website may display advertisements and affiliate links. These are provided by 
                  third-party advertising networks, including Google AdSense. The appearance of 
                  advertisements does not constitute an endorsement of the advertised products or services.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">External Links</h2>
                <p className="text-muted-foreground">
                  Our website may contain links to external sites that are not operated by us. We have no 
                  control over the content, privacy policies, or practices of third-party sites and assume 
                  no responsibility for them.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">User Responsibility</h2>
                <p className="text-muted-foreground">
                  Users are responsible for verifying the accuracy and legitimacy of any opportunity before 
                  applying. This includes checking company credentials, reading official announcements, and 
                  following safe application practices.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  Under no circumstance shall Internships24 be liable for any loss, damage, or harm arising 
                  from the use of our website or reliance on any information provided. This includes, but 
                  is not limited to, losses resulting from applying for opportunities, interactions with 
                  third parties, or decisions made based on our content.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Report Concerns</h2>
                <p className="text-muted-foreground">
                  If you believe any information on our website is inaccurate, outdated, or potentially 
                  fraudulent, please <Link to="/contact" className="text-accent hover:underline">contact us</Link>{" "}
                  immediately so we can investigate and take appropriate action.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Disclaimer;
