# Modern AI Architect Portfolio with Dual Interface

A professional dark-themed portfolio with smooth animations and an interactive terminal for developer-friendly navigation. Using vanilla JavaScript + CDN libraries (GSAP, Particles.js, Typed.js) for immediate GitHub Pages deployment, featuring subtle professional transitions with strategic bold moments and terminal Easter eggs for personality.

## Architecture Overview

- **Frontend**: Pure HTML5, CSS3, Vanilla JavaScript
- **Libraries**: GSAP (animations), Particles.js (background effects), Typed.js (typing effects), Font Awesome (icons)
- **Deployment**: GitHub Pages (static hosting)
- **Theme**: Dark mode primary with light mode toggle
- **Layout**: Single-page application with fixed terminal at bottom

## File Structure

```
d:\wickkiey_git\wickkiey.github.io/
├── index.html                  # Main HTML structure
├── styles/
│   └── main.css               # Complete styling with theme system
├── js/
│   ├── animations.js          # GSAP ScrollTrigger animations
│   ├── terminal.js            # Terminal engine with command parser
│   ├── theme.js               # Dark/light mode manager
│   ├── data.js                # Content extracted from resume
│   └── main.js                # Application initialization
├── img/
│   └── profile.jpg            # Existing profile image
└── resume/
    └── resume.md              # Source data
```

## Implementation Steps

### 1. Create Main HTML Structure (`index.html`)

**Components:**
- `<head>`: Meta tags, CDN links (GSAP, Particles.js, Typed.js, Font Awesome), theme preferences
- `<header>`: Navigation with smooth scroll links, theme toggle button
- `<section id="hero">`: Particle canvas background, profile image, name/title, typed animation for taglines, CTA buttons
- `<section id="about">`: Professional summary, stats cards (11 years exp, 14K+ users served, 4.3M revenue impact, 90%+ conversion)
- `<section id="experience">`: Vertical timeline with cards for each company (Fortive, Happiest Minds, Aagnas, Cognizant)
- `<section id="skills">`: Category-based grid with interactive hover effects (Languages, ML/AI, GenAI/LLMs, Agentic Systems, MLOps, Cloud)
- `<section id="projects">`: Featured project cards with modal detail views (Mistral fine-tuning, Multi-agent RAG, YOLO edge, AR try-on)
- `<section id="achievements">`: Hackathon wins, certifications, awards
- `<section id="contact">`: Contact form + social links (GitHub, LinkedIn, Email)
- `<div id="terminal">`: Terminal interface with header (title, minimize/expand button), output area, input line

**CDN Links Required:**
```html
<!-- GSAP -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

<!-- Particles.js -->
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>

<!-- Typed.js -->
<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.16"></script>

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
```

### 2. Build Comprehensive CSS (`styles/main.css`)

**Theme System:**
```css
:root {
  /* Dark Theme (Default) */
  --bg-primary: #0a0e27;
  --bg-secondary: #1a1f3a;
  --bg-card: rgba(26, 31, 58, 0.8);
  --text-primary: #e0e0e0;
  --text-secondary: #a0a0a0;
  --accent-primary: #00d9ff;
  --accent-secondary: #7b2cbf;
  --terminal-bg: #000000;
  --terminal-text: #00ff00;
  --particle-color: #00d9ff;
}

[data-theme="light"] {
  /* Light Theme */
  --bg-primary: #f5f5f5;
  --bg-secondary: #ffffff;
  --bg-card: rgba(255, 255, 255, 0.9);
  --text-primary: #1a1a1a;
  --text-secondary: #666666;
  --accent-primary: #0066cc;
  --accent-secondary: #6a0dad;
  --terminal-bg: #f0f0f0;
  --terminal-text: #008000;
  --particle-color: #0066cc;
}
```

**Key Styles:**
- Glassmorphism cards: `backdrop-filter: blur(10px); background: var(--bg-card); border: 1px solid rgba(255,255,255,0.1);`
- Smooth transitions: `transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);`
- Terminal styling: Monospace font (Fira Code/Consolas), green text on black, command prompt `> ` prefix
- Responsive grid: CSS Grid with auto-fit for skills, flexbox for layouts
- Mobile breakpoints: 768px (tablet), 480px (mobile)
- Animation utilities: `.fade-in`, `.slide-up`, `.scale-in` with opacity/transform

### 3. Implement Animation Controller (`js/animations.js`)

**GSAP ScrollTrigger Setup:**
```javascript
// Section reveal on scroll
gsap.utils.toArray('section').forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      end: 'top 20%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    duration: 1
  });
});

// Staggered skill cards
gsap.from('.skill-card', {
  scrollTrigger: {
    trigger: '#skills',
    start: 'top 60%'
  },
  opacity: 0,
  y: 30,
  stagger: 0.1,
  duration: 0.6
});

// Experience timeline items
gsap.from('.timeline-item', {
  scrollTrigger: {
    trigger: '#experience',
    start: 'top 60%'
  },
  opacity: 0,
  x: -50,
  stagger: 0.2,
  duration: 0.8
});
```

