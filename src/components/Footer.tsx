import { Link } from "react-router-dom";
import { Code2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 font-bold text-xl">
              <Code2 className="h-8 w-8 text-accent" />
              <span>TechCraft</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Crafting modern mobile apps and websites that empower businesses
              with cutting-edge software solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-accent transition-smooth"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-accent transition-smooth"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-accent transition-smooth"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-accent transition-smooth"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { path: "/", label: "Home" },
                { path: "/services", label: "Services" },
                { path: "/portfolio", label: "Portfolio" },
                { path: "/about", label: "About Us" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-2">
              {[
                "Mobile App Development",
                "Web Development",
                "UI/UX Design",
                "Backend APIs",
              ].map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/80 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">
                  hello@techcraft.com
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">
                  San Francisco, CA
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} TechCraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;