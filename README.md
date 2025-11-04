# Personal Portfolio Website

A modern, responsive personal portfolio website showcasing projects, skills, and contact information for Rayyaan Kashif.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Smooth Navigation**: Smooth scrolling navigation with active section highlighting
- **Interactive Elements**: 
  - Animated skill bars that fill on scroll
  - Fade-in animations for sections
  - Project modal popups with detailed information
  - Hover effects on project cards
- **Modern UI/UX**: Clean, professional design with modern aesthetics
- **Contact Form**: Functional contact form with validation
- **Mobile Menu**: Hamburger menu for mobile navigation
- **Project Showcases**: Featured projects with detailed modals including:
  - Project overview and details
  - Key features list
  - Technologies used
  - Live demo and source code links

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS variables, flexbox, and animations
- **JavaScript (Vanilla)**: Interactive functionality and DOM manipulation
- **Google Fonts**: Inter font family for typography

## 📁 Project Structure

```
sdet101-personal-portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── images/             # Project images directory
│   ├── student-grades.jpg
│   ├── inventory-management.jpg
│   └── weather-report.jpg
└── README.md           # Project documentation
```

## 🎯 Sections

1. **Hero Section**: Introduction with call-to-action buttons
2. **About Section**: Personal information and statistics
3. **Skills Section**: Technical skills organized by category (Frontend, Backend, Tools & Others)
4. **Projects Section**: Featured projects with interactive modals
5. **Contact Section**: Contact information and contact form
6. **Footer**: Copyright and credits

## 🚦 Getting Started

### Prerequisites

No special prerequisites required! This is a static website that can be opened directly in a web browser.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sdet101-personal-portfolio.git
```

2. Navigate to the project directory:
```bash
cd sdet101-personal-portfolio
```

3. Open `index.html` in your web browser:
   - Simply double-click the `index.html` file, or
   - Use a local development server (recommended for best experience)

### Using a Local Development Server (Optional)

For the best development experience, you can use a local server:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (http-server):**
```bash
npx http-server -p 8000
```

Then open `http://localhost:8000` in your browser.

## 📝 Customization

### Updating Personal Information

1. **Name and Title**: Edit the hero section in `index.html` (lines 36-42)
2. **About Section**: Update the about text in the About section (lines 64-68)
3. **Contact Information**: Modify contact details in the Contact section (lines 268-291)
4. **Skills**: Adjust skill levels and categories in the Skills section (lines 94-180)

### Adding Projects

1. Add project images to the `images/` directory
2. Add a new project card in the Projects section in `index.html`
3. Add project data to the `projects` object in `script.js` (starting at line 179)

### Styling

- Modify CSS variables in `styles.css` (lines 8-18) to change the color scheme
- Adjust fonts, spacing, and layout in the respective CSS sections

## 🎨 Features in Detail

### Smooth Scrolling
Navigation links smoothly scroll to their respective sections with an offset for the fixed navbar.

### Intersection Observer Animations
Elements fade in as they come into view, creating a dynamic user experience.

### Project Modals
Click on any project card to view detailed information in a modal popup, including:
- Project overview
- Key features
- Technologies used
- Live demo and source code links

### Responsive Navigation
The navigation bar adapts to different screen sizes with a mobile hamburger menu.

### Form Validation
The contact form includes basic validation and user feedback.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📧 Contact

- **Email**: rk2232@njit.edu
- **Phone**: +1 (914) 514-0278
- **Location**: Newark, NJ, USA

## 👤 Author

**Rayyaan Kashif**
- Student at New Jersey Institute of Technology (NJIT)
- Major: Electrical and Computer Engineering Technology (ECET)

## 📄 License

This project is open source and available for personal use. Feel free to use it as a template for your own portfolio!

## 🙏 Acknowledgments

- Google Fonts for the Inter font family
- Built with ❤️ using HTML, CSS & JavaScript

---

**Note**: Remember to add your project images to the `images/` directory and update the image paths in `index.html` if needed. Also, update the social media links and project links with your actual URLs.

