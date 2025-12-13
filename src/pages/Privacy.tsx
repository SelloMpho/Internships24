import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: December 13, 2024
            </p>

            <div className="prose prose-lg max-w-none space-y-6 text-foreground">
              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Introduction</h2>
                <p className="text-muted-foreground">
                  At Internships24, we are committed to protecting your privacy and ensuring the security 
                  of your personal information. This Privacy Policy explains how we collect, use, and 
                  safeguard your data when you visit our website.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
                <p className="text-muted-foreground mb-4">We may collect the following types of information:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Personal Information:</strong> Name, email address, and any information you voluntarily provide through our contact form.</li>
                  <li><strong className="text-foreground">Usage Data:</strong> Information about how you use our website, including pages visited, time spent, and navigation patterns.</li>
                  <li><strong className="text-foreground">Technical Data:</strong> IP address, browser type, device information, and operating system.</li>
                  <li><strong className="text-foreground">Cookies:</strong> Small data files stored on your device to improve your browsing experience.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">We use the collected information to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide and maintain our website services</li>
                  <li>Respond to your enquiries and provide support</li>
                  <li>Improve our website and user experience</li>
                  <li>Analyse website traffic and usage patterns</li>
                  <li>Display relevant advertisements through Google AdSense</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
                <p className="text-muted-foreground">
                  Our website uses Google AdSense to display advertisements. Google may use cookies to 
                  serve ads based on your prior visits to our website or other websites. You can opt out 
                  of personalised advertising by visiting{" "}
                  <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    Google Ads Settings
                  </a>.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate security measures to protect your personal information. 
                  However, no method of transmission over the Internet is 100% secure, and we cannot 
                  guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
                <p className="text-muted-foreground mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please{" "}
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

export default Privacy;
