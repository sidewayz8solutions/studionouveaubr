import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ArrowDown, Mail, MapPin, Calendar, Instagram, X, Sparkles } from 'lucide-react';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

// Artist data with galleries and prices - Debbie first
const artists = [
  {
    name: 'Debbie Shirley',
    specialty: 'Mixed Media & Zentangle Art',
    bio: 'Debbie creates vibrant mixed media paintings and intricate zentangle illustrations. Her work spans from abstract landscapes to detailed wildlife art, each piece infused with color and emotion.',
    artworks: [
      { id: 1, title: 'Sunset Reflections', image: '/images/debbie-sunset-reflection.jpg', price: 450, size: '24 x 24"', medium: 'Acrylic on Canvas' },
      { id: 2, title: 'Sunset Over the Lake', image: '/images/debbie-sunset-trees.jpg', price: 520, size: '30 x 24"', medium: 'Acrylic on Canvas' },
      { id: 3, title: 'Hummingbird Garden', image: '/images/debbie-hummingbird-flowers.jpg', price: 380, size: '20 x 20"', medium: 'Mixed Media' },
      { id: 4, title: 'Zentangle Cardinal', image: '/images/debbie-zentangle-cardinal-1.png', price: 150, size: '12 x 12"', medium: 'Ink on Paper' },
      { id: 5, title: 'Blue Whale', image: '/images/debbie-whale-zentangle.jpeg', price: 175, size: '14 x 11"', medium: 'Ink & Watercolor' },
      { id: 6, title: 'Butterfly Dreams', image: '/images/debbie-butterfly-zentangle.png', price: 200, size: '16 x 12"', medium: 'Ink on Paper' },
      { id: 7, title: 'Fox Spirit', image: '/images/debbie-fox-zentangle.png', price: 225, size: '16 x 16"', medium: 'Ink & Marker' },
      { id: 8, title: 'Field of Flowers', image: '/images/debbie-field-flowers-framed.png', price: 300, size: '21 x 17"', medium: 'Acrylic' },
      { id: 9, title: 'Ocean Wave', image: '/images/debbie-ocean-wave.png', price: 650, size: '36 x 24"', medium: 'Acrylic on Canvas' },
      { id: 10, title: 'White Egret', image: '/images/debbie-egret.png', price: 580, size: '30 x 30"', medium: 'Acrylic on Canvas' },
      { id: 11, title: 'Sunflower Field', image: '/images/debbie-sunflowers.png', price: 480, size: '24 x 30"', medium: 'Acrylic' },
      { id: 12, title: 'Rainbow Birds', image: '/images/debbie-rainbow-birds.png', price: 350, size: '20 x 16"', medium: 'Mixed Media' },
    ]
  },
  {
    name: 'Betty Efferson',
    specialty: 'Abstract Expressionism',
    bio: 'An accomplished abstract expressionist artist, Betty has been recognized with national and international awards. She is a Pastel Society of America Signature Member. Her work captures feelings through unencumbered use of color, technique and media.',
    artworks: [
      { id: 13, title: 'Field of Dreams', image: '/images/flowers.jpg', price: 2400, size: '40 x 30"', medium: 'Acrylic on Canvas' },
      { id: 14, title: 'Spring Light', image: '/images/betty-1.jpg', price: 1850, size: '36 x 36"', medium: 'Mixed Media' },
      { id: 15, title: 'Garden Path', image: '/images/betty-2.jpg', price: 3200, size: '48 x 36"', medium: 'Oil on Canvas' },
      { id: 16, title: 'Sunset Reflections', image: '/images/betty-3.jpg', price: 2800, size: '40 x 30"', medium: 'Acrylic on Canvas' },
    ]
  },
  {
    name: 'Tonni McCollister',
    specialty: 'Abstract Landscapes',
    bio: 'Tonni is inspired by the beauty of plants, trees, and flowers. She primarily paints scenes reminiscent of nature using acrylic paint, soft pastels and other interesting items including ferns and mixed media.',
    artworks: [
      { id: 17, title: 'Golden Tree', image: '/images/abstract-tree.jpg', price: 1650, size: '30 x 30"', medium: 'Acrylic on Canvas' },
      { id: 18, title: 'Bear Cub', image: '/images/bear.jpg', price: 2200, size: '36 x 36"', medium: 'Mixed Media' },
      { id: 19, title: 'Ocean Whisper', image: '/images/whale.jpg', price: 1950, size: '36 x 24"', medium: 'Acrylic on Canvas' },
      { id: 20, title: 'Cardinal', image: '/images/cardinal.jpg', price: 1200, size: '20 x 20"', medium: 'Acrylic on Canvas' },
      { id: 21, title: 'Bluebird', image: '/images/bluebird.jpg', price: 950, size: '16 x 16"', medium: 'Oil on Canvas' },
    ]
  },
];

