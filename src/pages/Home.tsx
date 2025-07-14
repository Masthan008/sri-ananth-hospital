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
    },
    {
      name: "Anjali Mehta",
      text: "The cardiology department is exceptional. Dr. Sharma's expertise and care made all the difference in my recovery.",
      rating: 5
    },
    {
      name: "Suresh Patel",
      text: "Clean facilities, minimal wait times, and compassionate care. The neurology team provided excellent treatment for my condition.",
      rating: 5
    },
    {
      name: "Srinivas V",
      text: "This is a highly equipped hospital relative to this place (Vikarabad). We visited the gynecologist Dr. Pavani at this hospital. She is highly qualified and experienced. We are fully satisfied with her treatment. This hospital's gynecology dept has better facilities compared to many hospitals in Hyderabad. If you are looking for best treatment in decent cost, this is the best hospital.",
      rating: 5
    }
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: "24/7 Emergency Care",
      description: "Round-the-clock medical emergency services with expert doctors and modern equipment.",
      image: "/feature-images/EMERGENCY CARE .png"
    },
    {
      icon: Shield,
      title: "Experienced Doctors",
      description: "Highly qualified specialists with years of experience in their respective fields.",
      image: "/feature-images/EXEPERINECED DOCTORS .png"
    },
    {
      icon: Heart,
      title: "Comprehensive Care",
      description: "Complete healthcare solutions under one roof with state-of-the-art facilities.",
      image: "/feature-images/COMPEHENSIVE CARE .png"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in healthcare with multiple medical awards and certifications.",
      image: "/images/awards-bg.png"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const specialties = [
    { name: "General Medicine", image: "/service-images/GENERAL MEDICINE.png", id: "general-medicine" },
    { name: "Dental", image: "/service-images/DENTAL .png", id: "dental" },
    { name: "Urology", image: "/service-images/UROOGY .png", id: "urology" },
    { name: "Neurology", image: "/service-images/NEUROLOGY .png", id: "neurology" },
    { name: "Cardiology", image: "/service-images/CARDIOLOGY .png", id: "cardiology" },
    { name: "Orthopedics", image: "/service-images/ORTHOPEDICS .png", id: "orthopedics" },
    { name: "Audiology", image: "/service-images/AUDIOLOGY .png", id: "audiology" },
    { name: "General Surgery", image: "/service-images/GENERAL SURGERY .png", id: "general-surgery" },
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

      {/* Doctors Profile Section */}
      <section className="py-16 bg-hospital-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Meet Our Expert Doctors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dr. Gireesha Reddy */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-scale-in">
              <div className="h-80 w-full overflow-hidden bg-gray-50">
                <div className="w-full h-full flex items-center justify-center p-2">
                  <img 
                    src="/doctors/dr-gireesha.jpg" 
                    alt="Dr. Gireesha Reddy" 
                    className="h-full w-full object-cover"
                    style={{ objectPosition: 'top center' }}
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Gireesha Reddy</h3>
                <p className="text-lg text-hospital-blue font-semibold mb-4">
                  BDS, MDS [MBBS]
                </p>
                <p className="text-gray-600 mb-1 font-medium">Sri Ananth Multispeciality Hospital</p>
                <p className="text-gray-500 text-sm mb-4">Managing Director</p>
                <div className="flex items-center space-x-4">
                  <Button asChild className="flex-1">
                    <a href="tel:+918106121344" className="flex items-center justify-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>Call Now</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Dr. Pavani */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="h-80 w-full overflow-hidden bg-gray-50">
                <div className="w-full h-full flex items-center justify-center p-2">
                  <img 
                    src="/doctors/dr-pavani.jpg" 
                    alt="Dr. Pavani" 
                    className="h-full w-full object-cover"
                    style={{ objectPosition: 'top center' }}
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Pavani</h3>
                <p className="text-lg text-hospital-blue font-semibold mb-4">
                  MBBS, DGO, DNB<br />
                  DRM (Germany)<br />
                  Diploma in Reproductive Medicine
                </p>
                <p className="text-gray-600 mb-1 font-medium">Gynecologist and Infertility Specialist</p>
                <div className="flex items-center space-x-4 mt-4">
                  <Button asChild className="flex-1">
                    <a href="tel:+918106121344" className="flex items-center justify-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>Call Now</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Dr. Srujan */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="h-80 w-full overflow-hidden bg-gray-50">
                <div className="w-full h-full flex items-center justify-center p-2">
                  <img 
                    src="/doctors/dr-srujan.jpg" 
                    alt="Dr. Srujan" 
                    className="h-full w-full object-cover"
                    style={{ objectPosition: 'top center' }}
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Srujan</h3>
                <p className="text-lg text-hospital-blue font-semibold mb-4">
                  MBBS, MD - General Medicine
                </p>
                <p className="text-gray-600 mb-1 font-medium">Consultant Physician</p>
                <p className="text-gray-500 text-sm mb-4">General Medicine Specialist</p>
                <div className="flex items-center space-x-4">
                  <Button asChild className="flex-1">
                    <a href="tel:+918106121344" className="flex items-center justify-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>Call Now</span>
                    </a>
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
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Sri Ananth Multi Specialty Hospital</h2>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 animate-slide-in-left">
            Located in Vikarabad, Telangana, Sri Ananth Multi Specialty Hospital is committed to 
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
              <Card key={index} className={`group text-center hover:shadow-xl transition-all animate-scale-in border-0 shadow-md overflow-hidden h-full flex flex-col ${index === 3 ? 'relative' : 'bg-white'}`}>
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="min-w-full min-h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback to a solid color if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement?.parentElement;
                        if (parent) {
                          parent.style.background = index === 3 ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' : '#f3f4f6';
                        }
                      }}
                    />
                  </div>
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-center -mt-12 mb-4 relative z-20">
                    <div className={`w-16 h-16 ${index === 3 ? 'bg-amber-100' : 'bg-white'} rounded-full flex items-center justify-center shadow-lg`}>
                      <item.icon className={`w-8 h-8 ${index === 3 ? 'text-amber-600' : 'text-primary'}`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 flex-1">{item.description}</p>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => (
              <NavLink 
                key={index} 
                to={`/services#${specialty.id}`}
                className="group block text-center animate-scale-in h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md h-full flex flex-col">
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={specialty.image} 
                      alt={specialty.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback to a solid color if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.style.background = '#f3f4f6';
                        }
                      }}
                    />
                  </div>
                  <h3 className="text-lg font-semibold p-4 text-center text-gray-800 group-hover:text-hospital-green transition-colors duration-300 bg-white border-t border-gray-100">
                    {specialty.name}
                  </h3>
                </Card>
              </NavLink>
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