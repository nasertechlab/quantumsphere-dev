import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Smartphone,
  Globe,
  Palette,
  Database,
  Code,
  Zap,
  Shield,
  Users,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Custom Mobile App Development",
      subtitle: "iOS & Android",
      description:
        "We create native and cross-platform mobile applications that deliver exceptional user experiences. From concept to app store deployment, we handle every aspect of mobile development using the latest technologies like React Native, Flutter, Swift, and Kotlin.",
      features: [
        "Native iOS & Android development",
        "Cross-platform solutions",
        "App Store optimization",
        "Performance optimization",
        "Offline functionality",
        "Push notifications",
      ],
    },
    {
      icon: Globe,
      title: "Website Development",
      subtitle: "Corporate Sites, E-commerce, SaaS Platforms",
      description:
        "We build responsive, fast, and scalable websites that convert visitors into customers. Whether you need a corporate website, e-commerce platform, or complex SaaS application, we deliver solutions that grow with your business.",
      features: [
        "Responsive web design",
        "E-commerce platforms",
        "Content management systems",
        "Progressive web apps",
        "SEO optimization",
        "Performance monitoring",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design & Prototyping",
      subtitle: "User-Centered Design",
      description:
        "Our design team creates intuitive and beautiful interfaces that users love. We follow design thinking principles and conduct user research to ensure your product provides an exceptional user experience that drives engagement and conversions.",
      features: [
        "User research & personas",
        "Wireframing & prototyping",
        "Visual design systems",
        "Usability testing",
        "Accessibility compliance",
        "Brand identity design",
      ],
    },
    {
      icon: Database,
      title: "Backend APIs & Integrations",
      subtitle: "Scalable Infrastructure",
      description:
        "We develop robust backend systems and APIs that power your applications. Our team specializes in creating scalable, secure, and maintainable server-side solutions that integrate seamlessly with third-party services and databases.",
      features: [
        "RESTful API development",
        "Database design & optimization",
        "Third-party integrations",
        "Cloud infrastructure",
        "Real-time functionality",
        "API documentation",
      ],
    },
  ];

  const additionalServices = [
    {
      icon: Code,
      title: "Legacy System Modernization",
      description: "Upgrade and modernize your existing applications",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Improve speed and efficiency of your applications",
    },
    {
      icon: Shield,
      title: "Security Audits",
      description: "Comprehensive security assessments and implementations",
    },
    {
      icon: Users,
      title: "Technical Consulting",
      description: "Expert guidance on technology strategy and architecture",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-tech">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive software development services to help your
            business thrive in the digital landscape. From mobile apps to web
            platforms, we've got you covered.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <Card className="p-8 shadow-tech border-0">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center">
                          <service.icon className="h-8 w-8 text-accent" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl mb-1">
                            {service.title}
                          </CardTitle>
                          <p className="text-accent font-medium">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-2 h-2 bg-accent rounded-full" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="relative h-80 bg-gradient-tech rounded-lg shadow-tech" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-tech-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive solutions for all your technology needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-tech transition-smooth border-0"
              >
                <CardContent className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Development Process</h2>
            <p className="text-xl text-muted-foreground">
              A proven methodology that ensures project success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your requirements and goals",
              },
              {
                step: "02",
                title: "Design",
                description: "Creating wireframes and visual designs",
              },
              {
                step: "03",
                title: "Development",
                description: "Building your solution with best practices",
              },
              {
                step: "04",
                title: "Deployment",
                description: "Testing, optimization, and go-live support",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {phase.step}
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-border transform translate-x-8" />
                )}
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Ideas into Reality?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/80">
            Let's discuss your project requirements and create a custom solution
            that drives your business forward.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;