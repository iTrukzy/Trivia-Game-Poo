const modalForm = document.getElementById('modal-form');
const questionsHeader = document.getElementById('questions-header');
const header = document.getElementById('header');
const modalHow = document.getElementById('modal-how');
const resultsHeader = document.getElementById('results-header');



export default class Actions {
    static showForm() {
        modalForm.classList.add('show')
    }
    static showHow() {
        modalHow.classList.add('show')
    }
    static hideForm() {
        modalForm.classList.remove('show')
        modalHow.classList.remove('show')
    }
    static showQuestionHeader() {
        questionsHeader.classList.add('display-flex')
    }
    static hideQuestionHeader() {
        questionsHeader.classList.remove('display-flex')
    }
    static hideHeader() {
        header.style.display = 'none';
    }
    static showResults() {
        resultsHeader.classList.add('display-block')
        questionsHeader.classList.remove('display-flex');
    }
}