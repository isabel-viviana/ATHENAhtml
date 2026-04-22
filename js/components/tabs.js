// Tabs Component

const tabs = {
    init() {
        this.setupTabs();
    },

    setupTabs() {
        const tabContainers = document.querySelectorAll('.tabs');
        tabContainers.forEach(container => {
            const navLinks = container.querySelectorAll('.tabs-nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.switchTab(container, link);
                });
            });
        });
    },

    switchTab(container, link) {
        // Remove active class from all links and panes
        const navLinks = container.querySelectorAll('.tabs-nav-link');
        const panes = container.querySelectorAll('.tabs-pane');
        
        navLinks.forEach(l => l.classList.remove('active'));
        panes.forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked link
        link.classList.add('active');
        
        // Find and activate corresponding pane
        const targetId = link.getAttribute('data-tab');
        const targetPane = container.querySelector(`[data-pane="${targetId}"]`);
        if (targetPane) {
            targetPane.classList.add('active');
        }
    }
};

// Initialize tabs when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => tabs.init());
} else {
    tabs.init();
}
