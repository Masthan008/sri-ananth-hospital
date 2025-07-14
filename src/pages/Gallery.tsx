import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ChevronUp } from "lucide-react";

type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: string;
};

const Gallery = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    // Show/hide scroll to top button
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sample gallery images - replace with your actual images
  const galleryImages: GalleryImage[] = [
    {
      id: '1',
      src: '/images/gallery/hospital-1.jpg',
      alt: 'Hospital Building Exterior',
      category: 'facility'
    },
    {
      id: '2',
      src: '/images/gallery/doctors-1.jpg',
      alt: 'Our Medical Team',
      category: 'staff'
    },
    {
      id: '3',
      src: '/images/gallery/operation-theater.jpg',
      alt: 'Modern Operation Theater',
      category: 'facility'
    },
    {
      id: '4',
      src: '/images/gallery/emergency-room.jpg',
      alt: 'Emergency Room',
      category: 'facility'
    },
    {
      id: '5',
      src: '/images/gallery/doctor-patient.jpg',
      alt: 'Doctor with Patient',
      category: 'staff'
    },
    {
      id: '6',
      src: '/images/gallery/event-1.jpg',
      alt: 'Health Camp Event',
      category: 'events'
    },
    {
      id: '7',
      src: '/images/gallery/lab.jpg',
      alt: 'Modern Laboratory',
      category: 'facility'
    },
    {
      id: '8',
      src: '/images/gallery/patient-room.jpg',
      alt: 'Comfortable Patient Room',
      category: 'facility'
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-hospital-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl md:text-2xl opacity-90">A glimpse into our world-class facilities and dedicated team</p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === 'all' 
                  ? 'bg-hospital-blue text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveCategory('facility')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === 'facility' 
                  ? 'bg-hospital-blue text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Facilities
            </button>
            <button
              onClick={() => setActiveCategory('staff')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === 'staff' 
                  ? 'bg-hospital-blue text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Medical Team
            </button>
            <button
              onClick={() => setActiveCategory('events')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === 'events' 
                  ? 'bg-hospital-blue text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Events
            </button>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                data-aos="fade-up"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'w-full h-64 bg-gray-200 flex items-center justify-center';
                    fallback.textContent = 'Image not available';
                    target.parentNode?.insertBefore(fallback, target);
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-hospital-blue text-white flex items-center justify-center shadow-lg hover:bg-hospital-blue-dark transition-colors z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Gallery;
