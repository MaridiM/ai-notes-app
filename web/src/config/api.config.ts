/**
 * API Configuration
 * 
 * Centralized configuration for API endpoints.
 * In production, this would typically come from environment variables.
 */
export const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  endpoints: {
    notes: '/notes',
  },
} as const;

