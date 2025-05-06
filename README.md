# SpecifiAI - Frontend Website

A responsive frontend website for SpecifiAI, a fictional AI data startup, with modern B2B SaaS styling. This project features an orange-based color scheme and professional design using React with TypeScript.

## Deployment Instructions for Replit

This project can be run in two modes:

### Development Mode (with Backend)

```bash
npm run dev
```

This starts the Node.js/Express backend with Vite frontend development server.

### Static Deployment (Frontend Only)

For deployment without backend dependencies, follow these steps:

1. Build the project:
   ```bash
   npm run build
   ```

2. Run the static server:
   ```bash
   node static-server.js
   ```

3. Or use the deployment script for convenience:
   ```bash
   bash deploy.sh
   node static-server.js
   ```

## Website Structure

- **Home**: Main landing page with product showcase
- **Products**: Detailed product information 
- **Pricing**: Pricing plans and options
- **About**: Company information and team
- **Contact**: Contact form and company details
- **Compliance**: Compliance features and certifications
- **Dashboard**: Interactive demo dashboard (standalone page)

## Technical Details

- Built with React and TypeScript
- Uses Tailwind CSS for styling
- Features shadcn/ui components
- Client-side routing with wouter

## Important Files

- `static-server.js`: Standalone static file server
- `deploy.sh`: Deployment script
- `vite.config.ts`: Build configuration
- `client/src/App.tsx`: Main application component
- `client/src/index.css`: Global styles and theme