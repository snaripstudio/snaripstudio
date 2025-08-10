import { useState, useEffect } from "react";

export default function CaseStudy() {
  // Simple scroll animation setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    // Observe all animated elements
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-michroma text-primary">
              SnaripStudio
            </a>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#case-studies" className="text-primary font-medium">
                Case Studies
              </a>
              <a href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 md:px-8 py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="animate-on-scroll fade-up">
            <div className="text-sm font-medium tracking-widest text-primary mb-4">
              CASE STUDY
            </div>
            <h1 className="text-4xl md:text-6xl font-inter text-foreground leading-tight mb-6">
              RihandCabs.in
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Full-Stack Development & SEO Foundation for a Local Service Business
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="px-4 md:px-8 py-16 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="animate-on-scroll fade-up">
            <h2 className="text-3xl font-inter text-foreground mb-8">Project Overview</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
              <p>
                RihandCabs.in is a web presence developed for a local cab service operating on the niche route between Rihand and Varanasi, India. The project's goal was to create a fast, reliable, and professional online platform to attract local customers, build trust, and generate direct booking inquiries.
              </p>
              <p>
                I served as the lead developer and technical consultant, responsible for the entire project lifecycle from initial strategy to deployment, optimization, and search engine setup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="px-4 md:px-8 py-16 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="animate-on-scroll fade-up">
            <h2 className="text-3xl font-inter text-foreground mb-8">The Challenge</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The client needed to establish a digital footprint from scratch in a hyper-local market. The key challenges were:
            </p>
            <div className="space-y-4">
              {[
                "To create a modern, performant website that would build credibility with a local Indian audience.",
                "To overcome complex technical hurdles related to domain and hosting integration.",
                "To ensure the site was optimized for mobile devices, where most potential customers would be searching.",
                "To establish a foundational presence on Google to be discoverable by customers searching for their specific route."
              ].map((challenge, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{challenge}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="px-4 md:px-8 py-16 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="animate-on-scroll fade-up">
            <h2 className="text-3xl font-inter text-foreground mb-8">My Approach & Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              I executed a multi-faceted strategy that combined strategic planning, modern development practices, performance engineering, and foundational SEO.
            </p>

            <div className="space-y-12">
              {/* Strategic Foundation */}
              <div className="border-l-4 border-primary pl-8">
                <h3 className="text-2xl font-inter text-foreground mb-4">1. Strategic Foundation</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-foreground mb-2">Domain Strategy:</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      We began by choosing the <code className="bg-muted px-2 py-1 rounded text-sm">.in</code> country-code top-level domain (ccTLD) over a generic <code className="bg-muted px-2 py-1 rounded text-sm">.com</code>. This was a deliberate decision to immediately signal to both users and search engines that the business is local to India, thereby enhancing local SEO and building regional trust.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Infrastructure */}
              <div className="border-l-4 border-primary pl-8">
                <h3 className="text-2xl font-inter text-foreground mb-4">2. Technical Infrastructure & DNS Management</h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    The website was built using a modern React framework and deployed on Netlify for its high-performance edge network and CI/CD capabilities.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    A significant challenge was integrating the GoDaddy-registered domain with Netlify's hosting. I successfully navigated a complex DNS configuration, diagnosing and rectifying an initial domain forwarding setup and implementing a robust nameserver delegation to Netlify DNS. This ensured a stable, secure, and seamless connection.
                  </p>
                </div>
              </div>

              {/* Performance Optimization */}
              <div className="border-l-4 border-primary pl-8">
                <h3 className="text-2xl font-inter text-foreground mb-4">3. Performance & Mobile Optimization</h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Initial testing with <strong>Google PageSpeed Insights</strong> revealed a low mobile performance score (67/100), which was unacceptable for the target audience.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Through diagnostics, I identified that the bottleneck was not a static image, but a computationally expensive JavaScript animation (<code className="bg-muted px-2 py-1 rounded text-sm">Aurora</code> from <code className="bg-muted px-2 py-1 rounded text-sm">react-bits</code>) used for the background, which performed poorly on mobile CPUs.
                  </p>
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4 className="text-lg font-medium text-foreground mb-3">The Solution:</h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      I engineered a sophisticated "mobile-first" conditional rendering solution:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Using React hooks to detect screen size, the heavy <code className="bg-muted px-2 py-1 rounded text-sm">&lt;Aurora /&gt;</code> component is now rendered <strong>only for desktop users</strong>.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Mobile users are served a lightweight, static, and highly optimized WebP image that mimics the look of the animation.</span>
                      </li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      This single change dramatically improved mobile load times and user experience, bringing the performance scores into a much healthier range.
                    </p>
                  </div>
                </div>
              </div>

              {/* SEO Foundation */}
              <div className="border-l-4 border-primary pl-8">
                <h3 className="text-2xl font-inter text-foreground mb-4">4. Foundational SEO & Google Integration</h3>
                <div className="space-y-4">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>I established the website's relationship with Google by setting up and verifying the domain with <strong>Google Search Console</strong>. This involved troubleshooting DNS record types (correctly implementing a <code className="bg-muted px-2 py-1 rounded text-sm">TXT</code> record instead of an <code className="bg-muted px-2 py-1 rounded text-sm">A</code> record for verification).</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>I debugged and successfully submitted a valid <code className="bg-muted px-2 py-1 rounded text-sm">sitemap.xml</code> after fixing pathing errors and incorrect base URLs that were generated during the build process.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>I guided the client through the entire indexing lifecycle, from the initial "Discovered - currently not indexed" status to the final successful "URL is on Google" confirmation, managing expectations throughout the process.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>A core part of the strategy was establishing the <strong>Google Business Profile (GBP)</strong> as the primary tool for local customer acquisition, providing guidance on its setup and optimization.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Demonstrated */}
      <section className="px-4 md:px-8 py-16 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="animate-on-scroll fade-up">
            <h2 className="text-3xl font-inter text-foreground mb-8">Key Skills Demonstrated</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Front-End Development: React.js",
                "Hosting & Deployment: Netlify, CI/CD",
                "DNS Management: GoDaddy, Netlify DNS, A vs. TXT records, Nameserver Delegation",
                "Performance Optimization: Google PageSpeed Insights, Asset Optimization, Conditional Rendering, WebP image format",
                "SEO: Google Search Console, Sitemap Submission, URL Inspection, Indexing, Local SEO Strategy",
                "Problem Solving & Consulting: Diagnosing complex technical issues, guiding a client through technical processes"
              ].map((skill, index) => (
                <div key={index} className="flex gap-3 p-4 bg-background rounded-lg">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-muted-foreground leading-relaxed">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="px-4 md:px-8 py-16 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="animate-on-scroll fade-up">
            <h2 className="text-3xl font-inter text-foreground mb-8">The Outcome</h2>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg">
              <p className="text-lg text-foreground leading-relaxed">
                The result is a secure, professionally deployed, and highly performant website that is now fully indexed by Google. The <strong>rihandcabs.in</strong> project now has a strong technical foundation upon which to build its marketing efforts, with a clear strategy centered around its Google Business Profile to capture local search traffic and drive business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-8 py-24 bg-card text-center">
        <div className="max-w-4xl mx-auto animate-on-scroll fade-up">
          <h2 className="text-3xl md:text-4xl font-inter text-foreground mb-8">
            Ready to Transform Your Business Online?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Let's discuss how we can create a powerful digital presence for your business with strategic development and optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary text-primary-foreground px-8 py-4 text-lg font-medium tracking-wide transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Start Your Project
            </a>
            <a
              href="/"
              className="bg-transparent border border-border text-foreground px-8 py-4 text-lg font-medium tracking-wide transition-all hover:bg-muted"
            >
              View More Work
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border text-foreground px-4 md:px-8 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-sm text-muted-foreground">
            © 2024 SnaripStudio. All rights reserved.
          </div>
        </div>
      </footer>

      <style jsx>{`
        /* Simple Scroll Animations */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }

        .animate-on-scroll.fade-up {
          transform: translateY(40px);
        }

        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        code {
          font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
        }
      `}</style>
    </div>
  );
}
