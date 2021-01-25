import Notification from './Notification.js'

let selectedAnswers = []
let contNumNext = 0;
let correct = []
let points = 0;
let nextCorrects = 0


export default class Method {
    static getCorrects(correctAnswers) {
        for (let i = 0; i < correctAnswers.length; i++) {
            const corrected = correctAnswers[i].correct_answer
            correct.push(corrected)
        }
    }

    static counts() {
        contNumNext++
    }

    static finishBtn() {
        
        const numberQuestion = document.getElementById('number-Question').value;
        const finishQuestions = document.getElementById('finish-questions');
        const nextQuestions = document.getElementById('next-questions');
        
        if (contNumNext === numberQuestion - 1) {
            finishQuestions.style.display = 'inline-block'
            nextQuestions.style.display = 'none'
        }  
    }

    static cheked() {
        const rbs = document.querySelectorAll('input[name="answer"]');
        let selectedValue;
        for (const rb of rbs) {
            if (rb.checked) {
                document.getElementById('a').setAttribute('value', a_text.innerText)
                document.getElementById('b').setAttribute('value', b_text.innerText)
                document.getElementById('c').setAttribute('value', c_text.innerText)
                document.getElementById('d').setAttribute('value', d_text.innerText)
                selectedValue = rb.value
                selectedAnswers = selectedValue
                rb.checked = false;
            }
            
        }
    }

    static comproved() {
        if(selectedAnswers === correct[nextCorrects]) {
            points += 1
            nextCorrects += 1
            Notification.correct()
         } else {
             nextCorrects += 1
            Notification.incorrect()
         }
    }

    static difficultType() {
        const difficulty = document.getElementById('difficulty-Question').value;
        const typeDiffiAlert = document.getElementById('type-diffi-alert')

        if (difficulty === 'easy') {
            typeDiffiAlert.style.color = 'rgb(28, 116, 6)';
        } else if (difficulty === 'mediun') {
            typeDiffiAlert.style.color = 'rgb(231, 142, 25)';
            typeDiffiAlert.innerText = 'Mediun'
        } else if (difficulty === 'hard') {
            typeDiffiAlert.style.color = 'red';
            typeDiffiAlert.innerText = 'Hard'
        }
    }
    static printFinish() {
        const resultsText = document.getElementById('results-text');
        const numberQuestion = document.getElementById('number-Question').value;

        resultsText.innerHTML = `Sacate ${points} preguntas correctas de ${numberQuestion}`
    }
}