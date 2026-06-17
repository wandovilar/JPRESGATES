document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Atualizar Ano no Footer
    const anoAtualSpan = document.getElementById('anoAtual');
    if(anoAtualSpan) {
        anoAtualSpan.textContent = new Date().getFullYear();
    }

    // 2. Animação da Logo Principal no Hero
    // Apenas adiciona a classe 'loaded' após o carregamento da página para iniciar a transição
    const heroLogo = document.getElementById('heroLogo');
    if(heroLogo) {
        setTimeout(() => {
            heroLogo.classList.add('loaded');
        }, 100); // pequeno delay para garantir que a transição seja vista
    }

    // 3. Efeito de Blur/Background no Header ao Fazer Scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 4. Menu Responsivo (Hambúrguer)
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if(menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Animação de troca de ícone (bars para xmark)
            const icon = menuToggle.querySelector('i');
            if(navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Fechar menu ao clicar num link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // 5. Animações de Scroll (Fade Up)
    // Utilizando Vanilla JS com IntersectionObserver (Performance Otimizada)
    const fadeElements = document.querySelectorAll('.fade-up');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Ativa a animação quando 15% do card aparecer na tela
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opcional: parar de observar depois que animar a primeira vez
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        scrollObserver.observe(element);
    });
});