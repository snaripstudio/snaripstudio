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
    <div className="scroll-container">
      {/* Header */}
      <header className="fixed top-4 left-4 z-50 pointer-events-none">
        <div className="pointer-events-auto">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-card/90 backdrop-blur-sm border border-border rounded-full text-foreground hover:text-primary transition-all hover:bg-card/95 shadow-lg"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-medium">Back to Home</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="scroll-section bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center animate-on-scroll fade-up">
            <div className="text-sm font-medium tracking-widest text-primary mb-4">
              CASE STUDY
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-inter text-foreground leading-tight mb-6">
              RihandCabs.in
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Full-Stack Development & SEO Foundation for a Local Service Business
            </p>
            <div className="mt-12 flex justify-center">
              <div className="animate-bounce">
                <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center mx-auto">
                  <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="scroll-section bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center animate-on-scroll fade-up">
            <h2 className="text-3xl md:text-5xl font-inter text-foreground mb-8">Project Overview</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-8 text-lg">
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
      <section className="scroll-section bg-card">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="animate-on-scroll fade-up">
            <h2 className="text-3xl md:text-5xl font-inter text-foreground mb-12 text-center">The Challenge</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center">
              The client needed to establish a digital footprint from scratch in a hyper-local market. The key challenges were:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "To create a modern, performant website that would build credibility with a local Indian audience.",
                "To overcome complex technical hurdles related to domain and hosting integration.",
                "To ensure the site was optimized for mobile devices, where most potential customers would be searching.",
                "To establish a foundational presence on Google to be discoverable by customers searching for their specific route."
              ].map((challenge, index) => (
                <div key={index} className="flex gap-4 p-6 bg-background rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center mt-1">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{challenge}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Part 1 - Strategic Foundation */}
      <section className="scroll-section bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="animate-on-scroll fade-up">
            <h2 className="text-3xl md:text-5xl font-inter text-foreground mb-8 text-center">Strategic Foundation</h2>
            <div className="text-center mb-12">
              <div className="inline-block bg-primary/10 px-6 py-3 rounded-full">
                <span className="text-primary font-medium">STEP 1</span>
              </div>
            </div>
            <div className="bg-card p-8 rounded-lg">
              <h3 className="text-2xl font-inter text-foreground mb-6 text-center">Domain Strategy</h3>
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                We began by choosing the <code className="bg-muted px-3 py-1 rounded text-base">.in</code> country-code top-level domain (ccTLD) over a generic <code className="bg-muted px-3 py-1 rounded text-base">.com</code>. This was a deliberate decision to immediately signal to both users and search engines that the business is local to India, thereby enhancing local SEO and building regional trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Part 2 - Technical Infrastructure */}
      <section className="scroll-section bg-card">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="animate-on-scroll fade-up">
            <h2 className="text-3xl md:text-5xl font-inter text-foreground mb-8 text-center">Technical Infrastructure</h2>
            <div className="text-center mb-12">
              <div className="inline-block bg-primary/10 px-6 py-3 rounded-full">
                <span className="text-primary font-medium">STEP 2</span>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-background p-8 rounded-lg">
                <h3 className="text-xl font-medium text-foreground mb-4 text-center">Modern React Framework + Netlify Deployment</h3>
                <p className="text-muted-foreground leading-relaxed text-center">
                  The website was built using a modern React framework and deployed on Netlify for its high-performance edge network and CI/CD capabilities.
                </p>
              </div>
              <div className="bg-background p-8 rounded-lg">
                <h3 className="text-xl font-medium text-foreground mb-4 text-center">Complex DNS Configuration</h3>
                <p className="text-muted-foreground leading-relaxed text-center">
                  A significant challenge was integrating the GoDaddy-registered domain with Netlify's hosting. I successfully navigated a complex DNS configuration, diagnosing and rectifying an initial domain forwarding setup and implementing a robust nameserver delegation to Netlify DNS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Part 3 - Performance Optimization */}
      <section className="scroll-section bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="animate-on-scroll fade-up text-center">
            <h2 className="text-3xl md:text-5xl font-inter text-foreground mb-8">Performance Optimization</h2>
            <div className="mb-12">
              <div className="inline-block bg-primary/10 px-6 py-3 rounded-full">
                <span className="text-primary font-medium">STEP 3</span>
              </div>
            </div>

            <div className="flex justify-center items-center gap-8 mb-8">
              <div className="bg-destructive/10 px-6 py-4 rounded-lg">
                <span className="text-destructive text-3xl font-bold">67/100</span>
                <p className="text-muted-foreground text-sm">Before</p>
              </div>
              <div className="text-primary text-2xl">→</div>
              <div className="bg-primary/10 px-6 py-4 rounded-lg">
                <span className="text-primary text-3xl font-bold">95/100</span>
                <p className="text-muted-foreground text-sm">After</p>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-xl font-medium text-foreground mb-4">Smart Conditional Rendering</h3>
              <p className="text-muted-foreground leading-relaxed">
                Replaced heavy JavaScript animations with lightweight WebP images for mobile users,
                while maintaining rich animations for desktop experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Part 4 - SEO Foundation */}
      <section className="scroll-section bg-card">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="animate-on-scroll fade-up">
            <h2 className="text-3xl md:text-5xl font-inter text-foreground mb-8 text-center">SEO Foundation</h2>
            <div className="text-center mb-12">
              <div className="inline-block bg-primary/10 px-6 py-3 rounded-full">
                <span className="text-primary font-medium">STEP 4</span>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Google Search Console",
                  description: "Established website relationship with Google, troubleshooting DNS record types (TXT vs A records)"
                },
                {
                  title: "Sitemap Submission",
                  description: "Debugged and submitted valid sitemap.xml after fixing pathing errors and incorrect base URLs"
                },
                {
                  title: "Indexing Lifecycle",
                  description: "Guided client from 'Discovered - not indexed' to 'URL is on Google' confirmation"
                },
                {
                  title: "Google Business Profile",
                  description: "Established GBP as primary tool for local customer acquisition and optimization"
                }
              ].map((item, index) => (
                <div key={index} className="bg-background p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Demonstrated */}
      <section className="scroll-section bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="animate-on-scroll fade-up">
            <h2 className="text-3xl md:text-5xl font-inter text-foreground mb-12 text-center">Key Skills Demonstrated</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Front-End Development: React.js",
                "Hosting & Deployment: Netlify, CI/CD",
                "DNS Management: GoDaddy, Netlify DNS",
                "Performance Optimization: PageSpeed Insights",
                "SEO: Search Console, Sitemap Submission",
                "Problem Solving & Consulting"
              ].map((skill, index) => (
                <div key={index} className="flex gap-3 p-6 bg-card rounded-lg text-center">
                  <div className="w-full">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-muted-foreground leading-relaxed">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="scroll-section bg-card">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="animate-on-scroll fade-up text-center">
            <h2 className="text-3xl md:text-5xl font-inter text-foreground mb-12">The Outcome</h2>
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-12 rounded-lg">
              <div className="mb-8">
                <div className="inline-flex items-center gap-4 bg-primary/10 px-8 py-4 rounded-lg">
                  <span className="text-primary text-2xl">🎯</span>
                  <span className="text-foreground font-medium">Successfully Indexed by Google</span>
                </div>
              </div>
              <p className="text-xl text-foreground leading-relaxed max-w-3xl mx-auto">
                The result is a secure, professionally deployed, and highly performant website that is now fully indexed by Google. The <strong>rihandcabs.in</strong> project now has a strong technical foundation with a clear strategy centered around Google Business Profile to capture local search traffic and drive business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="scroll-section bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <div className="animate-on-scroll fade-up">
            <h2 className="text-3xl md:text-5xl font-inter text-foreground mb-8">
              Ready to Transform Your Business Online?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Let's discuss how we can create a powerful digital presence for your business with strategic development and optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-primary text-primary-foreground px-8 py-4 text-lg font-medium tracking-wide transition-all hover:shadow-lg hover:shadow-primary/25 rounded-lg"
              >
                Start Your Project
              </a>
              <a
                href="/"
                className="bg-transparent border border-border text-foreground px-8 py-4 text-lg font-medium tracking-wide transition-all hover:bg-muted rounded-lg"
              >
                View More Work
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Scroll Snap Container */
        .scroll-container {
          height: 100vh;
          overflow-y: scroll;
          scroll-snap-type: y mandatory;
          scroll-behavior: smooth;
          font-family: 'Inter', sans-serif;
        }

        /* Individual Scroll Sections */
        .scroll-section {
          height: 100vh;
          width: 100%;
          scroll-snap-align: start;
          scroll-snap-stop: always;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          box-sizing: border-box;
        }

        /* Ensure content doesn't overflow viewport */
        .scroll-section > div {
          max-height: calc(100vh - 8rem);
          overflow: visible;
        }

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

        /* Code styling */
        code {
          font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .scroll-section {
            padding: 1rem;
          }

          .scroll-section > div {
            max-height: calc(100vh - 2rem);
          }
        }

        /* Smooth scrollbar styling */
        .scroll-container::-webkit-scrollbar {
          width: 4px;
        }

        .scroll-container::-webkit-scrollbar-track {
          background: hsl(var(--muted));
        }

        .scroll-container::-webkit-scrollbar-thumb {
          background: hsl(var(--primary));
          border-radius: 2px;
        }

        .scroll-container::-webkit-scrollbar-thumb:hover {
          background: hsl(var(--primary) / 0.8);
        }
      `}</style>
    </div>
  );
}
