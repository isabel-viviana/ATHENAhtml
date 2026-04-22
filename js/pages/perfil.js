// Perfil Page Script

const perfilPage = {
    user: null,

    init() {
        this.loadUserProfile();
        this.displayProfile();
        this.setupEventListeners();
    },

    loadUserProfile() {
        this.user = {
            name: 'Juan Pérez',
            email: 'juan@ejemplo.com',
            joinDate: '2024-01-15',
            testsCompleted: 45,
            averageScore: 78.5,
            certificationsEarned: 3,
            totalHoursStudied: 120
        };
    },

    displayProfile() {
        const profileHeader = document.querySelector('.profile-header');
        if (profileHeader) {
            profileHeader.innerHTML = `
                <div class="profile-avatar">${this.user.name.charAt(0)}</div>
                <div class="profile-name">${this.user.name}</div>
                <div class="profile-info">${this.user.email}</div>
                <div class="profile-stats">
                    <div class="profile-stat">
                        <div class="profile-stat-value">${this.user.testsCompleted}</div>
                        <div class="profile-stat-label">Tests</div>
                    </div>
                    <div class="profile-stat">
                        <div class="profile-stat-value">${this.user.averageScore}%</div>
                        <div class="profile-stat-label">Promedio</div>
                    </div>
                    <div class="profile-stat">
                        <div class="profile-stat-value">${this.user.certificationsEarned}</div>
                        <div class="profile-stat-label">Certificados</div>
                    </div>
                </div>
            `;
        }
    },

    setupEventListeners() {
        const editBtn = document.querySelector('[data-edit-profile]');
        editBtn?.addEventListener('click', () => {
            router.navigate('/perfil-editar');
        });
    }
};

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.profile-header')) {
        perfilPage.init();
    }
});
