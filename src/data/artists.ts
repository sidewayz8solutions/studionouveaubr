import { Artist, Artwork } from '../types/artists';

/**
 * Artist data with galleries and prices
 * Organized with featured artist (Debbie) first
 * 
 * @description This data structure contains all artist information including
 * their biographical details and artwork collections with pricing.
 * 
 * @performance Consider lazy loading images for better initial page load
 * @todo Implement data fetching from CMS or API for dynamic content management
 */
export const artists: Artist[] = [
  {
    name: 'Debbie Shirley',
    specialty: 'Mixed Media & Zentangle Art',
    bio: 'Debbie creates vibrant mixed media paintings and intricate zentangle illustrations. Her work spans from abstract landscapes to detailed wildlife art, each piece infused with color and emotion.',
    artworks: [
      { 
        id: 1, 
        title: 'The Tiger', 
        image: '/images/debbie-tiger.jpg', 
        price: 75, 
        size: '11 x 9"', 
        medium: 'Mixed Media' 
      },
      { 
        id: 2, 
        title: 'Strutting Around', 
        image: '/images/debbie-strutting-around.jpg', 
        price: 150, 
        size: '14 x 14"', 
        medium: 'Mixed Media' 
      },
      { 
        id: 3, 
        title: 'Time To Bloom', 
        image: '/images/debbie-time-to-bloom.jpg', 
        price: 300, 
        size: '16 x 20"', 
        medium: 'Mixed Media' 
      },
      { 
        id: 4, 
        title: 'Sweet Nectar', 
        image: '/images/debbie-sweet-nectar.jpg', 
        price: 575, 
        size: '24 x 24"', 
        medium: 'Mixed Media' 
      },
      { 
        id: 5, 
        title: 'Waiting And Watching', 
        image: '/images/debbie-waiting-and-watching.jpg', 
        price: 575, 
        size: '24 x 24"', 
        medium: 'Mixed Media' 
      },
      { 
        id: 6, 
        title: 'Sunset on the Bayou', 
        image: '/images/debbie-sunset-on-the-bayou.jpg', 
        price: 700, 
        size: '24 x 30"', 
        medium: 'Mixed Media' 
      },
      { 
        id: 7, 
        title: 'Springtime', 
        image: '/images/debbie-springtime.jpg', 
        price: 1200, 
        size: '30 x 40"', 
        medium: 'Mixed Media' 
      },
      { 
        id: 8, 
        title: 'It\'s A Party', 
        image: '/images/debbie-its-a-party.jpg', 
        price: 1200, 
        size: '36 x 36"', 
        medium: 'Mixed Media' 
      },
      { 
        id: 9, 
        title: 'Sunflowers in South Dakota', 
        image: '/images/debbie-sunflowers-in-south-dakota.jpg', 
        price: 900, 
        size: '30 x 30"', 
        medium: 'Mixed Media' 
      },
    ]
  },
  {
    name: 'Betty Efferson',
    specialty: 'Abstract Expressionism',
    bio: 'An accomplished abstract expressionist artist, Betty has been recognized with national and international awards. She is a Pastel Society of America Signature Member. Her work captures feelings through unencumbered use of color, technique and media.',
    artworks: [
      { 
        id: 13, 
        title: 'Field of Dreams', 
        image: '/images/flowers.jpg', 
        price: 2400, 
        size: '40 x 30"', 
        medium: 'Acrylic on Canvas' 
      },
      { 
        id: 14, 
        title: 'Spring Light', 
        image: '/images/betty-1.jpg', 
        price: 1850, 
        size: '36 x 36"', 
        medium: 'Mixed Media' 
      },
      { 
        id: 15, 
        title: 'Garden Path', 
        image: '/images/betty-2.jpg', 
        price: 3200, 
        size: '48 x 36"', 
        medium: 'Oil on Canvas' 
      },
      { 
        id: 16, 
        title: 'Sunset Reflections', 
        image: '/images/betty-3.jpg', 
        price: 2800, 
        size: '40 x 30"', 
        medium: 'Acrylic on Canvas' 
      },
    ]
  },
  {
    name: 'Tonni McCollister',
    specialty: 'Abstract Landscapes',
    bio: 'Tonni is inspired by the beauty of plants, trees, and flowers. She primarily paints scenes reminiscent of nature using acrylic paint, soft pastels and other interesting items including ferns and mixed media.',
    artworks: [
      { 
        id: 17, 
        title: 'The Winter Guard', 
        image: '/images/tonni-the-winter-guard.jpg', 
        price: 1200, 
        size: '36 x 36"', 
        medium: 'Acrylic on Canvas' 
      },
      { 
        id: 18, 
        title: 'Pretty in Pink', 
        image: '/images/tonni-pretty-in-pink.jpg', 
        price: 450, 
        size: '12 x 36"', 
        medium: 'Acrylic on Canvas' 
      },
      { 
        id: 19, 
        title: 'Flowers on the Path', 
        image: '/images/tonni-flowers-on-the-path.jpg', 
        price: 1200, 
        size: '30 x 40"', 
        medium: 'Acrylic on Canvas' 
      },
      { 
        id: 20, 
        title: 'The Secret Garden', 
        image: '/images/tonni-the-secret-garden.jpg', 
        price: 1200, 
        size: '36 x 36"', 
        medium: 'Acrylic on Canvas' 
      },
      { 
        id: 21, 
        title: 'At the Arboretum', 
        image: '/images/tonni-at-the-arboretum.jpg', 
        price: 400, 
        size: '20 x 20"', 
        medium: 'Acrylic on Canvas' 
      },
      { 
        id: 22, 
        title: 'Colors of Provence', 
        image: '/images/tonni-colors-of-provence.jpg', 
        price: 720, 
        size: '24 x 30"', 
        medium: 'Acrylic on Canvas' 
      },
      { 
        id: 23, 
        title: 'Reflections', 
        image: '/images/tonni-reflections.jpg', 
        price: 720, 
        size: 'TBD', 
        medium: 'Acrylic on Canvas' 
      },
      { 
        id: 24, 
        title: 'Bell River', 
        image: '/images/tonni-bell-river.jpg', 
        price: 1200, 
        size: '36 x 36"', 
        medium: 'Acrylic on Canvas' 
      },
      { 
        id: 25, 
        title: 'At Night on the Seine', 
        image: '/images/tonni-at-night-on-the-seine.jpg', 
        price: 1200, 
        size: '36 x 36"', 
        medium: 'Acrylic on Canvas' 
      },
    ]
  },
];

/**
 * Helper function to get artist by name
 * @param name - Artist name to search for
 * @returns Artist object or undefined if not found
 */
export const getArtistByName = (name: string): Artist | undefined => {
  return artists.find(artist => artist.name === name);
};

/**
 * Helper function to get artwork by ID
 * @param id - Artwork ID to search for
 * @returns Artwork object or undefined if not found
 */
export const getArtworkById = (id: number | string): { artist: Artist; artwork: Artwork } | undefined => {
  for (const artist of artists) {
    const artwork = artist.artworks.find(art => art.id === id);
    if (artwork) {
      return { artist, artwork };
    }
  }
  return undefined;
};

/**
 * Get total count of all artworks across all artists
 * @returns Total number of artworks
 */
export const getTotalArtworkCount = (): number => {
  return artists.reduce((total, artist) => total + artist.artworks.length, 0);
};

/**
 * Get all unique mediums used across all artworks
 * @returns Array of unique medium strings
 */
export const getAllMediums = (): string[] => {
  const mediums = new Set<string>();
  artists.forEach(artist => {
    artist.artworks.forEach(artwork => {
      mediums.add(artwork.medium);
    });
  });
  return Array.from(mediums);
};
