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
        id: 26,
        title: 'Amber Kaleidoscope',
        image: '/images/betty-amber-kaleidoscope.jpg',
        price: 2550,
        size: 'TBD',
        medium: 'Acrylic on Canvas'
      },
      {
        id: 27,
        title: 'Dreamscape',
        image: '/images/betty-dreamscape.jpg',
        price: 2450,
        size: '30 x 24"',
        medium: 'Oil Pastel on Paper'
      },
      {
        id: 27,
        title: 'Here We Go Again',
        image: '/images/betty-here-we-go-again.jpg',
        price: 1050,
        size: '24 x 18"',
        medium: 'Acrylic and Inks on Paper'
      },
      {
        id: 28,
        title: 'Through the Marsh',
        image: '/images/betty-through-the-marsh.jpg',
        price: 1100,
        size: '24 x 36"',
        medium: 'Abstract Acrylic Landscape'
      },
      {
        id: 29,
        title: 'Gagee\'s Red Pitcher',
        image: '/images/betty-gagees-red-pitcher.jpg',
        price: 800,
        size: '30 x 24"',
        medium: 'Oil Painting'
      },
      {
        id: 30,
        title: 'Blowing in the Wind',
        image: '/images/betty-blowing-in-the-wind.jpg',
        price: 1800,
        size: '40 x 30"',
        medium: 'Abstract Acrylic'
      },
      {
        id: 31,
        title: 'Fields of Violet',
        image: '/images/betty-fields-of-violet.jpg',
        price: 2200,
        size: '48 x 36"',
        medium: 'Acrylic'
      },
      {
        id: 32,
        title: 'Why Not Have Fun',
        image: '/images/betty-why-not-have-fun.jpg',
        price: 600,
        size: '24 x 18"',
        medium: 'Acrylic and Archival Ink on Paper'
      },
      {
        id: 33,
        title: 'Travel Thru',
        image: '/images/betty-travel-thru.jpg',
        price: 1500,
        size: '30 x 40"',
        medium: 'Acrylic on Canvas'
      },
      {
        id: 34,
        title: 'Water\'s Edge',
        image: '/images/betty-waters-edge.jpg',
        price: 450,
        size: '14 x 12"',
        medium: 'Pastel'
      },
      {
        id: 35,
        title: 'Almost a Full Circle',
        image: '/images/betty-almost-a-full-circle.jpg',
        price: 650,
        size: '24 x 18"',
        medium: 'Acrylic and Ink on Paper'
      },
      {
        id: 36,
        title: 'Action Please',
        image: '/images/betty-action-please.jpg',
        price: 1250,
        size: '24 x 20"',
        medium: 'Acrylic and Archival Ink on Paper'
      },
      {
        id: 37,
        title: 'Unexpected',
        image: '/images/betty-unexpected.jpg',
        price: 1150,
        size: '24 x 24"',
        medium: 'Acrylic on Canvas'
      },
      {
        id: 38,
        title: 'Morning Silence',
        image: '/images/betty-morning-silence.jpg',
        price: 1950,
        size: '26 x 19"',
        medium: 'Pastel on Paper'
      },
      {
        id: 39,
        title: 'Behind the Door',
        image: '/images/betty-behind-the-door.jpg',
        price: 850,
        size: '24 x 18"',
        medium: 'Acrylic'
      },
      {
        id: 40,
        title: 'Moving Waters',
        image: '/images/betty-moving-waters.jpg',
        price: 4250,
        size: '60 x 48"',
        medium: 'Acrylic on Canvas'
      },
      {
        id: 41,
        title: 'Feeling Misty',
        image: '/images/betty-feeling-misty.jpg',
        price: 2400,
        size: '40 x 24"',
        medium: 'Abstract Acrylic'
      },
      {
        id: 42,
        title: 'Burst of Energy',
        image: '/images/betty-burst-of-energy.jpg',
        price: 2550,
        size: '36 x 36"',
        medium: 'Acrylic and Ink on Canvas'
      },
      {
        id: 43,
        title: 'Catching the Light',
        image: '/images/betty-catching-the-light.jpg',
        price: 2450,
        size: '40 x 34"',
        medium: 'Acrylic on Canvas'
      },
      {
        id: 44,
        title: 'Rainy Day',
        image: '/images/betty-rainy-day.jpg',
        price: 4050,
        size: '24 x 18"',
        medium: 'Acrylic'
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
  {
    name: 'Guest Artist',
    specialty: 'TBD',
    bio: 'We are honored to feature rotating guest artists at Studio Nouveau. Please visit us in person to view their latest works and learn more about their creative journey.',
    artworks: []
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
