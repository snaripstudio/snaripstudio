import { useState } from "react";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const portfolioItems = [
    {
      title: "BRAND IDENTITY",
      description:
        "We craft distinctive brand identities that captivate our brand essence while maintaining functionality",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      category: "BRANDING",
    },
    {
      title: "FINNSTROY",
      description: "Modern construction company website with clean aesthetics",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      category: "WEB DESIGN",
    },
    {
      title: "ECOMMERCE",
      description: "Elegant e-commerce platform design",
      image:
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      category: "E-COMMERCE",
    },
    {
      title: "MINDFULAPP",
      description: "Wellness and mindfulness mobile application",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      category: "MOBILE APP",
    },
    {
      title: "TECHCORP IDENTITY",
      description: "Corporate identity for technology company",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      category: "BRANDING",
    },
    {
      title: "DATAHUB PRO",
      description: "Professional data analytics platform",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      category: "WEB APP",
    },
    {
      title: "FOODIEHUB",
      description: "Food delivery mobile application design",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
      category: "MOBILE APP",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative z-50 px-4 md:px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold tracking-wider">WOW</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-sm font-medium tracking-wide hover:text-orange transition-colors"
            >
              HOME
            </a>
            <a
              href="#"
              className="text-sm font-medium tracking-wide hover:text-orange transition-colors"
            >
              ABOUT
            </a>
            <a
              href="#"
              className="text-sm font-medium tracking-wide hover:text-orange transition-colors"
            >
              SERVICES
            </a>
            <a
              href="#"
              className="text-sm font-medium tracking-wide hover:text-orange transition-colors"
            >
              PORTFOLIO
            </a>
            <a
              href="#"
              className="text-sm font-medium tracking-wide hover:text-orange transition-colors"
            >
              CONTACT US
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t py-4 px-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-sm font-medium tracking-wide">
                HOME
              </a>
              <a href="#" className="text-sm font-medium tracking-wide">
                ABOUT
              </a>
              <a href="#" className="text-sm font-medium tracking-wide">
                SERVICES
              </a>
              <a href="#" className="text-sm font-medium tracking-wide">
                PORTFOLIO
              </a>
              <a href="#" className="text-sm font-medium tracking-wide">
                CONTACT US
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                WE DESIGN & BUILD
                <br />
                <span className="text-orange">IMPACTFUL DIGITAL</span>
                <br />
                EXPERIENCES.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-lg">
                We create stunning digital experiences that connect brands with
                their audiences through innovative design and strategic
                thinking.
              </p>
              <button className="mt-8 bg-orange text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-orange/90 transition-colors">
                GET STARTED
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&crop=center&auto=format&q=80"
                alt="Team collaboration"
                className="w-full h-[400px] md:h-[500px] object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="px-4 md:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-medium tracking-widest text-gray-500 mb-4">
                WHAT WE DO
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                WE CREATE BRANDS AND DIGITAL PRODUCTS
              </h3>
            </div>
            <div className="relative">
              <div className="bg-red-500 w-16 h-16 absolute -top-4 -right-4 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=400&h=300&fit=crop&crop=center&auto=format&q=80"
                alt="Design process"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="px-4 md:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {item.description}
                  </p>
                  <span className="text-xs font-medium tracking-widest text-orange">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="px-4 md:px-8 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-medium tracking-widest text-gray-500 mb-8">
            SELECTED PROJECTS
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center&auto=format&q=80"
                alt="Finance app"
                className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-2">FINANCEFLOW</h3>
                <p className="text-gray-600 text-sm">
                  Personal finance management application with intuitive
                  interface
                </p>
              </div>
            </div>
            <div className="group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop&crop=center&auto=format&q=80"
                alt="E-commerce"
                className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-2">ECOMMERCE</h3>
                <p className="text-gray-600 text-sm">
                  Modern e-commerce platform with seamless user experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 md:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-medium tracking-widest text-gray-500 mb-8">
            CLIENT WORDS
          </h2>
          <div className="max-w-4xl">
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
              "STUDIO DELIVERED EXCEPTIONAL RESULTS THAT EXCEEDED OUR
              EXPECTATIONS. THEIR CREATIVE APPROACH PERFECTLY CAPTURED OUR BRAND
              ESSENCE WHILE MAINTAINING FUNCTIONALITY."
            </blockquote>
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face&auto=format&q=80"
                alt="Madison Gunn"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-medium">MADISON GUNN</div>
                <div className="text-sm text-gray-600">Creative Director</div>
              </div>
            </div>
            <div className="mt-8 text-sm text-gray-500">
              WE WERE IMPRESSED. BALANCE SIMPLICITY AND FUNCTION TO DELIVER
              OUTSTANDING DESIGN CONCEPTS. COMPLETED PROJECTS CONSISTENTLY ON
              TIME.
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-4 md:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&crop=center&auto=format&q=80"
                alt="Team"
                className="w-full h-48 object-cover mb-8"
              />
              <p className="text-sm text-gray-400">
                GREAT RESULTS FOR YOUR NEEDS AND TRANSFORM YOUR BUSINESS THE
                BEST DIGITAL EXPERIENCE.
              </p>
            </div>
            <div>
              <nav className="space-y-4">
                <a
                  href="#"
                  className="block text-lg font-medium hover:text-orange transition-colors"
                >
                  HOME
                </a>
                <a
                  href="#"
                  className="block text-lg font-medium hover:text-orange transition-colors"
                >
                  ABOUT
                </a>
                <a
                  href="#"
                  className="block text-lg font-medium hover:text-orange transition-colors"
                >
                  SERVICES
                </a>
                <a
                  href="#"
                  className="block text-lg font-medium hover:text-orange transition-colors"
                >
                  PORTFOLIO
                </a>
                <a
                  href="#"
                  className="block text-lg font-medium hover:text-orange transition-colors"
                >
                  CONTACT US
                </a>
              </nav>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-16 pt-8 text-center text-sm text-gray-400">
            © 2024 WOW Digital Agency. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
