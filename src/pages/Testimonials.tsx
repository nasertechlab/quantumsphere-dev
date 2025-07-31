import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Star, Quote, ArrowRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "GreenTech Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop",
      rating: 5,
      text: "TechCraft delivered an exceptional mobile application that exceeded our expectations. Their attention to detail and commitment to sustainability made them the perfect partner for our project. The app has been downloaded over 50,000 times in the first month alone.",
      project: "EcoTrack Mobile App",
      category: "Mobile Development",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      position: "CTO",
      company: "FinanceHub Inc",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      rating: 5,
      text: "The financial dashboard TechCraft built for us has transformed how our clients interact with their data. The real-time analytics and intuitive interface have increased user engagement by 40%. Their technical expertise is unmatched.",
      project: "FinanceHub Dashboard",
      category: "SaaS Platform",
    },
    {
      id: 3,
      name: "Emily Chen",
      position: "Founder",
      company: "ArtisanMarket",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      rating: 5,
      text: "Our e-commerce platform has seen incredible growth since launching. TechCraft's expertise in user experience design and payment integration made the entire process seamless. Sales have increased by 300% since launch.",
      project: "ArtisanMarket E-commerce",
      category: "E-commerce",
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Marketing Director",
      company: "TechCorp Industries",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      rating: 5,
      text: "The corporate website TechCraft designed for us perfectly captures our brand identity. The interactive animations and responsive design have significantly improved our online presence and lead generation.",
      project: "TechCorp Website",
      category: "Web Development",
    },
    {
      id: 5,
      name: "Lisa Martinez",
      position: "Product Manager",
      company: "FitTracker Pro",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
      rating: 5,
      text: "The fitness tracking app exceeded all our requirements. The social features and analytics dashboard have created an engaged community of users. The app maintains a 4.9-star rating with over 100,000 active users.",
      project: "FitTracker Mobile",
      category: "Mobile Development",
    },
    {
      id: 6,
      name: "Robert Kim",
      position: "CEO",
      company: "CloudSync Solutions",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      rating: 5,
      text: "TechCraft's cloud-based platform has revolutionized how our enterprise clients manage their data. The scalability and security features they implemented have made us an industry leader in file synchronization.",
      project: "CloudSync Platform",
      category: "SaaS Platform",
    },
  ];

  const stats = [
    { number: "98%", label: "Client Satisfaction Rate" },
    { number: "150+", label: "Successful Projects" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "50+", label: "Happy Clients" },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-tech">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about their experience working with TechCraft.
          </p>
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

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="relative border-0 shadow-tech hover:shadow-glow transition-smooth overflow-hidden"
              >
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-accent/20 mb-4" />
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Project Info */}
                  <div className="mb-6">
                    <Badge variant="secondary" className="text-xs">
                      {testimonial.category}
                    </Badge>
                    <p className="text-sm font-medium mt-2">
                      Project: {testimonial.project}
                    </p>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.position}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-tech-gray-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-tech p-12 text-center">
            <CardContent className="p-0">
              <Quote className="h-12 w-12 text-accent/20 mx-auto mb-6" />
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-6 w-6 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-2xl font-medium italic mb-8">
                "Working with TechCraft has been a game-changer for our
                business. Their innovative approach and technical expertise
                delivered results beyond our expectations. We've seen a 400%
                increase in user engagement since launching our new platform."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop"
                  alt="Featured client"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-semibold text-lg">James Wilson</div>
                  <div className="text-muted-foreground">
                    CEO, Innovation Labs
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              Real results from our partnership with amazing clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: "300%",
                description: "Average increase in user engagement",
                icon: "📈",
              },
              {
                metric: "50K+",
                description: "Average app downloads in first month",
                icon: "📱",
              },
              {
                metric: "98%",
                description: "Client retention rate",
                icon: "🎯",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{item.icon}</div>
                <div className="text-4xl font-bold text-accent mb-2">
                  {item.metric}
                </div>
                <p className="text-muted-foreground">{item.description}</p>
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
            Join our growing list of satisfied clients and let us help you
            achieve your digital goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/portfolio">View Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;