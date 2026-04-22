// Simulacro Page Script

const simulacroPage = {
    questions: [],
    currentQuestion: 0,
    userAnswers: {},

    init() {
        this.loadQuestions();
        this.setupEventListeners();
        this.displayQuestion();
    },

    loadQuestions() {
        // Load questions from API or data file
        this.questions = [
            {
                id: 1,
                text: '¿Cuál es la capital de Francia?',
                options: ['París', 'Berlín', 'Madrid', 'Londres'],
                correct: 0
            },
            {
                id: 2,
                text: '¿Cuál es el planeta más grande del sistema solar?',
                options: ['Marte', 'Júpiter', 'Saturno', 'Neptuno'],
                correct: 1
            }
        ];
    },

    setupEventListeners() {
        const nextBtn = document.querySelector('[data-next]');
        const prevBtn = document.querySelector('[data-prev]');
        const submitBtn = document.querySelector('[data-submit]');

        nextBtn?.addEventListener('click', () => this.nextQuestion());
        prevBtn?.addEventListener('click', () => this.prevQuestion());
        submitBtn?.addEventListener('click', () => this.submitTest());
    },

    displayQuestion() {
        if (this.currentQuestion >= this.questions.length) return;

        const question = this.questions[this.currentQuestion];
        const container = document.querySelector('.question-container');

        if (container) {
            let optionsHTML = question.options.map((option, index) => `
                <label class="question-option">
                    <input type="radio" name="answer" value="${index}" 
                           ${this.userAnswers[question.id] === index ? 'checked' : ''}>
                    <span>${option}</span>
                </label>
            `).join('');

            container.innerHTML = `
                <div class="question-text">${question.text}</div>
                <div class="question-options">
                    ${optionsHTML}
                </div>
            `;

            this.updateProgress();
        }
    },

    nextQuestion() {
        if (this.currentQuestion < this.questions.length - 1) {
            this.saveAnswer();
            this.currentQuestion++;
            this.displayQuestion();
        }
    },

    prevQuestion() {
        if (this.currentQuestion > 0) {
            this.saveAnswer();
            this.currentQuestion--;
            this.displayQuestion();
        }
    },

    saveAnswer() {
        const selected = document.querySelector('input[name="answer"]:checked');
        if (selected) {
            const question = this.questions[this.currentQuestion];
            this.userAnswers[question.id] = parseInt(selected.value);
        }
    },

    submitTest() {
        this.saveAnswer();
        // Calculate score and redirect to results
        console.log('Test submitted with answers:', this.userAnswers);
    },

    updateProgress() {
        const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;
        const progressBar = document.querySelector('.progress-fill');
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }
    }
};

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.question-container')) {
        simulacroPage.init();
    }
});
