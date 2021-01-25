import Method from './Method.js'

let questionsAll = []
let currentQuestion = 0;


export default class Ui {
    static printCategories(categories) {
    const container = document.getElementById('category-Question');
        categories.forEach(category => {
            container.innerHTML += `<option value="${category.id}">${category.name}</option>`;
        });
    }
    static getElements(data) {
        data.forEach(element => {
            const formattedQuestion = element.question
            const answerChoices = [...element.incorrect_answers]
            
            answerChoices.splice(Math.floor(Math.random() * 4) -1, 0, element.correct_answer)

            questionsAll.push(formattedQuestion)
            questionsAll.push(answerChoices)
        });
        Method.difficultType()
        this.printQuestions()
    }
    static printQuestions() {
        this.questionItem =document.getElementById('question-item')
        this.a_text =document.getElementById('a_text')
        this.b_text =document.getElementById('b_text')
        this.c_text =document.getElementById('c_text')
        this.d_text =document.getElementById('d_text')
        for(let i = 0; i < questionsAll.length; i++) {
            this.questionItem.innerHTML = questionsAll[0]
            this.a_text.innerHTML = questionsAll[1][0]
            this.b_text.innerHTML = questionsAll[1][1]
            this.c_text.innerHTML = questionsAll[1][2]
            this.d_text.innerHTML = questionsAll[1][3]
        }
    }
    static NextQuestions() {
        Method.counts()  
        Method.cheked()
        Method.finishBtn()

        currentQuestion++
        this.questionItem.innerHTML = questionsAll[currentQuestion++ + 1]; 
        this.a_text.innerHTML = questionsAll[currentQuestion+ 1][0]
        this.b_text.innerHTML = questionsAll[currentQuestion+ 1][1]
        this.c_text.innerHTML = questionsAll[currentQuestion+ 1][2]
        this.d_text.innerHTML = questionsAll[currentQuestion+ 1][3]
              
        Method.comproved()
    }    
}