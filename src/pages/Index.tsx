import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Globe, Palette, ArrowRight, CheckCircle } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import devicesMockup from "@/assets/devices-mockup.jpg";

const Index = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native iOS and Android apps built with cutting-edge technology",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Responsive websites and web applications that scale",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that users love",
    },
  ];

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(33, 41, 60, 0.8), rgba(33, 41, 60, 0.8)), url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/10 rounded-full animate-float" />
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-accent/20 rounded-full animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-accent/15 rounded-full animate-float" style={{ animationDelay: "4s" }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            We Craft Modern
            <span className="text-accent block">Mobile Apps & Websites</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Empowering businesses with cutting-edge software solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link to="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
              <Link to="/portfolio">Our Work</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce mt-2" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We deliver comprehensive digital solutions that drive your business forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-tech transition-smooth border-0 shadow-elegant"
              >
                <CardContent className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-tech-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Why Choose TechCraft?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                With years of experience in software development, we combine
                technical expertise with creative design to deliver exceptional
                digital solutions that exceed expectations.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Expert team of developers and designers",
                  "Cutting-edge technology stack",
                  "Agile development methodology",
                  "24/7 support and maintenance",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild variant="default" size="lg">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={devicesMockup}
                alt="Modern devices showcase"
                className="rounded-lg shadow-tech w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-accent">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can bring your vision to life with our
            expertise in mobile and web development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;