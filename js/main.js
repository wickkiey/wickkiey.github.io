// Main Application Initialization
class PortfolioApp {
    constructor() {
        this.init();
    }
    
    init() {
        this.initParticles();
        this.initNavigation();
        this.initObservers();
        this.handleResize();
    }
    
    initParticles() {
        // Initialize particles.js
        if (typeof particlesJS !== 'undefined') {
            const isMobile = window.innerWidth <= 768;
            
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: isMobile ? 40 : 80,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: '#00d9ff'
                    },
                    shape: {
                        type: 'circle'
                    },
                    opacity: {
                        value: 0.5,
                        random: false,
                        anim: {
                            enable: false
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#00d9ff',
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: 'none',
                        random: false,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                        attract: {
                            enable: false
                        }
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: !isMobile,
                            mode: 'grab'
                        },
                        onclick: {
                            enable: true,
                            mode: 'push'
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            line_linked: {
                                opacity: 1
                            }
                        },
                        push: {
                            particles_nb: 4
                        }
                    }
                },
                retina_detect: true
            });
        }
    }
    
    initNavigation() {
        // Active nav link on scroll
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop - 100) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
    
    initObservers() {
        // Lazy load images
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
        
        // Performance optimization: Reduce animations on mobile
        if (window.innerWidth <= 768) {
            document.body.classList.add('mobile');
        }
    }
    
    handleResize() {
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                // Reinitialize particles on resize
                if (typeof pJSDom !== 'undefined' && pJSDom[0]) {
                    const canvas = document.querySelector('#particles-js canvas');
                    if (canvas) {
                        canvas.width = window.innerWidth;
                        canvas.height = window.innerHeight;
                        pJSDom[0].pJS.fn.particlesRefresh();
                    }
                }
                
                // Update mobile class
                if (window.innerWidth <= 768) {
                    document.body.classList.add('mobile');
                } else {
                    document.body.classList.remove('mobile');
                }
            }, 250);
        });
    }
}

// Utility functions
const utils = {
    // Debounce function
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Throttle function
    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    // Check if element is in viewport
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },
    
    // Smooth scroll to element
    scrollTo(element, offset = 0) {
        const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
};

// Performance monitoring
const performanceMonitor = {
    init() {
        if ('performance' in window) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const perfData = window.performance.timing;
                    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                    console.log(`Page Load Time: ${pageLoadTime}ms`);
                }, 0);
            });
        }
    },
    
    // Log FPS
    logFPS() {
        let lastTime = performance.now();
        let frames = 0;
        
        function updateFPS() {
            const currentTime = performance.now();
            frames++;
            
            if (currentTime >= lastTime + 1000) {
                const fps = Math.round((frames * 1000) / (currentTime - lastTime));
                console.log(`FPS: ${fps}`);
                frames = 0;
                lastTime = currentTime;
            }
            
            requestAnimationFrame(updateFPS);
        }
        
        requestAnimationFrame(updateFPS);
    }
};

// Error handling
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
});

// Accessibility enhancements
function initAccessibility() {
    // Add keyboard navigation for cards
    document.querySelectorAll('.project-card, .skill-tag, .stat-card').forEach(element => {
        element.setAttribute('tabindex', '0');
        
        element.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                element.click();
            }
        });
    });
    
    // Add ARIA labels where needed
    const navToggle = document.querySelector('.theme-toggle');
    if (navToggle && !navToggle.getAttribute('aria-label')) {
        navToggle.setAttribute('aria-label', 'Toggle theme');
    }
}

// Console Easter Egg
function consoleEasterEgg() {
    const styles = [
        'color: #00d9ff',
        'font-size: 16px',
        'font-weight: bold',
        'text-shadow: 0 0 10px #00d9ff'
    ].join(';');
    
    console.log('%c Welcome to my portfolio! ', styles);
    console.log('%c Looks like you\'re checking the console. Nice! 🚀', 'color: #7b2cbf; font-size: 14px;');
    console.log('%c Feel free to explore the code on GitHub: https://github.com/wickkiey', 'color: #00d9ff; font-size: 12px;');
    console.log('%c Or try the terminal at the bottom of the page! Type "help" to get started.', 'color: #00ff00; font-size: 12px;');
}

// Initialize everything
function initApp() {
    // Initialize main app
    const app = new PortfolioApp();
    
    // Initialize accessibility
    initAccessibility();
    
    // Performance monitoring in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        performanceMonitor.init();
        // Uncomment to log FPS
        // performanceMonitor.logFPS();
    }
    
    // Console easter egg
    consoleEasterEgg();
    
    // Add loaded class to body for CSS transitions
    document.body.classList.add('loaded');
    
    // Log initialization
    console.log('Portfolio initialized successfully! ✨');
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// Service Worker registration (for PWA support - future enhancement)
if ('serviceWorker' in navigator) {
    // Uncomment when ready to implement PWA
    // window.addEventListener('load', () => {
    //     navigator.serviceWorker.register('/sw.js')
    //         .then(registration => console.log('SW registered:', registration))
    //         .catch(error => console.log('SW registration failed:', error));
    // });
}

// Export utilities for use in other modules
window.portfolioUtils = utils;
