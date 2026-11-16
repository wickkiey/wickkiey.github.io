// Portfolio Data - Extracted from resume
const portfolioData = {
    personal: {
        name: 'Vivek Ananthan M.S',
        title: 'AI Product Architect | AI Products & Enterprise AI Platforms',
        email: 'vivekananthan_ms@hotmail.com',
        phone: '+91-8778545803',
        github: 'https://github.com/wickkiey',
        linkedin: 'https://www.linkedin.com/in/wickkiey/',
        portfolio: 'https://wickkiey.github.io',
        visa: 'B1B2 (US)',
        location: 'India'
    },
    
    summary: 'AI Product Architect with 12 years of experience taking AI products and enterprise AI platforms from problem discovery to production. I lead architecture for LLM, agentic, and ML products, own the full lifecycle—fine-tuning, deployment, observability, and governance—and ship measurable outcomes across 18 product companies in the Fortive portfolio.',
    
    stats: [
        { value: '12+', label: 'Years Experience' },
        { value: 'AI Product', label: 'Architect' },
        { value: '7+', label: 'AI Products Shipped' },
        { value: '$4.3M', label: 'Quarterly Revenue' },
        { value: '14K+', label: 'Users Served' },
        { value: '18', label: 'Product Companies' }
    ],
    
    education: [
        { degree: 'PG Diploma in Data Science', institution: 'UpGrad & IIIT-Bangalore', year: '2017–2018' },
        { degree: 'M.Tech (CS Engineering)', institution: 'Anna University, Tirunelveli', year: '2009–2014' }
    ],
    
    experience: [
        {
            company: 'Fortive',
            role: 'R&D Sr. ML Engineer (AI Core Team)',
            period: 'Jul 2023 – Present',
            location: 'Remote',
            achievements: [
                'R&D Sr. ML Engineer on the AI Core Team, owning AI product architecture and features across 18 Fortive product companies',
                'Fine-tuned an LLM via Unsloth (LoRA) on a proprietary oscilloscope command set, exceeding baseline LLM performance and improving product stability',
                'Architected an Enterprise Agent Platform for shared tools and MCP servers with RBACs, giving product teams secure, reusable agentic building blocks',
                'Built a background research multi-agent system that maps patents to products, scaling output from 5 to 60 per month with human validation directly tied to pricing and revenue',
                'Managed architecture for multiple AI product features while mentoring teams on production-grade LLM and agent patterns'
            ]
        },
        {
            company: 'Happiest Minds Technologies',
            role: 'Lead Data Scientist – Vision AI Unit',
            period: 'Jan 2019 – Jul 2023',
            location: 'Bangalore, India',
            achievements: [
                'Led the Vision AI unit and delivered 7+ AI projects from concept to production',
                'Built an internal real-time voice-based interview product, saving 100+ hours per month for internal employees',
                'Built internal AI accelerators reused across multiple projects, standardizing delivery and shortening time to production',
                'Designed loan default risk models reducing default rates from 8.8% to 3.85% with MLflow and DVC for versioning and drift detection',
                'Built image-based intelligent search combining object detection, OCR (EasyOCR), and vector similarity search'
            ]
        },
        {
            company: 'Aagnas Software Labs',
            role: 'Product Solutions Engineer',
            period: 'Feb 2016 – Dec 2018',
            location: 'Chennai, India',
            achievements: [
                'Single-handedly built and shipped an AR-based virtual try-on product in 3 months and deployed it to production — <a href="https://www.youtube.com/watch?v=Hq7hgClsHJ4" target="_blank" rel="noopener">watch the demo</a>',
                'Product adopted by retailers like PN-RAO and Raymonds, improving in-store conversion by >90%',
                'Guided a team of data scientists to extend the product into 3D jewelry and recommendation engines',
                'Converted the recommendation engine into reusable modules adopted across partner startups'
            ]
        },
        {
            company: 'Cognizant Technology Solutions',
            role: 'Programmer Analyst',
            period: 'Jun 2014 – Feb 2016',
            location: 'Chennai, India',
            achievements: [
                'Built anomaly detection models for key insurance operations at a primary US insurance company, deployed through external audits and added to their product list',
                'Implemented custom data validation and anomaly detection frameworks for insurance datasets',
                'Built NLP-based sentiment analysis models for customer feedback and complaints, with a web dashboard surfacing business metrics'
            ]
        }
    ],
    
    skills: {
        'Languages & Scripting': {
            icon: 'fa-code',
            items: ['Python', 'PySpark', 'C++', 'SQL', 'JavaScript', 'Node.js', 'TypeScript']
        },
        'Machine Learning & AI': {
            icon: 'fa-brain',
            items: ['PyTorch', 'TensorFlow', 'Transformers', 'Scikit-learn', 'Spacy', 'SHAP', 'LIME', 'OpenCV', 'YOLO']
        },
        'Generative AI & LLMs': {
            icon: 'fa-robot',
            items: ['Prompt Engineering', 'RAG', 'Advanced RAG', 'Hybrid Search', 'Re-ranking', 'Function Calling', 'Embeddings', 'LLM Fine-tuning (LoRA/PEFT)', 'LLM-as-a-Judge', 'Safety & Guardrails']
        },
        'Agentic Systems': {
            icon: 'fa-network-wired',
            items: ['Multi-Agent Orchestration', 'Agent Memory', 'Planning & Reasoning', 'CrewAI', 'LangChain', 'Semantic Kernel', 'Vector Databases']
        },
        'MLOps & AI Monitoring': {
            icon: 'fa-chart-line',
            items: ['MLflow', 'Langfuse', 'Experiment Tracking', 'Model Versioning', 'Prompt Versioning', 'LLM Observability', 'Tracing', 'Cost Monitoring', 'Evaluation Pipelines']
        },
        'Cloud & Infrastructure': {
            icon: 'fa-cloud',
            items: ['Azure (Certified)', 'AWS', 'GCP', 'Docker', 'Kubernetes', 'Bicep', 'Terraform']
        }
    },
    
    featuredProjects: [
        {
            id: 'mistral-finetuning',
            title: 'Oscilloscope LLM Fine-tuning',
            description: 'Fine-tuned an LLM via Unsloth (LoRA) on a proprietary oscilloscope command set, beating baseline LLMs on device commands',
            icon: 'fa-brain',
            tech: ['PyTorch', 'Unsloth', 'LoRA', 'PEFT', 'LLM Fine-tuning', 'Python'],
            impact: 'Exceeded baseline LLM performance on device commands and improved product stability for a Fortive operating company',
            details: {
                challenge: 'Engineers needed natural language control of complex oscilloscope command sets, and off-the-shelf LLMs were not accurate or stable enough for a product',
                solution: 'Built a domain-specific fine-tuning pipeline with Unsloth and LoRA on proprietary command data, evaluated against baseline LLMs, and shipped as a product feature',
                results: ['Exceeded baseline LLM accuracy', 'Improved product stability', 'Natural language command interpretation', 'Reduced learning curve for engineers', 'Production-grade reliability'],
                technologies: ['PyTorch', 'Unsloth', 'LoRA/PEFT', 'Hugging Face Transformers', 'Custom tokenization', 'Evaluation Harness']
            }
        },
        {
            id: 'enterprise-agent-platform',
            title: 'Enterprise Agent Platform',
            description: 'Shared tools and MCP servers with RBACs, giving product teams secure, reusable agentic building blocks',
            icon: 'fa-network-wired',
            tech: ['MCP', 'Agentic Systems', 'RBAC', 'Tool Calling', 'Azure', 'Python'],
            impact: 'Standardized agentic capabilities across 18 Fortive product companies with secure, role-based access control',
            details: {
                challenge: 'Each product company was rebuilding agent tooling, with no shared security model or reusable integrations',
                solution: 'Architected an enterprise agent platform exposing shared tools and MCP servers behind role-based access controls, with a common integration and governance layer',
                results: ['Reusable agent tooling across 18 product companies', 'RBAC-secured shared tools and MCP servers', 'Faster AI feature delivery', 'Consistent security and governance', 'Reduced duplicate engineering'],
                technologies: ['MCP Servers', 'Model Context Protocol', 'RBAC', 'Tool Calling', 'Agent Orchestration', 'Azure Container Apps', 'Python']
            }
        },
        {
            id: 'patent-product-agent',
            title: 'Patent-to-Product Research Multi-Agent',
            description: 'Background research multi-agent that maps patents to products with human validation in the loop',
            icon: 'fa-file-contract',
            tech: ['Multi-Agent', 'Vector DB', 'Autonomous Agents', 'NLP', 'Python'],
            impact: 'Scaled patent-to-product mappings from 5 to 60 per month, directly informing pricing and revenue decisions',
            details: {
                challenge: 'Manual patent-to-product mapping was slow and capped at a handful of mappings per month, limiting pricing and marketing decisions',
                solution: 'Built a background research multi-agent system leveraging vector databases and autonomous agents, with human validation built into the workflow',
                results: ['5 → 60 mappings per month', 'Human validation in the loop', 'Directly mapped to pricing and revenue', 'Automated patent analysis', 'Multi-format document support'],
                technologies: ['Vector Databases', 'Autonomous Agents', 'Multi-Agent Orchestration', 'Document Parsing', 'Semantic Chunking', 'Azure Container Apps']
            }
        },
        {
            id: 'voice-interview-product',
            title: 'Voice-Based Interview Product',
            description: 'Internal real-time voice product for taking interviews, built and shipped for internal hiring teams',
            icon: 'fa-microphone',
            tech: ['Speech AI', 'Real-time Voice', 'LLM', 'Python', 'Azure'],
            impact: 'Saved 100+ hours per month for internal employees and standardized the interview process',
            details: {
                challenge: 'Internal teams were spending significant time on repetitive screening interviews with inconsistent coverage',
                solution: 'Built a real-time voice-based interview product that conducts structured interviews and captures responses for review',
                results: ['100+ hours saved per month', 'Real-time voice interaction', 'Consistent interview coverage', 'Internal product adopted by employees', 'Reduced manual screening effort'],
                technologies: ['Speech-to-Text', 'Text-to-Speech', 'Real-time Streaming', 'LLM Evaluation', 'Azure', 'Python']
            }
        },
        {
            id: 'ar-virtual-tryon',
            title: 'AR Virtual Try-On Product',
            description: 'AR apparel try-on product single-handedly built and shipped in 3 months, deployed to production',
            icon: 'fa-tshirt',
            tech: ['AR', 'VC++', 'Microsoft Kinect', 'Computer Vision', '3D Rendering'],
            impact: 'Improved in-store conversion by >90% for retailers like PN-RAO and Raymonds',
            link: 'https://www.youtube.com/watch?v=Hq7hgClsHJ4',
            details: {
                challenge: 'Retailers needed an immersive try-on experience to reduce returns and improve customer engagement',
                solution: 'Single-handedly designed and built the AR try-on product in 3 months using Kinect depth sensing for body tracking and real-time clothing overlay, then deployed it to production',
                results: ['Shipped in 3 months, solo', '>90% conversion improvement', 'Deployed to production', 'Adopted by major retailers', 'Reduced return rates'],
                technologies: ['Microsoft Kinect', 'VC++', 'Depth Sensing', '3D Body Tracking', 'AR Overlay', 'Real-time Rendering']
            }
        },
        {
            id: 'loan-default-prediction',
            title: 'Loan Default Risk Model',
            description: 'Production ML product with continuous pipelines, versioning, and drift detection for a banking client',
            icon: 'fa-chart-line',
            tech: ['MLflow', 'DVC', 'Scikit-learn', 'Azure', 'MLOps', 'Python'],
            impact: 'Reduced loan default rates from 8.8% to 3.85%, lowering marketing expenditure significantly',
            details: {
                challenge: 'Banking client faced high default rates and needed a production-grade ML product with monitoring and versioning',
                solution: 'Built an end-to-end MLOps pipeline with continuous training, model versioning, and drift detection using MLflow and DVC',
                results: ['Default rate: 8.8% → 3.85%', 'Automated retraining', 'Drift detection', 'Model versioning', 'Reduced marketing costs'],
                technologies: ['MLflow', 'DVC', 'Scikit-learn', 'Azure ML', 'Model Monitoring', 'Drift Detection', 'CI/CD for ML', 'Feature Engineering']
            }
        }
    ],
    
    achievements: [
        { text: '3rd place – Analytics Vidhya Dataverse Hackathon (2022)', icon: 'fa-trophy' },
        { text: '1st Runner-up – Annual Happiest Minds Hackathon', icon: 'fa-medal' },
        { text: '4th place – "You Hack the Virus" by HackerEarth', icon: 'fa-award' },
        { text: 'Multiple Annual and Quarterly Excellence Awards', icon: 'fa-star' }
    ],
    
    certifications: [
        { name: 'Azure AI Engineering Associate', issuer: 'Microsoft', icon: 'fa-microsoft' },
        { name: 'Deep Learning Specialization', issuer: 'Coursera', icon: 'fa-graduation-cap' },
        { name: 'TensorFlow Developer Certificate', issuer: 'Deeplearning.ai', icon: 'fa-certificate' }
    ],
    
    typedStrings: [
        'AI Product Architect',
        'AI Products & Enterprise AI Platforms',
        'LLM & GenAI Product Leader',
        'Multi-Agent Systems',
        'Fine-tuning Large Language Models',
        'Shipping AI Products from 0 to 1',
        'Enterprise AI Platforms'
    ]
};

