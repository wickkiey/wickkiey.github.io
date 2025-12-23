# Vivek Ananthan M.S - AI Architect Portfolio

A modern, interactive portfolio website showcasing AI/ML engineering expertise with a unique dual interface: a sleek professional UI and a fully functional terminal for developer-friendly navigation.

🔗 **Live Site**: [https://wickkiey.github.io](https://wickkiey.github.io)

## ✨ Features

### Modern Professional Interface
- **Glassmorphism Design** - Modern card-based layout with backdrop blur effects
- **Neural Network Particles** - Interactive particle.js background with connected nodes
- **Smooth Animations** - GSAP ScrollTrigger animations with subtle parallax effects
- **Dark/Light Theme** - Toggle between themes with localStorage persistence
- **Responsive Design** - Mobile-first approach with optimized layouts for all screen sizes

### Interactive Terminal
- **Full Command Parser** - Navigate the portfolio using terminal commands
- **Command History** - Arrow key navigation through command history
- **Tab Autocomplete** - Auto-complete commands with Tab key
- **Easter Eggs** - Fun commands like `matrix`, `hack`, `sudo`, `coffee`, `cat`
- **Keyboard Shortcut** - Toggle terminal with `Ctrl + `` (backtick)

### Content Sections
- **Hero** - Animated introduction with Typed.js effect
- **About** - Professional summary with stats cards (11+ years, 14K+ users, $4.3M impact)
- **Experience** - Interactive timeline of work history (Fortive, Happiest Minds, Aagnas, Cognizant)
- **Skills** - Categorized technical skills with hover effects
- **Projects** - Featured project cards with detailed modal views
- **Achievements** - Hackathon wins and certifications
- **Contact** - Contact form and social links

## 🚀 Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, Animations
- **Vanilla JavaScript** - ES6+ features, Classes, Modules

### Libraries (CDN)
- **GSAP 3.12.5** - Animation library with ScrollTrigger
- **Particles.js 2.0.0** - Interactive particle background
- **Typed.js 2.0.16** - Typing animation effect
- **Font Awesome 6.5.1** - Icon library
- **Google Fonts** - Inter & Fira Code fonts

## 📂 Project Structure

```
wickkiey.github.io/
├── index.html                 # Main HTML structure
├── styles/
│   └── main.css              # Complete styling with theme system
├── js/
│   ├── data.js               # Portfolio content and data
│   ├── theme.js              # Dark/light mode manager
│   ├── animations.js         # GSAP animations controller
│   ├── terminal.js           # Terminal engine with commands
│   └── main.js               # Application initialization
├── img/
│   └── profile.jpg           # Profile image
├── resume/
│   └── resume.md             # Resume content (source data)
├── IMPLEMENTATION_PLAN.md    # Detailed implementation plan
└── README.md                 # This file
```

## 🎮 Terminal Commands

### Navigation Commands
- `help` - Display available commands
- `about` - View professional summary
- `skills` - Display technical skills tree
- `experience [company]` - Show work experience (optional company filter)
- `projects` - List featured projects
- `contact` - Display contact information
- `navigate <section>` - Scroll to specific section
- `clear` - Clear terminal output

### System Commands
- `ls` - List available sections
- `pwd` - Print working directory
- `whoami` - Display user information

### Easter Eggs 🎉
- `matrix` - Trigger Matrix-style falling characters animation
- `hack` - Simulate hacking sequence with loading effects
- `sudo` - Attempt superuser access (humorous response)
- `coffee` - ASCII coffee art
- `cat` - ASCII cat art

## 🛠️ Setup & Deployment

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/wickkiey/wickkiey.github.io.git
   cd wickkiey.github.io
   ```

2. **Run local server**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Or using Node.js
   npx http-server
   
   # Or using VS Code Live Server extension
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

### GitHub Pages Deployment

The site is automatically deployed via GitHub Pages:

1. Push changes to the `main` branch
2. GitHub Pages will automatically build and deploy
3. Site will be live at `https://wickkiey.github.io`

## ⚡ Performance Optimizations

- **Lazy Loading** - Images and heavy content loaded on scroll
- **Intersection Observer** - Animations trigger only when visible
- **CSS Containment** - Improved rendering performance
- **Debounced Events** - Scroll and resize handlers optimized
- **Mobile Detection** - Reduced particle count and simplified animations on mobile
- **Will-change** - GPU acceleration for animated elements

## 🎨 Theme System

### Dark Theme (Default)
- Background: Deep blue/purple gradients
- Accent: Cyan (#00d9ff) and Purple (#7b2cbf)
- Terminal: Green text on black background

### Light Theme
- Background: Light gray/white
- Accent: Blue (#0066cc) and Purple (#6a0dad)
- Terminal: Dark green text on light background

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## 🔮 Future Enhancements

- [ ] Blog section for technical articles
- [ ] Project detail modals with case studies
- [ ] Contact form backend integration
- [ ] Analytics integration
- [ ] PWA features (service worker, offline support)
- [ ] Downloadable resume PDF
- [ ] Interactive skill proficiency indicators
- [ ] Testimonials/recommendations section
- [ ] Multi-language support

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect

- **Email**: vivekananthan_ms@hotmail.com
- **GitHub**: [@wickkiey](https://github.com/wickkiey)
- **LinkedIn**: [linkedin.com/in/wickkiey](https://www.linkedin.com/in/wickkiey/)
- **Portfolio**: [wickkiey.github.io](https://wickkiey.github.io)

---

Built with ❤️ and ☕ by Vivek Ananthan M.S

**Psst...** Try typing `help` in the terminal at the bottom of the page! 👇
