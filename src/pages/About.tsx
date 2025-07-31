import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Users,
  Award,
  Target,
  Heart,
  Linkedin,
  Github,
  Twitter,
  Calendar,
} from "lucide-react";
import teamWorkspace from "@/assets/team-workspace.jpg";

const About = () => {
  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Started with a vision to transform digital experiences",
    },
    {
      year: "2020",
      title: "First Major Client",
      description: "Delivered our first enterprise mobile application",
    },
    {
      year: "2021",
      title: "Team Expansion",
      description: "Grew to 15+ talented developers and designers",
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description: "Won 'Best Mobile App Development Agency' award",
    },
    {
      year: "2023",
      title: "Global Reach",
      description: "Expanded services to clients across 20+ countries",
    },
    {
      year: "2024",
      title: "Innovation Leader",
      description: "Launched AI-powered development solutions",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      position: "CEO & Founder",
      bio: "10+ years in software development with expertise in mobile technologies",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop",
    },
    {
      name: "Michael Chen",
      position: "CTO",
      bio: "Former Google engineer specializing in scalable architecture",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    {
      name: "Emily Rodriguez",
      position: "Lead Designer",
      bio: "Award-winning UX/UI designer with a passion for user-centered design",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    {
      name: "David Kim",
      position: "Senior Developer",
      bio: "Full-stack developer with expertise in React and Node.js",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Lisa Thompson",
      position: "Project Manager",
      bio: "Agile methodology expert ensuring smooth project delivery",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    },
    {
      name: "Alex Martinez",
      position: "DevOps Engineer",
      bio: "Cloud infrastructure specialist with AWS and Docker expertise",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description:
        "We stay ahead of technology trends and implement cutting-edge solutions that give our clients a competitive advantage.",
    },
    {
      icon: Users,
      title: "Client Success",
      description:
        "Your success is our success. We work as an extension of your team to achieve your business objectives.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "We maintain the highest standards in code quality, testing, and user experience design.",
    },
    {
      icon: Heart,
      title: "Passionate Team",
      description:
        "Our team is passionate about technology and committed to delivering exceptional results.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-tech">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About TechCraft</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a passionate team of developers, designers, and strategists
            dedicated to crafting exceptional digital experiences that drive
            business growth and innovation.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={teamWorkspace}
                alt="Our team workspace"
                className="rounded-lg shadow-tech w-full"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses of all sizes with innovative software
                  solutions that drive growth, improve efficiency, and create
                  meaningful connections with their customers. We believe
                  technology should be accessible, powerful, and beautifully
                  designed.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading software development partner for businesses
                  looking to transform their digital presence. We envision a
                  world where technology seamlessly integrates with business
                  goals to create extraordinary user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-tech-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center p-6 border-0 shadow-tech hover:shadow-glow transition-smooth"
              >
                <CardContent className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our company's growth
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <Card className="p-6 border-0 shadow-tech">
                      <CardContent className="p-0">
                        <div className="flex items-center space-x-2 mb-2">
                          <Calendar className="h-4 w-4 text-accent" />
                          <span className="text-accent font-bold">
                            {milestone.year}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10 w-8 h-8 bg-accent rounded-full border-4 border-background" />
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-tech-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              The talented people behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-tech hover:shadow-glow transition-smooth overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/60 opacity-0 hover:opacity-100 transition-smooth flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="text-white hover:text-accent transition-smooth"
                      >
                        <Linkedin className="h-6 w-6" />
                      </a>
                      <a
                        href="#"
                        className="text-white hover:text-accent transition-smooth"
                      >
                        <Github className="h-6 w-6" />
                      </a>
                      <a
                        href="#"
                        className="text-white hover:text-accent transition-smooth"
                      >
                        <Twitter className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-accent font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "150+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "25+", label: "Team Members" },
              { number: "5+", label: "Years Experience" },
            ].map((stat, index) => (
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
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your project and see how we can help bring your vision
            to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;