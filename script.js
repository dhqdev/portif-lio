// Configuração das partículas de fundo
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#6366f1'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#6366f1',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
}

// Dark Mode Toggle
function initDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    
    // Verificar preferência salva
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
        updateDarkModeIcon(savedTheme === 'dark');
    }
    
    darkModeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateDarkModeIcon(newTheme === 'dark');
    });
}

function updateDarkModeIcon(isDark) {
    const icon = document.querySelector('.dark-mode-toggle i');
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
}

// Navegação suave e ativa
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    const hamburger = document.querySelector('.hamburger');
    const navLinksContainer = document.querySelector('.nav-links');
    
    // Navegação suave
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
            
            // Fechar menu mobile
            navLinksContainer.classList.remove('active');
        });
    });
    
    // Menu hamburger
    hamburger.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
    });
    
    // Atualizar link ativo no scroll
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Animação de digitação
function initTypingAnimation() {
    const typingElement = document.querySelector('.typing-animation');
    if (!typingElement) return;
    
    const texts = [
        'Desenvolvedor • Estudante • Cristão • Músico • Professor',
        'Criando soluções com propósito',
        'Tecnologia que serve e transforma',
        'Código com fé e criatividade'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeText() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            
            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(typeText, 500);
                return;
            }
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(typeText, 2000);
                return;
            }
        }
        
        setTimeout(typeText, isDeleting ? 50 : 100);
    }
    
    typeText();
}

// Animações de scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animar barras de habilidade
                if (entry.target.classList.contains('skills')) {
                    animateSkills();
                }
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    document.querySelectorAll('section, .timeline-item, .project-card, .skill-category').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Animação das barras de habilidade
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-level');
    skillBars.forEach((bar, index) => {
        setTimeout(() => {
            bar.classList.add('animate');
        }, index * 200);
    });
}

