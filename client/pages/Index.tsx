import { useState, useEffect } from "react";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const fullText = "IMPACTFUL";
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
      title: "BRAND IDENTITY",
      description:
        "We craft distinctive brand identities that captivate audiences and communicate your brand essence effectively.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      category: "BRANDING",
    },
    {
      title: "UI/UX DESIGN",
      description:
        "Creating intuitive and beautiful user experiences that drive engagement and conversions.",
      image:
        "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      category: "DESIGN",
    },
    {
      title: "WEB DEVELOPMENT",
      description:
        "Building fast, scalable, and modern web applications with cutting-edge technologies.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      category: "DEVELOPMENT",
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
        "SNARIPSTUDIO DELIVERED EXCEPTIONAL RESULTS THAT EXCEEDED OUR EXPECTATIONS. THEIR CREATIVE APPROACH PERFECTLY CAPTURED OUR BRAND ESSENCE.",
      name: "SARAH JOHNSON",
      position: "CEO, TechFlow",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face&auto=format&q=80",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=40&fit=crop&crop=center&auto=format&q=80",
    },
    {
      quote:
        "THE TEAM'S ATTENTION TO DETAIL AND INNOVATIVE SOLUTIONS TRANSFORMED OUR DIGITAL PRESENCE COMPLETELY. HIGHLY RECOMMENDED!",
      name: "MICHAEL CHEN",
      position: "Founder, StartupX",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face&auto=format&q=80",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=40&fit=crop&crop=center&auto=format&q=80",
    },
    {
      quote:
        "WORKING WITH SNARIPSTUDIO WAS A GAME-CHANGER. THEY UNDERSTOOD OUR VISION AND BROUGHT IT TO LIFE BRILLIANTLY.",
      name: "EMILY DAVIS",
      position: "Creative Director, DesignCo",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face&auto=format&q=80",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=40&fit=crop&crop=center&auto=format&q=80",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Header */}
      <header className="relative z-50 px-4 md:px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-michroma tracking-wider">
            SnaripStudio
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <a
              href="#"
              className="nav-link relative text-sm font-medium tracking-wide text-black transition-colors hover:text-orange"
            >
              ABOUT
            </a>
            <a
              href="#"
              className="nav-link relative text-sm font-medium tracking-wide text-black transition-colors hover:text-orange"
            >
              SERVICES
            </a>
            <a
              href="#"
              className="nav-link relative text-sm font-medium tracking-wide text-black transition-colors hover:text-orange"
            >
              WORK
            </a>
          </nav>

          <button className="hidden md:block bg-orange-bright text-white px-6 py-3 text-sm font-medium tracking-wide transition-all hover:shadow-lg hover:shadow-orange-bright/25">
            LET'S TALK
          </button>

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
              <a href="#" className="text-sm font-medium tracking-wide">
                ABOUT
              </a>
              <a href="#" className="text-sm font-medium tracking-wide">
                SERVICES
              </a>
              <a href="#" className="text-sm font-medium tracking-wide">
                WORK
              </a>
              <button className="bg-orange-bright text-white px-6 py-3 text-sm font-medium tracking-wide w-fit">
                LET'S TALK
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-michroma leading-[1.1] tracking-tight mb-8">
                WE DESIGN & BUILD
                <br />
                <span
                  className="text-orange inline-block"
                  style={{ minWidth: "400px" }}
                >
                  {typewriterText}
                  <span className="animate-pulse">|</span>
                </span>{" "}
                DIGITAL
                <br />
                EXPERIENCES.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mb-8">
                We create stunning digital experiences that connect brands with
                their audiences through innovative design and strategic
                thinking.
              </p>
              <button className="bg-orange-bright text-white px-8 py-4 text-sm font-medium tracking-wide transition-all hover:shadow-lg hover:shadow-orange-bright/25">
                GET STARTED
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&crop=center&auto=format&q=80"
                alt="Creative team collaboration"
                className="w-full h-[500px] object-cover grayscale transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 md:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm font-medium tracking-widest text-gray-500 mb-4">
              WHAT WE DO
            </h2>
            <h3 className="text-3xl md:text-5xl font-michroma leading-tight">
              WE CREATE BRANDS AND
              <br />
              DIGITAL PRODUCTS
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                  <div className="absolute top-4 right-4 text-xs font-medium tracking-widest text-white bg-black/50 px-2 py-1">
                    {service.category}
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
      <section className="py-16 bg-gray-50">
        <div className="px-4 md:px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-sm font-medium tracking-widest text-gray-500 mb-4">
              SELECTED PROJECTS
            </h2>
            <h3 className="text-3xl md:text-5xl font-michroma leading-tight">
              OUR RECENT WORK
            </h3>
          </div>
        </div>

        <div className="relative overflow-hidden">
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
          <h2 className="text-sm font-medium tracking-widest text-gray-500 mb-8">
            CLIENT WORDS
          </h2>

          <div className="relative">
            <div className="max-w-4xl">
              <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-12 h-12 rounded-full object-cover grayscale"
                  />
                  <div>
                    <div className="font-medium">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonials[currentTestimonial].position}
                    </div>
                  </div>
                  <img
                    src={testimonials[currentTestimonial].logo}
                    alt="Company logo"
                    className="h-8 ml-6 grayscale opacity-60"
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-orange transition-colors"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-orange transition-colors"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-michroma leading-tight mb-8">
            READY TO CREATE
            <br />
            SOMETHING AMAZING?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your project and bring your vision to life with our
            creative expertise.
          </p>
          <button className="group bg-orange-bright text-white px-12 py-4 text-lg font-medium tracking-wide transition-all hover:shadow-lg hover:shadow-orange-bright/25 inline-flex items-center gap-3">
            LET'S DISCUSS
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
          <div className="grid md:grid-cols-3 gap-16">
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
      `}</style>
    </div>
  );
}
