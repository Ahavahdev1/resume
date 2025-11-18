document.addEventListener('DOMContentLoaded', () => {
    // 1. Configuração do tsParticles para o fundo animado
    tsParticles.load('tsparticles', {
        // ... (sua configuração original do tsParticles permanece aqui, sem alterações)
        background: { color: { value: "#1a1a2e" } },
        fpsLimit: 60,
        interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: true, mode: "push" }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 }, push: { quantity: 4 } }
        },
        particles: {
            color: { value: ["#007bff", "#28a745", "#6c757d", "#f4f4f4"] },
            links: { color: "#3f3f5a", distance: 150, enable: true, opacity: 0.5, width: 1 },
            move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: true, speed: 1, straight: false },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: { value: 0.5 },
            shape: { type: ["circle", "triangle", "polygon"], polygon: { nb_sides: 5 } },
            size: { value: { min: 1, max: 5 } }
        },
        detectRetina: true
    });

    // 2. Smooth Scroll para os links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            if (window.innerWidth <= 768) {
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                    document.querySelector('.navbar-toggler i').classList.remove('fa-times');
                    document.querySelector('.navbar-toggler i').classList.add('fa-bars');
                }
            }
        });
    });

    // 3. Header com background dinâmico ao rolar
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 4. Mobile Menu Toggle
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    navbarToggler.addEventListener('click', () => {
        navbarCollapse.classList.toggle('show');
        const icon = navbarToggler.querySelector('i');
        if (navbarCollapse.classList.contains('show')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // 5. Scroll Reveal Animation (Intersection Observer)
    const fadeInElements = document.querySelectorAll('.fade-in-section, .project-card, .skill-category, .timeline-item');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1
    });
    fadeInElements.forEach(element => {
        observer.observe(element);
    });

    // Animacao inicial do Hero
    document.querySelector('.hero').classList.add('appear');
    
    // ===================================================================
    // NOVA SEÇÃO: LÓGICA DE TRADUÇÃO
    // ===================================================================
    const translations = {
        'en': {
            'nav_about': 'About', 'nav_skills': 'Skills', 'nav_projects': 'Projects', 'nav_experience': 'Experience', 'nav_education': 'Education', 'nav_contact': 'Contact', 'nav_cv': 'Download CV',
            'hero_description': 'Building intelligent and scalable digital solutions with AI, Blockchain, and Full Stack expertise.', 'hero_projects_btn': 'View Projects', 'hero_contact_btn': 'Get in Touch',
            'about_title': 'About Me', 'about_p1': 'Passionate technology professional with over five years of diverse experience in web development, full-stack engineering, blockchain, and artificial intelligence. My specialty lies in creating innovative digital solutions, focusing on the strategic use of AI for data-driven decision-making and developing cutting-edge products with scalable architectures and user-centric designs.', 'about_p2': 'As a founder and CEO, I combine technical vision with business acumen to deliver tangible value. I am always seeking growth, continuous learning, and stimulating challenges that allow me to expand my skills and positively impact the technological landscape.',
            'skills_title': 'Skills & Technologies', 'skills_subtitle': 'Mastery of a broad spectrum of modern technologies, with deep expertise in the following areas:', 'skills_other_languages': 'Other Languages',
            'projects_title': 'Featured Projects', 'projects_subtitle': 'Practical applications of my technical knowledge and passion for innovation.',
            'proj1_title': 'Cryptocurrency Prediction System', 'proj1_desc': 'A system that uses ARIMA to forecast cryptocurrency prices, consuming data via the CoinGecko API and visualizing results with Matplotlib.', 'proj1_value': '<strong>Added Value:</strong> Aids in understanding trends and decision-making in the financial sector.',
            'proj2_title': 'Social Media Sentiment Analysis', 'proj2_desc': 'An NLP tool that analyzes texts from social platforms to classify public opinion using NLTK, spaCy, and Transformers.', 'proj2_value': '<strong>Added Value:</strong> Essential for marketing, CX, and market research.',
            'proj3_title': 'Image Recognition (Computer Vision)', 'proj3_desc': 'A system with CNNs to classify objects and detect patterns in images using TensorFlow, Keras, and OpenCV.', 'proj3_value': '<strong>Added Value:</strong> Applicable in security, healthcare, and e-commerce.',
            'proj4_title': 'Intelligent WhatsApp Chatbot', 'proj4_desc': 'A chatbot with AI and NLP for automated responses on WhatsApp, using TensorFlow, Flask/FastAPI, and the official API.', 'proj4_value': '<strong>Added Value:</strong> Reduces costs and improves engagement through support automation.',
            'proj5_title': 'Personalized Recommendation System', 'proj5_desc': 'A system that suggests products/services based on user behavior, using collaborative and content-based filtering.', 'proj5_value': '<strong>Added Value:</strong> Increases engagement in e-commerce/streaming.',
            'proj6_title': 'Decentralized Voting Platform', 'proj6_desc': 'A secure and transparent voting platform with Blockchain (Solidity) and biometric facial authentication (AI).', 'proj6_value': '<strong>Added Value:</strong> Ensures integrity and transparency in voting processes.',
            'experience_title': 'Professional Experience', 'exp1_date': 'Feb 2020 – Present', 'exp1_desc': 'Led a team in creating innovative digital solutions (full-stack and AI). Focused on sustainability and optimizing clients\' online presence.', 'exp2_date': 'Oct 2013 – Present', 'exp2_desc': 'Managed a marketing agency focused on data-driven solutions. Expertise in marketing strategies, combining technical knowledge and business vision.',
            'education_title': 'Education', 'edu1_date': 'In Progress', 'edu2_title': 'Bachelor\'s Degree in Business Administration', 'edu3_date': 'Completed',
            'contact_title': 'Let\'s Talk?', 'contact_subtitle': 'I am open to new opportunities, collaborations, and challenges. Get in touch!', 'contact_location': 'Itapeva, São Paulo, Brazil', 'contact_cv_btn': 'Download CV in PDF',
            'footer_text': '&copy; 2024 Bruno Loureiro Desidera. All rights reserved.'
        },
        'pt': {
            'nav_about': 'Sobre', 'nav_skills': 'Habilidades', 'nav_projects': 'Projetos', 'nav_experience': 'Experiência', 'nav_education': 'Educação', 'nav_contact': 'Contato', 'nav_cv': 'Download CV',
            'hero_description': 'Construindo soluções digitais inteligentes e escaláveis com IA, Blockchain e expertise Full Stack.', 'hero_projects_btn': 'Ver Projetos', 'hero_contact_btn': 'Entrar em Contato',
            'about_title': 'Sobre Mim', 'about_p1': 'Profissional de tecnologia apaixonado com mais de cinco anos de experiência diversificada em desenvolvimento web, engenharia full stack, blockchain e inteligência artificial. Minha especialidade reside na criação de soluções digitais inovadoras, com foco no uso estratégico de IA para embasar decisões de negócios (data-driven decision-making) e no desenvolvimento de produtos de ponta com arquiteturas escaláveis e designs centrados no usuário.', 'about_p2': 'Como fundador e CEO, combino visão técnica com perspicácia de negócios para entregar valor tangível. Estou sempre em busca de crescimento, aprendizado contínuo e desafios estimulantes que me permitam expandir minhas habilidades e impactar positivamente o cenário tecnológico.',
            'skills_title': 'Habilidades & Tecnologias', 'skills_subtitle': 'Domínio em um amplo espectro de tecnologias modernas, com expertise aprofundada nas seguintes áreas:', 'skills_other_languages': 'Outras Linguagens',
            'projects_title': 'Projetos em Destaque', 'projects_subtitle': 'Aplicações práticas do meu conhecimento técnico e paixão por inovação.',
            'proj1_title': 'Sistema de Previsão de Criptomoedas', 'proj1_desc': 'Sistema que utiliza ARIMA para prever preços de criptomoedas, consumindo dados via API CoinGecko e visualizando resultados com matplotlib.', 'proj1_value': '<strong>Valor Agregado:</strong> Auxilia na compreensão de tendências e tomada de decisão no setor financeiro.',
            'proj2_title': 'Análise de Sentimentos em Mídias Sociais', 'proj2_desc': 'Ferramenta de NLP que analisa textos de plataformas sociais para classificar a opinião pública usando NLTK, spaCy e Transformers.', 'proj2_value': '<strong>Valor Agregado:</strong> Essencial para marketing, CX e pesquisa de mercado.',
            'proj3_title': 'Reconhecimento de Imagem (Visão Computacional)', 'proj3_desc': 'Sistema com CNNs para classificar objetos e detectar padrões em imagens usando TensorFlow, Keras e OpenCV.', 'proj3_value': '<strong>Valor Agregado:</strong> Aplicável em segurança, saúde e e-commerce.',
            'proj4_title': 'Chatbot Inteligente para WhatsApp', 'proj4_desc': 'Chatbot com IA e NLP para respostas automáticas no WhatsApp, usando TensorFlow, Flask/FastAPI e API oficial.', 'proj4_value': '<strong>Valor Agregado:</strong> Reduz custos e melhora engajamento via automação de suporte.',
            'proj5_title': 'Sistema de Recomendação Personalizado', 'proj5_desc': 'Sistema que sugere produtos/serviços com base no comportamento do usuário, utilizando filtragem colaborativa e de conteúdo.', 'proj5_value': '<strong>Valor Agregado:</strong> Aumenta engajamento em e-commerce/streaming.',
            'proj6_title': 'Plataforma de Votação Descentralizada', 'proj6_desc': 'Plataforma de votação segura e transparente com Blockchain (Solidity) e autenticação biométrica facial (IA).', 'proj6_value': '<strong>Valor Agregado:</strong> Garante integridade e transparência em processos de votação.',
            'experience_title': 'Experiência Profissional', 'exp1_date': 'Fev 2020 – Presente', 'exp1_desc': 'Liderança de equipe na criação de soluções digitais inovadoras (full-stack e IA). Foco em sustentabilidade e otimização da presença online de clientes.', 'exp2_date': 'Out 2013 – Presente', 'exp2_desc': 'Gestão de agência de marketing focada em soluções data-driven. Expertise em estratégias de marketing, combinando conhecimento técnico e visão de negócios.',
            'education_title': 'Educação', 'edu1_date': 'Em Andamento', 'edu2_title': 'Bacharelado em Administração de Empresas', 'edu3_date': 'Concluído',
            'contact_title': 'Vamos Conversar?', 'contact_subtitle': 'Estou aberto a novas oportunidades, colaborações e desafios. Entre em contato!', 'contact_location': 'Itapeva, São Paulo, Brasil', 'contact_cv_btn': 'Download CV em PDF',
            'footer_text': '&copy; 2024 Bruno Loureiro Desidera. Todos os direitos reservados.'
        }
    };

    const languageToggleButton = document.getElementById('language-toggle-btn');
    const elementsToTranslate = document.querySelectorAll('[data-key]');
    const mainCvLink = document.querySelector('.nav-download-cv');
    const contactCvLink = document.querySelector('#contato a[download]');
    const whatsappLink = document.querySelector('a[href*="wa.me"]');


    const setLanguage = (lang) => {
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-key');
            const translation = translations[lang][key];
            if (translation) {
                // Usa innerHTML para renderizar tags como <strong>
                element.innerHTML = translation;
            }
        });
        document.documentElement.lang = lang;
        
        // Atualiza o texto do botão e os links específicos do idioma
        if (lang === 'en') {
            languageToggleButton.textContent = 'PT-BR';
            mainCvLink.href = 'cv_bruno_loureiro_desidera_en.pdf';
            contactCvLink.href = 'cv_bruno_loureiro_desidera_en.pdf';
            whatsappLink.href = 'https://wa.me/5515996885952?text=Hello%20Bruno,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch.';

        } else {
            languageToggleButton.textContent = 'EN';
            mainCvLink.href = 'cv_bruno_loureiro_desidera.pdf';
            contactCvLink.href = 'cv_bruno_loureiro_desidera.pdf';
            whatsappLink.href = 'https://wa.me/5515996885952?text=Olá%20Bruno%2C%20vi%20seu%20portfólio%20e%20gostaria%20de%20entrar%20em%20contato.';
        }
        localStorage.setItem('language', lang);
    };

    languageToggleButton.addEventListener('click', () => {
        const currentLang = localStorage.getItem('language') || 'en';
        const newLang = currentLang === 'en' ? 'pt' : 'en';
        setLanguage(newLang);
    });

    // Ao carregar a página, define o idioma salvo ou o padrão (inglês)
    const initialLang = localStorage.getItem('language') || 'en';
    setLanguage(initialLang);
});
