/**
 * Generates a simple blur data URL for image placeholders
 * This creates a minimal 1x1 pixel blur placeholder
 */
export function generateBlurDataURL(
  color: string = '#f3f4f6' // Default to gray-100
): string {
  const svg = `
    <svg width="1" height="1" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg">
      <rect width="1" height="1" fill="${color}" />
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}

/**
 * Creates a simple gradient blur placeholder
 */
export function generateGradientBlurDataURL(
  color1: string = '#f3f4f6',
  color2: string = '#e5e7eb'
): string {
  const svg = `
    <svg width="1" height="1" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color1}" />
          <stop offset="100%" style="stop-color:${color2}" />
        </linearGradient>
      </defs>
      <rect width="1" height="1" fill="url(#g)" />
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}

/**
 * Image loading optimization configurations
 */
export const imageLoadingConfig = {
  // For above-the-fold images (hero, logo)
  priority: {
    priority: true,
    loading: 'eager' as const,
    fetchPriority: 'high' as const,
  },
  
  // For images in viewport
  eager: {
    loading: 'eager' as const,
    fetchPriority: 'high' as const,
  },
  
  // For images below the fold
  lazy: {
    loading: 'lazy' as const,
    fetchPriority: 'low' as const,
  },
} as const;

/**
 * Common image sizes for responsive images
 */
export const imageSizes = {
  logo: '(max-width: 1024px) 48px, 64px',
  icon: '(max-width: 768px) 24px, 32px',
  card: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  hero: '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw',
  full: '100vw',
} as const; 