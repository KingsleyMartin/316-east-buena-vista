# 316 East Buena Vista Street

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Historic documentation and restoration progress of Francis Wilson's 1910 Prairie-style adobe house in Santa Fe, New Mexico.

## 🏛️ About

This website documents the comprehensive preservation and restoration of a rare example of Prairie School architecture executed in adobe. Built in 1910 by Francis Wilson, this property represents Santa Fe's architectural diversity before the Spanish-Pueblo Revival became dominant.

**Live Site:** [https://316eastbuenavista.com](https://316eastbuenavista.com)

## ✨ Features

- **Comprehensive History** - Detailed timeline of notable residents from 1910 to present
- **Architectural Analysis** - In-depth exploration of Prairie School principles in adobe construction
- **Restoration Documentation** - Real-time progress tracking and updates
- **Historic Gardens** - Charlotte Wilson's terraced landscaping and water systems
- **Document Archive** - Historical records, research documents, and reports
- **Interactive Features** - Photo comparisons, timeline navigation, document search
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices

## 📁 Project Structure

```
316EastBuenaVista/
├── index.html              # Homepage with property overview
├── history.html            # Detailed history and timeline
├── house.html              # Architectural analysis
├── restoration.html        # Restoration progress tracking
├── gardens.html            # Historic gardens documentation
├── documents.html          # Document archive with search
├── sales.html              # Sales history
├── flowering-calendar.html # Garden plant calendar
├── 404.html               # Custom error page
├── cs/
│   ├── common.css          # Main stylesheet (3485 lines)
│   └── common-bck.css      # Backup stylesheet
├── js/
│   ├── navigation.js       # Dynamic navigation component
│   └── helpers.js          # Interactive features and utilities
├── photos/                 # Current photographs
├── photos-originals/       # Original historical photos
├── plans/                  # Floor plans and maps
├── documents/              # Historical documents
├── favicon.svg             # Site icon
├── robots.txt              # Search engine directives
└── sitemap.xml             # Site structure for SEO
```

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/316EastBuenaVista.git
   cd 316EastBuenaVista
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser, or
   - Use a local web server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

3. **View the site**
   Navigate to `http://localhost:8000` in your browser

## 🛠️ Development

### File Organization

- **HTML Pages**: All page files are in the root directory
- **Stylesheets**: Located in `cs/` directory
- **JavaScript**: Located in `js/` directory
- **Assets**: Images, plans, and documents in respective directories

### Key Components

#### Navigation System
The site uses a dynamic navigation component (`js/navigation.js`) that:
- Automatically highlights the active page
- Provides responsive mobile menu
- Maintains consistency across all pages

#### Interactive Features
The `js/helpers.js` file provides:
- Document search functionality
- Photo comparison sliders
- Timeline navigation
- Document filtering and preview
- Photo zoom functionality

### CSS Architecture

The main stylesheet (`cs/common.css`) is organized into sections:
1. CSS Variables & Reset
2. Base Typography
3. Layout - Containers & Grids
4. Navigation
5. Hero Section
6. Cards & Components
7. Timeline & Progress Components
8. Photo Gallery & Comparison
9. Responsive Breakpoints

## 🎨 Customization

### Color Scheme

Edit CSS variables in `cs/common.css`:

```css
:root {
    --color-gold: #b8860b;
    --color-gold-dark: #9a7209;
    --color-text-primary: #1a1a1a;
    --color-text-secondary: #666;
    --color-bg-light: #f8f9fa;
}
```

### Adding New Pages

1. Create new HTML file in root directory
2. Copy the head section from an existing page (includes meta tags, favicon)
3. Add `<div id="nav-placeholder"></div>` after `<body>`
4. Include scripts before closing `</body>`:
   ```html
   <script src="js/navigation.js"></script>
   <script src="js/helpers.js"></script>
   ```
5. Update `js/navigation.js` navConfig to include new page
6. Update `sitemap.xml` with new page URL

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility

This site includes:
- ARIA labels for screen readers
- Keyboard navigation support
- Skip-to-content link
- Semantic HTML structure
- Sufficient color contrast
- Responsive text sizing

## 📊 SEO Features

- Meta descriptions on all pages
- Open Graph tags for social sharing
- Twitter Card support
- Sitemap.xml for search engines
- Robots.txt for crawl optimization
- Semantic HTML structure
- Mobile-responsive design

## 🤝 Contributing

Contributions to improve the documentation or fix issues are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Credits

### Historic Research
- Historic Santa Fe Foundation (1993 research document)
- New Mexico State Records Center and Archives
- Palace of the Governors Photo Archives

### Notable Residents
- **Francis Wilson** (1910-1954) - Water law authority, original owner
- **Charlotte Wilson** - DAR national officer, garden designer
- **William Federici** - NM Supreme Court Justice (1958-1980)

### Current Documentation
- Property research and documentation
- Restoration photography and progress tracking
- Website design and development

## 📧 Contact

For questions about this historic property or website:
- Create an issue in this repository
- Email: [your-email@example.com]

## 🔗 Related Links

- [Historic Santa Fe Foundation](https://historicsantafe.org/)
- [New Mexico Historic Preservation Division](https://www.nmhistoricpreservation.org/)
- [National Register of Historic Places](https://www.nps.gov/subjects/nationalregister/index.htm)

---

**Last Updated:** January 13, 2026

Built with ❤️ for historic preservation
