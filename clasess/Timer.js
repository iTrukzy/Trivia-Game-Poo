import Ui from './Ui.js';
import Notification from "./Notification.js";

export default class Timer {
    static startTimer() {
        let timeLeft = 15
        let downLoadTimer = setInterval(function() {
            if(timeLeft <= 0) {
                clearInterval(downLoadTimer);
                Notification.timeOut()
                document.getElementById('timer').innerHTML = "0:00";
                setTimeout(() => {
                    Notification.timeOut()
                    // Ui.NexQuestions()       
                }, 2000)
                
        
            } else {
                document.getElementById('timer').innerHTML = "0:" + timeLeft;
            }
            timeLeft -= 1;      
        }, 1000);
    }
}