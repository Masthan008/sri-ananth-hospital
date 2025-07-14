import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "react-router-dom";
import { 
  Heart, 
  Shield, 
  Clock, 
  Award,
  Stethoscope,
  Users,
  Activity,
  HeartPulse,
  Star,
  CheckCircle2,
  Phone
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Stethoscope,
      title: "Expert Medical Professionals",
      description: "Our team of highly qualified doctors and healthcare professionals are dedicated to providing the best medical care."
    },
    {
      icon: HeartPulse,
      title: "Compassionate Care",
      description: "We treat our patients with empathy, respect, and understanding, ensuring a comfortable healthcare experience."
    },
    {
      icon: Clock,
      title: "24/7 Emergency Services",
      description: "Round-the-clock emergency care with rapid response teams and state-of-the-art facilities."
    },
    {
      icon: Activity,
      title: "Advanced Technology",
      description: "Equipped with the latest medical technology for accurate diagnosis and effective treatment."
    },
    {
      icon: Users,
      title: "Patient-Centric Approach",
      description: "Personalized treatment plans tailored to meet individual patient needs and preferences."
    },
    {
      icon: Award,
      title: "Award-Winning Facility",
      description: "Recognized for excellence in healthcare delivery and patient satisfaction."
    }
  ];

  const stats = [
    { value: "20+", label: "Years of Experience" },
    { value: "50+", label: "Expert Doctors" },
    { value: "1000+", label: "Happy Patients" },
    { value: "24/7", label: "Emergency Service" }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Patient",
      content: "The care I received was exceptional. The doctors were attentive and the staff was very supportive throughout my treatment.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Patient's Family",
      content: "The hospital's facilities are top-notch and the medical team is highly professional. Highly recommended!",
      rating: 5
    },
    {
      name: "Dr. Suresh Patel",
      role: "Visiting Consultant",
      content: "I've worked with many hospitals, and the level of care and professionalism here is outstanding.",
      rating: 5
    }
  ];

  return (
    <div className="font-inter">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-hospital-blue to-hospital-light-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Why Choose Sri Ananth Hospital?
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto">
            Experience healthcare that puts you first with our exceptional medical services and compassionate care.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Commitment to Excellence
            </h2>
            <div className="w-24 h-1 bg-hospital-blue mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="text-center p-8 hover:shadow-xl transition-shadow duration-300 border-0 shadow-md"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                >
                  <div className="w-16 h-16 rounded-full bg-hospital-light-blue/20 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-hospital-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="p-6"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div className="text-4xl font-bold text-hospital-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Our Patients Say
            </h2>
            <div className="w-24 h-1 bg-hospital-blue mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div className="font-medium text-gray-800">
                  {testimonial.name}
                  <span className="block text-sm text-gray-500 font-normal">{testimonial.role}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-hospital-blue to-hospital-light-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Difference in Healthcare
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied patients who trust Sri Ananth Hospital for their healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild className="bg-white text-hospital-blue hover:bg-gray-100">
              <NavLink to="/contact">Book an Appointment</NavLink>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="tel:+919966151626" className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Emergency: +91 9966151626
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
