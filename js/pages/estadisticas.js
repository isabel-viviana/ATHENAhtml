// Estadisticas Page Script

const estadisticasPage = {
    stats: {},

    init() {
        this.loadStatistics();
        this.displayStatistics();
    },

    loadStatistics() {
        this.stats = {
            totalTests: 45,
            averageScore: 78.5,
            totalHours: 120,
            currentStreak: 7,
            accuracyRate: 82,
            certificationsEarned: 3
        };
    },

    displayStatistics() {
        const statsGrid = document.querySelector('.stats-grid');
        if (statsGrid) {
            statsGrid.innerHTML = `
                <div class="stat-card">
                    <div class="stat-label">Total de Tests</div>
                    <div class="stat-value">${this.stats.totalTests}</div>
                </div>
                <div class="stat-card">
                    <div class="stat-label">Promedio</div>
                    <div class="stat-value">${this.stats.averageScore.toFixed(1)}%</div>
                </div>
                <div class="stat-card">
                    <div class="stat-label">Horas Estudiadas</div>
                    <div class="stat-value">${this.stats.totalHours}</div>
                </div>
                <div class="stat-card">
                    <div class="stat-label">Racha Actual</div>
                    <div class="stat-value">${this.stats.currentStreak} días</div>
                </div>
            `;
        }
    }
};

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.stats-grid')) {
        estadisticasPage.init();
    }
});
