function checkVisibility() {
    const elements = document.querySelectorAll('.about-content, .project-content, .contact-content');
    
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        
        // Se o elemento está 80% visível na tela
        if (rect.top <= window.innerHeight * 0.8) {
            element.classList.add('visible');
        }
    });
}

// Adiciona o evento de scroll para monitorar o movimento
window.addEventListener('scroll', checkVisibility);

// Chama a função uma vez para garantir que os elementos visíveis no carregamento sejam exibidos
checkVisibility();

document.querySelectorAll('.button-projects button')