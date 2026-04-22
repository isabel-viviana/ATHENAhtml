// Sidebar Component

const sidebar = {
    init() {
        this.setupSidebar();
    },

    setupSidebar() {
        const sidebarHTML = `
            <aside class="sidebar">
                <ul class="sidebar-menu">
                    <li class="sidebar-item active"><a href="#/dashboard">Dashboard</a></li>
                    <li class="sidebar-item"><a href="#/simulacro">Simulacro</a></li>
                    <li class="sidebar-item"><a href="#/practica">Práctica</a></li>
                    <li class="sidebar-item"><a href="#/tutor">Tutor</a></li>
                    <li class="sidebar-item"><a href="#/estadisticas">Estadísticas</a></li>
                    <li class="sidebar-item"><a href="#/perfil">Perfil</a></li>
                    <li class="sidebar-item"><a href="#/historial">Historial</a></li>
                    <li class="sidebar-item"><a href="#/logros">Logros</a></li>
                    <li class="sidebar-item"><a href="#/tienda">Tienda</a></li>
                    <li class="sidebar-item"><a href="#/ranking">Ranking</a></li>
                </ul>
            </aside>
        `;
        
        const body = document.querySelector('body');
        if (body && !body.querySelector('.sidebar')) {
            body.insertAdjacentHTML('afterbegin', sidebarHTML);
        }
    }
};

// Initialize sidebar
document.addEventListener('DOMContentLoaded', () => sidebar.init());
