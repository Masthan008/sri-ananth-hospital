
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Calendar, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Group navigation items
  const navGroups = [
    {
      groupName: "About",
      items: [
        { name: "About Us", path: "/about" },
        { name: "Why Choose Us", path: "/why-choose-us" },
        { name: "Our Team", path: "/our-team" },
      ]
    },
    {
      groupName: "Services",
      items: [
        { name: "All Services", path: "/services" },
        { name: "Emergency Care", path: "/services/emergency" },
        { name: "Cardiology", path: "/services/cardiology" },
        { name: "Orthopedics", path: "/services/orthopedics" },
        { name: "Neurology", path: "/services/neurology" },
      ]
    },
    {
      groupName: "Patient Care",
      items: [
        { name: "Patient Information", path: "/patient-info" },
        { name: "Visiting Hours", path: "/visiting-hours" },
        { name: "Insurance", path: "/insurance" },
        { name: "Billing", path: "/billing" },
      ]
    },
    {
      groupName: "Resources",
      items: [
        { name: "News & Blog", path: "/news" },
        { name: "Gallery", path: "/gallery" },
        { name: "FAQs", path: "/faqs" },
        { name: "Testimonials", path: "/testimonials" },
      ]
    },
    {
      groupName: "Contact",
      items: [
        { name: "Contact Us", path: "/contact" },
        { name: "Book Appointment", path: "/appointment" },
        { name: "Find a Doctor", path: "/doctors" },
        { name: "Locations", path: "/locations" },
      ]
    }
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDropdown = (groupName: string) => {
    setActiveDropdown(activeDropdown === groupName ? null : groupName);
  };

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
          <div className="hidden md:flex items-center space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn(
                  "px-3 py-2 text-sm font-medium transition-colors hover:text-primary rounded-md",
                  isActive ? "text-primary bg-primary/5" : "text-foreground"
                )
              }
            >
              Home
            </NavLink>
            
            {navGroups.map((group) => (
              <div key={group.groupName} className="relative group">
                <button
                  onClick={() => toggleDropdown(group.groupName)}
                  className={cn(
                    "px-3 py-2 text-sm font-medium flex items-center space-x-1 rounded-md transition-colors",
                    group.items.some(item => location.pathname === item.path) 
                      ? "text-primary" 
                      : "text-foreground hover:text-primary"
                  )}
                >
                  <span>{group.groupName}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {/* Dropdown Menu */}
                <div 
                  className={cn(
                    "absolute left-0 mt-1 w-56 bg-white rounded-md shadow-lg overflow-hidden z-50 transition-all duration-200 transform origin-top",
                    activeDropdown === group.groupName 
                      ? "opacity-100 scale-100" 
                      : "opacity-0 scale-95 pointer-events-none"
                  )}
                >
                  <div className="py-1">
                    {group.items.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                          cn(
                            "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors",
                            isActive ? "bg-primary/5 text-primary font-medium" : ""
                          )
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
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

        {/* Mobile Sidebar Navigation */}
        <div 
          className={cn(
            "fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden overflow-y-auto",
            isOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img 
                  src="/assets/images/logo.png" 
                  alt="Sri Ananth Multi Specialty Hospital" 
                  className="h-10 w-auto object-contain"
                />
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <nav className="p-4 space-y-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn(
                  "flex items-center px-3 py-3 text-sm font-medium rounded-lg mb-1",
                  isActive 
                    ? "bg-primary/10 text-primary" 
                    : "text-gray-700 hover:bg-gray-100"
                )
              }
            >
              Home
            </NavLink>
            
            {navGroups.map((group) => (
              <div key={group.groupName} className="mb-1">
                <button
                  onClick={() => toggleDropdown(group.groupName)}
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-3 text-sm font-medium rounded-lg",
                    activeDropdown === group.groupName || 
                    group.items.some(item => location.pathname === item.path)
                      ? "text-primary bg-primary/5" 
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  <span>{group.groupName}</span>
                  <ChevronRight 
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      activeDropdown === group.groupName ? "rotate-90" : ""
                    )} 
                  />
                </button>
                
                <div 
                  className={cn(
                    "pl-4 mt-1 space-y-1 overflow-hidden transition-all duration-200",
                    activeDropdown === group.groupName 
                      ? "max-h-96 opacity-100" 
                      : "max-h-0 opacity-0"
                  )}
                >
                  {group.items.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        cn(
                          "block px-3 py-2 text-sm rounded-lg",
                          isActive 
                            ? "bg-primary/5 text-primary font-medium" 
                            : "text-gray-600 hover:bg-gray-50"
                        )
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="pt-4 mt-4 border-t">
              <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4 px-3">
                <Phone className="w-4 h-4" />
                <a href="tel:+919966151626" className="hover:text-primary transition-colors">
                  +91 9966151626
                </a>
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
          </nav>
        </div>
        
        {/* Overlay when mobile menu is open */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navigation;
