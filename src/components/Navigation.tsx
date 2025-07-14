
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "FAQs", path: "/faqs" },
    { name: "Contact", path: "/contact" },
  ];

  const handleBookAppointment = () => {
    // Navigate to contact page with appointment form
    window.location.href = '/contact#appointment';
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <div className="flex items-center space-x-3">
                <img 
                  src="/assets/images/logo.png" 
                  alt="Sri Ananth Multi Specialty Hospital" 
                  className="h-12 w-auto object-contain"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'flex flex-col justify-center';
                    const text = document.createElement('div');
                    text.className = 'text-primary font-bold text-2xl';
                    text.textContent = 'Sri Ananth';
                    const subtext = document.createElement('div');
                    subtext.className = 'text-sm text-muted-foreground font-medium';
                    subtext.textContent = 'Multi Specialty Hospital';
                    fallback.appendChild(text);
                    fallback.appendChild(subtext);
                    target.parentNode?.insertBefore(fallback, target);
                  }}
                />
                <div className="hidden md:block">
                  <div className="text-primary font-bold text-2xl">Sri Ananth</div>
                  <div className="text-sm text-muted-foreground font-medium">Multi Specialty Hospital</div>
                </div>
              </div>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium transition-colors hover:text-primary relative",
                    isActive ? "text-primary" : "text-foreground"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <a href="tel:+919966151626" className="hover:text-primary transition-colors">+91 9966151626</a>
            </div>
            <Button 
              className="bg-hospital-green hover:bg-hospital-green/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={handleBookAppointment}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Appointment
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t animate-fade-in">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "block px-4 py-2 text-sm font-medium transition-colors hover:text-primary rounded-lg",
                    isActive ? "text-primary bg-primary/5" : "text-foreground"
                  )
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <div className="px-4 pt-4 border-t">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                <Phone className="w-4 h-4" />
                <a href="tel:+919966151626" className="hover:text-primary transition-colors">+91 9966151626</a>
              </div>
              <Button 
                className="w-full bg-hospital-green hover:bg-hospital-green/90"
                onClick={() => {
                  handleBookAppointment();
                  setIsOpen(false);
                }}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
