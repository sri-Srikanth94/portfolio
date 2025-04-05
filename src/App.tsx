import React, { useState, useCallback, useEffect } from 'react';
import { Camera, Mail, Phone, MapPin, X, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const portfolioImages = [
    {
      url: "/images/firstPage/firstPageImg1.jpg",
      category: "Nature"
    },
    {
      url: "/images/weddings/Engagement-329.jpg",
      category: "Portrait"
    },
    {
      url: "/images/weddings/Pellikoduku Camera 2-52.jpg",
      category: "Urban"
    },
    {
      url: "/images/weddings/img9.jpg",
      category: "Events"
    },
    {
      url: "/images/weddings/S+V (231).jpg",
      category: "Landscape"
    },
    {
      url: "/images/weddings/WedGallery/wedgallery-11.jpg",
      category: "Studio"
    },
    {
      url: "/images/weddings/WedGallery/wedgallery-1.jpg",
      category: "Wildlife"
    },
    {
      url: "/images/weddings/WedGallery/wedgallery-9.jpg",
      category: "Mountain"
    },
    {
      url: "/images/firstPage/firstPageImg2.jpg",
      category: "Fashion"
    },
    {
      url: "/images/firstPage/firstPageImg4.jpg",
      category: "Architecture"
    },
    {
      url: "/images/firstPage/firstPageImg7.jpg",
      category: "Landscape"
    },
    {
      url: "/images/firstPage/firstPageImg5.jpg",
      category: "Food"
    },
    {
      url: "/images/weddings/Pellikuthuru-268.jpg",
      category: "Portrait"
    },
    {
      url: "/images/weddings/WedGallery/wedgallery-17.jpg",
      category: "Night"
    },
    {
      url: "/images/weddings/WedGallery/wedgallery-8.jpg",
      category: "Portrait"
    },
    {
      url: "/images/portraits/portraitsGallery/portrait-3.jpg",
      category: "Nature"
    },
    {
      url: "/images/portraits/portraitsGallery/portrait-1.jpg",
      category: "Portrait"
    },
    {
      url: "/images/weddings/WedGallery/wedgallery-0.jpg",
      category: "Abstract"
    },
    {
      url: "/images/portraits/portraitsGallery/portrait-25.jpg",
      category: "Urban"
    },
    {
      url: "/images/portraits/portraitsGallery/portrait-35.jpg",
      category: "Events"
    },
    {
      url: "/images/firstPage/firstPageImg13.jpg",
      category: "Portrait"
    },
    {
      url: "/images/portraits/portraitsGallery/portrait-36.jpg",
      category: "Urban"
    },
    {
      url: "/images/firstPage/firstPageImg12.jpg",
      category: "Events"
    },
    {
      url: "/images/firstPage/firstPageImg6.jpg",
      category: "Portrait"
    },
    {
      url: "/images/more/maternity (2).jpg",
      category: "Nature"
    },
    {
      url: "/images/more/maternity (5).jpg",
      category: "Portrait"
    },
    {
      url: "/images/more/maternity (4).jpg",
      category: "Urban"
    },
    {
      url: "/images/more/baby (1).jpg",
      category: "Nature"
    },
    {
      url: "/images/more/baby (3).jpg",
      category: "Portrait"
    },
    {
      url: "/images/more/baby1 (4).JPEG",
      category: "Urban"
    }
  ];

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (selectedImageIndex === null) return;

    switch (e.key) {
      case 'ArrowLeft':
        setSelectedImageIndex(prev => 
          prev === null ? null : (prev === 0 ? portfolioImages.length - 1 : prev - 1)
        );
        break;
      case 'ArrowRight':
        setSelectedImageIndex(prev => 
          prev === null ? null : (prev === portfolioImages.length - 1 ? 0 : prev + 1)
        );
        break;
      case 'Escape':
        setSelectedImageIndex(null);
        break;
    }
  }, [selectedImageIndex, portfolioImages.length]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="/images/weddings/S+R Wedding (507).jpg"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative h-full flex flex-col justify-center items-center text-white px-4">
          <Camera className="w-16 h-16 mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Srikanth</h1>
          <p className="text-xl md:text-2xl mb-8"> Photographer</p>
          <div className="flex items-center space-x-4">
            <MapPin className="w-5 h-5" />
            <span>Hyderabad</span>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <img
            src="/images/more/myimage.jpg"
            alt="Profile"
            className="w-64 h-64 object-cover rounded-full"
          />
          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              With over 8 years of professional experience, I specialize in capturing moments that tell compelling stories. 
              My journey as a photographer has taken me through countless weddings, capturing the raw emotions, intricate rituals, 
              and timeless moments that make each celebration unique. From grand destination weddings to intimate ceremonies, 
              I've had the privilege of telling love stories through my lens.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
            Beyond weddings, my portfolio also includes a wide range of commercial shoots — from fashion and lifestyle to product
            and branding campaigns — each crafted with a focus on storytelling and visual impact. My approach blends creativity
             with professionalism, ensuring that every frame not only meets the client's expectations but also leaves a lasting impression.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioImages.map((image, index) => (
              <div 
                key={index} 
                className="aspect-[4/3] rounded-lg overflow-hidden shadow-md cursor-pointer"
                onClick={() => setSelectedImageIndex(index)}
              >
                <img
                  src={image.url}
                  alt={image.category}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Contact Information</h2>
        <div className="max-w-xl mx-auto space-y-6">
          <div className="flex items-center space-x-4">
            <Mail className="w-5 h-5 text-gray-600" />
            <span>sri.srikanth50@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="w-5 h-5 text-gray-600" />
            <span>+91-8099203992</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <p>© 2024 Srikanth. All rights reserved.</p>
        </div>
      </footer>

      {/* Full-size Image Viewer */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setSelectedImageIndex(null)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
            onClick={() => setSelectedImageIndex(prev => 
              prev === null ? null : (prev === 0 ? portfolioImages.length - 1 : prev - 1)
            )}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <img
            src={portfolioImages[selectedImageIndex].url.replace('w=800', 'w=1920')}
            alt={portfolioImages[selectedImageIndex].category}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
            onClick={() => setSelectedImageIndex(prev => 
              prev === null ? null : (prev === portfolioImages.length - 1 ? 0 : prev + 1)
            )}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;