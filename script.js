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
        'Desenvolvedor Full-Stack • Especialista em Python & JavaScript',
        'Arquiteto de Software • Soluções Escaláveis',
        'Especialista em APIs • Microserviços • DevOps',
        'Python | JavaScript | React | Vue.js | Docker'
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
            title: 'ERP Completo para Barbearias',
            description: 'Sistema robusto de gestão empresarial desenvolvido especificamente para barbearias, utilizando Frappe Framework. O sistema oferece uma solução completa que integra todos os aspectos operacionais do negócio.',
            technologies: ['Frappe Framework', 'Python', 'JavaScript', 'MariaDB', 'REST API', 'HTML/CSS', 'Nginx'],
            role: 'Desenvolvedor Full-Stack e Arquiteto de Software',
            challenges: 'Desenvolvimento de arquitetura escalável, integração com sistemas de pagamento, sincronização em tempo real para múltiplos usuários, implementação de relatórios complexos e otimização de performance.',
            solution: 'Implementei arquitetura modular com Frappe Framework, criei APIs RESTful customizadas, desenvolvi sistema de cache para otimização, implementei WebSockets para atualizações em tempo real e criei dashboard responsivo com métricas em tempo real.',
            features: [
                'Sistema de agendamento online com calendário interativo',
                'Controle financeiro completo (receitas, despesas, fluxo de caixa)',
                'Gestão de estoque automatizada com alertas de reposição',
                'Relatórios analíticos com gráficos dinâmicos',
                'Dashboard em tempo real com KPIs do negócio',
                'Sistema de fidelidade e programas de desconto',
                'Integração com WhatsApp para notificações',
                'Controle de acesso baseado em perfis de usuário'
            ],
            status: 'Concluído e em produção - 3 clientes ativos',
            metrics: 'Aumento de 40% na eficiência operacional dos clientes'
        },
        'sistema-vision': {
            title: 'Sistema Vision - Gestão Médica Completa',
            description: 'Plataforma robusta desenvolvida para gestão completa de clínicas médicas, focada em segurança de dados (LGPD), eficiência operacional e experiência do usuário.',
            technologies: ['Python', 'Django', 'Vue.js', 'PostgreSQL', 'Docker', 'Redis', 'Celery', 'JWT'],
            role: 'Arquiteto de Software e Desenvolvedor Principal',
            challenges: 'Conformidade rigorosa com LGPD, sincronização de dados médicos em tempo real, integração segura com equipamentos médicos, alta disponibilidade (99.9% uptime), criptografia de dados sensíveis.',
            solution: 'Desenvolvi arquitetura de microsserviços com Docker, implementei criptografia end-to-end para dados sensíveis, criei sistema de backup automático com redundância, integrei APIs de laboratórios e implementei cache distribuído com Redis.',
            features: [
                'Prontuários eletrônicos com assinatura digital',
                'Sistema de agendamento inteligente com otimização automática',
                'Integração direta com laboratórios e exames',
                'Módulo de telemedicina com videochamadas seguras',
                'Prescrições digitais com validação farmacêutica',
                'Relatórios médicos automatizados',
                'Controle de acesso granular por especialidade',
                'Audit trail completo para compliance',
                'Dashboard analítico para gestão da clínica'
            ],
            status: 'Em desenvolvimento avançado - MVP implantado',
            metrics: 'Redução de 60% no tempo de consulta e 35% na gestão administrativa'
        },
        'app-emergencia': {
            title: 'Sistema IoT de Emergência Familiar',
            description: 'Aplicativo inovador de segurança familiar que integra dispositivos IoT com inteligência artificial para detecção automática de situações de emergência.',
            technologies: ['Arduino', 'C++', 'React Native', 'Firebase', 'TensorFlow Lite', 'GPS API', 'Push Notifications'],
            role: 'Desenvolvedor IoT e Especialista em Sistemas Embarcados',
            challenges: 'Otimização de consumo energético dos dispositivos, conectividade confiável em áreas com sinal fraco, redução de falsos alarmes através de IA, interface intuitiva para usuários idosos.',
            solution: 'Implementei algoritmos de machine learning para detecção inteligente, otimizei código Arduino para eficiência energética máxima, desenvolvi protocolo de comunicação redundante e criei interface adaptativa para diferentes perfis de usuário.',
            features: [
                'Detecção automática de quedas usando acelerômetro e giroscópio',
                'Botão de pânico com confirmação biométrica',
                'GPS integrado com geofencing inteligente',
                'Notificações push instantâneas para familiares',
                'Histórico completo de eventos e localização',
                'Integração com serviços de emergência locais',
                'Bateria com autonomia de 7 dias',
                'Algoritmo anti-falso alarme com IA',
                'Dashboard web para monitoramento familiar'
            ],
            status: 'Protótipo funcional testado - Buscando investimento',
            metrics: 'Taxa de detecção precisa de 95% com menos de 2% de falsos alarmes'
        },
        'kanban-ia': {
            title: 'Sistema Kanban Inteligente com IA',
            description: 'Plataforma avançada de gerenciamento de projetos que utiliza inteligência artificial para otimizar fluxos de trabalho e aumentar produtividade das equipes.',
            technologies: ['React', 'Node.js', 'Firebase', 'TensorFlow.js', 'OpenAI API', 'WebSockets', 'Chart.js'],
            role: 'Desenvolvedor Full-Stack e Especialista em IA',
            challenges: 'Processamento de dados em tempo real, modelo de IA preciso para estimativas, sincronização multi-usuário sem conflitos, interface intuitiva que não comprometa a performance.',
            solution: 'Integrei APIs de IA para análise preditiva, implementei WebSockets para colaboração em tempo real, criei algoritmos de otimização de tarefas e desenvolvi sistema de cache inteligente para performance.',
            features: [
                'Estimativa automática de prazos baseada em histórico',
                'Sugestões inteligentes de otimização de fluxo',
                'Análise preditiva de gargalos no processo',
                'Colaboração em tempo real com múltiplos usuários',
                'Relatórios de produtividade com insights de IA',
                'Integração com ferramentas de desenvolvimento (GitHub, Jira)',
                'Automação de movimentação de cards baseada em regras',
                'Dashboard executivo com métricas avançadas',
                'Notificações inteligentes contextuais'
            ],
            status: 'MVP lançado - 50+ usuários ativos',
            metrics: 'Aumento médio de 35% na produtividade das equipes usuárias'
        },
        'sistema-automacao': {
            title: 'Suite de Automação Web Avançada',
            description: 'Framework completo para automação de testes e coleta de dados web, desenvolvido para suportar operações em larga escala com alta confiabilidade.',
            technologies: ['Python', 'Selenium', 'BeautifulSoup', 'Pandas', 'Pytest', 'Docker', 'Prometheus'],
            role: 'Desenvolvedor de Automação e Especialista em Testes',
            challenges: 'Lidar com sites dinâmicos e SPAs, contornar sistemas anti-bot, garantir estabilidade em execuções longas, processar grandes volumes de dados.',
            solution: 'Desenvolvi framework robusto com retry automático, implementei pool de proxies rotativos, criei sistema de monitoramento de health checks e otimizei processamento com multiprocessing.',
            features: [
                'Framework de testes automatizados multi-browser',
                'Web scraping inteligente com detecção de mudanças',
                'Sistema de proxies rotativos para evitar bloqueios',
                'Processamento paralelo para alta performance',
                'Integração com APIs para enriquecimento de dados',
                'Dashboard de monitoramento de execuções',
                'Geração automática de relatórios de qualidade',
                'Sistema de alertas para falhas críticas',
                'Versionamento automático de scripts de teste'
            ],
            status: 'Em produção - Processando 10k+ operações/dia',
            metrics: 'Redução de 80% no tempo de testes manuais'
        },
        'api-gateway': {
            title: 'API Gateway para Arquitetura de Microserviços',
            description: 'Gateway centralizado robusto para gerenciamento de microserviços, com foco em performance, segurança e observabilidade.',
            technologies: ['Node.js', 'Express', 'Redis', 'JWT', 'Prometheus', 'Grafana', 'Docker', 'Kong'],
            role: 'Arquiteto de Software e DevOps Engineer',
            challenges: 'Garantir baixa latência mesmo com alto throughput, implementar autenticação distribuída, balanceamento de carga inteligente, monitoramento em tempo real.',
            solution: 'Implementei cache distribuído com Redis, desenvolvi algoritmo de rate limiting adaptativo, integrei observabilidade completa com métricas customizadas e criei sistema de circuit breaker para resiliência.',
            features: [
                'Autenticação JWT centralizada com refresh automático',
                'Rate limiting adaptativo baseado em uso',
                'Cache distribuído para otimização de performance',
                'Load balancing inteligente com health checks',
                'Monitoramento em tempo real com Prometheus/Grafana',
                'Logging centralizado com correlação de requests',
                'Circuit breaker para proteção de serviços',
                'Transformação e validação de dados automática',
                'API versioning e backward compatibility'
            ],
            status: 'Em produção - Processando 1M+ requests/dia',
            metrics: 'Latência média de 50ms com 99.99% de disponibilidade'
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
                    ${project.metrics ? `<p class="project-metrics"><strong>Resultados:</strong> ${project.metrics}</p>` : ''}
                    
                    <div class="modal-section">
                        <h3>Visão Geral do Projeto</h3>
                        <p>${project.description}</p>
                    </div>
                    
                    <div class="modal-section">
                        <h3>Meu Papel no Projeto</h3>
                        <p>${project.role}</p>
                    </div>
                    
                    <div class="modal-section">
                        <h3>Stack Tecnológico</h3>
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
                        <h3>Desafios Técnicos</h3>
                        <p>${project.challenges}</p>
                    </div>
                    
                    <div class="modal-section">
                        <h3>Soluções Implementadas</h3>
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

// Formulário de contato com EmailJS
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    // Inicializar EmailJS
    emailjs.init("YOUR_PUBLIC_KEY"); // Substituir pela sua chave pública do EmailJS
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Estado de loading
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        
        try {
            // Preparar parâmetros para o EmailJS
            const templateParams = {
                from_name: data.name,
                from_email: data.email,
                subject: data.subject,
                message: data.message,
                to_name: 'David Fernandes',
                to_email: 'david.h.queiroz@gmail.com'
            };
            
            // Enviar email usando EmailJS
            const response = await emailjs.send(
                'YOUR_SERVICE_ID',    // Substituir pelo seu Service ID
                'YOUR_TEMPLATE_ID',   // Substituir pelo seu Template ID
                templateParams
            );
            
            if (response.status === 200) {
                // Sucesso
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Mensagem Enviada!';
                submitBtn.style.background = '#10b981';
                
                showNotification(
                    'Mensagem Enviada!',
                    'Obrigado pelo contato. Retornarei em breve!',
                    'success'
                );
                
                // Reset form após sucesso
                setTimeout(() => {
                    form.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                }, 3000);
            }
            
        } catch (error) {
            console.error('Erro ao enviar email:', error);
            
            // Fallback: criar link de email
            const subject = encodeURIComponent(data.subject);
            const body = encodeURIComponent(
                `Nome: ${data.name}\nEmail: ${data.email}\n\nMensagem:\n${data.message}`
            );
            const mailtoLink = `mailto:david.h.queiroz@gmail.com?subject=${subject}&body=${body}`;
            
            // Estado de erro
            submitBtn.innerHTML = '<i class="fas fa-envelope"></i> Abrir Email';
            submitBtn.style.background = '#3b82f6';
            
            showNotification(
                'Abrindo Cliente de Email',
                'Seu cliente de email será aberto com a mensagem preenchida.',
                'info'
            );
            
            // Abrir cliente de email
            submitBtn.onclick = (e) => {
                e.preventDefault();
                window.location.href = mailtoLink;
            };
            
            // Reset button após alguns segundos
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
                submitBtn.onclick = null;
            }, 5000);
        }
    });
}

// Sistema de notificações
function showNotification(title, message, type = 'info') {
    const container = document.getElementById('notification-container');
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        info: 'fas fa-info-circle'
    };
    
    notification.innerHTML = `
        <div class="notification-icon">
            <i class="${icons[type]}"></i>
        </div>
        <div class="notification-content">
            <div class="notification-title">${title}</div>
            <div class="notification-message">${message}</div>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    container.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Configurar botão de fechar
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => container.removeChild(notification), 400);
    });
    
    // Auto-remover após 5 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    container.removeChild(notification);
                }
            }, 400);
        }
    }, 5000);
}

// Mensagens técnicas motivacionais
function showTechnicalMessages() {
    const messages = [
        "Code • Build • Deploy • Repeat �",
        "Clean Code = Happy Developers �",
        "APIs bem documentadas salvam vidas �",
        "Testes automatizados = Sono tranquilo 🧪",
        "Performance matters ⚡"
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
    
    // Mostrar mensagem a cada 45 segundos
    setInterval(showMessage, 45000);
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
    
    // Mostrar mensagens técnicas após 15 segundos
    setTimeout(showTechnicalMessages, 15000);
    
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
