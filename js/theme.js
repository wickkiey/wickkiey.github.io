// Theme Manager
class ThemeManager {
    constructor() {
        this.currentTheme = this.getInitialTheme();
        this.themeToggle = document.getElementById('theme-toggle');
        this.init();
    }
    
    getInitialTheme() {
        // Check localStorage first
        const savedTheme = localStorage.getItem('portfolio-theme');
        if (savedTheme) {
            return savedTheme;
        }
        
        // Default to dark mode
        return 'dark';
    }
    
    init() {
        this.applyTheme(this.currentTheme);
        this.setupEventListeners();
        this.updateIcon();
    }
    
    setupEventListeners() {
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => this.toggle());
        }
        
        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('portfolio-theme')) {
                this.currentTheme = e.matches ? 'dark' : 'light';
                this.applyTheme(this.currentTheme);
                this.updateIcon();
            }
        });
    }
    
    toggle() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(this.currentTheme);
        this.updateIcon();
        localStorage.setItem('portfolio-theme', this.currentTheme);
        this.updateParticles();
    }
    
    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        
        // Add transition class for smooth theme change
        document.body.style.transition = 'background 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }
    
    updateIcon() {
        if (!this.themeToggle) return;
        
        const icon = this.themeToggle.querySelector('i');
        if (icon) {
            icon.className = this.currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
    
    updateParticles() {
        // Update particles color based on theme
        if (typeof pJSDom !== 'undefined' && pJSDom[0]) {
            const color = this.currentTheme === 'dark' ? '#00d9ff' : '#0066cc';
            pJSDom[0].pJS.particles.color.value = color;
            pJSDom[0].pJS.particles.line_linked.color = color;
            pJSDom[0].pJS.fn.particlesRefresh();
        }
    }
}

// Initialize theme manager when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.themeManager = new ThemeManager();
    });
} else {
    window.themeManager = new ThemeManager();
}