// Modal dos projetos
function initProjectModals() {
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close');
    
    const projectDetails = {
        'erp-barbearia': {
            title: 'ERP para Barbearia',
            description: 'Sistema completo de gestão desenvolvido especificamente para barbearias, incluindo controle de agendamentos, gestão financeira, relatórios detalhados e controle de estoque.',
            technologies: ['Frappe Framework', 'Python', 'JavaScript', 'MariaDB', 'HTML/CSS'],
            role: 'Desenvolvedor Full-Stack',
            challenges: 'Integração de sistema de pagamentos, otimização de performance para múltiplos usuários simultâneos, desenvolvimento de interface intuitiva para usuários não técnicos.',
            solution: 'Implementei arquitetura modular com Frappe Framework, criei APIs RESTful para integração com sistemas de pagamento e desenvolvi dashboard responsivo com feedback em tempo real.',
            features: ['Agendamento online', 'Controle financeiro', 'Relatórios automáticos', 'Gestão de clientes', 'Controle de estoque'],
            status: 'Concluído e em produção'
        },
        'sistema-vision': {
            title: 'Sistema Vision para Clínicas',
            description: 'Plataforma robusta para gestão completa de clínicas médicas, incluindo prontuários eletrônicos, agendamentos, controle financeiro e relatórios médicos.',
            technologies: ['Python', 'Vue.js', 'PostgreSQL', 'Docker', 'Redis'],
            role: 'Arquiteto de Software e Desenvolvedor Principal',
            challenges: 'Conformidade com LGPD, sincronização de dados em tempo real, integração com equipamentos médicos, alta disponibilidade do sistema.',
            solution: 'Desenvolvi arquitetura de microsserviços com Docker, implementei criptografia end-to-end para dados sensíveis e criei sistema de backup automático.',
            features: ['Prontuários eletrônicos', 'Agendamento inteligente', 'Integração com laboratórios', 'Relatórios médicos', 'Telemedicina'],
            status: 'Em desenvolvimento avançado'
        },
        'app-emergencia': {
            title: 'App Emergência Familiar',
            description: 'Aplicativo inovador de segurança familiar integrado com dispositivos Arduino para detecção de situações de emergência e envio automático de alertas.',
            technologies: ['Arduino', 'C++', 'React Native', 'Firebase', 'Sensores IoT'],
            role: 'Desenvolvedor IoT e Mobile',
            challenges: 'Baixo consumo de energia dos dispositivos, conectividade confiável, redução de falsos alarmes, interface simples para idosos.',
            solution: 'Implementei algoritmos de machine learning para detecção inteligente de emergências, otimizei código Arduino para eficiência energética.',
            features: ['Detecção automática de quedas', 'Botão de pânico', 'GPS integrado', 'Notificações família', 'Histórico de eventos'],
            status: 'Protótipo funcional'
        },
        'kanban-ia': {
            title: 'Kanban com IA',
            description: 'Sistema Kanban inteligente que utiliza IA para otimizar a organização de tarefas, prever prazos e sugerir melhorias no fluxo de trabalho.',
            technologies: ['React', 'Firebase', 'TensorFlow.js', 'Node.js', 'OpenAI API'],
            role: 'Desenvolvedor Full-Stack e Especialista em IA',
            challenges: 'Processamento em tempo real, modelo de IA preciso para estimativas, interface intuitiva, sincronização multi-usuário.',
            solution: 'Integrei APIs de IA para análise preditiva, implementei WebSockets para atualizações em tempo real e criei algoritmos de otimização de tarefas.',
            features: ['Estimativa automática de prazos', 'Sugestões de otimização', 'Análise de produtividade', 'Colaboração em tempo real', 'Relatórios inteligentes'],
            status: 'MVP lançado'
        },
        'sistema-cristao': {
            title: 'Sistema Cristão Organizacional',
            description: 'Plataforma completa para organização espiritual de igrejas, incluindo estudos bíblicos, acompanhamento pastoral, gestão de membros e eventos.',
            technologies: ['Python', 'Django', 'PostgreSQL', 'Bootstrap', 'Celery'],
            role: 'Desenvolvedor Principal e Product Owner',
            challenges: 'Gestão de dados sensíveis, escalabilidade para diferentes tamanhos de igreja, interface acessível para todas as idades.',
            solution: 'Desenvolvi sistema modular adaptável, implementei controles de acesso granulares e criei interface intuitiva com foco na usabilidade.',
            features: ['Gestão de membros', 'Estudos bíblicos interativos', 'Acompanhamento pastoral', 'Eventos e agenda', 'Relatórios ministeriais'],
            status: 'Concluído e em uso'
        },
        'site-luiza': {
            title: 'Site Retrô para Luiza',
            description: 'Site nostálgico criado com muito carinho para minha namorada, apresentando design vintage inspirado nos anos 90 com elementos interativos especiais.',
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API', 'Web Audio API'],
            role: 'Designer e Desenvolvedor Criativo',
            challenges: 'Recriar estética autêntica dos anos 90, otimizar para diferentes dispositivos mantendo o charme retrô, criar interações especiais.',
            solution: 'Pesquisei extensivamente design web vintage, implementei efeitos visuais com CSS e JavaScript puro, criei easter eggs interativos.',
            features: ['Design vintage autêntico', 'Animações nostálgicas', 'Playlist musical integrada', 'Galeria de memórias', 'Efeitos sonoros retrô'],
            status: 'Presente especial entregue ❤️'
        }
    };
    
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectKey = card.getAttribute('data-project');
            const project = projectDetails[projectKey];
            
            if (project) {
                modalBody.innerHTML = `
                    <h2>${project.title}</h2>
                    <p class="project-status"><strong>Status:</strong> ${project.status}</p>
                    
                    <div class="modal-section">
                        <h3>Descrição do Projeto</h3>
                        <p>${project.description}</p>
                    </div>
                    
                    <div class="modal-section">
                        <h3>Meu Papel</h3>
                        <p>${project.role}</p>
                    </div>
                    
                    <div class="modal-section">
                        <h3>Tecnologias Utilizadas</h3>
                        <div class="tech-tags">
                            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                    </div>
                    
                    <div class="modal-section">
                        <h3>Principais Funcionalidades</h3>
                        <ul>
                            ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="modal-section">
                        <h3>Desafios Enfrentados</h3>
                        <p>${project.challenges}</p>
                    </div>
                    
                    <div class="modal-section">
                        <h3>Como Resolvi</h3>
                        <p>${project.solution}</p>
                    </div>
                `;
                
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Fechar modal
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Formulário de contato
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Simular envio (integrar com serviço real)
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        
        // Simular delay de envio
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Mensagem Enviada!';
            submitBtn.style.background = '#10b981';
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
                form.reset();
            }, 3000);
        }, 2000);
        
        console.log('Dados do formulário:', data);
    });
}

