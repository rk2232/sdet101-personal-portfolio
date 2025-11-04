// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.skill-category, .project-card, .stat-item, .contact-item');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-progress');
const skillBarObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.width = '0';
            setTimeout(() => {
                entry.target.style.width = width;
            }, 100);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillBarObserver.observe(bar);
});

// Form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelectorAll('input[type="text"]')[1].value;
        const message = contactForm.querySelector('textarea').value;
        
        // Here you would typically send this to a server
        // For now, we'll just show an alert
        alert(`Thank you for your message, ${name}! I'll get back to you soon at ${email}.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Add active class to current section in navigation
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add typing effect to hero title (optional enhancement)
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    // Uncomment to enable typing effect
    // typeWriter();
}

// Parallax effect for hero section (optional)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add hover effect to project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Project data
const projects = {
    'student-grades': {
        title: 'Student Grades Processing',
        tags: ['Python', 'Database', 'Data Processing'],
        image: 'images/student-grades.jpg',
        overview: 'A comprehensive system designed for educational institutions to efficiently process, manage, and analyze student grades. This project automates the entire grading workflow from input to reporting.',
        features: [
            'Automated grade calculations and weighted averages',
            'Bulk import/export of student data via CSV',
            'Real-time grade tracking and updates',
            'Comprehensive grade reports and analytics',
            'Student portal for viewing individual grades',
            'Data validation and error handling'
        ],
        technologies: ['Python', 'SQLite/MySQL', 'Pandas', 'NumPy', 'CSV Processing'],
        details: 'This system was developed to streamline the grading process for educators. It handles multiple assignment types, calculates final grades based on customizable weightings, and generates detailed reports for both students and administrators. The system includes robust data validation to ensure accuracy and provides intuitive interfaces for all users.',
        liveLink: '#',
        codeLink: '#'
    },
    'inventory': {
        title: 'Inventory Management',
        tags: ['JavaScript', 'Database', 'Web Interface'],
        image: 'images/inventory-management.jpg',
        overview: 'An efficient web-based inventory management system that helps businesses track stock levels, manage orders, monitor product movements, and generate comprehensive reports.',
        features: [
            'Real-time stock level tracking',
            'Automated low-stock alerts',
            'Order management and processing',
            'Supplier and vendor management',
            'Automated reporting and analytics',
            'User authentication and role-based access',
            'Barcode scanning support',
            'Export capabilities for reports'
        ],
        technologies: ['JavaScript', 'HTML/CSS', 'Node.js', 'MySQL/PostgreSQL', 'RESTful API'],
        details: 'This inventory management solution provides businesses with a complete system to monitor and control their stock. It includes features for tracking incoming and outgoing inventory, managing purchase orders, and generating detailed reports. The system is designed with scalability in mind and can handle multiple locations and warehouses.',
        liveLink: '#',
        codeLink: '#'
    },
    'weather': {
        title: 'Weather Report',
        tags: ['JavaScript', 'API', 'CSS'],
        image: 'images/weather-report.jpg',
        overview: 'A modern, responsive weather reporting application that provides users with current weather conditions and accurate forecasts using real-time data from weather APIs.',
        features: [
            'Current weather conditions with detailed metrics',
            '7-day weather forecast',
            'Location-based weather search',
            'Geolocation support for automatic location detection',
            'Hourly weather updates',
            'Weather alerts and notifications',
            'Interactive weather maps',
            'Beautiful, responsive user interface'
        ],
        technologies: ['JavaScript', 'HTML/CSS', 'Weather API', 'Fetch API', 'Geolocation API'],
        details: 'This weather application integrates with popular weather APIs to provide users with accurate, up-to-date weather information. The application features a clean, modern interface that displays weather data in an intuitive way. It supports location-based services and provides detailed forecasts to help users plan their activities.',
        liveLink: '#',
        codeLink: '#'
    }
};

// Modal functionality - wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalTags = document.getElementById('modalTags');
    const modalOverview = document.getElementById('modalOverview');
    const modalFeatures = document.getElementById('modalFeatures');
    const modalTechnologies = document.getElementById('modalTechnologies');
    const modalDetails = document.getElementById('modalDetails');
    const modalLiveLink = document.getElementById('modalLiveLink');
    const modalCodeLink = document.getElementById('modalCodeLink');
    const modalClose = document.querySelector('.modal-close');

    if (!modal || !modalTitle) return; // Exit if modal doesn't exist

    // Open modal with project data
    function openModal(projectId) {
        const project = projects[projectId];
        if (!project) return;

        // Populate modal with project data
        if (modalTitle) modalTitle.textContent = project.title;
        if (modalOverview) modalOverview.textContent = project.overview;
        if (modalDetails) modalDetails.textContent = project.details;
        
        // Set tags
        if (modalTags) {
            modalTags.innerHTML = '';
            project.tags.forEach(tag => {
                const tagElement = document.createElement('span');
                tagElement.className = 'tag';
                tagElement.textContent = tag;
                modalTags.appendChild(tagElement);
            });
        }

        // Set features
        if (modalFeatures) {
            modalFeatures.innerHTML = '';
            project.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                modalFeatures.appendChild(li);
            });
        }

        // Set technologies
        if (modalTechnologies) {
            modalTechnologies.innerHTML = '';
            project.technologies.forEach(tech => {
                const techElement = document.createElement('span');
                techElement.className = 'tag';
                techElement.textContent = tech;
                modalTechnologies.appendChild(techElement);
            });
        }

        // Set image
        const modalImage = document.getElementById('modalImage');
        if (modalImage && project.image) {
            modalImage.src = project.image;
            modalImage.alt = project.title + ' Screenshot';
        }

        // Set links
        if (modalLiveLink) modalLiveLink.href = project.liveLink;
        if (modalCodeLink) modalCodeLink.href = project.codeLink;

        // Show modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // Close modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Event listeners for project links
    document.querySelectorAll('.project-link[data-project]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = link.getAttribute('data-project');
            openModal(projectId);
        });
    });

    // Close modal when clicking close button
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
});

// Console message
console.log('%c👋 Welcome to my portfolio!', 'font-size: 20px; color: #6366f1; font-weight: bold;');
console.log('%cFeel free to explore the code and reach out if you have any questions!', 'font-size: 14px; color: #6b7280;');

