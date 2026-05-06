import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ArrowDown, ArrowUp, Mail, MapPin, Calendar, Instagram, X, Sparkles, Menu, ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import Lenis from 'lenis';
import './App.css';
import { artists, getTotalArtworkCount } from './data/artists';

gsap.registerPlugin(ScrollTrigger);

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

interface LightboxProps {
  artwork: { image: string; title: string; size: string; medium: string; price: number; width: number; height: number };
  artistName: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
  onInquire: () => void;
}

function TiltCard({ children, className = '' }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;
    cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
    if (glareRef.current) {
      glareRef.current.style.background = `radial-gradient(circle at ${(x/rect.width)*100}% ${(y/rect.height)*100}%, rgba(255,255,255,0.2) 0%, transparent 55%)`;
      glareRef.current.style.opacity = '1';
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    if (glareRef.current) glareRef.current.style.opacity = '0';
  };

  return (
    <div className={`tilt-card-container ${className}`} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div ref={cardRef} className="tilt-card">
        <div className="tilt-card-inner">
          {children}
          <div ref={glareRef} className="tilt-card-glare" style={{ opacity: 0 }} />
        </div>
      </div>
    </div>
  );
}

function FadeImage({ src, alt, className = '', style, loading, onClick }: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  return (
    <div className="relative w-full h-full" style={style}>
      {!error && (
        <img
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ ...style, position: 'absolute', inset: 0 }}
          loading={loading}
          onClick={onClick}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      )}
      {(!loaded || error) && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-studio-black/5"
          style={{ aspectRatio: style?.aspectRatio }}
        >
          <div className="text-center px-4">
            <div className="font-display font-bold text-lg text-studio-gold/40 mb-1">{alt}</div>
            <div className="font-mono text-xs text-studio-gray/40 tracking-wider">COMING SOON</div>
          </div>
        </div>
      )}
    </div>
  );
}

