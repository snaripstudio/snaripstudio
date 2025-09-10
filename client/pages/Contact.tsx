import { useEffect } from "react";
import { setSEO } from "@/lib/seo";

export default function Contact() {
  const email = "snaripstudio@gmail.com";
  const whatsappNumber = "+91 6386873180";
  const whatsappMessage =
    "Hi! I'm interested in working with SnaripStudio for my project.";

  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    setSEO({
      title:
        "Contact Snarip Studio | Website Development in Noida · Greater Noida · Gurgaon",
      description:
        "Get a fast, SEO-friendly website. Contact Snarip (Snarip Studio) – web development company serving Greater Noida, Noida and Gurgaon.",
      keywords: [
        "snarip",
        "snarip studio",
        "snaripstudio",
        "contact web development company",
        "Greater Noida",
        "Noida",
        "Gurgaon",
        "Gurugram",
      ],
      canonicalPath: "/contact",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Lines */}
      <div className="background-lines">
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
        <div className="line line-4"></div>
        <div className="line line-5"></div>
        <div className="line line-6"></div>
      </div>

      {/* Header */}
      <header className="relative z-50 px-4 md:px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F7a415af69a664de19824c2561d4b2dbb%2F61a664dbf0a04373ab36d55007f782f6"
              alt="SnaripStudio Logo"
              className="h-11 w-11 object-cover rounded-full -ml-1"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <a
              href="/"
              className="nav-link relative text-sm font-medium tracking-wide text-foreground transition-colors hover:text-primary"
            >
              HOME
            </a>
            <a
              href="/#about"
              className="nav-link relative text-sm font-medium tracking-wide text-foreground transition-colors hover:text-primary"
            >
              ABOUT
            </a>
            <a
              href="/#work"
              className="nav-link relative text-sm font-medium tracking-wide text-foreground transition-colors hover:text-primary"
            >
              WORK
            </a>
          </nav>
        </div>
      </header>

      {/* Contact Hero Section */}
      <section className="px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat text-foreground leading-[1.1] tracking-tight mb-8">
            LET'S CREATE
            <br />
            <span className="text-primary">SOMETHING</span>
            <br />
            EXTRAORDINARY
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-16">
            Ready to transform your digital presence? We'd love to hear about
            your project and discuss how we can bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="px-4 md:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Email Contact */}
            <div className="text-center p-8 bg-card hover:bg-card/80 transition-colors group border border-border rounded-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-montserrat text-foreground mb-4">
                EMAIL US
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Send us a detailed message about your project and we'll get back
                to you within 24 hours.
              </p>
              <a
                href={`mailto:${email}?subject=Project Inquiry&body=Hi SnaripStudio,%0D%0A%0D%0AI'm interested in working with you on a project. Here are the details:%0D%0A%0D%0A[Please describe your project]`}
                className="inline-block bg-primary text-primary-foreground px-8 py-3 font-medium tracking-wide hover:bg-primary/90 transition-colors"
              >
                SEND EMAIL
              </a>
              <div className="mt-4 text-sm text-muted-foreground">{email}</div>
            </div>

            {/* WhatsApp Contact */}
            <div className="text-center p-8 bg-card hover:bg-card/80 transition-colors group border border-border rounded-lg">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.346" />
                </svg>
              </div>
              <h3 className="text-2xl font-montserrat text-foreground mb-4">
                WHATSAPP
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Chat with us directly on WhatsApp for quick questions and
                immediate responses.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white px-8 py-3 font-medium tracking-wide hover:bg-green-600 transition-colors"
              >
                CHAT ON WHATSAPP
              </a>
              <div className="mt-4 text-sm text-muted-foreground">
                +91 6386873180, +91 7905468326
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="px-4 md:px-8 py-16 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat text-foreground mb-8">
            WHAT HAPPENS NEXT?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-montserrat">
                1
              </div>
              <h3 className="font-montserrat text-foreground text-lg mb-2">
                DISCOVERY CALL
              </h3>
              <p className="text-muted-foreground text-sm">
                We'll schedule a call to understand your project, goals, and
                requirements.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-montserrat">
                2
              </div>
              <h3 className="font-montserrat text-foreground text-lg mb-2">
                PROPOSAL
              </h3>
              <p className="text-muted-foreground text-sm">
                We'll create a detailed proposal with timeline, deliverables,
                and pricing.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-montserrat">
                3
              </div>
              <h3 className="font-montserrat text-foreground text-lg mb-2">
                PROJECT START
              </h3>
              <p className="text-muted-foreground text-sm">
                Once approved, we'll begin crafting your extraordinary digital
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border text-foreground px-4 md:px-8 py-16 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
          <span className="text-[20rem] font-montserrat">SNARIP</span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <a
            href="/"
            className="text-2xl font-montserrat tracking-wider mb-8 inline-block"
          >
            SnaripStudio
          </a>
          <div className="border-t border-border pt-8 text-sm text-muted-foreground">
            © 2024 SnaripStudio. All rights reserved.
          </div>
        </div>
      </footer>

      <style jsx>{`
        .nav-link::after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: hsl(var(--primary));
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }

        /* Background Lines Animation */
        .background-lines {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
          overflow: hidden;
        }

        .line {
          position: absolute;
          background: linear-gradient(
            90deg,
            transparent 0%,
            hsl(var(--border)) 50%,
            transparent 100%
          );
          transform: rotate(-15deg);
        }

        .line-1 {
          width: 1px;
          height: 200vh;
          left: 10%;
          animation: moveVertical 20s linear infinite;
          animation-delay: 0s;
        }

        .line-2 {
          width: 1px;
          height: 200vh;
          left: 25%;
          animation: moveVertical 25s linear infinite;
          animation-delay: -5s;
        }

        .line-3 {
          width: 1px;
          height: 200vh;
          left: 45%;
          animation: moveVertical 30s linear infinite;
          animation-delay: -10s;
        }

        .line-4 {
          width: 1px;
          height: 200vh;
          left: 65%;
          animation: moveVertical 22s linear infinite;
          animation-delay: -15s;
        }

        .line-5 {
          width: 1px;
          height: 200vh;
          left: 80%;
          animation: moveVertical 28s linear infinite;
          animation-delay: -8s;
        }

        .line-6 {
          width: 1px;
          height: 200vh;
          left: 90%;
          animation: moveVertical 24s linear infinite;
          animation-delay: -12s;
        }

        @keyframes moveVertical {
          0% {
            transform: translateY(-100vh) rotate(-15deg);
          }
          100% {
            transform: translateY(100vh) rotate(-15deg);
          }
        }

        .line:nth-child(odd) {
          animation:
            moveVertical 20s linear infinite,
            sway 8s ease-in-out infinite;
        }

        .line:nth-child(even) {
          animation:
            moveVertical 25s linear infinite,
            sway 6s ease-in-out infinite reverse;
        }

        @keyframes sway {
          0%,
          100% {
            transform: translateX(0px) translateY(-100vh) rotate(-15deg);
          }
          50% {
            transform: translateX(20px) translateY(-100vh) rotate(-15deg);
          }
        }
      `}</style>
    </div>
  );
}
