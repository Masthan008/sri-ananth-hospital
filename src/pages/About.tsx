import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Award, 
  Users, 
  Clock, 
  Shield, 
  Star,
  Phone,
  Target,
  Eye
} from "lucide-react";
import { NavLink } from "react-router-dom";
import doctorProfile from "@/assets/doctor-profile.jpg";

const About = () => {
  const achievements = [
    {
      year: "2019",
      title: "Top Medical Award",
      description: "Recognized for excellence in patient care and medical services in Telangana"
    },
    {
      year: "2020",
      title: "Best Dental Award",
      description: "Dr. Gireesha Reddy received the Best Oral & Maxillofacial Surgeon award"
    },
    {
      year: "2021",
      title: "Emergency Care Excellence",
      description: "Awarded for outstanding 24/7 emergency medical services"
    },
    {
      year: "2022",
      title: "Patient Safety Certification",
      description: "Certified for maintaining highest standards of patient safety and care"
    },
    {
      year: "2023",
      title: "Community Health Champion",
      description: "Recognized for significant contribution to community health in Vikarabad"
    },
    {
      year: "2024",
      title: "Technology Excellence",
      description: "Awarded for implementing modern medical technology and digital healthcare"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with empathy, respect, and genuine concern for their well-being.",
      image: "/core-values/compassion.jpg"
    },
    {
      icon: Shield,
      title: "Excellence in Medicine",
      description: "We maintain the highest standards of medical practice and continuously improve our services.",
      image: "/core-values/excellence.jpg"
    },
    {
      icon: Users,
      title: "Patient-First Approach",
      description: "Every decision we make is centered around the needs and comfort of our patients.",
      image: "/core-values/patient-first.jpg"
    },
    {
      icon: Star,
      title: "Continuous Innovation",
      description: "We embrace new technologies and methods to provide better healthcare outcomes.",
      image: "/core-values/innovation.jpg"
    }
  ];

  return (
    <div className="font-inter">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-hospital-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            About Sri Ananth Hospital
          </h1>
          <p className="text-xl animate-slide-in-left">
            Committed to providing exceptional healthcare services with compassion, 
            expertise, and a patient-first approach since our establishment.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Sri Ananth Multi Specialty Hospital</h2> was established with a vision to provide 
                  world-class healthcare services to the people of Vikarabad and surrounding regions. 
                  Located in the heart of Telangana, our hospital has been serving the community 
                  with dedication and excellence.
                </p>
                <p>
                  What started as a small medical facility has grown into a comprehensive 
                  multi-specialty hospital offering a wide range of medical services. Our journey 
                  has been marked by continuous growth, technological advancement, and an 
                  unwavering commitment to patient care.
                </p>
                <p>
                  Today, we proudly serve thousands of patients annually, providing everything 
                  from routine check-ups to complex surgical procedures. Our team of experienced 
                  doctors, nurses, and healthcare professionals work tirelessly to ensure that 
                  every patient receives the best possible care.
                </p>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <Card className="bg-hospital-light-blue border-0">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                      <div className="text-sm text-gray-600">Patients Treated</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">5+</div>
                      <div className="text-sm text-gray-600">Years of Service</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">15+</div>
                      <div className="text-sm text-gray-600">Medical Specialists</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                      <div className="text-sm text-gray-600">Emergency Care</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission Card */}
            <Card className="animate-scale-in overflow-hidden border-0 shadow-lg group flex flex-col h-full">
              <div className="flex-1 overflow-hidden">
                <img 
                  src="/about-sections/mission.jpg" 
                  alt="Our Mission" 
                  className="w-full h-auto max-h-64 object-contain transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement?.parentElement;
                    if (parent) {
                      const icon = document.createElement('div');
                      icon.className = 'flex justify-center my-8';
                      icon.innerHTML = '<Target class="w-12 h-12 text-primary" />';
                      parent.insertBefore(icon, parent.firstChild);
                    }
                  }}
                />
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide accessible, affordable, and high-quality healthcare services 
                  to our community. We strive to deliver compassionate care with the latest 
                  medical technology and evidence-based practices, ensuring the best possible 
                  outcomes for our patients.
                </p>
              </CardContent>
            </Card>

            {/* Vision Card */}
            <Card className="animate-scale-in overflow-hidden border-0 shadow-lg group flex flex-col h-full">
              <div className="flex-1 overflow-hidden flex items-center justify-center bg-white p-4">
                <img 
                  src="/about-sections/vision.jpg" 
                  alt="Our Vision" 
                  className="w-auto h-auto max-h-64 object-contain transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement?.parentElement;
                    if (parent) {
                      const icon = document.createElement('div');
                      icon.className = 'flex justify-center my-8';
                      icon.innerHTML = '<Eye class="w-12 h-12 text-hospital-green" />';
                      parent.insertBefore(icon, parent.firstChild);
                    }
                  }}
                />
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-hospital-green mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading healthcare provider in the region, recognized for our 
                  excellence in patient care, medical innovation, and community service. 
                  We envision a healthier community where quality healthcare is accessible 
                  to all, regardless of their background or circumstances.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-lg transition-shadow animate-scale-in border-0 shadow-md"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="h-40 w-full mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={value.image} 
                      alt={value.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback to a solid color if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.style.background = '#f3f4f6';
                          parent.classList.add('flex', 'items-center', 'justify-center');
                          parent.innerHTML = `
                            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                              <${value.icon} class="w-8 h-8 text-primary" />
                            </div>
                          `;
                        }
                      }}
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline of Achievements */}
      <section className="py-16 bg-hospital-light-blue">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in">
            Our Journey of Excellence
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20"></div>
            
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } animate-slide-in-left`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-16 md:ml-0`}>
                    <Card className="shadow-lg border-0">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                            {achievement.year.slice(-2)}
                          </div>
                          <div>
                            <div className="text-lg font-bold text-primary">{achievement.year}</div>
                            <div className="text-sm text-gray-500">Year</div>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                        <p className="text-gray-600">{achievement.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in">
            Meet Our Managing Director
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img 
                src="/doctors/chief-medical-officer.jpg" 
                alt="Dr. Gireesha Reddy" 
                className="w-full max-w-md mx-auto lg:mx-0 rounded-2xl shadow-2xl object-cover h-[500px]"
              />
            </div>
            <div className="animate-slide-in-right">
              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-2">Dr. Gireesha Reddy</h3>
                  <p className="text-lg text-hospital-blue font-semibold mb-4">
                    BDS, MDS, (MBBS) – Oral & Maxillofacial Surgeon
                  </p>
                  <div className="space-y-4 text-gray-600 mb-6">
                    <p>
                      Dr. Gireesha Reddy is a highly experienced Oral & Maxillofacial Surgeon with 
                      over 15 years of expertise in complex dental and facial surgeries. She leads 
                      our dental department with a commitment to excellence and patient-centered care.
                    </p>
                    <p>
                      Her areas of expertise include dental implants, wisdom tooth extraction, 
                      corrective jaw surgery, facial trauma treatment, and cosmetic dental procedures. 
                      Dr. Reddy is known for her gentle approach and comprehensive patient care.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
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
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-16 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-red-500 text-white p-8 rounded-2xl animate-scale-in">
            <Clock className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">24/7 Emergency Support</h2>
            <p className="text-xl mb-6">
              Our emergency department is always ready to provide immediate medical care 
              with experienced doctors and modern life-saving equipment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-red-500 border-white hover:bg-gray-100">
                <a href="tel:+918499995552">Emergency: +91 84999-95552</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-red-500">
                <NavLink to="/contact">Contact Us</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;