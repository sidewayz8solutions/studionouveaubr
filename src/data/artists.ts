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
        medium: 'Mixed Media',
        width: 903,
        height: 1200
      },
      {
        id: 2,
        title: 'Strutting Around',
        image: '/images/debbie-strutting-around.jpg',
        price: 150,
        size: '14 x 14"',
        medium: 'Mixed Media',
        width: 1193,
        height: 1200
      },
      {
        id: 3,
        title: 'Time To Bloom',
        image: '/images/debbie-time-to-bloom.jpg',
        price: 300,
        size: '16 x 20"',
        medium: 'Mixed Media',
        width: 1200,
        height: 900
      },
      {
        id: 4,
        title: 'Sweet Nectar',
        image: '/images/debbie-sweet-nectar.jpg',
        price: 575,
        size: '24 x 24"',
        medium: 'Mixed Media',
        width: 1164,
        height: 1200
      },
      {
        id: 5,
        title: 'Waiting And Watching',
        image: '/images/debbie-waiting-and-watching.jpg',
        price: 575,
        size: '24 x 24"',
        medium: 'Mixed Media',
        width: 1103,
        height: 1200
      },
      {
        id: 6,
        title: 'Sunset on the Bayou',
        image: '/images/debbie-sunset-on-the-bayou.jpg',
        price: 700,
        size: '24 x 30"',
        medium: 'Mixed Media',
        width: 1200,
        height: 968
      },
      {
        id: 7,
        title: 'Springtime',
        image: '/images/debbie-springtime.jpg',
        price: 1200,
        size: '30 x 40"',
        medium: 'Mixed Media',
        width: 952,
        height: 1200
      },
      {
        id: 8,
        title: 'It\'s A Party',
        image: '/images/debbie-its-a-party.jpg',
        price: 1200,
        size: '36 x 36"',
        medium: 'Mixed Media',
        width: 1198,
        height: 1200
      },
      {
        id: 9,
        title: 'Sunflowers in South Dakota',
        image: '/images/debbie-sunflowers-in-south-dakota.jpg',
        price: 900,
        size: '30 x 30"',
        medium: 'Mixed Media',
        width: 1148,
        height: 1200
      },
      {
        id: 10,
        title: 'Whale',
        image: '/images/debbie-whale.jpg',
        price: 888,
        size: '24 x 24"',
        medium: 'Mixed Media',
        width: 1245,
        height: 1248
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
        medium: 'Acrylic on Canvas',
        width: 1200,
        height: 1190
      },
      {
        id: 27,
        title: 'Dreamscape',
        image: '/images/betty-dreamscape.jpg',
        price: 2450,
        size: '30 x 24"',
        medium: 'Oil Pastel on Paper',
        width: 952,
        height: 1200
      },
      {
        id: 27,
        title: 'Here We Go Again',
        image: '/images/betty-here-we-go-again.jpg',
        price: 1050,
        size: '24 x 18"',
        medium: 'Acrylic and Inks on Paper',
        width: 825,
        height: 1200
      },
      {
        id: 28,
        title: 'Through the Marsh',
        image: '/images/betty-through-the-marsh.jpg',
        price: 1100,
        size: '24 x 36"',
        medium: 'Abstract Acrylic Landscape',
        width: 1200,
        height: 799
      },
      {
        id: 29,
        title: 'Gagee\'s Red Pitcher',
        image: '/images/betty-gagees-red-pitcher.jpg',
        price: 800,
        size: '30 x 24"',
        medium: 'Oil Painting',
        width: 957,
        height: 1200
      },
      {
        id: 30,
        title: 'Blowing in the Wind',
        image: '/images/betty-blowing-in-the-wind.jpg',
        price: 1800,
        size: '40 x 30"',
        medium: 'Abstract Acrylic',
        width: 892,
        height: 1200
      },
      {
        id: 31,
        title: 'Fields of Violet',
        image: '/images/betty-fields-of-violet.jpg',
        price: 2200,
        size: '48 x 36"',
        medium: 'Acrylic',
        width: 1200,
        height: 900
      },
      {
        id: 32,
        title: 'Why Not Have Fun',
        image: '/images/betty-why-not-have-fun.jpg',
        price: 600,
        size: '24 x 18"',
        medium: 'Acrylic and Archival Ink on Paper',
        width: 794,
        height: 1200
      },
      {
        id: 33,
        title: 'Travel Thru',
        image: '/images/betty-travel-thru.jpg',
        price: 1500,
        size: '30 x 40"',
        medium: 'Acrylic on Canvas',
        width: 885,
        height: 1200
      },
      {
        id: 34,
        title: 'Water\'s Edge',
        image: '/images/betty-waters-edge.jpg',
        price: 450,
        size: '14 x 12"',
        medium: 'Pastel',
        width: 860,
        height: 1200
      },
      {
        id: 35,
        title: 'Almost a Full Circle',
        image: '/images/betty-almost-a-full-circle.jpg',
        price: 650,
        size: '24 x 18"',
        medium: 'Acrylic and Ink on Paper',
        width: 900,
        height: 1200
      },
      {
        id: 36,
        title: 'Action Please',
        image: '/images/betty-action-please.jpg',
        price: 1250,
        size: '24 x 20"',
        medium: 'Acrylic and Archival Ink on Paper',
        width: 900,
        height: 1200
      },
      {
        id: 37,
        title: 'Unexpected',
        image: '/images/betty-unexpected.jpg',
        price: 1150,
        size: '24 x 24"',
        medium: 'Acrylic on Canvas',
        width: 1190,
        height: 1200
      },
      {
        id: 38,
        title: 'Morning Silence',
        image: '/images/betty-morning-silence.jpg',
        price: 1950,
        size: '26 x 19"',
        medium: 'Pastel on Paper',
        width: 830,
        height: 1200
      },
      {
        id: 39,
        title: 'Behind the Door',
        image: '/images/betty-behind-the-door.jpg',
        price: 850,
        size: '24 x 18"',
        medium: 'Acrylic',
        width: 905,
        height: 1200
      },
      {
        id: 40,
        title: 'Moving Waters',
        image: '/images/betty-moving-waters.jpg',
        price: 4250,
        size: '60 x 48"',
        medium: 'Acrylic on Canvas',
        width: 953,
        height: 1200
      },
      {
        id: 41,
        title: 'Feeling Misty',
        image: '/images/betty-feeling-misty.jpg',
        price: 2400,
        size: '40 x 24"',
        medium: 'Abstract Acrylic',
        width: 864,
        height: 1200
      },
      {
        id: 42,
        title: 'Burst of Energy',
        image: '/images/betty-burst-of-energy.jpg',
        price: 2550,
        size: '36 x 36"',
        medium: 'Acrylic and Ink on Canvas',
        width: 1194,
        height: 1200
      },
      {
        id: 43,
        title: 'Catching the Light',
        image: '/images/betty-catching-the-light.jpg',
        price: 2450,
        size: '40 x 34"',
        medium: 'Acrylic on Canvas',
        width: 963,
        height: 1200
      },
      {
        id: 44,
        title: 'Rainy Day',
        image: '/images/betty-rainy-day.jpg',
        price: 4050,
        size: '24 x 18"',
        medium: 'Acrylic',
        width: 1200,
        height: 1056
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
        medium: 'Acrylic on Canvas',
        width: 1158,
        height: 1200
      },
      {
        id: 18,
        title: 'Pretty in Pink',
        image: '/images/tonni-pretty-in-pink.jpg',
        price: 450,
        size: '12 x 36"',
        medium: 'Acrylic on Canvas',
        width: 1200,
        height: 395
      },
      {
        id: 19,
        title: 'Flowers on the Path',
        image: '/images/tonni-flowers-on-the-path.jpg',
        price: 1200,
        size: '30 x 40"',
        medium: 'Acrylic on Canvas',
        width: 1200,
        height: 884
      },
      {
        id: 20,
        title: 'The Secret Garden',
        image: '/images/tonni-the-secret-garden.jpg',
        price: 1200,
        size: '36 x 36"',
        medium: 'Acrylic on Canvas',
        width: 1200,
        height: 1193
      },
      {
        id: 21,
        title: 'At the Arboretum',
        image: '/images/tonni-at-the-arboretum.jpg',
        price: 400,
        size: '20 x 20"',
        medium: 'Acrylic on Canvas',
        width: 1200,
        height: 1199
      },
      {
        id: 22,
        title: 'Colors of Provence',
        image: '/images/tonni-colors-of-provence.jpg',
        price: 720,
        size: '24 x 30"',
        medium: 'Acrylic on Canvas',
        width: 759,
        height: 1200
      },
      {
        id: 23,
        title: 'Reflections',
        image: '/images/tonni-reflections.jpg',
        price: 720,
        size: 'TBD',
        medium: 'Acrylic on Canvas',
        width: 1200,
        height: 953
      },
      {
        id: 24,
        title: 'Bell River',
        image: '/images/tonni-bell-river.jpg',
        price: 1200,
        size: '36 x 36"',
        medium: 'Acrylic on Canvas',
        width: 1200,
        height: 1189
      },
      {
        id: 25,
        title: 'At Night on the Seine',
        image: '/images/tonni-at-night-on-the-seine.jpg',
        price: 1200,
        size: '36 x 36"',
        medium: 'Acrylic on Canvas',
        width: 1200,
        height: 1176
      },
    ]
  },
  {
    name: 'Katie Lovett',
    specialty: 'Contemporary Wildlife & Nature',
    bio: 'Katie captures the spirit of the natural world through bold contemporary compositions. Her wildlife portraits and nature scenes blend vivid color with expressive brushwork, bringing animals and landscapes to life with striking emotional depth.',
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
