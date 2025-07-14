import { Heart, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div className="space-y-4">
            <div className="flex flex-col items-start space-y-3">
              <div className="flex items-center space-x-3">
                <img 
                  src="/assets/images/logo.png" 
                  alt="Sri Ananth Multi Specialty Hospital" 
                  className="h-12 w-auto object-contain"
                />
                <div>
                  <h3 className="text-2xl font-bold text-primary">Sri Ananth</h3>
                  <p className="text-sm text-muted-foreground font-medium">Multi Specialty Hospital</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Caring for Health, Caring for You. Providing comprehensive healthcare services with compassion and excellence.
            </p>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-red-600" />
              <span className="text-lg font-semibold text-red-600">24/7 Emergency Service Available</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="/faqs" className="text-muted-foreground hover:text-primary transition-colors">FAQs</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p>H.No 4-1-315/3, Indirabai Colony</p>
                  <p>Vikarabad, Telangana - 501101</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+91 9966151626</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+91 8499995554</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">SriAnanthMultiSpecialtyHospital@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Health Updates</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to receive health tips and hospital updates.
            </p>
            <div className="space-y-2">
              <Input placeholder="Your email address" type="email" />
              <Button className="w-full" size="sm">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Sri Ananth Multi Specialty Hospital. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;