// Tutor Page Script

const tutorPage = {
    messages: [],
    isLoading: false,

    init() {
        this.setupEventListeners();
        this.displayWelcomeMessage();
    },

    setupEventListeners() {
        const form = document.querySelector('.chat-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.sendMessage();
            });
        }
    },

    displayWelcomeMessage() {
        const messagesContainer = document.querySelector('.chat-messages');
        if (messagesContainer) {
            this.addMessage('¡Hola! Soy tu tutor virtual. ¿En qué puedo ayudarte hoy?', 'ai');
        }
    },

    sendMessage() {
        const input = document.querySelector('input[name="message"]');
        if (!input || !input.value.trim()) return;

        const userMessage = input.value.trim();
        this.addMessage(userMessage, 'user');
        input.value = '';

        // Simulate AI response
        this.isLoading = true;
        setTimeout(() => {
            this.addMessage('Esta es una respuesta de prueba. En producción se conectaría a una IA real.', 'ai');
            this.isLoading = false;
        }, 1000);
    },

    addMessage(text, sender) {
        const messagesContainer = document.querySelector('.chat-messages');
        if (messagesContainer) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${sender}`;
            messageDiv.innerHTML = `
                <div class="message-bubble">${text}</div>
            `;
            messagesContainer.appendChild(messageDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    }
};

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.chat-messages')) {
        tutorPage.init();
    }
});