// Mensagens inspiradoras
function showInspirationalMessages() {
    const messages = [
        "Código com propósito 💻✨",
        "Tecnologia que serve 🚀❤️",
        "Fé + Código = Transformação 🙏💡",
        "Criando o futuro com amor 🌟",
        "Cada linha de código conta 📝⚡"
    ];
    
    function showMessage() {
        const message = messages[Math.floor(Math.random() * messages.length)];
        
        const messageEl = document.createElement('div');
        messageEl.textContent = message;
        messageEl.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1rem 2rem;
            border-radius: 50px;
            font-weight: 600;
            z-index: 9999;
            opacity: 0;
            transition: all 0.5s ease;
            pointer-events: none;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        `;
        
        document.body.appendChild(messageEl);
        
        // Animar entrada
        setTimeout(() => {
            messageEl.style.opacity = '1';
            messageEl.style.transform = 'translate(-50%, -60%)';
        }, 100);
        
        // Animar saída
        setTimeout(() => {
            messageEl.style.opacity = '0';
            messageEl.style.transform = 'translate(-50%, -40%)';
            setTimeout(() => messageEl.remove(), 500);
        }, 3000);
    }
    
    // Mostrar mensagem a cada 30 segundos
    setInterval(showMessage, 30000);
}

// Efeitos de hover nos elementos
function initHoverEffects() {
    // Efeito parallax suave no hero
    window.addEventListener('mousemove', (e) => {
        const heroImage = document.querySelector('.hero-image');
        if (heroImage) {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            heroImage.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        }
    });
    
    // Reset no mouse leave
    document.addEventListener('mouseleave', () => {
        const heroImage = document.querySelector('.hero-image');
        if (heroImage) {
            heroImage.style.transform = 'rotateY(0deg) rotateX(0deg)';
        }
    });
}

// Controle de scroll suave
function initSmoothScrolling() {
    // Navbar oculta/mostra no scroll
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });
}

// Adicionar estilos CSS dinâmicos para modal
function addModalStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .modal-section {
            margin-bottom: 2rem;
        }
        
        .modal-section h3 {
            color: var(--primary-color);
            margin-bottom: 1rem;
            font-size: 1.2rem;
        }
        
        .project-status {
            background: var(--bg-secondary);
            padding: 0.5rem 1rem;
            border-radius: 10px;
            display: inline-block;
            margin-bottom: 2rem;
            font-weight: 600;
        }
        
        .tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-top: 1rem;
        }
        
        .modal-section ul {
            list-style: none;
            padding-left: 0;
        }
        
        .modal-section li {
            padding: 0.5rem 0;
            border-bottom: 1px solid var(--border-color);
        }
        
        .modal-section li:before {
            content: '✓';
            color: var(--primary-color);
            font-weight: bold;
            margin-right: 0.5rem;
        }
    `;
    document.head.appendChild(style);
}

// Inicialização principal
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Portfólio David Fernandes - Inicializando...');
    
    // Inicializar todos os módulos
    initParticles();
    initDarkMode();
    initNavigation();
    initTypingAnimation();
    initScrollAnimations();
    initProjectModals();
    initContactForm();
    initHoverEffects();
    initSmoothScrolling();
    addModalStyles();
    
    // Mostrar mensagens inspiradoras após 10 segundos
    setTimeout(showInspirationalMessages, 10000);
    
    console.log('✨ Portfólio carregado com sucesso!');
});

// Service Worker para PWA (opcional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registrado'))
            .catch(error => console.log('SW erro:', error));
    });
}
