// Global JavaScript Functions

// Utility Functions
const app = {
    // API Base URL
    apiUrl: 'https://api.ejemplo.com',

    // Initialize app
    init() {
        console.log('Aplicación inicializada');
        this.setupEventListeners();
    },

    // Setup event listeners
    setupEventListeners() {
        // Add global event listeners here
    },

    // API Call
    async apiCall(endpoint, options = {}) {
        const url = `${this.apiUrl}${endpoint}`;
        const defaultOptions = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.getToken()}`
            }
        };
        const finalOptions = { ...defaultOptions, ...options };
        
        try {
            const response = await fetch(url, finalOptions);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    },

    // Get token from localStorage
    getToken() {
        return localStorage.getItem('token') || '';
    },

    // Set token in localStorage
    setToken(token) {
        localStorage.setItem('token', token);
    },

    // Get user from localStorage
    getUser() {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    },

    // Set user in localStorage
    setUser(user) {
        localStorage.setItem('user', JSON.stringify(user));
    },

    // Logout
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/pages/autenticacion/login.html';
    },

    // Show notification
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 3000);
    },

    // Format date
    formatDate(date) {
        return new Date(date).toLocaleDateString('es-ES');
    },

    // Format time
    formatTime(date) {
        return new Date(date).toLocaleTimeString('es-ES');
    }
};

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => app.init());
} else {
    app.init();
}
