// Practica Page Script

const practicaPage = {
    areas: [],

    init() {
        this.loadAreas();
        this.displayAreas();
    },

    loadAreas() {
        this.areas = [
            { id: 1, name: 'Matemáticas', count: 150 },
            { id: 2, name: 'Lenguaje', count: 120 },
            { id: 3, name: 'Ciencias', count: 100 },
            { id: 4, name: 'Historia', count: 80 }
        ];
    },

    displayAreas() {
        const container = document.querySelector('.area-list');
        if (container) {
            container.innerHTML = this.areas.map(area => `
                <div class="area-item" onclick="practicaPage.selectArea(${area.id})">
                    <div class="area-name">${area.name}</div>
                    <div class="area-count">${area.count} preguntas</div>
                </div>
            `).join('');
        }
    },

    selectArea(id) {
        const area = this.areas.find(a => a.id === id);
        if (area) {
            console.log(`Selected area: ${area.name}`);
            // Redirect to practice page
            router.navigate('/practica-contenido');
        }
    }
};

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.area-list')) {
        practicaPage.init();
    }
});