**Typed.js Hero Animation:**
```javascript
new Typed('#typed-text', {
  strings: [
    'AI Architect',
    'LLM & GenAI Specialist',
    'Multi-Agent Systems Expert',
    'MLOps Engineer',
    'Building Intelligent Systems'
  ],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 2000,
  loop: true
});
```

**Parallax Effect:**
- Hero background subtle parallax (0.5 factor) using GSAP on scroll

**Performance Optimization:**
- Intersection Observer to trigger animations only when visible
- `will-change` CSS property on animated elements
- RequestAnimationFrame for smooth 60fps

### 4. Build Terminal Engine (`js/terminal.js`)

**Command Parser:**
```javascript
const commands = {
  help: () => displayHelp(),
  about: () => scrollToSection('about') + displayAboutText(),
  skills: () => scrollToSection('skills') + displaySkillsTree(),
  experience: (company) => displayExperience(company),
  projects: () => scrollToSection('projects') + displayProjectsList(),
  contact: () => scrollToSection('contact') + displayContactInfo(),
  clear: () => clearTerminal(),
  navigate: (section) => scrollToSection(section),
  ls: () => listSections(),
  pwd: () => '/portfolio/vivek-ananthan',
  whoami: () => 'vivek@ai-architect ~ You are viewing Vivek Ananthan\'s portfolio',
  
  // Easter Eggs
  sudo: (cmd) => 'Permission granted. You are now root. Just kidding! 😄',
  matrix: () => triggerMatrixRain(),
  hack: () => simulateHacking()
};
```

**Features:**
- Arrow key history navigation (↑/↓)
- Tab auto-complete for commands
- Command history stored in array
- Colored output (success green, error red, info cyan)
- Smooth scroll to sections when navigating
- Toggle terminal with `Ctrl + `` (backtick)

**Easter Eggs:**
- `matrix`: Falling green characters animation overlay
- `hack`: Fake hacking sequence with random code streaming
- `sudo`: Humorous permission denied messages

### 5. Create Theme Manager (`js/theme.js`)

**Functionality:**
```javascript
class ThemeManager {
  constructor() {
    this.currentTheme = localStorage.getItem('theme') || 'dark';
    this.init();
  }
  
