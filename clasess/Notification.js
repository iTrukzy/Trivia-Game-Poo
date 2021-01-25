export default class Notification {
    static correct() {
        const correctImg = document.getElementById('correct-img');
        correctImg.classList.add('show');
        setTimeout(() => {
            correctImg.classList.remove('show');
        }, 2000);
    }
    static incorrect() {
        const incorrectImg = document.getElementById('incorrect-img');
        incorrectImg.classList.add('show');
        setTimeout(() => {
            incorrectImg.classList.remove('show');
        }, 2000);
    }
    static timeOut() {
        const nextQuestionAlert = document.getElementById('next-question-alert');
        nextQuestionAlert.classList.add('show-left')
        setTimeout(() => {
            nextQuestionAlert.classList.remove('show-left')
        }, 2000);
    }
}