// Router - Client-side routing

const router = {
    // Routes configuration
    routes: {
        '/': '/pages/dashboard/dashboard.html',
        '/login': '/pages/autenticacion/login.html',
        '/registro': '/pages/autenticacion/registro.html',
        '/dashboard': '/pages/dashboard/dashboard.html',
        '/simulacro': '/pages/simulacros/simulacro.html',
        '/practica': '/pages/practicas/areas.html',
        '/tutor': '/pages/tutor/tutor.html',
        '/estadisticas': '/pages/estadisticas/estadisticas.html',
        '/perfil': '/pages/perfil/perfil.html',
        '/historial': '/pages/historial/historial.html',
        '/logros': '/pages/logros/logros.html',
        '/tienda': '/pages/tienda/tienda.html',
        '/suscripcion': '/pages/suscripcion/planes.html',
        '/ranking': '/pages/ranking/ranking.html',
        '/progreso': '/pages/progreso/progreso.html'
    },

    // Initialize router
    init() {
        this.handleRouteChange();
        window.addEventListener('hashchange', () => this.handleRouteChange());
    },

    // Handle route changes
    handleRouteChange() {
        const route = window.location.hash.slice(1) || '/';
        const path = this.routes[route];
        
        if (path) {
            this.loadPage(path);
        } else {
            this.loadPage('/pages/sistema/404.html');
        }
    },

    // Load page content
    loadPage(path) {
        const appContainer = document.getElementById('app');
        if (appContainer) {
            fetch(path)
                .then(response => response.text())
                .then(html => {
                    appContainer.innerHTML = html;
                    this.executeScripts(appContainer);
                })
                .catch(error => {
                    console.error('Error loading page:', error);
                    appContainer.innerHTML = '<h1>Error loading page</h1>';
                });
        }
    },

    // Execute scripts from loaded content
    executeScripts(container) {
        const scripts = container.querySelectorAll('script');
        scripts.forEach(script => {
            const newScript = document.createElement('script');
            newScript.textContent = script.textContent;
            document.head.appendChild(newScript);
        });
    },

    // Navigate to route
    navigate(route) {
        window.location.hash = route;
    }
};

// Initialize router when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => router.init());
} else {
    router.init();
}
