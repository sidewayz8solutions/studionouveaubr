// TypeScript interfaces for type safety and better IDE support
export interface Artwork {
  id: number | string;
  title: string;
  image: string;
  price: number;
  size: string;
  medium: string;
  width: number;
  height: number;
}

export interface Artist {
  name: string;
  specialty: string;
  bio: string;
  artworks: Artwork[];
}

// Constants for better maintainability
export const ARTIST_NAMES = {
  DEBBIE: 'Debbie Shirley',
  BETTY: 'Betty Efferson',
  TONNI: 'Tonni McCollister',
} as const;

export const ARTWORK_CATEGORIES = {
  MIXED_MEDIA: 'Mixed Media & Zentangle Art',
  ABSTRACT_EXPRESSIONISM: 'Abstract Expressionism',
  ABSTRACT_LANDSCAPES: 'Abstract Landscapes',
} as const;
