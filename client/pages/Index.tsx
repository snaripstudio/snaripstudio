import { useState, useEffect, useRef } from "react";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

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

  const fullText = "IMPACTFUL IDEAS";
  const typewriterSpeed = 150;
  const deleteSpeed = 100;
  const pauseTime = 2000;

  // Typewriter effect
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (typewriterText.length < fullText.length) {
        timeout = setTimeout(() => {
          setTypewriterText(fullText.slice(0, typewriterText.length + 1));
        }, typewriterSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      if (typewriterText.length > 0) {
        timeout = setTimeout(() => {
          setTypewriterText(typewriterText.slice(0, -1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
      }
    }

    return () => clearTimeout(timeout);
  }, [typewriterText, isDeleting]);

  const services = [
    {
      title: "CUSTOM WEBSITE DESIGN",
      description:
        "Unique, pixel-perfect designs made from scratch. Every element crafted specifically for your brand's story and goals.",
      image:
        "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      category: "DESIGN",
      icon: "🎨",
    },
    {
      title: "RESPONSIVE WEB DEVELOPMENT",
      description:
        "Mobile-friendly websites that look stunning on any device. Clean, efficient code built for performance and scalability.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      category: "DEVELOPMENT",
      icon: "💻",
    },
    {
      title: "E-COMMERCE SOLUTIONS",
      description:
        "Build online stores with powerful features that convert visitors into customers. Secure, fast, and user-friendly shopping experiences.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      category: "E-COMMERCE",
      icon: "🛒",
    },
    {
      title: "SEO OPTIMIZATION",
      description:
        "Websites crafted with SEO best practices for better search engine visibility and organic traffic growth.",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      category: "SEO",
      icon: "🔍",
    },
    {
      title: "CONTENT MANAGEMENT",
      description:
        "Easy-to-manage sites with WordPress, custom CMS, or headless solutions. Update your content with confidence.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      category: "CMS",
      icon: "📝",
    },
    {
      title: "SECURITY & MAINTENANCE",
      description:
        "Regular updates, backups, and secure coding practices. Keep your website safe, fast, and up-to-date.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      category: "MAINTENANCE",
      icon: "🔒",
    },
  ];

  const projects = [
    {
      title: "FINTECH PLATFORM",
      description:
        "Modern financial dashboard with real-time analytics and intuitive user interface.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      category: "UI/UX",
    },
    {
      title: "E-COMMERCE REDESIGN",
      description:
        "Complete redesign of an e-commerce platform focusing on conversion optimization.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      category: "BRANDING",
    },
    {
      title: "MOBILE BANKING APP",
      description:
        "Secure and user-friendly mobile banking application with seamless transactions.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      category: "MOBILE",
    },
    {
      title: "STARTUP IDENTITY",
      description:
        "Complete brand identity design for a tech startup including logo and guidelines.",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      category: "BRANDING",
    },
    {
      title: "SAAS DASHBOARD",
      description:
        "Clean and functional dashboard design for a SaaS product with complex data visualization.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      category: "UI/UX",
    },
    {
      title: "PORTFOLIO WEBSITE",
      description:
        "Minimalist portfolio website for a creative professional with smooth animations.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      category: "WEB",
    },
  ];

  const testimonials = [
    {
      quote:
        "SnaripStudio created an outstanding website for our social media marketing agency that transformed our business. The conversion-focused design increased our client inquiries by 150% within the first month.",
      name: "DEVANSH SRIVASTAVA",
      position: "CEO, ConixMedia",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets%2Ff48aa15f6f184b529ed3ca882d1ea006%2F11c44a19c4b3408281b5949101120872?format=webp&width=800",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=40&fit=crop&crop=center&auto=format&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-inter relative overflow-hidden">
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
          <div className="text-2xl font-michroma tracking-wider">
            SnaripStudio
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <a
              href="#about"
              className="nav-link relative text-sm font-medium tracking-wide text-black transition-colors hover:text-orange"
            >
              ABOUT
            </a>
            <a
              href="#services"
              className="nav-link relative text-sm font-medium tracking-wide text-black transition-colors hover:text-orange"
            >
              SERVICES
            </a>
            <a
              href="#work"
              className="nav-link relative text-sm font-medium tracking-wide text-black transition-colors hover:text-orange"
            >
              WORK
            </a>
          </nav>

          <a
            href="/contact"
            className="hidden md:block bg-orange-bright text-white px-6 py-3 text-sm font-medium tracking-wide transition-all hover:shadow-lg hover:shadow-orange-bright/25"
          >
            LET'S TALK
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="w-6 h-0.5 bg-black transition-all"></span>
            <span className="w-6 h-0.5 bg-black transition-all"></span>
            <span className="w-6 h-0.5 bg-black transition-all"></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t py-4 px-4">
            <nav className="flex flex-col space-y-4">
              <a href="#about" className="text-sm font-medium tracking-wide">
                ABOUT
              </a>
              <a href="#services" className="text-sm font-medium tracking-wide">
                SERVICES
              </a>
              <a href="#work" className="text-sm font-medium tracking-wide">
                WORK
              </a>
              <a
                href="/contact"
                className="bg-orange-bright text-white px-6 py-3 text-sm font-medium tracking-wide w-fit"
              >
                LET'S TALK
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="px-4 md:px-8 py-5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="hero-text flex-1 w-full">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-michroma leading-[1.1] tracking-tight mb-8">
                WEBSITES THAT TURN
                <br />
                <span
                  className="text-orange inline-block"
                  style={{ minWidth: "400px" }}
                >
                  {typewriterText}
                  <span className="animate-pulse">|</span>
                </span>
                <br />
                INTO EXTRAORDINARY
                <br />
                DIGITAL EXPERIENCES.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mb-8">
                Custom-crafted websites, flawless performance, and designs that
                captivate—let's build your online success together.
              </p>
              <div className="flex gap-4">
                <a
                  href="/contact"
                  className="bg-orange-bright text-white px-8 py-4 text-sm font-medium tracking-wide transition-all hover:shadow-lg hover:shadow-orange-bright/25 inline-block"
                >
                  GET STARTED
                </a>
                <a
                  href="#work"
                  className="border border-gray-300 text-black px-8 py-4 text-sm font-medium tracking-wide transition-all hover:border-orange inline-block"
                >
                  SEE OUR WORK
                </a>
              </div>
            </div>
            <div className="relative hero-image flex-1 w-full">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&crop=center&auto=format&q=80"
                alt="Creative team collaboration"
                className="w-full h-[500px] object-cover grayscale transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="px-4 md:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll fade-up">
              <h2 className="text-sm font-medium tracking-widest text-gray-500 mb-4">
                ABOUT US
              </h2>
              <h3 className="text-3xl md:text-5xl font-michroma leading-tight mb-8">
                EVERY BRAND HAS A
                <br />
                UNIQUE STORY
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At SnaripStudio, we believe every brand has a unique story—and
                your website should tell it beautifully. We're a passionate team
                of web developers and designers dedicated to creating
                tailor-made websites that don't just look great, but also work
                seamlessly, load quickly, and help your business grow.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With years of combined experience, we merge creativity and
                technology to deliver solutions that stand out in a crowded
                digital world.
              </p>
            </div>
            <div className="animate-on-scroll fade-left">
              <img
                src="https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=600&h=400&fit=crop&crop=center&auto=format&q=80"
                alt="Design process"
                className="w-full h-[400px] object-cover grayscale transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section className="px-4 md:px-8 pt-16 pb-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll fade-up">
            <h2 className="text-sm font-medium tracking-widest text-gray-500 mb-4">
              WHAT MAKES US UNIQUE
            </h2>
            <h3 className="text-3xl md:text-5xl font-michroma leading-tight">
              WHY CHOOSE
              <br />
              SNARIPSTUDIO
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Tailored Approach",
                description:
                  "Every project starts with understanding your needs, not forcing you into pre-made templates.",
              },
              {
                title: "Creative Design & Smart Development",
                description:
                  "We design stunning, engaging interfaces and develop them with clean, efficient code.",
              },
              {
                title: "One-Stop Web Partner",
                description:
                  "From design and development to maintenance and updates, we handle it all so you don't have to.",
              },
              {
                title: "Performance Obsessed",
                description:
                  "Fast-loading websites optimized for SEO, conversions, and the best user experience.",
              },
              {
                title: "Mobile-First Mindset",
                description:
                  "Every website adapts beautifully on all devices, ensuring a seamless experience everywhere.",
              },
              {
                title: "Long-Term Support",
                description:
                  "We don't disappear after launch; we offer ongoing support so your website stays fresh and secure.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`flex gap-4 animate-on-scroll fade-up delay-${index * 100}`}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-orange rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-michroma text-lg mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-4 md:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-on-scroll fade-up">
            <h2 className="text-sm font-medium tracking-widest text-gray-500 mb-4">
              OUR SERVICES
            </h2>
            <h3 className="text-3xl md:text-5xl font-michroma leading-tight">
              COMPREHENSIVE
              <br />
              WEB SOLUTIONS
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group cursor-pointer animate-on-scroll fade-up delay-${index * 100}`}
              >
                <div className="relative overflow-hidden mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                  <div className="absolute top-4 right-4 text-xs font-medium tracking-widest text-white bg-black/70 px-2 py-1">
                    {service.category}
                  </div>
                  <div className="absolute top-4 left-4 text-2xl">
                    {service.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-michroma mb-4 transform transition-transform duration-300 group-hover:scale-105">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Marquee */}
      <section id="work" className="py-16 bg-gray-50">
        <div className="px-4 md:px-8 mb-16">
          <div className="max-w-7xl mx-auto animate-on-scroll fade-up">
            <h2 className="text-sm font-medium tracking-widest text-gray-500 mb-4">
              SELECTED PROJECTS
            </h2>
            <h3 className="text-3xl md:text-5xl font-michroma leading-tight">
              OUR RECENT WORK
            </h3>
          </div>
        </div>

        <div className="relative overflow-hidden animate-on-scroll fade-up delay-300">
          <div className="marquee-container">
            <div className="marquee-content">
              {[...projects, ...projects].map((project, index) => (
                <div key={index} className="marquee-item group cursor-pointer">
                  <div className="relative overflow-hidden w-80 h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500"></div>
                    <div className="absolute top-4 right-4 text-xs font-medium tracking-widest text-white bg-black/70 px-2 py-1">
                      {project.category}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center text-white p-6">
                        <p className="text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 px-4">
                    <h3 className="text-xl font-michroma mb-2">
                      {project.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="px-4 md:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-medium tracking-widest text-gray-500 mb-8 animate-on-scroll fade-up">
            CLIENT WORDS
          </h2>

          <div className="max-w-4xl animate-on-scroll fade-up delay-200">
            <blockquote className="text-2xl md:text-3xl font-normal leading-relaxed mb-8">
              "{testimonials[0].quote}"
            </blockquote>

            <div className="flex items-center gap-4">
              <img
                src={testimonials[0].avatar}
                alt={testimonials[0].name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-medium">{testimonials[0].name}</div>
                <div className="text-sm text-gray-600">
                  {testimonials[0].position}
                </div>
              </div>
              <img
                src={testimonials[0].logo}
                alt="Company logo"
                className="h-8 ml-6 grayscale opacity-60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SnaripStudio Section */}
      <section className="px-4 md:px-8 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-on-scroll fade-up">
            <h2 className="text-sm font-medium tracking-widest text-gray-500 mb-4">
              WHY CHOOSE US
            </h2>
            <h3 className="text-3xl md:text-5xl font-michroma leading-tight mb-8">
              WE DON'T JUST BUILD
              <br />
              WEBSITES—WE CRAFT
              <br />
              <span className="text-orange">DIGITAL EXPERIENCES</span>
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We blend creativity, technical expertise, and a genuine passion
              for your success. Our websites inspire trust, impress your
              customers, and grow your business through strategic design and
              flawless execution.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center animate-on-scroll fade-up">
          <h2 className="text-4xl md:text-6xl font-michroma leading-tight mb-8">
            READY TO TRANSFORM
            <br />
            YOUR DIGITAL PRESENCE?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your project and bring your vision to life with our
            creative expertise. Your extraordinary digital experience starts
            with a conversation.
          </p>
          <button className="group bg-orange-bright text-white px-12 py-4 text-lg font-medium tracking-wide transition-all hover:shadow-lg hover:shadow-orange-bright/25 inline-flex items-center gap-3 floating-cta">
            LET'S DISCUSS YOUR PROJECT
            <span className="transform transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-white px-4 md:px-8 py-16 relative overflow-hidden">
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
          <span className="text-[20rem] font-michroma">SNARIP</span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-16 animate-on-scroll fade-up">
            {/* Column 1: Team image + Newsletter */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop&crop=center&auto=format&q=80"
                alt="Our team"
                className="w-full h-32 object-cover mb-6 grayscale"
              />
              <h3 className="font-michroma text-lg mb-4">STAY UPDATED</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-gray-800 border border-gray-700 px-4 py-2 text-sm focus:outline-none focus:border-orange"
                />
                <button className="bg-orange px-4 py-2 text-sm font-medium">
                  →
                </button>
              </div>
            </div>

            {/* Column 2: Links */}
            <div>
              <h3 className="font-michroma text-lg mb-6">NAVIGATION</h3>
              <nav className="space-y-4">
                <a
                  href="#"
                  className="block text-gray-300 hover:text-orange transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-orange transition-colors"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-orange transition-colors"
                >
                  Portfolio
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-orange transition-colors"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-orange transition-colors"
                >
                  Blog
                </a>
              </nav>
            </div>

            {/* Column 3: Social Links */}
            <div>
              <h3 className="font-michroma text-lg mb-6">CONNECT</h3>
              <div className="space-y-4">
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-300 hover:text-orange transition-colors"
                >
                  <span>LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-300 hover:text-orange transition-colors"
                >
                  <span>Behance</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-300 hover:text-orange transition-colors"
                >
                  <span>Instagram</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-300 hover:text-orange transition-colors"
                >
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8 text-center text-sm text-gray-400">
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
          background-color: hsl(var(--orange));
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }

        .marquee-container {
          width: 100%;
        }

        .marquee-content {
          display: flex;
          gap: 2rem;
          animation: marquee 60s linear infinite;
          width: max-content;
        }

        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }

        .marquee-item {
          flex-shrink: 0;
          width: 320px;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
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

        .animate-on-scroll.fade-left {
          transform: translateX(40px);
        }

        .animate-on-scroll.fade-right {
          transform: translateX(-40px);
        }

        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0) translateX(0);
        }

        .animate-on-scroll.delay-100 {
          transition-delay: 100ms;
        }

        .animate-on-scroll.delay-200 {
          transition-delay: 200ms;
        }

        .animate-on-scroll.delay-300 {
          transition-delay: 300ms;
        }

        /* Animated Background Lines */
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
            rgba(0, 0, 0, 0.02) 50%,
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

        /* Add some horizontal movement too */
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

        /* Special animations for different elements */
        .fade-in-scale {
          opacity: 0;
          transform: scale(0.95) translateY(20px);
          transition: all 0.6s ease-out;
        }

        .fade-in-scale.animate-in {
          opacity: 1;
          transform: scale(1) translateY(0);
        }

        /* Smooth entrance for hero section */
        .hero-text {
          opacity: 0;
          transform: translateY(40px);
          animation: heroFadeIn 1s ease-out 0.3s forwards;
        }

        .hero-image {
          opacity: 0;
          transform: translateX(30px);
          animation: heroImageSlide 1s ease-out 0.6s forwards;
        }

        @keyframes heroFadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroImageSlide {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Floating animation for CTA button */
        .floating-cta {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        /* Smooth reveal for testimonial */
        .testimonial-reveal {
          opacity: 0;
          transform: translateY(30px) scale(0.98);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .testimonial-reveal.animate-in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      `}</style>
    </div>
  );
}
