// Portfolio Data - Extracted from resume
const portfolioData = {
    personal: {
        name: 'Vivek Ananthan M.S',
        title: 'AI Architect | Sr. ML & MLOps Engineer | LLM & GenAI Specialist',
        email: 'vivekananthan_ms@hotmail.com',
        phone: '+91-8778545803',
        github: 'https://github.com/wickkiey',
        linkedin: 'https://www.linkedin.com/in/wickkiey/',
        portfolio: 'https://wickkiey.github.io',
        visa: 'B1B2 (US)',
        location: 'India'
    },
    
    summary: 'AI Architect with 11 years of experience in building scalable ML systems and LLM-based agent workflows. Expertise in full ML lifecycle—training, deployment, tracing, observability, and drift detection—ensuring secure, compliant, and production-grade delivery using modern cloud-native and AI-native architectures.',
    
    stats: [
        { value: '11+', label: 'Years Experience' },
        { value: '14K+', label: 'Users Served' },
        { value: '$4.3M', label: 'Revenue Impact' },
        { value: '90%+', label: 'Conversion Rate' }
    ],
    
    education: [
        { degree: 'PG Diploma in Data Science', institution: 'UpGrad & IIIT-Bangalore', year: '2017–2018' },
        { degree: 'M.Tech (CS Engineering)', institution: 'Anna University, Tirunelveli', year: '2009–2014' }
    ],
    
    experience: [
        {
            company: 'Fortive',
            role: 'Sr. ML Engineer',
            period: 'Jul 2023 – Present',
            location: 'Remote',
            achievements: [
                'Architected and fine-tuned Mistral model (LLM LoRA Fine-tuning, unsloth) on custom oscilloscope command sets, enabling natural language interaction for device operations',
                'Led design and development of GenAI-based multi-agent RAG system with Vector DB-powered knowledge engine using Azure OpenAI and CrewAI, serving 14,000+ employees',
                'Architected and deployed YOLO-based medical instrument detection models to edge environments for real-time inference',
                'Developed scalable data pipeline module for knowledge engine generation with optimized semantic chunking via Container App Jobs',
                'Built AI-powered document comparison platform leveraging Vector Databases and autonomous agents, generating $4.3M quarterly revenue'
            ]
        },
        {
            company: 'Happiest Minds Technologies',
            role: 'Lead Data Scientist',
            period: 'Jan 2019 – Jul 2023',
            location: 'Bangalore, India',
            achievements: [
                'Architected and deployed multiple internal AI intellectual properties with end-to-end ML lifecycle ownership',
                'Designed loan default risk models reducing default rates from 8.8% to 3.85% with MLflow and DVC for versioning and drift detection',
                'Developed automated product image validation using U-Net and MobileNetV2, and demand forecasting with PySpark on Databricks',
                'Built image-based intelligent search engine combining object detection, OCR (EasyOCR), and vector similarity search'
            ]
        },
        {
            company: 'Aagnas Software Labs',
            role: 'Product Solutions Engineer',
            period: 'Feb 2016 – Dec 2018',
            location: 'Chennai, India',
            achievements: [
                'Designed AR-based virtual try-on system for apparel using VC++ and Microsoft Kinect, adopted by PN-RAO and Raymonds, improving conversion by >90%',
                'Built 3D hand-gesture recognition models using depth camera feeds with custom PyTorch model',
                'Developed 3D jewelry visualization product (Jwelme) using Kinect depth sensing and Python-based 3D rendering',
                'Implemented recommendation systems using collaborative filtering for retail clients'
            ]
        },
        {
            company: 'Cognizant Technology Solutions',
            role: 'Programmer Analyst',
            period: 'Jun 2014 – Feb 2016',
            location: 'Chennai, India',
            achievements: [
                'Implemented custom data validation and anomaly detection frameworks for insurance datasets',
                'Built NLP-based sentiment analysis models for customer feedback and complaints',
                'Created web dashboard with business metrics for data insights'
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
            title: 'Mistral LLM Fine-tuning',
            description: 'Fine-tuned Mistral model using LoRA/PEFT on custom oscilloscope command sets for natural language device operations',
            icon: 'fa-brain',
            tech: ['PyTorch', 'Unsloth', 'LoRA', 'PEFT', 'LLM Fine-tuning', 'Python'],
            impact: 'Enabled natural language interaction with oscilloscopes, significantly enhancing user productivity across engineering teams',
            details: {
                challenge: 'Engineering teams needed an intuitive way to interact with complex oscilloscope commands without memorizing technical syntax',
                solution: 'Implemented LoRA-based parameter-efficient fine-tuning on Mistral model using unsloth framework, trained on domain-specific command datasets',
                results: ['Natural language command interpretation', 'Reduced learning curve for new engineers', 'Improved operational efficiency', 'Seamless integration with existing hardware'],
                technologies: ['PyTorch', 'Unsloth', 'LoRA/PEFT', 'Hugging Face Transformers', 'Custom tokenization', 'Quantization']
            }
        },
        {
            id: 'multi-agent-rag',
            title: 'Multi-Agent RAG System',
            description: 'Enterprise GenAI platform with Vector DB-powered knowledge engine for semantic retrieval, serving 14,000+ employees',
            icon: 'fa-network-wired',
            tech: ['Azure OpenAI', 'CrewAI', 'Vector DB', 'RAG', 'Multi-Agent', 'Python'],
            impact: 'Currently serving 14,000+ employees for Kaizen initiatives, enabling rapid knowledge discovery and decision-making',
            details: {
                challenge: 'Organization needed intelligent knowledge retrieval system across structured and unstructured data sources at enterprise scale',
                solution: 'Architected multi-agent RAG system using CrewAI for orchestration, Azure OpenAI for LLM capabilities, and vector databases for semantic search',
                results: ['14K+ active users', 'Sub-second query responses', 'Multi-source data integration', 'Autonomous agent reasoning', 'Context-aware responses'],
                technologies: ['Azure OpenAI', 'CrewAI', 'Vector Databases (Pinecone/Weaviate)', 'LangChain', 'Semantic Search', 'Agent Orchestration', 'Azure Container Apps']
            }
        },
        {
            id: 'yolo-edge-deployment',
            title: 'YOLO Edge Deployment',
            description: 'Real-time medical instrument detection deployed to edge devices for enhanced device intelligence',
            icon: 'fa-microchip',
            tech: ['YOLO', 'Edge AI', 'TensorRT', 'OpenCV', 'Model Optimization', 'Python'],
            impact: 'Enabled real-time inference on edge devices, improving medical workflow efficiency and device autonomy',
            details: {
                challenge: 'Medical devices required real-time object detection capabilities without cloud dependency, with strict latency and power constraints',
                solution: 'Optimized YOLO models for edge deployment using quantization and pruning, deployed via TensorRT for maximum performance',
                results: ['<50ms inference latency', 'Edge-native processing', 'No cloud dependency', '95%+ detection accuracy', 'Low power consumption'],
                technologies: ['YOLOv8', 'TensorRT', 'ONNX', 'Model Quantization', 'Pruning', 'OpenCV', 'Edge Computing', 'Embedded Systems']
            }
        },
        {
            id: 'ai-document-analysis',
            title: 'AI Document Analysis Platform',
            description: 'Multi-format document comparison using Vector Databases and autonomous agents for patent-to-product mapping',
            icon: 'fa-file-contract',
            tech: ['Vector DB', 'Autonomous Agents', 'NLP', 'PDF Processing', 'Python'],
            impact: 'Generated $4.3M in quarterly revenue through improved pricing strategy and marketing effectiveness',
            details: {
                challenge: 'Complex document comparison across multiple formats (PDF, Excel) needed for patent claim analysis and product mapping',
                solution: 'Built autonomous agent system leveraging vector databases for semantic document comparison and intelligent claim-to-product mapping',
                results: ['$4.3M quarterly revenue impact', 'Automated patent analysis', 'Multi-format support', 'Intelligent claim mapping', 'Strategic pricing insights'],
                technologies: ['Vector Databases', 'Autonomous Agents', 'Document Parsing', 'Semantic Chunking', 'NLP', 'Azure Container Apps', 'Multi-modal Processing']
            }
        },
        {
            id: 'ar-virtual-tryon',
            title: 'AR Virtual Try-On System',
            description: 'Augmented reality system for apparel using Microsoft Kinect, adopted by major retailers',
            icon: 'fa-tshirt',
            tech: ['AR', 'VC++', 'Microsoft Kinect', 'Computer Vision', '3D Rendering'],
            impact: 'Improved in-store conversion by >90% for retailers like PN-RAO and Raymonds',
            details: {
                challenge: 'Retailers needed immersive try-on experience to reduce returns and improve customer engagement',
                solution: 'Developed AR system using Kinect depth sensing for body tracking and real-time clothing overlay with realistic physics simulation',
                results: ['>90% conversion improvement', 'Reduced return rates', 'Enhanced customer engagement', 'Adopted by major retailers', 'Real-time rendering'],
                technologies: ['Microsoft Kinect', 'VC++', 'Depth Sensing', '3D Body Tracking', 'AR Overlay', 'Real-time Rendering', 'Physics Simulation']
            }
        },
        {
            id: 'loan-default-prediction',
            title: 'Loan Default Risk Model',
            description: 'Production ML system with continuous pipelines, versioning, and drift detection for banking client',
            icon: 'fa-chart-line',
            tech: ['MLflow', 'DVC', 'Scikit-learn', 'Azure', 'MLOps', 'Python'],
            impact: 'Reduced loan default rates from 8.8% to 3.85%, lowering marketing expenditure significantly',
            details: {
                challenge: 'Banking client faced high default rates and needed production-grade ML system with monitoring and versioning',
                solution: 'Built end-to-end MLOps pipeline with continuous training, model versioning, and drift detection using MLflow and DVC',
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
        'AI Architect',
        'LLM & GenAI Specialist',
        'Multi-Agent Systems Expert',
        'MLOps Engineer',
        'Building Intelligent Systems',
        'Fine-tuning Large Language Models',
        'Designing RAG Architectures'
    ]
};

// Render functions
function renderStats() {
    const statsGrid = document.getElementById('stats-grid');
    if (!statsGrid) return;
    
    statsGrid.innerHTML = portfolioData.stats.map(stat => `
        <div class="stat-card">
            <span class="stat-value">${stat.value}</span>
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
    const skillsContainer = document.getElementById('skills-container');
    if (!skillsContainer) return;
    
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
}

function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
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
        </div>
    `).join('');
    
    // Add click handlers for project modals
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.dataset.projectId;
            showProjectModal(projectId);
        });
    });
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
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
}

// Contact form handler
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Create mailto link
        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;
        
        // Reset form
        form.reset();
    });
}

// Initialize all data rendering
function initPortfolioData() {
    renderStats();
    renderTimeline();
    renderSkills();
    renderProjects();
    renderAchievements();
    initModalHandlers();
    initContactForm();
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPortfolioData);
} else {
    initPortfolioData();
}
