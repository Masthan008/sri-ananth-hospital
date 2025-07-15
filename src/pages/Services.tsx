
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  Activity,
  User,
  Heart,
  Baby,
  HeartPulse,
  Pill
} from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, [location]);

  const services = [
    {
      id: "general-medicine",
      icon: Stethoscope,
      image: "/service-images/GENERAL MEDICINE.png",
      title: "General Medicine",
      description: "Comprehensive primary healthcare services including routine check-ups, preventive care, and treatment of common medical conditions. Our experienced physicians provide personalized care for patients of all ages.",
      features: ["Routine Health Check-ups", "Chronic Disease Management", "Preventive Care", "Emergency Consultations"]
    },
    {
      id: "dental",
      icon: User,
      image: "/service-images/DENTAL .png",
      title: "Dental Care",
      description: "Complete dental care services from routine cleanings to complex oral surgeries. Led by Dr. Gireesha Reddy and Dr. Srujan Kumar, our dental department offers state-of-the-art treatments with the latest technology.",
      features: ["Dental Implants", "Cosmetic Dentistry", "Periodontal Treatment", "Emergency Dental Care"]
    },
    {
      id: "gynecology",
      icon: Heart,
      image: "/service-images/GYNECOLOGY.png",
      title: "Gynecology",
      description: "Comprehensive women's health services including routine check-ups, prenatal care, and treatment of gynecological conditions. Led by Dr. Pavani, our gynecology department provides expert care for women of all ages.",
      features: ["Routine Check-ups", "Prenatal & Postnatal Care", "Family Planning", "Menopause Management"]
    },
    {
      id: "urology",
      icon: Activity,
      image: "/service-images/UROLOGY.png",
      title: "Urology",
      description: "Specialized treatment for urological conditions affecting the urinary tract and male reproductive system. Our urologists provide both medical and surgical treatments with minimal invasive techniques.",
      features: ["Kidney Stone Treatment", "Prostate Care", "Urinary Tract Infections", "Male Infertility"]
    },
    {
      id: "pulmonology",
      icon: Activity,
      image: "/service-images/PULMONOLGY.png",
      title: "Pulmonology",
      description: "Specialized care for respiratory disorders including asthma, COPD, and sleep apnea. Our pulmonologists provide comprehensive diagnosis and treatment for all lung-related conditions.",
      features: ["Asthma Management", "COPD Treatment", "Sleep Studies", "Lung Function Tests"]
    },
    {
      id: "pediatrics",
      icon: Baby,
      image: "/service-images/PEDIATRICS.png",
      title: "Pediatrics",
      description: "Specialized healthcare for infants, children, and adolescents. Our pediatricians provide compassionate care in a child-friendly environment.",
      features: ["Well-baby Check-ups", "Vaccinations", "Childhood Illnesses", "Growth & Development Monitoring"]
    },
    {
      id: "infertility",
      icon: HeartPulse,
      image: "/service-images/INFERTILITY.png",
      title: "Infertility",
      description: "Comprehensive fertility evaluation and treatment options for couples facing conception challenges. Led by Dr. Pavani, our fertility specialists provide personalized care and advanced reproductive technologies.",
      features: ["Fertility Testing", "IUI/IVF", "Fertility Preservation", "PCOS Management"]
    }
  ];

  return (
    <div className="font-inter">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-hospital-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Our Medical Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto animate-slide-in-left">
            Comprehensive healthcare services delivered with expertise and compassion. 
            We offer a wide range of medical specialties to meet all your healthcare needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                id={service.id}
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scale-in border-0 shadow-lg overflow-hidden bg-white"
                style={{ animationDelay: `${index * 0.1}s` }} scroll-mt-20
              >
                <CardContent className="p-0">
                  {/* Image Container */}
                  <div className="relative pt-[60%] bg-gradient-to-br from-hospital-light-blue to-hospital-light-green overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-contain max-w-[90%] max-h-[90%]"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement?.parentElement;
                          if (parent) {
                            parent.style.background = '#f3f4f6';
                            parent.classList.add('flex', 'items-center', 'justify-center');
                          }
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
                  </div>
                  
                  {/* Content Container */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-4 text-primary group-hover:text-hospital-green transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-hospital-green rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <Button 
                      className="w-full group-hover:bg-hospital-green group-hover:border-hospital-green transition-all duration-300" 
                      variant="outline"
                      onClick={() => {
                        // Scroll to contact form or open appointment modal
                        window.location.href = '/contact';
                      }}
                    >
                      Book Appointment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services CTA */}
      <section className="py-16 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-red-500 text-white p-8 rounded-2xl animate-scale-in shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Emergency Services Available 24/7</h2>
            <p className="text-xl mb-6">
              Our emergency department is equipped to handle all medical emergencies with expert doctors and modern equipment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-red-500 border-white hover:bg-gray-100 transition-all duration-300 mx-auto block"
                onClick={() => window.open('tel:+918499995554')}
              >
                <span>Emergency: +91 84999-95552</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="py-16 bg-hospital-light-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 animate-fade-in">
            Schedule Your Consultation Today
          </h2>
          <p className="text-lg text-gray-600 mb-8 animate-slide-in-left">
            Our medical experts are ready to provide you with personalized care and treatment.
          </p>
          <Button 
            size="lg" 
            className="animate-scale-in bg-hospital-green hover:bg-hospital-green/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => window.location.href = '/contact'}
          >
            Book Appointment Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