function Lightbox({ artwork, artistName, onClose, onNext, onPrev, hasNext, hasPrev, onInquire }: LightboxProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && hasNext) onNext();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [hasNext, hasPrev, onNext, onPrev, onClose]);

  const aspect = artwork.width / artwork.height;
  const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(artwork.price);

  return (
    <div className="fixed inset-0 z-[100] bg-studio-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0" onClick={onClose} />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-studio-white/10 hover:bg-studio-gold text-studio-white hover:text-studio-black transition-colors rounded-full"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev button */}
      {hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-2 md:left-6 z-20 w-10 h-10 flex items-center justify-center bg-studio-white/10 hover:bg-studio-gold text-studio-white hover:text-studio-black transition-colors rounded-full"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      {/* Next button */}
      {hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-2 md:right-6 z-20 w-10 h-10 flex items-center justify-center bg-studio-white/10 hover:bg-studio-gold text-studio-white hover:text-studio-black transition-colors rounded-full"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-2xl bg-[#F4F2EE] rounded-sm shadow-2xl overflow-hidden">
        {/* Framed Painting */}
        <div className="p-6 md:p-10 bg-white">
          <div className="relative bg-[#f8f8f8] shadow-inner">
            <FadeImage
              src={artwork.image}
              alt={artwork.title}
              className="w-full object-contain"
              style={{ aspectRatio: aspect, maxHeight: '55vh' }}
            />
          </div>
        </div>

        {/* Details Bar */}
        <div className="px-6 md:px-10 py-5 md:py-6 border-t border-studio-black/5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-studio-gold uppercase">{artistName}</p>
              <h3 className="font-display font-bold text-xl md:text-2xl text-studio-black leading-tight mt-0.5">{artwork.title}</h3>
              <p className="text-sm text-studio-gray mt-1">{artwork.medium} &middot; {artwork.size}</p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-2">
              <p className="font-display font-bold text-2xl md:text-3xl text-studio-gold">{formattedPrice}</p>
              <button
                onClick={onInquire}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-studio-black text-studio-white font-mono text-xs tracking-wider hover:bg-studio-gold hover:text-studio-black transition-colors"
              >
                <ShoppingBag className="w-4 h-4" />
                Inquire to Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Event data
const upcomingEvent = {
  title: "Studio Nouveau's Spring Showcase",
  date: 'May 7th at 4 PM',
  time: '4:00 PM - 8:00 PM',
  location: 'Studio Nouveau, Baton Rouge',
  description: 'Join us for our biggest event of the season! Meet the artists, view new original works, and enjoy light refreshments. Special discounts available during the event.',
};

/** Parse physical dimensions from size string like "24 x 30\"" */
const parsePhysicalSize = (size: string): { w: number; h: number } | null => {
  const match = size.match(/(\d+(?:\.\d+)?)\s*x\s*(\d+(?:\.\d+)?)/);
  if (!match) return null;
  return { w: parseFloat(match[1]), h: parseFloat(match[2]) };
};

/** Compute display size scaled so largest dimension = maxDim px, using pixel aspect ratio */
const getDisplaySize = (pixelWidth: number, pixelHeight: number, maxDim = 340): { width: number; height: number; framePadding: number } => {
  const aspect = pixelWidth / pixelHeight;
  let width = maxDim;
  let height = Math.round(maxDim / aspect);
  if (height > maxDim) {
    height = maxDim;
    width = Math.round(maxDim * aspect);
  }
  const framePadding = Math.max(4, Math.min(14, Math.round(Math.min(width, height) * 0.04)));
  return { width, height, framePadding };
};

/** Responsive max dimension based on viewport */
const useResponsiveMaxDim = (base: number) => {
  const [maxDim, setMaxDim] = useState(base);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setMaxDim(base * 0.55);
      else if (w < 768) setMaxDim(base * 0.7);
      else setMaxDim(base);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [base]);
  return maxDim;
};

function MagneticButton({ children, className = '', onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const boundingRef = useRef<DOMRect | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!btnRef.current || !boundingRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = boundingRef.current;
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    btnRef.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleMouseLeave = () => {
    if (btnRef.current) {
      btnRef.current.style.transform = 'translate(0px, 0px)';
    }
  };

  const handleMouseEnter = () => {
    if (btnRef.current) {
      boundingRef.current = btnRef.current.getBoundingClientRect();
    }
  };

  return (
    <button
      ref={btnRef}
      className={`transition-transform duration-200 ease-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const duration = 1500;
            const start = performance.now();
            const animate = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(Math.round(eased * value));
              if (progress < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return <div ref={ref}>{display}{suffix}</div>;
}

function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest('a, button, [role="button"], .artwork-card, .gallery-photo, input, textarea, select')) {
        setHovering(true);
      }
    };
    const onOut = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest('a, button, [role="button"], .artwork-card, .gallery-photo, input, textarea, select')) {
        setHovering(false);
      }
    };

    let raf: number;
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.15;
      pos.current.y += (target.current.y - pos.current.y) * 0.15;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${target.current.x}px, ${target.current.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block rounded-full border transition-[width,height,border-color] duration-300 ease-out ${
          hovering ? 'w-12 h-12 border-studio-gold/60' : 'w-8 h-8 border-studio-gold/30'
        }`}
        style={{ mixBlendMode: 'difference' }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block w-1 h-1 bg-studio-gold rounded-full"
      />
    </>
  );
}

function ParallaxSign() {
  const sectionRef = useRef<HTMLElement>(null);
  const layersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !layersRef.current) return;
    const layers = layersRef.current.querySelectorAll('.parallax-sign-layer');
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5,
      }
    });

    tl.fromTo(layers, 
      { z: -100, opacity: 0.3 },
      { z: 80, opacity: 1, stagger: 0.05, ease: 'none' }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative z-20 bg-studio-black py-20 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[300px] bg-studio-gold/[0.03] rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-14 lg:px-20">
        <div 
          ref={layersRef}
          className="relative flex flex-col items-center justify-center text-center"
          style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
        >
          {['Studio', 'Nouveau'].map((word) => (
            <div key={word} className="relative my-[-0.1em]" style={{ transformStyle: 'preserve-3d' }}>
              {[0, 1, 2].map((layer) => (
                <div
                  key={layer}
                  className={`parallax-sign-layer font-display font-black tracking-tighter leading-none ${layer === 0 ? 'relative text-studio-gold' : 'absolute inset-0 text-studio-gold/[0.12]'}`}
                  style={{
                    fontSize: 'clamp(4rem, 14vw, 12rem)',
                    transform: `translateZ(${(2 - layer) * 30}px)`,
                    textShadow: layer === 0 ? '0 0 80px rgba(212, 162, 79, 0.25), 0 8px 30px rgba(0,0,0,0.6)' : 'none',
                  }}
                >
                  {word}
                </div>
              ))}
            </div>
          ))}
          
          <div className="mt-8 font-mono text-xs tracking-[0.35em] text-studio-gray/50 uppercase">
            Baton Rouge • Est. 2025
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [showEventPopup, setShowEventPopup] = useState(() => {
    const dismissed = localStorage.getItem('eventPopupDismissed');
    return dismissed !== 'true';
  });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Flatten all artworks for lightbox navigation
  const allArtworks = artists.flatMap(artist => artist.artworks.map(art => ({ ...art, artistName: artist.name })));
  const currentLightboxArtwork = lightboxIndex !== null ? allArtworks[lightboxIndex] : null;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [galleryLightboxIndex, setGalleryLightboxIndex] = useState<number | null>(null);
  const [pageLoaded, setPageLoaded] = useState(false);
  const scrollTriggersRef = useRef<ScrollTrigger[]>([]);
  const lenisRef = useRef<Lenis | null>(null);
  const galleryMaxDim = useResponsiveMaxDim(400);

  // Page loader
  useEffect(() => {
    const timer = setTimeout(() => setPageLoaded(true), 800);
    return () => clearTimeout(timer);
  }, []);

  // Keyboard and scroll lock effects
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (galleryLightboxIndex !== null) {
          setGalleryLightboxIndex(null);
        } else if (lightboxIndex !== null) {
          setLightboxIndex(null);
        } else if (showEventPopup) {
          localStorage.setItem('eventPopupDismissed', 'true');
          setShowEventPopup(false);
        } else if (mobileMenuOpen) {
          setMobileMenuOpen(false);
        }
      }
      if (e.key === 'ArrowRight' && galleryLightboxIndex !== null) {
        setGalleryLightboxIndex(Math.min(galleryLightboxIndex + 1, 8));
      }
      if (e.key === 'ArrowLeft' && galleryLightboxIndex !== null) {
        setGalleryLightboxIndex(Math.max(galleryLightboxIndex - 1, 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [galleryLightboxIndex, lightboxIndex, showEventPopup, mobileMenuOpen]);

  useEffect(() => {
    if (galleryLightboxIndex !== null || lightboxIndex !== null || mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [galleryLightboxIndex, lightboxIndex, mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
      setScrollProgress(progress);
      setShowBackToTop(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const popupTimer = setTimeout(() => {
      setShowEventPopup(true);
    }, 1500);

    // Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    // Scroll-velocity skew effect
    let currentSkew = 0;
    lenis.on('scroll', ({ velocity }: { velocity: number }) => {
      const targetSkew = Math.max(-2, Math.min(2, velocity * 0.02));
      currentSkew += (targetSkew - currentSkew) * 0.1;
      const skewElements = document.querySelectorAll('.velocity-skew');
      skewElements.forEach((el) => {
        (el as HTMLElement).style.transform = `skewY(${currentSkew}deg)`;
      });
    });

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

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
          { scale: 1, x: 0, y: 0 }, 
          { scale: 1.06, x: '-2vw', y: '-3vh', ease: 'power2.in' }, 
          0.7
        )
        .fromTo('.hero-label',
          { y: 0, opacity: 1 },
          { y: '-5vh', opacity: 0, ease: 'power2.in' },
          0.6
        );

      // Hero parallax depth layers
      gsap.to('.hero-headline', {
        y: '-15vh',
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });
      gsap.to('.hero-subheadline', {
        y: '-8vh',
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });

      if (heroScrollTl.scrollTrigger) {
        scrollTriggersRef.current.push(heroScrollTl.scrollTrigger);
      }

      // Clip-path reveal animations for artwork frames
      const revealFrames = gsap.utils.toArray<HTMLElement>('[data-reveal]');
      revealFrames.forEach((frame) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: frame,
            start: 'top 90%',
            toggleActions: 'play none none none',
          }
        });
        tl.fromTo(frame,
          { clipPath: 'inset(100% 0 0 0)' },
          { clipPath: 'inset(0% 0 0 0)', duration: 1.2, ease: 'power3.inOut' }
        );
        if (tl.scrollTrigger) {
          scrollTriggersRef.current.push(tl.scrollTrigger);
        }
      });

      // 3D perspective tilt on scroll for gallery sections
      const gallerySections = gsap.utils.toArray<HTMLElement>('.artist-gallery-section');
      gallerySections.forEach((section) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5,
          }
        });
        tl.fromTo(section.querySelector('.gallery-container'),
          { rotateX: 3 },
          { rotateX: -3, ease: 'none' }
        );
      });

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

      // Gallery photos animation
      const galleryPhotos = gsap.utils.toArray<HTMLElement>('.gallery-photo');
      galleryPhotos.forEach((photo) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: photo,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 0.3,
          }
        });
        tl.fromTo(photo, 
          { y: 30, opacity: 0, scale: 0.95 }, 
          { y: 0, opacity: 1, scale: 1, ease: 'power2.out' }
        );
        if (tl.scrollTrigger) {
          scrollTriggersRef.current.push(tl.scrollTrigger);
        }
      });

    });

    return () => {
      clearTimeout(popupTimer);
      window.removeEventListener('scroll', handleScroll);
      scrollTriggersRef.current.forEach(st => st.kill());
      scrollTriggersRef.current = [];
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (lenisRef.current) {
      lenisRef.current.scrollTo(`#${id}`, { offset: 0 });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getInquiryLink = (artwork: { title: string; price: number; size: string; medium: string }, artistName: string) => {
    const subject = encodeURIComponent(`Inquiry: ${artwork.title} by ${artistName}`);
    const body = encodeURIComponent(
      `Hello Studio Nouveau,\n\nI am interested in purchasing "${artwork.title}" by ${artistName}.\n\nPrice: ${formatPrice(artwork.price)}\nSize: ${artwork.size}\nMedium: ${artwork.medium}\n\nPlease contact me with next steps to complete this purchase.\n\nThank you.`
    );
    return `mailto:hello@studionouveaubr.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="relative">
      {/* Page Loader */}
      {!pageLoaded && (
        <div className="fixed inset-0 z-[200] bg-studio-black flex items-center justify-center transition-opacity duration-700">
          <div className="text-center">
            <div className="font-display font-black text-4xl md:text-5xl text-studio-white tracking-tight mb-2 animate-pulse">
              Studio Nouveau
            </div>
            <div className="font-mono text-xs tracking-[0.3em] text-studio-gold uppercase">
              Loading
            </div>
          </div>
        </div>
      )}

      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Event Popup */}
      {showEventPopup && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => {
            localStorage.setItem('eventPopupDismissed', 'true');
            setShowEventPopup(false);
          }}
        >
          <div className="bg-studio-cream max-w-lg w-full relative animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => {
                localStorage.setItem('eventPopupDismissed', 'true');
                setShowEventPopup(false);
              }}
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
                  localStorage.setItem('eventPopupDismissed', 'true');
                  setShowEventPopup(false);
                }}
                className="w-full bg-studio-black text-studio-white py-4 font-display font-semibold tracking-wide hover:bg-studio-gold hover:text-studio-black transition-colors duration-300"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Scroll Progress */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-studio-gold z-[60] transition-[width] duration-150"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex justify-between items-center transition-all duration-300 ${scrolled ? 'bg-studio-black/90 backdrop-blur-md' : 'bg-gradient-to-b from-studio-black/80 to-transparent'}`}>
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
        <button 
          className="md:hidden text-studio-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-studio-black/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 animate-fade-in md:hidden">
          <button onClick={() => scrollToSection('artists')} className="font-display text-3xl text-studio-white hover:text-studio-gold transition-colors">
            Artists
          </button>
          <button onClick={() => scrollToSection('about')} className="font-display text-3xl text-studio-white hover:text-studio-gold transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection('contact')} className="font-display text-3xl text-studio-white hover:text-studio-gold transition-colors">
            Contact
          </button>
        </div>
      )}

      {/* Section 1: Hero */}
      <section ref={heroRef} className="section-pinned z-10">
        <div className="hero-bg absolute inset-0">
          <FadeImage 
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
              Four artists. One vision. Original paintings and creative works crafted with passion and precision.
            </p>
            
            <MagneticButton 
              onClick={() => scrollToSection('artists')}
              className="hero-cta cta-link group"
            >
              <span>Explore work</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
          </div>
        </div>
        
        <div className="scroll-hint-container absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-mono text-xs tracking-widest text-studio-gray">SCROLL</span>
          <ArrowDown className="w-4 h-4 text-studio-gold scroll-hint" />
        </div>
      </section>

      <ParallaxSign />

      {/* Artist Sections */}
      <div id="artists" className="relative z-20">
        {artists.map((artist, artistIndex) => {
          return (
          <section 
            key={artist.name} 
            id={`artist-${artistIndex}`}
            className="artist-gallery-section"
          >
            {/* Artist Header with Full Width Background */}
            <div className="artist-header-bg">
              <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-24">
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
              <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
                {artist.artworks.length > 0 ? (
                  <div className="gallery-grid perspective-container">
                    {artist.artworks.map((artwork) => {
                      const dims = getDisplaySize(artwork.width, artwork.height, galleryMaxDim);
                      return (
                        <TiltCard key={artwork.id} className="artwork-card velocity-skew">
                          <div 
                            className="artwork-frame clip-reveal cursor-pointer"
                            style={{ padding: dims.framePadding, width: Math.max(dims.width, 180), maxWidth: '100%' }}
                            data-reveal
                            onClick={() => {
                              const idx = allArtworks.findIndex(a => a.id === artwork.id);
                              if (idx !== -1) setLightboxIndex(idx);
                            }}
                          >
                            <FadeImage 
                              src={artwork.image} 
                              alt={artwork.title}
                              className="artwork-image"
                              style={{ aspectRatio: artwork.width / artwork.height }}
                              loading="lazy"
                            />
                            
                            {/* Price Tag */}
                            <div className="price-tag pointer-events-none" style={{ top: dims.framePadding, right: dims.framePadding }}>
                              <span className="price">{formatPrice(artwork.price)}</span>
                            </div>
                            
                            {/* Hover Overlay */}
                            <div className="artwork-overlay" style={{ inset: dims.framePadding }}>
                              <div className="overlay-content">
                                <h3 className="artwork-title">{artwork.title}</h3>
                                <p className="artwork-details">{artwork.medium} &middot; {artwork.size}</p>
                                <p className="font-mono text-sm text-studio-gold mb-3">{formatPrice(artwork.price)}</p>
                                <a
                                  href={getInquiryLink(artwork, artist.name)}
                                  className="inquire-btn pointer-events-auto"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  Inquire
                                </a>
                              </div>
                            </div>
                          </div>
                        </TiltCard>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-20">
                    <div className="font-mono text-xs tracking-[0.2em] text-studio-gold mb-4">COMING SOON</div>
                    <p className="text-studio-gray max-w-md mx-auto leading-relaxed">
                      New works from this artist will be featured soon. Visit us in person to see what's currently on display.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        );})}
      </div>

      {/* Artwork Lightbox */}
      {currentLightboxArtwork && lightboxIndex !== null && (
        <Lightbox
          artwork={currentLightboxArtwork}
          artistName={currentLightboxArtwork.artistName}
          onClose={() => setLightboxIndex(null)}
          onNext={() => setLightboxIndex(Math.min(lightboxIndex + 1, allArtworks.length - 1))}
          onPrev={() => setLightboxIndex(Math.max(lightboxIndex - 1, 0))}
          hasNext={lightboxIndex < allArtworks.length - 1}
          hasPrev={lightboxIndex > 0}
          onInquire={() => {
            if (currentLightboxArtwork) {
              window.location.href = getInquiryLink(currentLightboxArtwork, currentLightboxArtwork.artistName);
            }
          }}
        />
      )}

      {/* Section: About / Studio */}
      <section id="about" className="about-section relative z-30 bg-studio-black py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-14 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="about-image">
              <div className="relative">
                <FadeImage 
                  src="/images/studio-exterior.jpg" 
                  alt="Studio Nouveau Exterior" 
                  className="w-full aspect-[4/5] object-cover"
                  loading="lazy"
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
                  Studio Nouveau is a collective of four talented artists based in Baton Rouge, Louisiana. 
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
                  <div className="font-display font-black text-3xl md:text-4xl text-studio-gold">
                    <AnimatedCounter value={artists.filter(a => a.artworks.length > 0).length} />
                  </div>
                  <div className="font-mono text-xs tracking-wider text-studio-gray mt-1">ARTISTS</div>
                </div>
                <div>
                  <div className="font-display font-black text-3xl md:text-4xl text-studio-gold">
                    <AnimatedCounter value={getTotalArtworkCount()} />
                  </div>
                  <div className="font-mono text-xs tracking-wider text-studio-gray mt-1">ARTWORKS</div>
                </div>
                <div>
                  <div className="font-display font-black text-3xl md:text-4xl text-studio-gold">
                    <AnimatedCounter value={10} suffix="+" />
                  </div>
                  <div className="font-mono text-xs tracking-wider text-studio-gray mt-1">YEARS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Gallery Photos */}
      <section id="gallery" className="relative z-30 bg-studio-cream py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-14 lg:px-20">
          <div className="text-center mb-16">
            <div className="font-mono text-xs tracking-[0.2em] text-studio-gold mb-3 opacity-75 uppercase">
              Inside the Studio
            </div>
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight text-studio-black mb-4">
              OUR SPACE
            </h2>
            <p className="text-lg text-studio-black/70 max-w-2xl mx-auto">
              A warm, inviting gallery where art comes to life. Come visit us and experience the beauty in person.
            </p>
          </div>
          <div className="gallery-photos-grid">
            {[1,2,3,4,5,6,7,8,9].map((n) => (
              <img
                key={n}
                src={`/images/gallery-${n}.jpg`}
                alt={`Studio interior ${n}`}
                className="gallery-photo cursor-pointer hover:opacity-90 transition-opacity"
                loading="lazy"
                onClick={() => setGalleryLightboxIndex(n - 1)}
              />
            ))}
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
                    <div className="font-mono text-xs tracking-wider text-studio-black/50 mb-1"></div>
                    <a href="mailto:hello@studionouveaubr.com" className="text-studio-black hover:text-studio-gold transition-colors">
                    
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
                    <div className="font-mono text-xs tracking-wider text-studio-black/50 mb-1"></div>
                    <p className="text-studio-black">
                
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
              {formStatus === 'success' ? (
                <div className="bg-white p-8 md:p-10 shadow-lg text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-studio-gold/10 flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="w-8 h-8 text-studio-gold" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-studio-black mb-3">Message Sent!</h3>
                  <p className="text-studio-black/70 leading-relaxed mb-6">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="text-sm text-studio-gold hover:text-studio-black transition-colors font-mono tracking-wider"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form 
                  className="bg-white p-8 md:p-10 shadow-lg"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormStatus('submitting');
                    setTimeout(() => setFormStatus('success'), 1200);
                  }}
                >
                  <div className="space-y-6">
                    <div>
                      <label className="block font-mono text-xs tracking-wider text-studio-black/50 mb-2">
                        NAME
                      </label>
                      <input 
                        type="text" 
                        placeholder="Your name"
                        required
                        className="w-full bg-studio-cream/50 border border-studio-black/10 px-4 py-3 text-studio-black placeholder:text-studio-black/30 focus:outline-none focus:border-studio-gold transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label className="block font-mono text-xs tracking-wider text-studio-black/50 mb-2">
                        EMAIL
                      </label>
                      <input 
                        type="email" 
                        placeholder="your@email.com"
                        required
                        className="w-full bg-studio-cream/50 border border-studio-black/10 px-4 py-3 text-studio-black placeholder:text-studio-black/30 focus:outline-none focus:border-studio-gold transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label className="block font-mono text-xs tracking-wider text-studio-black/50 mb-2">
                        INTEREST
                      </label>
                      <select 
                        required
                        className="w-full bg-studio-cream/50 border border-studio-black/10 px-4 py-3 text-studio-black focus:outline-none focus:border-studio-gold transition-colors"
                      >
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
                        required
                        className="w-full bg-studio-cream/50 border border-studio-black/10 px-4 py-3 text-studio-black placeholder:text-studio-black/30 resize-none focus:outline-none focus:border-studio-gold transition-colors"
                      />
                    </div>
                    
                    <button 
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full bg-studio-black text-studio-white py-4 font-display font-semibold tracking-wide hover:bg-studio-gold hover:text-studio-black transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {formStatus === 'submitting' ? 'SENDING...' : 'SEND INQUIRY'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Lightbox */}
      {galleryLightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-studio-black/95 backdrop-blur-md flex items-center justify-center">
          <div className="absolute inset-0" onClick={() => setGalleryLightboxIndex(null)} />
          <button
            onClick={() => setGalleryLightboxIndex(null)}
            className="absolute top-5 right-5 z-10 w-12 h-12 flex items-center justify-center bg-studio-white/10 hover:bg-studio-gold text-studio-white hover:text-studio-black transition-colors rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
          {galleryLightboxIndex > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); setGalleryLightboxIndex(galleryLightboxIndex - 1); }}
              className="absolute left-4 md:left-8 z-10 w-12 h-12 flex items-center justify-center bg-studio-white/10 hover:bg-studio-gold text-studio-white hover:text-studio-black transition-colors rounded-full"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          {galleryLightboxIndex < 8 && (
            <button
              onClick={(e) => { e.stopPropagation(); setGalleryLightboxIndex(galleryLightboxIndex + 1); }}
              className="absolute right-4 md:right-8 z-10 w-12 h-12 flex items-center justify-center bg-studio-white/10 hover:bg-studio-gold text-studio-white hover:text-studio-black transition-colors rounded-full"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
          <FadeImage
            src={`/images/gallery-${galleryLightboxIndex + 1}.jpg`}
            alt={`Studio interior ${galleryLightboxIndex + 1}`}
            className="relative z-10 max-w-[90vw] max-h-[85vh] object-contain shadow-2xl"
          />
        </div>
      )}

      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={() => scrollToSection('artists')}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-studio-gold text-studio-black flex items-center justify-center shadow-lg hover:bg-studio-white transition-colors animate-fade-in"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

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
