import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Filter } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Mobile Apps", "Websites", "SaaS", "E-commerce"];

  const projects = [
    {
      id: 1,
      title: "EcoTrack Mobile App",
      category: "Mobile Apps",
      description:
        "A sustainability tracking app that helps users monitor their carbon footprint and environmental impact.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
      technologies: ["React Native", "Node.js", "MongoDB"],
      featured: true,
    },
    {
      id: 2,
      title: "FinanceHub Dashboard",
      category: "SaaS",
      description:
        "A comprehensive financial management platform for small businesses with real-time analytics and reporting.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["React", "Python", "PostgreSQL"],
      featured: true,
    },
    {
      id: 3,
      title: "ArtisanMarket E-commerce",
      category: "E-commerce",
      description:
        "An online marketplace connecting local artisans with customers worldwide, featuring custom product catalogs.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Stripe", "AWS"],
      featured: false,
    },
    {
      id: 4,
      title: "TechCorp Website",
      category: "Websites",
      description:
        "A modern corporate website for a technology company with interactive animations and responsive design.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Tailwind"],
      featured: false,
    },
    {
      id: 5,
      title: "FitTracker Mobile",
      category: "Mobile Apps",
      description:
        "A fitness tracking application with social features, workout plans, and progress analytics.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      technologies: ["Flutter", "Firebase", "Cloud Functions"],
      featured: false,
    },
    {
      id: 6,
      title: "CloudSync SaaS Platform",
      category: "SaaS",
      description:
        "A cloud-based file synchronization and collaboration platform for enterprise teams.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Laravel", "Docker"],
      featured: true,
    },
  ];

  const filteredProjects = projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter
  );

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-tech">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses
            transform their ideas into successful digital solutions.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 mr-4">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">Filter by:</span>
            </div>
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className="transition-smooth"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-tech transition-smooth border-0 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
                  />
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-accent">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                    <Button asChild variant="secondary" size="sm">
                      <Link to={`/project/${project.id}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-smooth">
                        {project.title}
                      </h3>
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No projects found for the selected filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-tech-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Project Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              Real results from our partnership with amazing clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "150+",
                label: "Projects Delivered",
                description: "Successful projects across various industries",
              },
              {
                number: "98%",
                label: "Client Satisfaction",
                description: "Happy clients who recommend our services",
              },
              {
                number: "50M+",
                label: "Users Reached",
                description: "Combined user base of our applications",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <p className="text-muted-foreground text-sm">
                  {stat.description}
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
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/80">
            Let's discuss your project and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;