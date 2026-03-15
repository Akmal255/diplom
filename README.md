# 🛰️ Satellite Image Viewer

A modern web platform for viewing, filtering, and downloading satellite imagery from various sources including Sentinel-2, Landsat-8, and MODIS.

## Features

✨ **Key Features:**
- 🔍 **Search & Filter**: Find satellite images by location, source, resolution, and date
- 📊 **Advanced Gallery**: Browse high-resolution satellite imagery in an organized grid
- 🔎 **Detailed Viewer**: Zoom in/out to inspect image details
- 📥 **Multiple Download Formats**: Export as JPEG, PNG, GeoTIFF, or HDF5
- 🌍 **Global Coverage**: Access satellite imagery from around the world
- 📈 **Metadata Display**: View comprehensive image information including coordinates and cloud cover
- ⚡ **Fast Performance**: Built with Next.js for optimal speed and SEO

## Tech Stack

- **Frontend**: React 18.2.0
- **Framework**: Next.js 14.0.0
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Mapping**: Leaflet & React-Leaflet
- **Date Handling**: date-fns
- **Deployment**: Vercel (recommended)

## Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Setup

1. **Clone the repository:**
```bash
git clone https://github.com/Akmal255/diplom.git
cd diplom
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **Create environment variables:**
```bash
# .env.local
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
```

4. **Run the development server:**
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser:**
Navigate to `http://localhost:3000`

## Project Structure

```
satellite-image-viewer/
├── app/
│   ├── page.js                 # Home page with gallery
│   ├── viewer/page.js          # Image viewer page
│   ├── layout.js               # Root layout
│   ├── globals.css             # Global styles
│   └── api/
│       ├── images/
│       │   ├── route.js        # GET all images
│       │   └── [id]/route.js   # GET specific image
│       └── download/route.js   # Download endpoint
├── components/
│   ├── Gallery.jsx             # Image gallery grid
│   ├── SearchBar.jsx           # Search functionality
│   ├── FilterPanel.jsx         # Filter options
│   ├── ImageViewer.jsx         # Image zoom viewer
│   ├── ImageDetails.jsx        # Image metadata
│   └── DownloadButton.jsx      # Download options
├── public/                     # Static assets
├── package.json
├── next.config.js
└── README.md
```

## Usage

### Viewing Satellite Images

1. **Home Page**: Browse the gallery of satellite images
2. **Search**: Use the search bar to find images by location or title
3. **Filter**: Apply filters by satellite source, resolution, and date range
4. **View Details**: Click on an image to open the detailed viewer
5. **Download**: Choose your preferred format and download the image

## API Endpoints

### Get All Images
```
GET /api/images
Query Parameters:
- source: Filter by satellite source (Sentinel-2, Landsat-8, MODIS)
- location: Filter by location name
```

### Get Single Image
```
GET /api/images/[id]
```

### Download Image
```
GET /api/download?imageId=[id]&format=[format]
Formats: jpeg, png, geotiff, hdf5
```

## Satellite Data Sources

The platform integrates with:
- **Sentinel-2**: 10m resolution, RGB natural color
- **Landsat-8**: 30m resolution, multispectral imagery
- **MODIS**: 250m-1km resolution, large area coverage

## Future Enhancements

🚀 **Planned Features:**
- Real satellite data API integration (NASA, USGS, Copernicus)
- Advanced map-based selection
- Time-series analysis and comparison
- User accounts and saved favorites
- Subscription-based access tiers
- Machine learning-powered analysis (cloud detection, vegetation indices)
- Mobile app version
- Real-time data feeds

## Configuration

### Environment Variables

```env
# API Configuration
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000

# Optional: Satellite data provider API keys
NEXT_PUBLIC_NASA_API_KEY=your_key_here
NEXT_PUBLIC_USGS_API_KEY=your_key_here
```

## Performance Optimization

- Image lazy loading with Next.js Image component
- API route caching
- Client-side filtering for better UX
- Optimized CSS with Tailwind

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - see LICENSE file for details

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

For issues, questions, or suggestions, please open an issue on GitHub.

## Roadmap

- [ ] Real satellite data integration
- [ ] Advanced analytics
- [ ] User authentication
- [ ] Favorites and collections
- [ ] API documentation (Swagger)
- [ ] Docker containerization
- [ ] CI/CD pipeline
- [ ] Performance monitoring

---

**Built with ❤️ by Akmal255**

Current Version: 1.0.0
Last Updated: March 2026