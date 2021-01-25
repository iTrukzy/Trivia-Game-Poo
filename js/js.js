import Request from '../clasess/Request.js';
import Ui from '../clasess/Ui.js';
import Timer from '../clasess/Timer.js'
import Actions from '../clasess/Actions.js'
import Method from '../clasess/Method.js';

const form = document.getElementById('form');
const next = document.getElementById('next-questions');
const startPlaying = document.getElementById('start-playing');
const closeModal = document.getElementById('close-modal');
const startGame = document.getElementById('start-game');
const cancelQuestions = document.getElementById('cancel-questions');
const howPlay = document.getElementById('how-play');
const okRules = document.getElementById('ok-rules');
const finishQuestions = document.getElementById('finish-questions');
const btnFinish = document.getElementById('btn-finish');

Request.getCategories()
    .then(response => response.json())
    .then(data => Ui.printCategories(data.trivia_categories))

form.addEventListener('submit', (e) => {
    e.preventDefault();
    Timer.startTimer()
    Request.getQuestions()
    .then(response => response.json())
    .then(loadedQiestions => {
        Ui.getElements(loadedQiestions.results),
        Method.getCorrects(loadedQiestions.results)
    })
})

next.addEventListener('click', () => {
    Ui.NextQuestions()
    Timer.startTimer()
})

startPlaying.addEventListener('click', (e) => {
    e.preventDefault()
    Actions.showForm()
})

closeModal.addEventListener('click', (e) => {
    e.preventDefault()
    Actions.hideForm()
})

cancelQuestions.addEventListener('click', () => {
    location.reload()
})

startGame.addEventListener('click', () => {
    Actions.hideForm()
    Actions.showQuestionHeader()
    Actions.hideHeader()
})

howPlay.addEventListener('click', () => {
    Actions.showHow()
})

okRules.addEventListener('click', () => {
    Actions.hideForm()
})

finishQuestions.addEventListener('click', () => {
    Method.comproved()
    Method.cheked()
    setTimeout(() => {
        Actions.showResults() 
    }, 2100);  
    Method.printFinish();
})

btnFinish.addEventListener('click', () => {
    location.reload()
})
