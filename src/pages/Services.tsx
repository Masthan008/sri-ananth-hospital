
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Brain, 
  Stethoscope, 
  Bone, 
  Activity,
  User,
  Ear,
  Scissors
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
      }, 100); // Small delay to ensure the page has rendered
    }
  }, [location]);
  const services = [
    {
      id: "general-medicine",
      icon: Stethoscope,
      image: "/lovable-uploads/GENERAL .png",
      title: "General Medicine",
      description: "Comprehensive primary healthcare services including routine check-ups, preventive care, and treatment of common medical conditions. Our experienced physicians provide personalized care for patients of all ages.",
      features: ["Routine Health Check-ups", "Chronic Disease Management", "Preventive Care", "Emergency Consultations"]
    },
    {
      id: "dental",
      icon: User,
      image: "/lovable-uploads/DENTAL .png",
      title: "Dental",
      description: "Complete dental care services from routine cleanings to complex oral surgeries. Led by Dr. Gireesha Reddy, our dental department offers state-of-the-art treatments with the latest technology.",
      features: ["Oral Surgery", "Dental Implants", "Cosmetic Dentistry", "Emergency Dental Care"]
    },
    {
      id: "urology",
      icon: Activity,
      image: "/lovable-uploads/UROLOGY .png",
      title: "Urology",
      description: "Specialized treatment for urological conditions affecting the urinary tract and male reproductive system. Our urologists provide both medical and surgical treatments with minimal invasive techniques.",
      features: ["Kidney Stone Treatment", "Prostate Care", "Urinary Tract Infections", "Male Infertility"]
    },
    {
      id: "cardiology",
      icon: Heart,
      image: "/lovable-uploads/CARDIOLOGY .png",
      title: "Cardiology",
      description: "Comprehensive heart care services including diagnosis, treatment, and prevention of cardiovascular diseases. Our cardiac team provides both interventional and non-interventional treatments.",
      features: ["Heart Disease Prevention", "ECG & Echo Services", "Cardiac Rehabilitation", "Emergency Cardiac Care"]
    },
    {
      id: "orthopedics",
      icon: Bone,
      image: "/lovable-uploads/ORTHOPEDICS .png",
      title: "Orthopedics",
      description: "Treatment of musculoskeletal conditions including bones, joints, ligaments, and muscles. Our orthopedic specialists provide both surgical and non-surgical treatments.",
      features: ["Joint Replacement", "Fracture Treatment", "Sports Medicine", "Arthritis Management"]
    },
    {
      id: "audiology",
      icon: Ear,
      image: "/lovable-uploads/AUDIOLOGY .png",
      title: "Audiology",
      description: "Complete hearing and balance care services including hearing assessments, hearing aid fittings, and treatment of ear-related disorders.",
      features: ["Hearing Tests", "Hearing Aid Services", "Tinnitus Treatment", "Balance Disorders"]
    },
    {
      id: "general-surgery",
      icon: Scissors,
      image: "/lovable-uploads/SURGERY .png",
      title: "General Surgery",
      description: "Advanced surgical services across multiple specialties with minimally invasive techniques. Our surgical team ensures the highest standards of safety and patient care.",
      features: ["Laparoscopic Surgery", "Emergency Surgery", "Day Care Procedures", "Post-operative Care"]
    },
    {
      id: "gynecology",
      icon: Heart,
      image: "/lovable-uploads/GYNECOLOGY.png",
      title: "Gynecology",
      description: "Comprehensive women's health services including routine check-ups, prenatal care, and treatment of gynecological conditions. Our expert gynecologists provide personalized care for women of all ages.",
      features: ["Routine Check-ups", "Prenatal & Postnatal Care", "Family Planning", "Menopause Management"]
    },
    {
      id: "pulmonology",
      icon: Activity,
      image: "/lovable-uploads/PULMONOLOGY.png",
      title: "Pulmonology",
      description: "Specialized care for respiratory disorders and lung-related conditions. Our pulmonologists use advanced diagnostic tools to provide effective treatment for asthma, COPD, and other lung diseases.",
      features: ["Asthma Management", "COPD Treatment", "Sleep Studies", "Lung Function Tests"]
    },
    {
      id: "pediatrics",
      icon: Heart,
      image: "/lovable-uploads/PEDIATRICS.png",
      title: "Pediatrics",
      description: "Compassionate healthcare services for infants, children, and adolescents. Our pediatricians provide preventive care, immunizations, and treatment for childhood illnesses.",
      features: ["Well-baby Check-ups", "Vaccinations", "Growth Monitoring", "Childhood Illness Care"]
    },
    {
      id: "critical-care",
      icon: Heart,
      image: "/lovable-uploads/CRITICAL CARE.png",
      title: "Critical Care",
      description: "24/7 specialized care for critically ill patients in our state-of-the-art ICU. Our critical care team provides advanced life support and monitoring for patients with life-threatening conditions.",
      features: ["24/7 Monitoring", "Ventilator Support", "Hemodynamic Monitoring", "Post-operative Care"]
    },
    {
      id: "infertility",
      icon: Heart,
      image: "/lovable-uploads/INFERTILITY.png",
      title: "Infertility",
      description: "Comprehensive fertility evaluation and treatment options for couples facing conception challenges. Our fertility specialists offer personalized treatment plans including IUI, IVF, and other assisted reproductive technologies.",
      features: ["Fertility Assessment", "IUI/IVF", "Fertility Preservation", "Hormonal Treatment"]
    },
    {
      id: "maxillofacial",
      icon: User,
      image: "/lovable-uploads/MAXILLOFACIAL.png",
      title: "Maxillofacial Surgery",
      description: "Specialized surgical treatment for diseases, injuries, and defects in the head, neck, face, jaws, and hard and soft tissues of the oral and maxillofacial region.",
      features: ["Dental Implants", "Jaw Surgery", "Facial Trauma Care", "Corrective Jaw Surgery"]
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
