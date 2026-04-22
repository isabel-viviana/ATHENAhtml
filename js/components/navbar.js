// Navbar Component

const navbar = {
    init() {
        this.setupNavbar();
    },

    setupNavbar() {
        const navbarHTML = `
            <nav class="navbar">
                <div class="navbar-container">
                    <a href="#/" class="navbar-brand">diseñoATHENA</a>
                    <ul class="navbar-menu">
                        <li class="navbar-item"><a href="#/dashboard">Dashboard</a></li>
                        <li class="navbar-item"><a href="#/simulacro">Simulacro</a></li>
                        <li class="navbar-item"><a href="#/practica">Práctica</a></li>
                        <li class="navbar-item"><a href="#/tutor">Tutor</a></li>
                        <li class="navbar-item"><a href="#/estadisticas">Estadísticas</a></li>
                        <li class="navbar-item"><a href="#/perfil">Perfil</a></li>
                    </ul>
                    <button class="navbar-toggle">Menu</button>
                </div>
            </nav>
        `;
        
        const navContainer = document.querySelector('body');
        if (navContainer && !navContainer.querySelector('.navbar')) {
            navContainer.insertAdjacentHTML('afterbegin', navbarHTML);
            this.setupToggle();
        }
    },

    setupToggle() {
        const toggle = document.querySelector('.navbar-toggle');
        const menu = document.querySelector('.navbar-menu');
        
        if (toggle && menu) {
            toggle.addEventListener('click', () => {
                menu.classList.toggle('active');
            });
        }
    }
};

// Initialize navbar
document.addEventListener('DOMContentLoaded', () => navbar.init());
