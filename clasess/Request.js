export default class Request {
    static getCategories() {
        return fetch('https://opentdb.com/api_category.php')
    }
    static getQuestions() {
        const [amount, category, difficulty, type] = this.getFilters()
        return fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`);
    }
    static getFilters() {
        const numberQuestion = document.getElementById('number-Question').value;
        const category = document.getElementById('category-Question').value;
        const difficulty = document.getElementById('difficulty-Question').value;
        const type = document.getElementById('type-Question').value;
        return [numberQuestion, category, difficulty, type]
    }
}