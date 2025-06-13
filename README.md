# Real Estate Property Visualization App

A modern, interactive application for visualizing real estate properties, allowing users to explore different towers, floors, and apartment layouts in a hierarchical navigation structure.

## Features

- **Tower Selection**: Browse through different towers with visual representations
- **Floor Navigation**: Explore floors within each tower with visual previews
- **Layout Browsing**: View available apartment layouts for each floor
- **Layout Details**: See detailed information about each apartment layout
- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive Design**: Works on mobile, tablet, and desktop devices

## Technology Stack

- **Framework**: Next.js with App Router
- **UI Components**: Fluent UI React components
- **Animations**: Framer Motion for smooth transitions and hover effects
- **Styling**: CSS Modules for component-specific styling
- **Performance Optimization**: 
  - Dynamic imports with Next.js for code splitting
  - Lazy loading of components to improve initial load time
  - Suspense for better loading states

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx       # Root layout with theme provider
│   └── page.tsx         # Main application entry point
├── components/
│   ├── FloorSelector.tsx    # Floor selection component
│   ├── LayoutDetail.tsx     # Layout details component
│   ├── LayoutSelector.tsx   # Layout selection component
│   ├── TowerSelector.tsx    # Tower selection component
│   └── ui/
│       └── LoadingSpinner.tsx  # Loading indicator component
├── context/
│   └── ThemeContext.tsx    # Theme context for dark/light mode
├── data/
│   └── propertyData.ts     # Data for towers, floors, and layouts
└── styles/
    ├── globals.css         # Global styles
    ├── App.module.css      # App-specific styles
    ├── LoadingSpinner.module.css  # Loading spinner styles
    └── Property.module.css  # Component-specific styles
\`\`\`

## Performance Optimizations

1. **Code Splitting**: Components are dynamically imported using Next.js's `dynamic` function, which splits the JavaScript bundle into smaller chunks that are loaded on demand.

2. **Lazy Loading**: Each major component (TowerSelector, FloorSelector, LayoutSelector, LayoutDetail) is lazy loaded, meaning they are only fetched from the server when needed.

3. **Suspense**: React Suspense is used to show loading states while components are being loaded.

4. **Data Organization**: Data is separated from components to improve maintainability and reduce component size.

## Limitations and Tradeoffs

1. **Initial Data Load**: All property data is loaded upfront in the `propertyData.ts` file. For a production application with large datasets, this should be replaced with API calls to fetch data on demand.

2. **Image Optimization**: The current implementation uses direct image paths. 

3. **State Management**: For simplicity, this application uses React's useState for state management. For more complex applications, a state management library like Redux or contextApi might be more appropriate.

4. **Caching**: There's no caching mechanism implemented. For production, consider adding caching for API responses and images.

5. **Accessibility**: While the app has basic structure, a more comprehensive accessibility implementation would be needed for production.

## Getting Started

1. Clone the repository
2. Install dependencies:
   \`\`\`
   npm install
   \`\`\`
3. Run the development server:
   \`\`\`
   npm run dev
   \`\`\`
4. Open [http://localhost:5174](http://localhost:5174) in your browser

## Future Enhancements

- Add search functionality to find specific layouts
- Implement filtering options (by price, area, etc.)
- Add 3D visualization of apartments
- Implement virtual tours
- Add booking/inquiry functionality
