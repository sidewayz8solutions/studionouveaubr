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
        title: 'Sunset Reflections', 
        image: '/images/debbie-sunset-reflection.jpg', 
        price: 450, 
        size: '24 x 24"', 
        medium: 'Acrylic on Canvas' 
      },
      { 
        id: 2, 
        title: 'Sunset Over the Lake', 
        image: '/images/debbie-sunset-trees.jpg', 
        price: 520, 
        size: '30 x 24"', 
        medium: 'Acrylic on Canvas' 
      },
      { 
        id: 3, 
        title: 'Hummingbird Garden', 
        image: '/images/debbie-hummingbird-flowers.jpg', 
        price: 380, 
        size: '20 x 20"', 
        medium: 'Mixed Media' 
      },
      { 
        id: 4, 
        title: 'Zentangle Cardinal', 
        image: '/images/debbie-zentangle-cardinal-1.png', 
        price: 150, 
        size: '12 x 12"', 
        medium: 'Ink on Paper' 
      },
      { 
        id: 5, 
        title: 'Blue Whale', 
        image: '/images/debbie-whale-zentangle.jpeg', 
        price: 175, 
        size: '14 x 11"', 
        medium: 'Ink & Watercolor' 
      },
      { 
        id: 6, 
        title: 'Butterfly Dreams', 
        image: '/images/debbie-butterfly-zentangle.png', 
        price: 200, 
        size: '16 x 12"', 
        medium: 'Ink on Paper' 
      },
      { 
        id: 7, 
        title: 'Fox Spirit', 
        image: '/images/debbie-fox-zentangle.png', 
        price: 225, 
        size: '16 x 16"', 
        medium: 'Ink & Marker' 
      },
      { 
        id: 8, 
        title: 'Field of Flowers', 
        image: '/images/debbie-field-flowers-framed.png', 
        price: 300, 
        size: '21 x 17"', 
        medium: 'Acrylic' 
      },
      { 
        id: 9, 
        title: 'Ocean Wave', 
        image: '/images/debbie-ocean-wave.png', 
        price: 650, 
        size: '36 x 24"', 
        medium: 'Acrylic on Canvas' 
      },
      { 
        id: 10, 
        title: 'White Egret', 
        image: '/images/debbie-egret.png', 
        price: 580, 
        size: '30 x 30"', 
        medium: 'Acrylic on Canvas' 
      },
      { 
        id: 11, 
        title: 'Sunflower Field', 
        image: '/images/debbie-sunflowers.png', 
        price: 480, 
        size: '24 x 30"', 
        medium: 'Acrylic' 
      },
      { 
        id: 12, 
        title: 'Rainbow Birds', 
        image: '/images/debbie-rainbow-birds.png', 
        price: 350, 
        size: '20 x 16"', 
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
        title: 'Golden Tree', 
        image: '/images/abstract-tree.jpg', 
        price: 1650, 
        size: '30 x 30"', 
        medium: 'Acrylic on Canvas' 
      },
      { 
        id: 18, 
        title: 'Bear Cub', 
        image: '/images/bear.jpg', 
        price: 2200, 
        size: '36 x 36"', 
        medium: 'Mixed Media' 
      },
      { 
        id: 19, 
        title: 'Ocean Whisper', 
        image: '/images/whale.jpg', 
        price: 1950, 
        size: '36 x 24"', 
        medium: 'Acrylic on Canvas' 
      },
      { 
        id: 20, 
        title: 'Cardinal', 
        image: '/images/cardinal.jpg', 
        price: 1200, 
        size: '20 x 20"', 
        medium: 'Acrylic on Canvas' 
      },
      { 
        id: 21, 
        title: 'Bluebird', 
        image: '/images/bluebird.jpg', 
        price: 950, 
        size: '16 x 16"', 
        medium: 'Oil on Canvas' 
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
