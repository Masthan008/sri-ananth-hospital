import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "react-router-dom";
import { 
  Heart, 
  Shield, 
  Clock, 
  Users, 
  Award, 
  Phone,
  Star,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState } from "react";
import hospitalHero from "@/assets/hospital-hero-v2.jpg";
import doctorProfile from "@/assets/doctor-profile.jpg";

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      text: "Excellent care and professional staff. Dr. Gireesha Reddy provided outstanding dental treatment.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      text: "The hospital staff is very caring and the facilities are top-notch. Highly recommended!",
      rating: 5
    },
    {
      name: "Venkat Rao",
      text: "24/7 emergency service saved my life. Forever grateful to the entire team.",
      rating: 5
    }
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: "24/7 Emergency Care",
      description: "Round-the-clock medical emergency services with expert doctors and modern equipment."
    },
    {
      icon: Shield,
      title: "Experienced Doctors",
      description: "Highly qualified specialists with years of experience in their respective fields."
    },
    {
      icon: Heart,
      title: "Comprehensive Care",
      description: "Complete healthcare solutions under one roof with state-of-the-art facilities."
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in healthcare with multiple medical awards and certifications."
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const specialties = [
    { name: "Cardiology", image: "/lovable-uploads/CARDIOLOGY .png" },
    { name: "Dental", image: "/lovable-uploads/DENTAL .png" },
    { name: "General", image: "/lovable-uploads/GENERAL .png" },
    { name: "Neurology", image: "/lovable-uploads/NEUROLOGY .png" },
    { name: "Orthopedics", image: "/lovable-uploads/ORTHOPEDICS .png" },
    { name: "Surgery", image: "/lovable-uploads/SURGERY .png" },
    { name: "Urology", image: "/lovable-uploads/UROLOGY .png" },
  ];

  return (
    <div className="font-inter">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${hospitalHero})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Caring for Health, Caring for You
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-in-left">
            24/7 Emergency Service Available
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-right">
            <Button size="lg" asChild className="text-lg px-8 py-3">
              <NavLink to="/contact">Book Now</NavLink>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-3 bg-white/10 border-white text-white hover:bg-white hover:text-gray-900">
              <NavLink to="/services">View Specialties</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section className="py-16 bg-hospital-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img 
                src={doctorProfile} 
                alt="Dr. Gireesha Reddy" 
                className="w-full max-w-md mx-auto lg:mx-0 rounded-2xl shadow-2xl"
              />
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Meet Our Chief Doctor
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Gireesha Reddy</h3>
                <p className="text-lg text-hospital-blue font-semibold mb-4">
                  BDS, MDS, (MBBS) – Oral & Maxillofacial Surgeon
                </p>
                <p className="text-gray-600 mb-6">
                  With over 15 years of experience in oral and maxillofacial surgery, 
                  Dr. Gireesha Reddy leads our dental department with expertise in complex 
                  surgical procedures and patient care.
                </p>
                <div className="flex items-center space-x-4">
                  <Button asChild>
                    <a href="tel:+918106121344" className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>+91 81061 21344</span>
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <NavLink to="/contact">Book Consultation</NavLink>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 animate-fade-in">
            About Sri Ananth Multi-Specialty Hospital
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 animate-slide-in-left">
            Located in Vikarabad, Telangana, Sri Ananth Multi-Specialty Hospital is committed to 
            providing comprehensive healthcare services with a patient-first approach. Our state-of-the-art 
            facility combines modern medical technology with compassionate care.
          </p>
          <Button asChild size="lg" className="animate-scale-in">
            <NavLink to="/about">Learn More About Us</NavLink>
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in">
            Why Choose Sri Ananth Hospital?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-scale-in border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Specialties Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in">
            Our Specialties
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group rounded-lg">
                <div className="relative h-56">
                  <img 
                    src={specialty.image} 
                    alt={specialty.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-bold text-white">{specialty.name}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 animate-fade-in">
            What Our Patients Say
          </h2>
          <div className="relative">
            <Card className="bg-white/95 backdrop-blur animate-scale-in">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <h4 className="text-xl font-semibold text-primary">
                  {testimonials[currentTestimonial].name}
                </h4>
              </CardContent>
            </Card>
            
            {/* Navigation Buttons */}
            <div className="flex justify-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="bg-white/20 border-white text-white hover:bg-white hover:text-primary"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="bg-white/20 border-white text-white hover:bg-white hover:text-primary"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-hospital-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in">
            Ready to Schedule Your Appointment?
          </h2>
          <p className="text-xl text-white/90 mb-8 animate-slide-in-left">
            Our medical experts are ready to provide you with the best healthcare services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-right">
            <Button size="lg" variant="outline" asChild className="bg-white text-hospital-green border-white hover:bg-gray-100">
              <NavLink to="/contact">Book Appointment</NavLink>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white hover:text-hospital-green">
              <a href="tel:+918499995552">Call Now: +91 84999-95552</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;