  init() {
    // Check system preference if no saved theme
    if (!localStorage.getItem('theme')) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.currentTheme = prefersDark ? 'dark' : 'light';
    }
    this.applyTheme(this.currentTheme);
  }
  
  toggle() {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(this.currentTheme);
    localStorage.setItem('theme', this.currentTheme);
    this.updateParticles();
  }
  
  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }
  
  updateParticles() {
    // Update particle colors based on theme
    const color = this.currentTheme === 'dark' ? '#00d9ff' : '#0066cc';
    pJSDom[0].pJS.particles.color.value = color;
    pJSDom[0].pJS.fn.particlesRefresh();
  }
}
```

**Theme Toggle Button:**
- Sun/Moon icon transition
- Smooth CSS transition between themes
- Save preference to localStorage

### 6. Add Content and Data Layer (`js/data.js`)

**Structured Data from Resume:**
```javascript
const portfolioData = {
  personal: {
    name: 'Vivek Ananthan M.S',
    title: 'AI Architect | Sr. ML & MLOps Engineer | LLM & GenAI Specialist',
    email: 'vivekananthan_ms@hotmail.com',
    phone: '+91-8778545803',
    github: 'https://github.com/wickkiey',
    linkedin: 'https://www.linkedin.com/in/wickkiey/',
    visa: 'B1B2 (US)'
  },
  
  summary: 'AI Architect with 11 years of experience in building scalable ML systems and LLM-based agent workflows. Expertise in full ML lifecycle—training, deployment, tracing, observability, and drift detection—ensuring secure, compliant, and production-grade delivery using modern cloud-native and AI-native architectures.',
  
  stats: [
    { value: '11+', label: 'Years Experience' },
    { value: '14K+', label: 'Users Served' },
    { value: '$4.3M', label: 'Revenue Impact' },
    { value: '90%+', label: 'Conversion Rate' }
  ],
  
  experience: [
    {
      company: 'Fortive',
      role: 'Sr. ML Engineer',
      period: 'Jul 2023 – Present',
      achievements: [
        'Fine-tuned Mistral model (LoRA) on oscilloscope commands for NL interaction',
        'Built multi-agent RAG system with Vector DB serving 14K+ employees',
        'Deployed YOLO models to edge for real-time medical instrument detection',
        'AI document analysis platform generating $4.3M quarterly revenue'
      ]
    },
    // ... other companies
  ],
  
  skills: {
    'Languages & Scripting': ['Python', 'PySpark', 'C++', 'SQL', 'JavaScript', 'Node.js'],
    'Machine Learning & AI': ['PyTorch', 'TensorFlow', 'Transformers', 'YOLO', 'OpenCV'],
    'Generative AI & LLMs': ['RAG', 'Prompt Engineering', 'LLM Fine-tuning (LoRA)', 'Embeddings'],
    'Agentic Systems': ['Multi-Agent Orchestration', 'CrewAI', 'LangChain', 'Vector Databases'],
    'MLOps & Monitoring': ['MLflow', 'Langfuse', 'Model Versioning', 'LLM Observability'],
    'Cloud & Infrastructure': ['Azure (Certified)', 'AWS', 'GCP', 'Docker', 'Kubernetes']
  },
  
  featuredProjects: [
    {
      title: 'Mistral Model Fine-tuning',
      description: 'Fine-tuned Mistral LLM using LoRA/PEFT on custom oscilloscope command sets',
      tech: ['PyTorch', 'Unsloth', 'LoRA', 'LLM Fine-tuning'],
      impact: 'Enabled natural language device operations, significantly enhanced user productivity',
      icon: 'fa-brain'
    },
    // ... other projects
  ],
  
  achievements: [
    '3rd place – Analytics Vidhya Dataverse Hackathon (2022)',
    '1st Runner-up – Annual Happiest Minds Hackathon',
    '4th place – "You Hack the Virus" by HackerEarth',
    'Multiple Annual and Quarterly Excellence Awards'
  ],
  
  certifications: [
    'Azure AI Engineering Associate',
    'Deep Learning Specialization – Coursera',
    'TensorFlow Developer Certificate – Deeplearning.ai'
  ]
};
```

**Dynamic Rendering:**
- Use template literals to populate HTML
- Generate skill cards dynamically
- Build timeline from experience array
- Create project modals with detailed views

## Particles.js Configuration

**Neural Network Style:**
```javascript
particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: '#00d9ff' },
    shape: { type: 'circle' },
    opacity: { value: 0.5, random: false },
    size: { value: 3, random: true },
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
      bounce: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'grab' },
      onclick: { enable: true, mode: 'push' },
      resize: true
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 1 } },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});
```

## Terminal Commands Reference

### Navigation Commands
- `help` - Display available commands
- `about` - View professional summary
- `skills` - Display skills tree
- `experience [company]` - Show experience (optional company filter)
- `projects` - List featured projects
- `contact` - Display contact information
- `navigate <section>` - Scroll to specific section
- `clear` - Clear terminal output

### System Commands
- `ls` - List available sections
- `pwd` - Print working directory
- `whoami` - Display user info

### Easter Eggs
- `sudo` - Attempt superuser access (humorous response)
- `matrix` - Trigger Matrix-style falling characters
- `hack` - Simulate hacking sequence with fake loading

## Performance Optimizations

1. **Lazy Loading**: Load images and heavy content below fold on scroll
2. **Intersection Observer**: Trigger animations only when elements are visible
3. **CSS Containment**: Use `contain: layout` on independent sections
4. **Will-change**: Apply to animated elements for GPU acceleration
5. **Debounce**: Scroll and resize event handlers
6. **Mobile Detection**: Reduce particle count and disable complex animations on mobile
7. **Code Splitting**: Separate terminal.js for on-demand loading

## Responsive Breakpoints

```css
/* Desktop */
@media (min-width: 1200px) { /* Full layout */ }

/* Tablet */
@media (max-width: 1199px) and (min-width: 768px) {
  /* 2-column grids, adjusted spacing */
}

/* Mobile */
@media (max-width: 767px) {
  /* Single column, stacked layout, simplified animations */
  /* Hide particles on mobile for performance */
  /* Terminal height 25% instead of 30% */
}
```

## Key Features Summary

✅ **Modern Design**: Glassmorphism, neural network particles, smooth gradients
✅ **Professional Animations**: GSAP ScrollTrigger, Typed.js, subtle parallax
✅ **Interactive Terminal**: Full command parser with navigation and Easter eggs
✅ **Theme Toggle**: Dark/light mode with localStorage persistence
✅ **Responsive**: Mobile-first, optimized for all screen sizes
✅ **Performance**: Lazy loading, intersection observers, optimized animations
✅ **Content-Rich**: All resume data structured and dynamically rendered
✅ **Personality**: Terminal Easter eggs (`matrix`, `hack`, `sudo`)
✅ **Accessibility**: Semantic HTML, keyboard navigation, ARIA labels

## Implementation Order

1. ✅ HTML structure with all sections and CDN links
2. ✅ CSS with theme system, glassmorphism, responsive layouts
3. ✅ Data layer with structured content from resume
4. ✅ Animations with GSAP ScrollTrigger and Typed.js
5. ✅ Terminal engine with command parser and Easter eggs
6. ✅ Theme manager with toggle functionality
7. ✅ Particles.js configuration and initialization
8. ✅ Final testing and optimization

## Future Enhancements (Post-MVP)

- Blog section for technical articles
- Project detail modals with case studies
- Contact form backend integration
- Analytics integration (Google Analytics)
- PWA features (service worker, offline support)
- Downloadable resume PDF
- Interactive skill proficiency indicators
- Testimonials/recommendations section
