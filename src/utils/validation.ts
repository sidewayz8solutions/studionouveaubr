import { Artist, Artwork } from '../types/artists';

/**
 * Validation utilities for artist and artwork data
 * Ensures data integrity and provides meaningful error messages
 */

/**
 * Validates that a price is a positive number
 * @param price - Price value to validate
 * @returns true if valid, false otherwise
 */
export const isValidPrice = (price: unknown): price is number => {
  return typeof price === 'number' && price > 0 && !isNaN(price) && isFinite(price);
};

/**
 * Validates that an image path is a non-empty string
 * @param image - Image path to validate
 * @returns true if valid, false otherwise
 */
export const isValidImagePath = (image: unknown): image is string => {
  return typeof image === 'string' && image.trim().length > 0;
};

/**
 * Validates an artwork object has all required fields
 * @param artwork - Artwork object to validate
 * @returns Object with isValid boolean and error messages
 */
export const validateArtwork = (artwork: unknown): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (!artwork || typeof artwork !== 'object') {
    return { isValid: false, errors: ['Artwork must be an object'] };
  }
  
  const art = artwork as Record<string, unknown>;
  
  if (!art.id && art.id !== 0) {
    errors.push('Artwork must have an id');
  }
  
  if (!art.title || typeof art.title !== 'string' || art.title.trim().length === 0) {
    errors.push('Artwork must have a non-empty title');
  }
  
  if (!isValidImagePath(art.image)) {
    errors.push('Artwork must have a valid image path');
  }
  
  if (!isValidPrice(art.price)) {
    errors.push('Artwork must have a valid positive price');
  }
  
  if (!art.size || typeof art.size !== 'string' || art.size.trim().length === 0) {
    errors.push('Artwork must have a non-empty size');
  }
  
  if (!art.medium || typeof art.medium !== 'string' || art.medium.trim().length === 0) {
    errors.push('Artwork must have a non-empty medium');
  }
  
  return { isValid: errors.length === 0, errors };
};

/**
 * Validates an artist object has all required fields
 * @param artist - Artist object to validate
 * @returns Object with isValid boolean and error messages
 */
export const validateArtist = (artist: unknown): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (!artist || typeof artist !== 'object') {
    return { isValid: false, errors: ['Artist must be an object'] };
  }
  
  const art = artist as Record<string, unknown>;
  
  if (!art.name || typeof art.name !== 'string' || art.name.trim().length === 0) {
    errors.push('Artist must have a non-empty name');
  }
  
  if (!art.specialty || typeof art.specialty !== 'string' || art.specialty.trim().length === 0) {
    errors.push('Artist must have a non-empty specialty');
  }
  
  if (!art.bio || typeof art.bio !== 'string' || art.bio.trim().length === 0) {
    errors.push('Artist must have a non-empty bio');
  }
  
  if (!Array.isArray(art.artworks)) {
    errors.push('Artist must have an artworks array');
  } else {
    art.artworks.forEach((artwork, index) => {
      const artworkValidation = validateArtwork(artwork);
      if (!artworkValidation.isValid) {
        errors.push(`Artwork at index ${index}: ${artworkValidation.errors.join(', ')}`);
      }
    });
  }
  
  return { isValid: errors.length === 0, errors };
};

/**
 * Validates an array of artists
 * @param artists - Array of artist objects to validate
 * @returns Object with isValid boolean and error messages
 */
export const validateArtists = (artists: unknown): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (!Array.isArray(artists)) {
    return { isValid: false, errors: ['Artists must be an array'] };
  }
  
  artists.forEach((artist, index) => {
    const artistValidation = validateArtist(artist);
    if (!artistValidation.isValid) {
      errors.push(`Artist at index ${index}: ${artistValidation.errors.join(', ')}`);
    }
  });
  
  return { isValid: errors.length === 0, errors };
};

/**
 * Sanitizes a price value, returning 0 if invalid
 * @param price - Price value to sanitize
 * @returns Valid price number
 */
export const sanitizePrice = (price: unknown): number => {
  if (isValidPrice(price)) {
    return price;
  }
  console.warn(`Invalid price value: ${price}, defaulting to 0`);
  return 0;
};

/**
 * Sanitizes an image path, returning a placeholder if invalid
 * @param image - Image path to sanitize
 * @returns Valid image path string
 */
export const sanitizeImagePath = (image: unknown): string => {
  if (isValidImagePath(image)) {
    return image;
  }
  console.warn(`Invalid image path: ${image}, using placeholder`);
  return '/images/placeholder.jpg';
};