// Event data
const upcomingEvent = {
  title: "Studio Nouveau's Spring Showcase",
  date: 'May 7th at 4 PM',
  time: '4:00 PM - 8:00 PM',
  location: 'Studio Nouveau, Baton Rouge',
  description: 'Join us for our biggest event of the season! Meet the artists, view new original works, and enjoy light refreshments. Special discounts available during the event.',
};

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [showEventPopup, setShowEventPopup] = useState(true);
  const scrollTriggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const popupTimer = setTimeout(() => {
      setShowEventPopup(true);
    }, 1500);

    const ctx = gsap.context(() => {
      // Hero entrance animation
      const heroTl = gsap.timeline();
      heroTl
        .fromTo('.hero-bg', 
          { opacity: 0, scale: 1.08 }, 
          { opacity: 1, scale: 1, duration: 1.1, ease: 'power2.out' }
        )
        .fromTo('.hero-label', 
          { opacity: 0, y: 12 }, 
          { opacity: 1, y: 0, duration: 0.6 }, 
          0.15
        )
        .fromTo('.hero-headline span', 
          { opacity: 0, y: 40 }, 
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.06, ease: 'power3.out' }, 
          0.25
        )
        .fromTo('.hero-subheadline', 
          { opacity: 0, y: 18 }, 
          { opacity: 1, y: 0, duration: 0.6 }, 
          0.45
        )
        .fromTo('.hero-cta', 
          { opacity: 0, x: -20 }, 
          { opacity: 1, x: 0, duration: 0.6 }, 
          0.65
        )
        .fromTo('.scroll-hint-container', 
          { opacity: 0, y: 10 }, 
          { opacity: 1, y: 0, duration: 0.6 }, 
          1.0
        );

      // Hero scroll animation
      const heroScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeave: () => gsap.set('.scroll-hint-container', { opacity: 0 }),
          onEnterBack: () => gsap.set('.scroll-hint-container', { opacity: 1 }),
        }
      });

      heroScrollTl
        .fromTo('.hero-headline', 
          { x: 0, opacity: 1 }, 
          { x: '-18vw', opacity: 0, ease: 'power2.in' }, 
          0.7
        )
        .fromTo('.hero-subheadline', 
          { y: 0, opacity: 1 }, 
          { y: '10vh', opacity: 0, ease: 'power2.in' }, 
          0.7
        )
        .fromTo('.hero-cta', 
          { y: 0, opacity: 1 }, 
          { y: '10vh', opacity: 0, ease: 'power2.in' }, 
          0.75
        )
        .fromTo('.hero-bg', 
          { scale: 1, x: 0 }, 
          { scale: 1.06, x: '-2vw', ease: 'power2.in' }, 
          0.7
        );

      if (heroScrollTl.scrollTrigger) {
        scrollTriggersRef.current.push(heroScrollTl.scrollTrigger);
      }

      // Artist section animations
      artists.forEach((_, artistIndex) => {
        const artistSection = document.querySelector(`#artist-${artistIndex}`);
        if (artistSection) {
          const artworks = gsap.utils.toArray<HTMLElement>(`#artist-${artistIndex} .artwork-card`);
          artworks.forEach((artwork) => {
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: artwork,
                start: 'top 85%',
                end: 'top 50%',
                scrub: 0.4,
              }
            });
            tl.fromTo(artwork, 
              { y: 50, opacity: 0 }, 
              { y: 0, opacity: 1, ease: 'power2.out' }
            );
            if (tl.scrollTrigger) {
              scrollTriggersRef.current.push(tl.scrollTrigger);
            }
          });
        }
      });

      // About section animation
      const aboutTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 80%',
          end: 'top 40%',
          scrub: 0.4,
        }
      });
      aboutTl
        .fromTo('.about-image', 
          { x: -60, opacity: 0 }, 
          { x: 0, opacity: 1, ease: 'power2.out' }
        )
        .fromTo('.about-content', 
          { x: 60, opacity: 0 }, 
          { x: 0, opacity: 1, ease: 'power2.out' }, 
          0.1
        );
      if (aboutTl.scrollTrigger) {
        scrollTriggersRef.current.push(aboutTl.scrollTrigger);
      }

      // Contact section animation
      const contactTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top 80%',
          end: 'top 50%',
          scrub: 0.4,
        }
      });
      contactTl
        .fromTo('.contact-info', 
          { y: 40, opacity: 0 }, 
          { y: 0, opacity: 1, ease: 'power2.out' }
        )
        .fromTo('.contact-form', 
          { y: 40, opacity: 0 }, 
          { y: 0, opacity: 1, ease: 'power2.out' }, 
          0.1
        );
      if (contactTl.scrollTrigger) {
        scrollTriggersRef.current.push(contactTl.scrollTrigger);
      }

    });

    return () => {
      clearTimeout(popupTimer);
      scrollTriggersRef.current.forEach(st => st.kill());
      scrollTriggersRef.current = [];
      ctx.revert();
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="relative">
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Event Popup */}
      {showEventPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-studio-cream max-w-lg w-full relative animate-fade-in">
            <button 
              onClick={() => setShowEventPopup(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-studio-black text-studio-white hover:bg-studio-gold transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-studio-gold" />
                <span className="font-mono text-xs tracking-[0.2em] text-studio-gold">UPCOMING EVENT</span>
              </div>
              
              <h2 className="font-display font-black text-3xl md:text-4xl text-studio-black mb-4">
                {upcomingEvent.title}
              </h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-studio-black/80">
                  <Calendar className="w-4 h-4 text-studio-gold" />
                  <span className="text-sm">{upcomingEvent.date}</span>
                </div>
                <div className="flex items-center gap-3 text-studio-black/80">
                  <MapPin className="w-4 h-4 text-studio-gold" />
                  <span className="text-sm">{upcomingEvent.location}</span>
                </div>
              </div>
              
              <p className="text-studio-black/70 leading-relaxed mb-8">
                {upcomingEvent.description}
              </p>
              
              <button 
                onClick={() => {
                  setShowEventPopup(false);
                  scrollToSection('contact');
                }}
                className="w-full bg-studio-black text-studio-white py-4 font-display font-semibold tracking-wide hover:bg-studio-gold hover:text-studio-black transition-colors duration-300"
              >
                RSVP NOW
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex justify-between items-center bg-gradient-to-b from-studio-black/80 to-transparent">
        <div className="font-display font-bold text-lg tracking-tight text-studio-white">
          Studio Nouveau
        </div>
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('artists')} className="text-sm text-studio-gray hover:text-studio-white transition-colors">
            Artists
          </button>
          <button onClick={() => scrollToSection('about')} className="text-sm text-studio-gray hover:text-studio-white transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-sm text-studio-gray hover:text-studio-white transition-colors">
            Contact
          </button>
        </div>
      </nav>

      {/* Section 1: Hero */}
      <section ref={heroRef} className="section-pinned z-10">
        <div className="hero-bg absolute inset-0">
          <img 
            src="/images/studio-exterior.jpg" 
            alt="Studio Nouveau" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-studio-black/80 via-studio-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-studio-black/60 via-transparent to-studio-black/30" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-14 lg:px-20">
          <div className="max-w-3xl">
            <div className="hero-label font-mono text-xs tracking-[0.2em] text-studio-gold mb-4 opacity-75">
              ART STUDIO
            </div>
            <div className="hairline w-24 mb-8" />
            
            <h1 className="hero-headline font-display font-black text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight text-studio-white mb-6">
              <span className="block">ART THAT</span>
              <span className="block">MOVES</span>
              <span className="block">PEOPLE</span>
            </h1>
            
            <p className="hero-subheadline text-base md:text-lg text-studio-gray max-w-md mb-10 leading-relaxed">
              Three artists. One vision. Original paintings and creative works crafted with passion and precision.
            </p>
            
            <button 
              onClick={() => scrollToSection('artists')}
              className="hero-cta cta-link group"
            >
              <span>Explore work</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
        
        <div className="scroll-hint-container absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-mono text-xs tracking-widest text-studio-gray">SCROLL</span>
          <ArrowDown className="w-4 h-4 text-studio-gold scroll-hint" />
        </div>
      </section>

      {/* Artist Sections */}
      <div id="artists" className="relative z-20">
        {artists.map((artist, artistIndex) => (
          <section 
            key={artist.name} 
            id={`artist-${artistIndex}`}
            className="artist-gallery-section"
          >
            {/* Artist Header with Full Width Background */}
            <div className="artist-header-bg">
              <div className="max-w-7xl mx-auto px-6 md:px-14 lg:px-20 py-16 md:py-24">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                  <div>
                    <div className="font-mono text-xs tracking-[0.2em] text-studio-gold mb-3 opacity-75">
                      {artist.specialty.toUpperCase()}
                    </div>
                    <h2 className="font-display font-black text-5xl md:text-7xl lg:text-8xl tracking-tight text-studio-white">
                      {artist.name.toUpperCase()}
                    </h2>
                  </div>
                  <p className="max-w-md text-studio-gray leading-relaxed lg:text-right">
                    {artist.bio}
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery Grid - Modern Museum Style */}
            <div className="gallery-container">
              <div className="max-w-7xl mx-auto px-6 md:px-14 lg:px-20 py-12 md:py-16">
                <div className="gallery-grid">
                  {artist.artworks.map((artwork, idx) => (
                    <div 
                      key={artwork.id} 
                      className={`artwork-card ${idx === 0 || idx === 5 ? 'featured' : ''}`}
                    >
                      <div className="artwork-frame">
                        <img 
                          src={artwork.image} 
                          alt={artwork.title}
                          className="artwork-image"
                        />
                        
                        {/* Price Tag */}
                        <div className="price-tag">
                          <span className="price">{formatPrice(artwork.price)}</span>
                        </div>
                        
                        {/* Hover Overlay */}
                        <div className="artwork-overlay">
                          <div className="overlay-content">
                            <h3 className="artwork-title">{artwork.title}</h3>
                            <p className="artwork-details">{artwork.medium} • {artwork.size}</p>
                            <button className="inquire-btn">Inquire</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Section: About / Studio */}
      <section id="about" className="about-section relative z-30 bg-studio-black py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-14 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="about-image">
              <div className="relative">
                <img 
                  src="/images/studio-exterior.jpg" 
                  alt="Studio Nouveau Exterior" 
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-studio-gold/30" />
                <div className="absolute -top-6 -left-6 w-32 h-32 border border-studio-gold/30" />
              </div>
            </div>
            
            <div className="about-content">
              <div className="font-mono text-xs tracking-[0.2em] text-studio-gold mb-3 opacity-75">
                ABOUT THE STUDIO
              </div>
              <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight text-studio-white mb-8">
                WHERE CREATIVITY<br />COMES ALIVE
              </h2>
              
              <div className="space-y-6 text-studio-gray leading-relaxed">
                <p>
                  Studio Nouveau is a collective of three talented artists based in Baton Rouge, Louisiana. 
                  Founded on the belief that art should inspire and transform, our studio has become 
                  a haven for creative expression.
                </p>
                <p>
                  From abstract expressionism to wildlife paintings, each piece 
                  that leaves our studio carries a piece of our passion. We work in various mediums 
                  including acrylics, oils, pastels, and mixed media.
                </p>
                <p>
                  Whether you're looking for a statement piece for your home or a unique gift, 
                  our diverse collection offers something for every art lover.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-8 mt-10 pt-10 border-t border-studio-white/10">
                <div>
                  <div className="font-display font-black text-3xl md:text-4xl text-studio-gold">3</div>
                  <div className="font-mono text-xs tracking-wider text-studio-gray mt-1">ARTISTS</div>
                </div>
                <div>
                  <div className="font-display font-black text-3xl md:text-4xl text-studio-gold">21+</div>
                  <div className="font-mono text-xs tracking-wider text-studio-gray mt-1">ARTWORKS</div>
                </div>
                <div>
                  <div className="font-display font-black text-3xl md:text-4xl text-studio-gold">10+</div>
                  <div className="font-mono text-xs tracking-wider text-studio-gray mt-1">YEARS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Contact */}
      <section id="contact" className="contact-section relative z-40 bg-studio-cream py-24 md:py-32 px-6 md:px-14 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="contact-info">
              <div className="font-mono text-xs tracking-[0.2em] text-studio-gold mb-3 opacity-75">
                GET IN TOUCH
              </div>
              <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight text-studio-black mb-8">
                LET'S CREATE<br />TOGETHER
              </h2>
              
              <p className="text-studio-black/70 leading-relaxed mb-10 max-w-md">
                Interested in commissioning a piece or purchasing original artwork? 
                We'd love to hear from you. Reach out and let's discuss your vision.
              </p>
              
              {/* Event Banner */}
              <div className="bg-studio-black p-6 mb-10">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-studio-gold" />
                  <span className="font-mono text-xs tracking-wider text-studio-gold">UPCOMING EVENT</span>
                </div>
                <h3 className="font-display font-bold text-xl text-studio-white mb-2">
                  {upcomingEvent.title}
                </h3>
                <p className="text-studio-gray text-sm mb-1">{upcomingEvent.date}</p>
                <p className="text-studio-gray text-sm">{upcomingEvent.location}</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-studio-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-studio-gold" />
                  </div>
                  <div>
                    <div className="font-mono text-xs tracking-wider text-studio-black/50 mb-1">EMAIL</div>
                    <a href="mailto:hello@studionouveaubr.com" className="text-studio-black hover:text-studio-gold transition-colors">
                      hello@studionouveaubr.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-studio-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-studio-gold" />
                  </div>
                  <div>
                    <div className="font-mono text-xs tracking-wider text-studio-black/50 mb-1">LOCATION</div>
                    <p className="text-studio-black">
                      Baton Rouge, Louisiana
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-studio-gold/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-4 h-4 text-studio-gold" />
                  </div>
                  <div>
                    <div className="font-mono text-xs tracking-wider text-studio-black/50 mb-1">VISITING HOURS</div>
                    <p className="text-studio-black">
                      Tuesday - Saturday, 10am - 5pm
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mt-10">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-studio-black flex items-center justify-center hover:bg-studio-gold transition-colors group"
                >
                  <Instagram className="w-5 h-5 text-studio-white group-hover:text-studio-black transition-colors" />
                </a>
              </div>
            </div>
            
            <div className="contact-form">
              <form className="bg-white p-8 md:p-10 shadow-lg">
                <div className="space-y-6">
                  <div>
                    <label className="block font-mono text-xs tracking-wider text-studio-black/50 mb-2">
                      NAME
                    </label>
                    <input 
                      type="text" 
                      placeholder="Your name"
                      className="w-full bg-studio-cream/50 border-studio-black/10 text-studio-black placeholder:text-studio-black/30"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-mono text-xs tracking-wider text-studio-black/50 mb-2">
                      EMAIL
                    </label>
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full bg-studio-cream/50 border-studio-black/10 text-studio-black placeholder:text-studio-black/30"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-mono text-xs tracking-wider text-studio-black/50 mb-2">
                      INTEREST
                    </label>
                    <select className="w-full bg-studio-cream/50 border-studio-black/10 text-studio-black">
                      <option value="">Select an option</option>
                      <option value="purchase">Purchase Artwork</option>
                      <option value="commission">Commission a Piece</option>
                      <option value="event">RSVP for Spring Showcase</option>
                      <option value="visit">Schedule a Visit</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block font-mono text-xs tracking-wider text-studio-black/50 mb-2">
                      MESSAGE
                    </label>
                    <textarea 
                      rows={4}
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full bg-studio-cream/50 border-studio-black/10 text-studio-black placeholder:text-studio-black/30 resize-none"
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-studio-black text-studio-white py-4 font-display font-semibold tracking-wide hover:bg-studio-gold hover:text-studio-black transition-colors duration-300"
                  >
                    SEND INQUIRY
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-50 bg-studio-black py-12 px-6 md:px-14 lg:px-20 border-t border-studio-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-display font-bold text-xl tracking-tight text-studio-white">
            Studio Nouveau
          </div>
          
          <div className="flex items-center gap-8">
            <button onClick={() => scrollToSection('artists')} className="text-sm text-studio-gray hover:text-studio-white transition-colors">
              Artists
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm text-studio-gray hover:text-studio-white transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm text-studio-gray hover:text-studio-white transition-colors">
              Contact
            </button>
          </div>
          
          <div className="font-mono text-xs text-studio-gray/50">
            © {new Date().getFullYear()} Studio Nouveau. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
