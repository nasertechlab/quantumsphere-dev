import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Calendar,
  Users,
  Globe,
  Smartphone,
  CheckCircle,
  Star,
} from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();

  // Mock project data - in a real app, this would come from an API
  const project = {
    id: 1,
    title: "EcoTrack Mobile App",
    category: "Mobile Apps",
    client: "GreenTech Solutions",
    timeline: "4 months",
    team: "5 developers",
    description:
      "EcoTrack is a comprehensive sustainability tracking application that empowers users to monitor their carbon footprint and environmental impact through intuitive data visualization and actionable insights. The app features real-time tracking, social challenges, and personalized recommendations to help users make more environmentally conscious decisions.",
    challenge:
      "The client needed a mobile solution that could accurately track various environmental metrics while maintaining user engagement through gamification. The main challenge was creating an intuitive interface that could handle complex data visualization while remaining accessible to users of all technical backgrounds.",
    solution:
      "We developed a React Native application with a clean, intuitive interface that seamlessly integrates with multiple data sources. The app features real-time carbon footprint tracking, achievement systems, social challenges, and personalized recommendations powered by machine learning algorithms.",
    results: [
      "50,000+ downloads in the first month",
      "Average 4.8 star rating on app stores",
      "35% improvement in user engagement",
      "Award winner at GreenTech Innovation Summit",
    ],
    technologies: [
      "React Native",
      "Node.js",
      "MongoDB",
      "AWS",
      "Machine Learning",
      "WebSocket",
    ],
    features: [
      "Real-time carbon footprint tracking",
      "Social challenges and leaderboards",
      "Personalized sustainability recommendations",
      "Data visualization and analytics",
      "Achievement and reward system",
      "Multi-platform synchronization",
    ],
    images: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    ],
    testimonial: {
      text: "TechCraft delivered an exceptional mobile application that exceeded our expectations. Their attention to detail and commitment to sustainability made them the perfect partner for our project.",
      author: "Sarah Johnson",
      position: "CEO, GreenTech Solutions",
    },
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button asChild variant="outline" size="sm">
          <Link to="/portfolio">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <Badge variant="secondary">{project.category}</Badge>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{project.timeline}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{project.team}</span>
                  </div>
                </div>
              </div>
              <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">
                Client: {project.client}
              </p>
              <p className="text-lg leading-relaxed">{project.description}</p>
            </div>
            <div className="relative">
              <img
                src={project.images[0]}
                alt={project.title}
                className="rounded-lg shadow-tech w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-tech-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Challenge */}
            <Card className="p-8 border-0 shadow-tech">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </CardContent>
            </Card>

            {/* Solution */}
            <Card className="p-8 border-0 shadow-tech">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="p-8 border-0 shadow-tech">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4">Results</h3>
                <div className="space-y-3">
                  {project.results.map((result, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies & Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Technologies */}
            <div>
              <h3 className="text-3xl font-bold mb-8">Technologies Used</h3>
              <div className="grid grid-cols-2 gap-4">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="p-4 bg-tech-gray-light rounded-lg text-center"
                  >
                    <span className="font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-3xl font-bold mb-8">Key Features</h3>
              <div className="space-y-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-tech-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">
            Project Gallery
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.images.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-smooth"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl font-medium italic mb-8">
              "{project.testimonial.text}"
            </blockquote>
            <div>
              <div className="font-semibold">{project.testimonial.author}</div>
              <div className="text-muted-foreground">
                {project.testimonial.position}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Inspired by This Project?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/80">
            Let's discuss how we can create something equally amazing for your
            business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/portfolio">View More Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;