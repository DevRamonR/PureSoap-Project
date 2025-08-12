document.addEventListener('DOMContentLoaded', function() {

    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    const menuHamburguer = document.getElementById('menu-hamburguer');
    const navMenu = document.querySelector('header nav');

    if (menuHamburguer && navMenu) {
        menuHamburguer.addEventListener('click', function() {
            navMenu.classList.toggle('menu-aberto');
            menuHamburguer.classList.toggle('ativo');
        });
    }

    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        const formResponse = document.getElementById('form-response');
        const nameInput = document.getElementById('nome');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('mensagem');

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();
            
            nameInput.classList.remove('input-error');
            emailInput.classList.remove('input-error');
            messageInput.classList.remove('input-error');

            if (name === '' || email === '' || message === '') {
                formResponse.textContent = 'Por favor, preencha todos os campos.';
                formResponse.className = 'error';
                if (name === '') nameInput.classList.add('input-error');
                if (email === '') emailInput.classList.add('input-error');
                if (message === '') messageInput.classList.add('input-error');
            } else if (!/^\S+@\S+\.\S+$/.test(email)) {
                formResponse.textContent = 'Por favor, insira um formato de e-mail válido.';
                formResponse.className = 'error';
                emailInput.classList.add('input-error');
            } else {
                formResponse.textContent = 'Mensagem enviada com sucesso! Agradecemos o contato.';
                formResponse.className = 'success';
                contactForm.reset();
            }
        });
    }

});
