/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Ensure these paths cover ALL your component and page files
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
    // Include the pages directory as well, for safety:
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    // Add './src/**/*.{js,ts,jsx,tsx,mdx}' if you use a 'src' folder
  ],
  theme: {
    extend: {
      colors: {
        // --- Brand Colors ---
        'primary': '#277B7C',        // The main brand color (Teal)
        secondary: {
          DEFAULT: '#2D527D',        // The secondary brand color (Navy Blue)
          lighter1: '#3D628D',      
          lighter2: '#4D729D',      
          darker1: '#213D5E',       
          darker2: '#15293E',       
        },
        
        // --- Neutral Utility Colors ---
        'gray-50': '#F9FAFB',
        'gray-900': '#111827',
        
        // --- Status/System Colors ---
        success: {
          DEFAULT: '#10B981',       
          dark: '#059669',          
        },
        warning: {
          DEFAULT: '#FBBF24',       
          dark: '#D97706',
        },
        error: {
          DEFAULT: '#EF4444',        
          dark: '#B91C1C',
        },
      },
      // ... (rest of theme extensions like fontFamily, shadows) ...
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      boxShadow: {
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
      }
    },
  },
  plugins: [],
};
