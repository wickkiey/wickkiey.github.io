// Terminal Controller with Command Parser and Easter Eggs
class Terminal {
    constructor() {
        this.terminal = document.getElementById('terminal');
        this.output = document.getElementById('terminal-output');
        this.input = document.getElementById('terminal-input');
        this.history = [];
        this.historyIndex = -1;
        this.isMinimized = false;
        this.isExpanded = false;
        
        this.commands = {
            help: this.cmdHelp.bind(this),
            about: this.cmdAbout.bind(this),
            skills: this.cmdSkills.bind(this),
            experience: this.cmdExperience.bind(this),
            projects: this.cmdProjects.bind(this),
            contact: this.cmdContact.bind(this),
            clear: this.cmdClear.bind(this),
            navigate: this.cmdNavigate.bind(this),
            ls: this.cmdLs.bind(this),
            pwd: this.cmdPwd.bind(this),
            whoami: this.cmdWhoami.bind(this),
            // Easter eggs
            sudo: this.cmdSudo.bind(this),
            matrix: this.cmdMatrix.bind(this),
            hack: this.cmdHack.bind(this),
            coffee: this.cmdCoffee.bind(this),
            cat: this.cmdCat.bind(this)
        };
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.focusInput();
    }
    
    setupEventListeners() {
        // Input handling
        if (this.input) {
            this.input.addEventListener('keydown', (e) => this.handleKeydown(e));
            this.input.addEventListener('keyup', (e) => {
                if (e.key === 'Tab') {
                    e.preventDefault();
                    this.autocomplete();
                }
            });
        }
        
        // Terminal controls
        const minimizeBtn = document.getElementById('terminal-minimize');
        const expandBtn = document.getElementById('terminal-expand');
        const toggleBtn = document.getElementById('terminal-toggle');
        
        if (minimizeBtn) {
            minimizeBtn.addEventListener('click', () => this.toggleMinimize());
        }
        
        if (expandBtn) {
            expandBtn.addEventListener('click', () => this.toggleExpand());
        }
        
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggleMinimize());
        }
        
        // Focus input when clicking on terminal
        if (this.terminal) {
            this.terminal.addEventListener('click', () => this.focusInput());
        }
        
        // Keyboard shortcut Ctrl+`
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === '`') {
                e.preventDefault();
                this.toggleMinimize();
            }
        });
    }
    
    handleKeydown(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const command = this.input.value.trim();
            if (command) {
                this.executeCommand(command);
                this.history.push(command);
                this.historyIndex = this.history.length;
            }
            this.input.value = '';
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.navigateHistory(-1);
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.navigateHistory(1);
        } else if (e.key === 'Tab') {
            e.preventDefault();
        }
    }
    
    navigateHistory(direction) {
        this.historyIndex += direction;
        if (this.historyIndex < 0) {
            this.historyIndex = 0;
        } else if (this.historyIndex >= this.history.length) {
            this.historyIndex = this.history.length;
            this.input.value = '';
            return;
        }
        this.input.value = this.history[this.historyIndex] || '';
    }
    
    autocomplete() {
        const input = this.input.value.toLowerCase();
        const matches = Object.keys(this.commands).filter(cmd => cmd.startsWith(input));
        
        if (matches.length === 1) {
            this.input.value = matches[0];
        } else if (matches.length > 1) {
            this.printLine(`Available: ${matches.join(', ')}`, 'terminal-info');
        }
    }
    
    executeCommand(input) {
        this.printLine(`visitor@portfolio:~$ ${input}`, 'terminal-prompt');
        
        const parts = input.trim().split(' ');
        const command = parts[0].toLowerCase();
        const args = parts.slice(1);
        
        if (this.commands[command]) {
            this.commands[command](args);
        } else {
            this.printLine(`Command not found: ${command}. Type 'help' for available commands.`, 'terminal-error');
        }
        
        this.scrollToBottom();
    }
    
    printLine(text, className = 'terminal-text') {
        const line = document.createElement('div');
        line.className = 'terminal-line';
        const span = document.createElement('span');
        span.className = className;
        span.innerHTML = text;
        line.appendChild(span);
        this.output.appendChild(line);
    }
    
    scrollToBottom() {
        this.output.scrollTop = this.output.scrollHeight;
    }
    
    focusInput() {
        if (this.input && !this.isMinimized) {
            this.input.focus();
        }
    }
    
    toggleMinimize() {
        this.isMinimized = !this.isMinimized;
        this.terminal.classList.toggle('minimized');
        if (!this.isMinimized) {
            this.focusInput();
        }
    }
    
    toggleExpand() {
        this.isExpanded = !this.isExpanded;
        this.terminal.classList.toggle('expanded');
        const icon = document.querySelector('#terminal-expand i');
        if (icon) {
            icon.className = this.isExpanded ? 'fas fa-compress' : 'fas fa-expand';
        }
    }
    
    // Command implementations
    cmdHelp() {
        this.printLine('Available commands:', 'terminal-success');
        this.printLine('');
        this.printLine('  <span class="terminal-highlight">help</span>       - Show this help message', 'terminal-text');
        this.printLine('  <span class="terminal-highlight">about</span>      - View professional summary', 'terminal-text');
        this.printLine('  <span class="terminal-highlight">skills</span>     - Display technical skills', 'terminal-text');
        this.printLine('  <span class="terminal-highlight">experience</span> - Show work experience', 'terminal-text');
        this.printLine('  <span class="terminal-highlight">projects</span>   - List featured projects', 'terminal-text');
        this.printLine('  <span class="terminal-highlight">contact</span>    - Display contact information', 'terminal-text');
        this.printLine('  <span class="terminal-highlight">navigate</span>   - Navigate to section (e.g., navigate about)', 'terminal-text');
        this.printLine('  <span class="terminal-highlight">clear</span>      - Clear terminal output', 'terminal-text');
        this.printLine('  <span class="terminal-highlight">ls</span>         - List available sections', 'terminal-text');
        this.printLine('  <span class="terminal-highlight">pwd</span>        - Print working directory', 'terminal-text');
        this.printLine('  <span class="terminal-highlight">whoami</span>     - Display user information', 'terminal-text');
        this.printLine('');
        this.printLine('Try some fun commands: <span class="terminal-highlight">matrix</span>, <span class="terminal-highlight">hack</span>, <span class="terminal-highlight">sudo</span>, <span class="terminal-highlight">coffee</span>', 'terminal-info');
    }
    
    cmdAbout() {
        this.navigateToSection('about');
        this.printLine(portfolioData.summary, 'terminal-success');
    }
    
    cmdSkills() {
        this.navigateToSection('skills');
        this.printLine('Technical Skills:', 'terminal-success');
        this.printLine('');
        Object.entries(portfolioData.skills).forEach(([category, data]) => {
            this.printLine(`<span class="terminal-highlight">${category}</span>:`, 'terminal-text');
            this.printLine(`  ${data.items.join(', ')}`, 'terminal-info');
            this.printLine('');
        });
    }
    
    cmdExperience(args) {
        this.navigateToSection('experience');
        const filter = args.join(' ').toLowerCase();
        
        portfolioData.experience.forEach(exp => {
            if (!filter || exp.company.toLowerCase().includes(filter)) {
                this.printLine(`<span class="terminal-highlight">${exp.company}</span> - ${exp.role}`, 'terminal-success');
                this.printLine(`${exp.period}`, 'terminal-info');
                this.printLine('');
                exp.achievements.forEach((achievement, idx) => {
                    this.printLine(`  ${idx + 1}. ${achievement}`, 'terminal-text');
                });
                this.printLine('');
            }
        });
    }
    
    cmdProjects() {
        this.navigateToSection('projects');
        this.printLine('Featured Projects:', 'terminal-success');
        this.printLine('');
        portfolioData.featuredProjects.forEach((project, idx) => {
            this.printLine(`${idx + 1}. <span class="terminal-highlight">${project.title}</span>`, 'terminal-text');
            this.printLine(`   ${project.description}`, 'terminal-info');
            this.printLine(`   Tech: ${project.tech.join(', ')}`, 'terminal-text');
            this.printLine('');
        });
    }
    
    cmdContact() {
        this.navigateToSection('contact');
        this.printLine('Contact Information:', 'terminal-success');
        this.printLine('');
        this.printLine(`Name:     ${portfolioData.personal.name}`, 'terminal-text');
        this.printLine(`Email:    ${portfolioData.personal.email}`, 'terminal-text');
        this.printLine(`Phone:    ${portfolioData.personal.phone}`, 'terminal-text');
        this.printLine(`GitHub:   ${portfolioData.personal.github}`, 'terminal-text');
        this.printLine(`LinkedIn: ${portfolioData.personal.linkedin}`, 'terminal-text');
    }
    
    cmdClear() {
        this.output.innerHTML = '';
    }
    
    cmdNavigate(args) {
        const section = args[0];
        if (!section) {
            this.printLine('Usage: navigate <section>', 'terminal-error');
            this.printLine('Available sections: hero, about, experience, skills, projects, contact', 'terminal-info');
            return;
        }
        
        if (this.navigateToSection(section)) {
            this.printLine(`Navigated to ${section}`, 'terminal-success');
        } else {
            this.printLine(`Section not found: ${section}`, 'terminal-error');
        }
    }
    
    cmdLs() {
        this.printLine('Available sections:', 'terminal-text');
        this.printLine('  hero', 'terminal-info');
        this.printLine('  about', 'terminal-info');
        this.printLine('  experience', 'terminal-info');
        this.printLine('  skills', 'terminal-info');
        this.printLine('  projects', 'terminal-info');
        this.printLine('  achievements', 'terminal-info');
        this.printLine('  contact', 'terminal-info');
    }
    
    cmdPwd() {
        this.printLine('/home/visitor/portfolio/vivek-ananthan', 'terminal-text');
    }
    
    cmdWhoami() {
        this.printLine('visitor@portfolio', 'terminal-text');
        this.printLine('You are viewing Vivek Ananthan\'s AI Architect Portfolio', 'terminal-info');
        this.printLine(`Visitor ID: ${this.generateVisitorId()}`, 'terminal-text');
    }
    
    // Easter Egg Commands
    cmdSudo(args) {
        const cmd = args.join(' ');
        this.printLine('[sudo] password for visitor:', 'terminal-text');
        setTimeout(() => {
            this.printLine('Nice try! 😄', 'terminal-error');
            this.printLine('visitor is not in the sudoers file. This incident will be reported.', 'terminal-error');
            this.printLine('Just kidding! But you don\'t need sudo here. Try "help" instead.', 'terminal-info');
        }, 500);
    }
    
    cmdMatrix() {
        this.printLine('Entering the Matrix...', 'terminal-success');
        this.triggerMatrixEffect();
    }
    
    cmdHack() {
        this.printLine('Initiating hacking sequence...', 'terminal-success');
        this.simulateHacking();
    }
    
    cmdCoffee() {
        this.printLine('      (  (', 'terminal-text');
        this.printLine('       )  )', 'terminal-text');
        this.printLine('    ........', 'terminal-text');
        this.printLine('    |      |]', 'terminal-text');
        this.printLine('    \\      /', 'terminal-text');
        this.printLine('     `----\'', 'terminal-text');
        this.printLine('', 'terminal-text');
        this.printLine('☕ Here\'s your coffee! Fuel for more coding...', 'terminal-info');
    }
    
    cmdCat(args) {
        if (!args.length) {
            this.printLine('  /\\_/\\', 'terminal-text');
            this.printLine(' ( o.o )', 'terminal-text');
            this.printLine('  > ^ <', 'terminal-text');
            this.printLine('', 'terminal-text');
            this.printLine('Meow! 🐱', 'terminal-info');
        } else {
            this.printLine(`cat: ${args[0]}: No such file or directory`, 'terminal-error');
            this.printLine('But here\'s a cat anyway! 🐱', 'terminal-info');
        }
    }
    
    // Helper methods
    navigateToSection(section) {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return true;
        }
        return false;
    }
    
    generateVisitorId() {
        return 'xxxx-xxxx-xxxx'.replace(/x/g, () => 
            Math.floor(Math.random() * 16).toString(16)
        );
    }
    
    triggerMatrixEffect() {
        const canvas = document.getElementById('matrix-canvas');
        if (!canvas) return;
        
        canvas.classList.add('active');
        const ctx = canvas.getContext('2d');
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(1);
        
        let frameCount = 0;
        const maxFrames = 300;
        
        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#0F0';
            ctx.font = fontSize + 'px monospace';
            
            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
            
            frameCount++;
            if (frameCount < maxFrames) {
                requestAnimationFrame(draw);
            } else {
                canvas.classList.remove('active');
                this.printLine('Exited the Matrix. Welcome back!', 'terminal-success');
            }
        };
        
        draw();
    }
    
    simulateHacking() {
        const phrases = [
            'Connecting to mainframe...',
            'Bypassing firewall...',
            'Decrypting database...',
            'Accessing neural network...',
            'Downloading AI models...',
            'Compiling machine learning algorithms...',
            'Injecting LLM prompts...',
            'Hacking the Gibson...',
            'ACCESS GRANTED! ✓'
        ];
        
        let index = 0;
        const interval = setInterval(() => {
            if (index < phrases.length) {
                const className = index === phrases.length - 1 ? 'terminal-success' : 'terminal-info';
                this.printLine(phrases[index], className);
                this.scrollToBottom();
                index++;
            } else {
                clearInterval(interval);
                this.printLine('', 'terminal-text');
                this.printLine('Just kidding! This portfolio is hack-proof 😎', 'terminal-highlight');
                this.printLine('But feel free to explore the actual code on GitHub!', 'terminal-info');
            }
        }, 400);
    }
}

// Initialize terminal when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.terminal = new Terminal();
    });
} else {
    window.terminal = new Terminal();
}