// Render functions
function renderStats() {
    const statsGrid = document.getElementById('stats-grid');
    if (!statsGrid) return;
    
    statsGrid.innerHTML = portfolioData.stats.map(stat => `
        <div class="stat-card">
            <span class="stat-value" style="${stat.value.length > 6 ? 'font-size: 1.8rem;' : ''}">${stat.value}</span>
            <span class="stat-label">${stat.label}</span>
        </div>
    `).join('');
}

function renderTimeline() {
    const timeline = document.getElementById('timeline');
    if (!timeline) return;
    
    timeline.innerHTML = portfolioData.experience.map(exp => `
        <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <h3 class="company-name">${exp.company}</h3>
                <h4 class="role">${exp.role}</h4>
                <p class="period">${exp.period}</p>
                <ul class="achievements-list">
                    ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

function renderSkills() {
    console.log('renderSkills() called');
    const skillsContainer = document.getElementById('skills-container');
    console.log('Skills container element:', skillsContainer);
    if (!skillsContainer) {
        console.error('Skills container not found!');
        return;
    }
    
    console.log('Skills data:', portfolioData.skills);
    skillsContainer.innerHTML = Object.entries(portfolioData.skills).map(([category, data]) => `
        <div class="skill-category">
            <h3 class="skill-category-title">
                <i class="fas ${data.icon}"></i>
                ${category}
            </h3>
            <div class="skills-list">
                ${data.items.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        </div>
    `).join('');
    console.log('Skills rendered successfully!');
    
    // Trigger animation refresh after rendering with a slight delay
    setTimeout(() => {
        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
            console.log('ScrollTrigger refreshed after skills render');
        }
        // Dispatch custom event to notify animations are ready
        window.dispatchEvent(new CustomEvent('skillsRendered'));
    }, 50);
}

function renderProjects() {
    console.log('renderProjects() called');
    const projectsGrid = document.getElementById('projects-grid');
    console.log('Projects grid element:', projectsGrid);
    if (!projectsGrid) {
        console.error('Projects grid not found!');
        return;
    }
    
    console.log('Projects data:', portfolioData.featuredProjects);
    projectsGrid.innerHTML = portfolioData.featuredProjects.map(project => `
        <div class="project-card" data-project-id="${project.id}">
            <div class="project-icon">
                <i class="fas ${project.icon}"></i>
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.tech.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
            </div>
            <p class="project-impact"><strong>Impact:</strong> ${project.impact}</p>
            ${project.link ? `<p class="project-video-hint"><i class="fab fa-youtube"></i> Click to watch the demo</p>` : ''}
        </div>
    `).join('');
    
    console.log('Projects HTML rendered, adding click handlers...');
    // Add click handlers for project modals
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.dataset.projectId;
            showProjectModal(projectId);
        });
    });
    console.log('Projects rendered successfully!');
    
    // Trigger animation refresh after rendering
    if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
    }
}

function renderAchievements() {
    const achievementsList = document.getElementById('achievements-list');
    const certificationsList = document.getElementById('certifications-list');
    
    if (achievementsList) {
        achievementsList.innerHTML = portfolioData.achievements.map(achievement => `
            <li><i class="fas ${achievement.icon}"></i> ${achievement.text}</li>
        `).join('');
    }
    
    if (certificationsList) {
        certificationsList.innerHTML = portfolioData.certifications.map(cert => `
            <li><i class="fas ${cert.icon}"></i> ${cert.name} - ${cert.issuer}</li>
        `).join('');
    }
}

function getYouTubeEmbedId(url) {
    if (!url) return null;
    const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/);
    return match ? match[1] : null;
}

function showProjectModal(projectId) {
    const project = portfolioData.featuredProjects.find(p => p.id === projectId);
    if (!project || !project.details) return;
    
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <div class="project-modal-content">
            <div class="project-icon" style="font-size: 4rem; text-align: center; margin-bottom: 1.5rem;">
                <i class="fas ${project.icon}"></i>
            </div>
            <h2 style="text-align: center; margin-bottom: 2rem;">${project.title}</h2>
            
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Challenge</h3>
                <p style="color: var(--text-secondary);">${project.details.challenge}</p>
            </div>
            
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Solution</h3>
                <p style="color: var(--text-secondary);">${project.details.solution}</p>
            </div>
            
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Key Results</h3>
                <ul style="list-style: none; padding-left: 0;">
                    ${project.details.results.map(result => `
                        <li style="padding: 0.5rem 0; color: var(--text-secondary);">
                            <i class="fas fa-check" style="color: var(--accent-primary); margin-right: 0.5rem;"></i>
                            ${result}
                        </li>
                    `).join('')}
                </ul>
            </div>
            
            ${project.link ? `
            <div style="margin-bottom: 2rem;">
                ${getYouTubeEmbedId(project.link) ? `
                <h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Demo</h3>
                <div style="position: relative; width: 100%; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);">
                    <iframe src="https://www.youtube.com/embed/${getYouTubeEmbedId(project.link)}" title="${project.title} demo" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
                </div>
                ` : `
                <a href="${project.link}" target="_blank" rel="noopener" class="btn btn-secondary">
                    <i class="fab fa-youtube"></i> Watch Demo
                </a>
                `}
            </div>
            ` : ''}
            
            <div>
                <h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Technologies Used</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                    ${project.details.technologies.map(tech => `
                        <span class="tech-badge">${tech}</span>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

// Modal close handlers
function initModalHandlers() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.modal-close');
    const modalBody = document.getElementById('modal-body');
    
    const closeModal = () => {
        modal.classList.remove('active');
        if (modalBody) modalBody.innerHTML = '';
    };
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
}

// Contact form handler with Web3Forms integration
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    const submitBtn = document.getElementById('submit-btn');
    const submitText = document.getElementById('submit-text');
    const formMessage = document.getElementById('form-message');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Show loading state
        submitBtn.disabled = true;
        submitText.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        formMessage.style.display = 'none';
        
        // Get form data
        const formData = new FormData(form);
        
        // Check if access key is configured
        const accessKey = formData.get('access_key');
        if (!accessKey || accessKey === '82d4c83e-1378-4d1b-ac29-6d7afb479206') {
            // Fallback to mailto if Web3Forms not configured
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            window.location.href = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;
            
            submitBtn.disabled = false;
            submitText.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
            form.reset();
            return;
        }
        
        try {
            // Submit to Web3Forms
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });
            
            const data = await response.json();
            
            if (data.success) {
                // Show success message
                formMessage.style.display = 'block';
                formMessage.style.background = 'rgba(0, 217, 255, 0.1)';
                formMessage.style.border = '1px solid var(--accent-primary)';
                formMessage.style.color = 'var(--accent-primary)';
                formMessage.innerHTML = '<i class="fas fa-check-circle"></i> Message sent successfully! I\'ll get back to you soon.';
                
                // Reset form
                form.reset();
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            } else {
                throw new Error(data.message || 'Submission failed');
            }
        } catch (error) {
            // Show error message
            formMessage.style.display = 'block';
            formMessage.style.background = 'rgba(255, 59, 92, 0.1)';
            formMessage.style.border = '1px solid #ff3b5c';
            formMessage.style.color = '#ff3b5c';
            formMessage.innerHTML = '<i class="fas fa-exclamation-circle"></i> Oops! Something went wrong. Please try again or email directly.';
            
            console.error('Form submission error:', error);
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            submitText.innerHTML = 'Send Message';
        }
    });
}

// Initialize all data rendering
function initPortfolioData() {
    console.log('Initializing portfolio data...');
    console.log('Skills data:', portfolioData.skills);
    console.log('Projects data:', portfolioData.featuredProjects);
    
    renderStats();
    renderTimeline();
    renderSkills();
    renderProjects();
    renderAchievements();
    initModalHandlers();
    initContactForm();
    
    console.log('Portfolio data initialization complete!');
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPortfolioData);
} else {
    initPortfolioData();
}
