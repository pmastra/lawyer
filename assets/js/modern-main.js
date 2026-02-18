/**
 * Modern JavaScript for Estudio Jurídico Mayer
 * No jQuery - Pure ES6+ JavaScript
 * Optimized for performance and accessibility
 */

'use strict';

// ===== Utility Functions =====

const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

const debounce = (func, wait = 100) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
};

const throttle = (func, limit = 100) => {
    let inThrottle;
    return (...args) => {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// ===== Smooth Scroll =====

class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        $$('.page-scroll').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = $(targetId);
                
                if (targetElement) {
                    const offset = 73; // navbar height
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    const navbar = $('#navbarOne');
                    if (navbar) {
                        navbar.classList.remove('show');
                    }

                    // Update active state
                    this.updateActiveLink(link);
                }
            });
        });
    }

    updateActiveLink(activeLink) {
        $$('.navbar-nav .nav-item').forEach(item => {
            item.classList.remove('active');
        });
        activeLink.closest('.nav-item')?.classList.add('active');
    }
}

// ===== Sticky Navbar =====

class StickyNavbar {
    constructor() {
        this.navbar = $('.navbar-area');
        this.logo = $('.navbar-brand img');
        this.scrollThreshold = 20;
        this.init();
    }

    init() {
        if (!this.navbar) return;

        const handleScroll = throttle(() => {
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollPosition >= this.scrollThreshold) {
                this.navbar.classList.add('sticky');
                if (this.logo) {
                    this.logo.src = 'assets/images/Estudio-Logo.png';
                }
            } else {
                this.navbar.classList.remove('sticky');
                if (this.logo) {
                    this.logo.src = 'assets/images/Estudio-Logo-white.png';
                }
            }
        }, 100);

        window.addEventListener('scroll', handleScroll, { passive: true });
    }
}

// ===== Mobile Menu Toggle =====

class MobileMenu {
    constructor() {
        this.toggler = $('.navbar-toggler');
        this.navbar = $('#navbarOne');
        this.init();
    }

    init() {
        if (!this.toggler || !this.navbar) return;

        this.toggler.addEventListener('click', () => {
            this.toggler.classList.toggle('active');
            this.navbar.classList.toggle('show');
            
            // Update ARIA attributes
            const isExpanded = this.navbar.classList.contains('show');
            this.toggler.setAttribute('aria-expanded', isExpanded);
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            const isClickInside = this.toggler.contains(e.target) || this.navbar.contains(e.target);
            if (!isClickInside && this.navbar.classList.contains('show')) {
                this.navbar.classList.remove('show');
                this.toggler.classList.remove('active');
                this.toggler.setAttribute('aria-expanded', 'false');
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.navbar.classList.contains('show')) {
                this.navbar.classList.remove('show');
                this.toggler.classList.remove('active');
                this.toggler.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

// ===== Active Section Highlight =====

class SectionHighlight {
    constructor() {
        this.sections = $$('section[id]');
        this.navLinks = $$('.page-scroll');
        this.init();
    }

    init() {
        if (!this.sections.length || !this.navLinks.length) return;

        const handleScroll = throttle(() => {
            const scrollPosition = window.pageYOffset + 100;

            this.sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    this.navLinks.forEach(link => {
                        const parent = link.closest('.nav-item');
                        if (parent) {
                            parent.classList.remove('active');
                            if (link.getAttribute('href') === `#${sectionId}`) {
                                parent.classList.add('active');
                            }
                        }
                    });
                }
            });
        }, 150);

        window.addEventListener('scroll', handleScroll, { passive: true });
    }
}

// ===== Back to Top Button =====

class BackToTop {
    constructor() {
        this.button = $('.back-to-top');
        this.scrollThreshold = 600;
        this.init();
    }

    init() {
        if (!this.button) return;

        const handleScroll = throttle(() => {
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollPosition >= this.scrollThreshold) {
                this.button.classList.add('visible');
                this.button.style.opacity = '1';
                this.button.style.visibility = 'visible';
            } else {
                this.button.classList.remove('visible');
                this.button.style.opacity = '0';
                this.button.style.visibility = 'hidden';
            }
        }, 150);

        this.button.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Initialize visibility
        handleScroll();
    }
}

// ===== Intersection Observer for Animations =====

class AnimateOnScroll {
    constructor() {
        this.elements = $$('.fade-in-observer, .animate-fade-in, .animate-fade-in-up');
        this.init();
    }

    init() {
        if (!this.elements.length) return;

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.dataset.delay || '0s';
                    entry.target.style.animationDelay = delay;
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        this.elements.forEach(element => {
            observer.observe(element);
        });
    }
}

// ===== Particles Background =====

class ParticlesBackground {
    constructor() {
        this.init();
    }

    init() {
        const particleConfig = {
            particles: {
                number: {
                    value: 40,
                    density: {
                        enable: true,
                        value_area: 4000
                    }
                },
                color: {
                    value: ['#FFFFFF', '#FFFFFF', '#FFFFFF']
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#fff'
                    }
                },
                opacity: {
                    value: 0.15,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 0.2,
                        opacity_min: 0.15,
                        sync: false
                    }
                },
                size: {
                    value: 50,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 5,
                        sync: false
                    }
                },
                line_linked: {
                    enable: false
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: 'top',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: false
                    },
                    onclick: {
                        enable: false
                    },
                    resize: true
                }
            },
            retina_detect: true
        };

        // Initialize particles if library is loaded
        if (typeof particlesJS !== 'undefined') {
            if ($('#particles-1')) {
                particlesJS('particles-1', particleConfig);
            }
            if ($('#particles-2')) {
                particlesJS('particles-2', particleConfig);
            }
        }
    }
}

// ===== Performance Monitoring =====

class PerformanceMonitor {
    constructor() {
        this.init();
    }

    init() {
        if ('PerformanceObserver' in window) {
            // Monitor Largest Contentful Paint
            try {
                const lcpObserver = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    const lastEntry = entries[entries.length - 1];
                    console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
                });
                lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
            } catch (e) {
                // LCP observation not supported
            }
        }

        // Log page load time
        window.addEventListener('load', () => {
            if (performance.timing) {
                const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
                console.log('Page Load Time:', loadTime + 'ms');
            }
        });
    }
}

// ===== Initialize All Components =====

class App {
    constructor() {
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initComponents());
        } else {
            this.initComponents();
        }
    }

    initComponents() {
        // Initialize all components
        new SmoothScroll();
        new StickyNavbar();
        new MobileMenu();
        new SectionHighlight();
        new BackToTop();
        new AnimateOnScroll();
        new ParticlesBackground();
        new PerformanceMonitor();

        // Log initialization
        console.log('✅ Estudio Jurídico Mayer - Site Initialized (Modern ES6+)');
    }
}

// Start the application
new App();
