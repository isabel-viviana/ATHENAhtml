// Modal Component

const modal = {
    modals: {},

    create(id, title, content) {
        const modalHTML = `
            <div class="modal fade" id="${id}">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title">${title}</h2>
                        <button type="button" class="modal-close" aria-label="Close">&times;</button>
                    </div>
                    <div class="modal-body">
                        ${content}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary" data-confirm>Confirmar</button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        this.modals[id] = document.getElementById(id);
        this.setupEventListeners(id);
        return this.modals[id];
    },

    show(id) {
        if (this.modals[id]) {
            this.modals[id].classList.add('active');
        }
    },

    hide(id) {
        if (this.modals[id]) {
            this.modals[id].classList.remove('active');
        }
    },

    setupEventListeners(id) {
        const modalElement = this.modals[id];
        if (!modalElement) return;

        const closeBtn = modalElement.querySelector('.modal-close');
        const dismissBtn = modalElement.querySelector('[data-dismiss]');
        
        closeBtn?.addEventListener('click', () => this.hide(id));
        dismissBtn?.addEventListener('click', () => this.hide(id));
        
        modalElement.addEventListener('click', (e) => {
            if (e.target === modalElement) this.hide(id);
        });
    }
};
