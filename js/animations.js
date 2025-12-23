// Animation Controller using GSAP
class AnimationController {
    constructor() {
        this.init();
    }
    
    init() {
        // Register GSAP plugins
        if (typeof gsap !== 'undefined') {
            if (typeof ScrollTrigger !== 'undefined') {
                gsap.registerPlugin(ScrollTrigger);
            }
            if (typeof ScrollToPlugin !== 'undefined') {
                gsap.registerPlugin(ScrollToPlugin);
            }
            
            this.initHeroAnimations();
            this.initSectionAnimations();
            this.initSkillCardAnimations();
            this.initTimelineAnimations();
            this.initProjectCardAnimations();
            this.initParallaxEffect();
            this.initTypedEffect();
        }
    }
    
    initHeroAnimations() {
        const tl = gsap.timeline({ delay: 0.3 });
        
        tl.from('.hero-image-container', {
            scale: 0,
            opacity: 0,
            duration: 0.8,
            ease: 'back.out(1.7)'
        })
        .from('.hero-title', {
            y: 50,
            opacity: 0,
            duration: 0.6
        }, '-=0.3')
        .from('.hero-subtitle', {
            y: 30,
            opacity: 0,
            duration: 0.6
        }, '-=0.3')
        .from('.hero-description', {
            y: 20,
            opacity: 0,
            duration: 0.6
        }, '-=0.3')
        .from('.hero-cta .btn', {
            y: 20,
            opacity: 0,
            duration: 0.4,
            stagger: 0.1
        }, '-=0.3')
        .from('.hero-social a', {
            scale: 0,
            opacity: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: 'back.out(1.7)'
        }, '-=0.2')
        .from('.scroll-indicator', {
            opacity: 0,
            y: -20,
            duration: 0.6
        }, '-=0.2');
    }
    
    initSectionAnimations() {
        // Animate sections on scroll
        gsap.utils.toArray('.section').forEach(section => {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    end: 'top 20%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power2.out'
            });
        });
        
        // Animate section titles
        gsap.utils.toArray('.section-title').forEach(title => {
            gsap.from(title, {
                scrollTrigger: {
                    trigger: title,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                scale: 0.8,
                duration: 0.6,
                ease: 'back.out(1.7)'
            });
        });
    }
    
    initSkillCardAnimations() {
        // Stagger animation for skill categories
        setTimeout(() => {
            const skillCategories = document.querySelectorAll('.skill-category');
            if (skillCategories.length > 0) {
                gsap.from(skillCategories, {
                    scrollTrigger: {
                        trigger: '#skills',
                        start: 'top 70%',
                        toggleActions: 'play none none reverse'
                    },
                    opacity: 0,
                    y: 30,
                    stagger: 0.15,
                    duration: 0.6,
                    ease: 'power2.out'
                });
            }
        }, 100);
        
        // Animate skill tags on hover (handled by CSS) but add entrance animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const tags = entry.target.querySelectorAll('.skill-tag');
                    gsap.from(tags, {
                        scale: 0,
                        opacity: 0,
                        duration: 0.3,
                        stagger: 0.02,
                        ease: 'back.out(1.7)'
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        document.querySelectorAll('.skill-category').forEach(category => {
            observer.observe(category);
        });
    }
    
    initTimelineAnimations() {
        gsap.from('.timeline-item', {
            scrollTrigger: {
                trigger: '#experience',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: (index) => index % 2 === 0 ? -50 : 50,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power2.out'
        });
        
        // Animate timeline markers
        gsap.from('.timeline-marker', {
            scrollTrigger: {
                trigger: '#experience',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            },
            scale: 0,
            opacity: 0,
            stagger: 0.2,
            duration: 0.5,
            ease: 'back.out(1.7)'
        });
    }
    
    initProjectCardAnimations() {
        // Use a small delay to ensure DOM is ready
        setTimeout(() => {
            const projectCards = document.querySelectorAll('.project-card');
            if (projectCards.length > 0) {
                gsap.from(projectCards, {
                    scrollTrigger: {
                        trigger: '#projects',
                        start: 'top 70%',
                        toggleActions: 'play none none reverse'
                    },
                    opacity: 0,
                    y: 50,
                    stagger: 0.15,
                    duration: 0.8,
                    ease: 'power2.out'
                });
            }
        }, 100);
    }
    
    initParallaxEffect() {
        // Subtle parallax on hero background
        gsap.to('#particles-js', {
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            },
            y: 100,
            ease: 'none'
        });
    }
    
    initTypedEffect() {
        // Typed.js initialization
        if (typeof Typed !== 'undefined' && portfolioData) {
            const typed = new Typed('#typed-text', {
                strings: portfolioData.typedStrings,
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 2000,
                loop: true,
                showCursor: false
            });
        }
    }
    
    // Stat counter animation
    animateStats() {
        const stats = document.querySelectorAll('.stat-value');
        
        stats.forEach(stat => {
            const target = stat.textContent;
            const hasPlus = target.includes('+');
            const hasDollar = target.includes('$');
            const hasPercent = target.includes('%');
            
            let numericValue = parseFloat(target.replace(/[^0-9.]/g, ''));
            
            if (target.includes('K')) {
                numericValue *= 1000;
            } else if (target.includes('M')) {
                numericValue *= 1000000;
            }
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        gsap.from(stat, {
                            textContent: 0,
                            duration: 2,
                            ease: 'power1.out',
                            snap: { textContent: 0.1 },
                            onUpdate: function() {
                                let current = parseFloat(this.targets()[0].textContent);
                                let formatted = current.toFixed(1);
                                
                                if (target.includes('K')) {
                                    formatted = (current / 1000).toFixed(1) + 'K';
                                } else if (target.includes('M')) {
                                    formatted = '$' + (current / 1000000).toFixed(1) + 'M';
                                } else if (hasPercent) {
                                    formatted = current.toFixed(0) + '%';
                                } else {
                                    formatted = current.toFixed(0);
                                }
                                
                                if (hasPlus && !hasDollar) {
                                    formatted += '+';
                                }
                                
                                stat.textContent = formatted;
                            },
                            scrollTrigger: {
                                trigger: stat,
                                start: 'top 80%'
                            }
                        });
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(stat);
        });
    }
    
    // Smooth scroll for navigation links
    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    gsap.to(window, {
                        duration: 1,
                        scrollTo: {
                            y: target,
                            offsetY: 80
                        },
                        ease: 'power2.inOut'
                    });
                }
            });
        });
    }
    
    // Add scroll-based navbar background
    initNavbarScroll() {
        const navbar = document.querySelector('.navbar');
        
        ScrollTrigger.create({
            start: 'top -80',
            end: 99999,
            toggleClass: { 
                className: 'scrolled', 
                targets: navbar 
            }
        });
    }
}

// Stats grid animation with intersection observer
function initStatsAnimation() {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                gsap.from('.stat-card', {
                    scale: 0.8,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'back.out(1.7)'
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    const statsGrid = document.getElementById('stats-grid');
    if (statsGrid) {
        statsObserver.observe(statsGrid);
    }
}

// Initialize animations when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const animController = new AnimationController();
        animController.animateStats();
        animController.initSmoothScroll();
        animController.initNavbarScroll();
        initStatsAnimation();
    });
} else {
    const animController = new AnimationController();
    animController.animateStats();
    animController.initSmoothScroll();
    animController.initNavbarScroll();
    initStatsAnimation();
}
